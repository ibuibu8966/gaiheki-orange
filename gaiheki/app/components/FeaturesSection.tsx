"use client";

const FeaturesSection = () => {
  const scrollToDiagnosisForm = () => {
    const element = document.getElementById('diagnosis-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="bg-gradient-to-b from-[#faf6f1] to-[#f5efe8] py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* タイトル */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#f16f21] text-sm font-medium tracking-wider mb-2">Service Features</p>
          <div className="flex justify-center gap-1.5 mb-4">
            <span className="w-2 h-2 bg-[#f16f21] rounded-full"></span>
            <span className="w-2 h-2 bg-[#f16f21] rounded-full"></span>
            <span className="w-2 h-2 bg-[#f16f21] rounded-full"></span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
            外壁塗装パートナーズの特徴
          </h2>
        </div>

        {/* 特徴グリッド - 3列 */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-10 mb-12">
          {/* Feature 01 - 紹介手数料なし */}
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              {/* Feature番号バッジ */}
              <div className="absolute -top-3 -right-3 z-10">
                <div className="bg-gradient-to-br from-[#f16f21] to-[#e05a10] text-white px-3 py-2 rounded-lg shadow-lg">
                  <span className="text-[10px] block leading-none font-medium">Feature</span>
                  <span className="text-2xl font-bold leading-none">01</span>
                </div>
              </div>
              {/* 円形カード - よりソフトなシャドウ */}
              <div className="w-52 h-52 md:w-56 md:h-56 bg-gradient-to-br from-white via-white to-[#fef7f0] rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex items-center justify-center border border-gray-100">
                <div className="text-center">
                  {/* 円マーク + 矢印アイコン */}
                  <div className="relative w-24 h-24 mx-auto mb-2">
                    {/* 外側の円 - 点線 */}
                    <svg className="w-24 h-24 absolute inset-0" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="42" fill="none" stroke="#fcd34d" strokeWidth="3" strokeDasharray="8 4" />
                    </svg>
                    {/* 内側の円 - 塗りつぶし */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#fcd34d] to-[#fbbf24] rounded-full flex items-center justify-center shadow-inner">
                        {/* 円マーク */}
                        <span className="text-3xl font-bold text-[#dc2626]">¥</span>
                      </div>
                    </div>
                    {/* 左上の矢印 */}
                    <svg className="absolute -top-1 -left-1 w-8 h-8 text-[#f97316] transform -rotate-45" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                    </svg>
                  </div>
                  <p className="text-gray-500 text-sm font-medium">紹介手数料</p>
                  <p className="text-[#f16f21] text-4xl font-bold tracking-tight">なし</p>
                </div>
              </div>
            </div>
            <h3 className="text-base md:text-lg font-bold text-gray-800 text-center mb-3 leading-relaxed">
              紹介手数料がかからないから<br/>
              <span className="text-[#f16f21]">適正価格</span>で施工できる
            </h3>
            <p className="text-sm text-gray-600 text-center leading-relaxed max-w-xs">
              他社サービスでは紹介手数料が工事費に<br/>
              上乗せされることも。当サービスなら<br/>
              手数料無料で適正価格をお届けします。
            </p>
          </div>

          {/* Feature 02 - 直接施工店とつながる */}
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              {/* Feature番号バッジ */}
              <div className="absolute -top-3 -right-3 z-10">
                <div className="bg-gradient-to-br from-[#f16f21] to-[#e05a10] text-white px-3 py-2 rounded-lg shadow-lg">
                  <span className="text-[10px] block leading-none font-medium">Feature</span>
                  <span className="text-2xl font-bold leading-none">02</span>
                </div>
              </div>
              {/* 円形カード */}
              <div className="w-52 h-52 md:w-56 md:h-56 bg-gradient-to-br from-white via-white to-[#fef7f0] rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex items-center justify-center border border-gray-100">
                <div className="text-center">
                  {/* 人物イラスト - 2人が繋がる */}
                  <div className="flex items-center justify-center gap-2 mb-3">
                    {/* 左の人（青） */}
                    <div className="relative">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#3b82f6] to-[#2563eb] rounded-full"></div>
                      <div className="w-7 h-12 bg-gradient-to-br from-[#3b82f6] to-[#2563eb] rounded-full absolute -bottom-8 left-1/2 -translate-x-1/2"></div>
                    </div>
                    {/* 接続線 + ハートマーク */}
                    <div className="relative -mx-1">
                      <svg className="w-8 h-8 text-[#22c55e]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                    </div>
                    {/* 右の人（オレンジ） */}
                    <div className="relative">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#f97316] to-[#ea580c] rounded-full"></div>
                      <div className="w-7 h-12 bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] rounded-full absolute -bottom-8 left-1/2 -translate-x-1/2"></div>
                    </div>
                  </div>
                  <div className="mt-12">
                    <p className="text-[#f16f21] text-2xl font-bold">直接</p>
                    <p className="text-gray-700 text-sm font-medium">施工店とつながる</p>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-base md:text-lg font-bold text-gray-800 text-center mb-3 leading-relaxed">
              仲介なしで<span className="text-[#f16f21]">施工店と直接</span><br/>
              やり取りできる
            </h3>
            <p className="text-sm text-gray-600 text-center leading-relaxed max-w-xs">
              お客様と施工店の間に業者が入らないので、<br/>
              要望が正確に伝わり、<br/>
              スムーズなコミュニケーションが可能です。
            </p>
          </div>

          {/* Feature 03 - 見積り比較 */}
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              {/* Feature番号バッジ */}
              <div className="absolute -top-3 -right-3 z-10">
                <div className="bg-gradient-to-br from-[#f16f21] to-[#e05a10] text-white px-3 py-2 rounded-lg shadow-lg">
                  <span className="text-[10px] block leading-none font-medium">Feature</span>
                  <span className="text-2xl font-bold leading-none">03</span>
                </div>
              </div>
              {/* 円形カード */}
              <div className="w-52 h-52 md:w-56 md:h-56 bg-gradient-to-br from-white via-white to-[#fef7f0] rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex items-center justify-center border border-gray-100">
                <div className="text-center">
                  {/* 見積書3枚 */}
                  <div className="flex items-end justify-center gap-1 mb-2">
                    {/* A社 */}
                    <div className="w-14 bg-white rounded-md shadow-md border border-gray-200 p-2 transform -rotate-6">
                      <div className="space-y-1 mb-2">
                        <div className="h-1.5 bg-gray-200 rounded w-full"></div>
                        <div className="h-1 bg-gray-100 rounded w-4/5"></div>
                        <div className="h-1 bg-gray-100 rounded w-full"></div>
                        <div className="h-1 bg-gray-100 rounded w-3/4"></div>
                      </div>
                      <p className="text-center text-xs font-bold">
                        <span className="text-[#f97316]">A</span><span className="text-gray-700">社</span>
                      </p>
                    </div>
                    {/* B社 - 中央、少し大きく */}
                    <div className="w-16 bg-white rounded-md shadow-lg border border-gray-200 p-2 z-10 transform scale-105">
                      <div className="space-y-1 mb-2">
                        <div className="h-1.5 bg-gray-200 rounded w-full"></div>
                        <div className="h-1 bg-gray-100 rounded w-4/5"></div>
                        <div className="h-1 bg-gray-100 rounded w-full"></div>
                        <div className="h-1 bg-gray-100 rounded w-3/4"></div>
                      </div>
                      <p className="text-center text-xs font-bold">
                        <span className="text-[#3b82f6]">B</span><span className="text-gray-700">社</span>
                      </p>
                    </div>
                    {/* C社 */}
                    <div className="w-14 bg-white rounded-md shadow-md border border-gray-200 p-2 transform rotate-6">
                      <div className="space-y-1 mb-2">
                        <div className="h-1.5 bg-gray-200 rounded w-full"></div>
                        <div className="h-1 bg-gray-100 rounded w-4/5"></div>
                        <div className="h-1 bg-gray-100 rounded w-full"></div>
                        <div className="h-1 bg-gray-100 rounded w-3/4"></div>
                      </div>
                      <p className="text-center text-xs font-bold">
                        <span className="text-[#a855f7]">C</span><span className="text-gray-700">社</span>
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm font-medium mt-3">最大</p>
                  <p className="text-[#f16f21] text-3xl font-bold">
                    3社<span className="text-lg font-medium text-gray-700">の見積り比較</span>
                  </p>
                </div>
              </div>
            </div>
            <h3 className="text-base md:text-lg font-bold text-gray-800 text-center mb-3 leading-relaxed">
              <span className="text-[#f16f21]">最大3社</span>の見積りを<br/>
              比較検討できる
            </h3>
            <p className="text-sm text-gray-600 text-center leading-relaxed max-w-xs">
              複数の見積りを同一フォーマットで比較。<br/>
              価格・内容・保証を見比べて、<br/>
              納得のいく施工店を選べます。
            </p>
          </div>
        </div>

        {/* CTAボタン */}
        <div className="text-center">
          <button
            onClick={scrollToDiagnosisForm}
            className="group inline-flex items-center justify-center bg-gradient-to-r from-[#f16f21] to-[#e05a10] hover:from-[#e05a10] hover:to-[#d04a00] text-white font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            施工店を探す
            <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
