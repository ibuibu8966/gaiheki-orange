import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../../src/infrastructure/database/prisma.client';
import { getIronSession } from 'iron-session';
import { sessionOptions, SessionData } from '../../../../../src/lib/session';
import { cookies } from 'next/headers';
import { put } from '@vercel/blob';

// POST: 写真をアップロード
export async function POST(request: NextRequest) {
  try {
    // セッションからpartnerIdを取得
    const session = await getIronSession<SessionData>(await cookies(), sessionOptions);

    if (!session.isLoggedIn || !session.partnerId) {
      return NextResponse.json({
        success: false,
        error: 'ログインが必要です'
      }, { status: 401 });
    }

    const partnerId = session.partnerId;
    const formData = await request.formData();
    const orderId = formData.get('orderId');
    const photos = formData.getAll('photos') as File[];

    if (!orderId) {
      return NextResponse.json({
        success: false,
        error: '受注IDは必須です'
      }, { status: 400 });
    }

    if (photos.length === 0) {
      return NextResponse.json({
        success: false,
        error: '写真を選択してください'
      }, { status: 400 });
    }

    // 受注の存在確認と権限チェック
    const existingOrder = await prisma.orders.findFirst({
      where: {
        id: parseInt(orderId as string),
        quotations: {
          partner_id: partnerId
        }
      }
    });

    if (!existingOrder) {
      return NextResponse.json({
        success: false,
        error: '受注が見つかりません'
      }, { status: 404 });
    }

    // 写真をアップロードしてDBに保存
    const uploadedPhotos = [];
    for (const photo of photos) {
      // ファイル名を生成（タイムスタンプ + オリジナル名）
      const timestamp = Date.now();
      const originalName = photo.name.replace(/[^a-zA-Z0-9.-]/g, '_');
      const fileName = `orders/${orderId}/${timestamp}_${originalName}`;

      // Vercel Blobにアップロード
      const blob = await put(fileName, photo, {
        access: 'public',
      });

      // DBに保存
      const savedPhoto = await prisma.order_photos.create({
        data: {
          order_id: parseInt(orderId as string),
          photo_url: blob.url,
          photo_type: 'construction',
          description: null,
          uploaded_at: new Date(),
          created_at: new Date()
        }
      });

      uploadedPhotos.push(savedPhoto);
    }

    return NextResponse.json({
      success: true,
      message: `${uploadedPhotos.length}枚の写真をアップロードしました`,
      data: uploadedPhotos
    });

  } catch (error: any) {
    console.error('Photo upload error:', error);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    return NextResponse.json({
      success: false,
      error: '写真のアップロードに失敗しました',
      details: error.message
    }, { status: 500 });
  }
}
