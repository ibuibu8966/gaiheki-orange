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
            外壁塗装の窓口の特徴
          </h2>
        </div>

        {/* 特徴グリッド - 3列 */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-10 mb-12">
          {/* Feature 01 */}
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              {/* Feature番号バッジ */}
              <div className="absolute -top-2 -right-2 z-10 bg-[#f16f21] text-white text-xs px-2 py-1 rounded-full">
                <span className="text-[10px] block leading-none">Feature</span>
                <span className="text-lg font-bold leading-none">01</span>
              </div>
              {/* 円形カード */}
              <div className="w-48 h-48 md:w-52 md:h-52 bg-gradient-to-br from-white to-[#fef7f0] rounded-full shadow-lg flex items-center justify-center border-4 border-white">
                {/* イラスト - 電話する人 */}
                <div className="text-center">
                  <svg className="w-20 h-20 mx-auto mb-1" viewBox="0 0 80 80">
                    {/* 人物 */}
                    <circle cx="40" cy="22" r="12" fill="#fcd34d"/>
                    <ellipse cx="40" cy="55" rx="18" ry="22" fill="#f97316"/>
                    {/* 電話 */}
                    <rect x="52" y="18" width="8" height="16" rx="2" fill="#374151"/>
                    {/* 吹き出し */}
                    <path d="M20 15 L35 15 L35 30 L28 30 L25 35 L25 30 L20 30 Z" fill="#fef3c7" stroke="#fbbf24" strokeWidth="1"/>
                  </svg>
                  <p className="text-gray-500 text-xs">相談料</p>
                  <p className="text-[#f16f21] text-3xl font-bold">0<span className="text-lg">円</span></p>
                </div>
              </div>
            </div>
            <h3 className="text-base md:text-lg font-bold text-gray-800 text-center mb-3 leading-relaxed">
              お客様の悩みを解決する<br/>
              専門の外壁アドバイザーが<br/>
              在籍しています
            </h3>
            <p className="text-sm text-gray-600 text-center leading-relaxed">
              経験豊富なアドバイザーにより、<br/>
              契約前のご相談から施工後まで、<br/>
              一貫したサポートを無料で提供します。
            </p>
          </div>

          {/* Feature 02 */}
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              {/* Feature番号バッジ */}
              <div className="absolute -top-2 -right-2 z-10 bg-[#f16f21] text-white text-xs px-2 py-1 rounded-full">
                <span className="text-[10px] block leading-none">Feature</span>
                <span className="text-lg font-bold leading-none">02</span>
              </div>
              {/* 円形カード */}
              <div className="w-48 h-48 md:w-52 md:h-52 bg-gradient-to-br from-white to-[#fef7f0] rounded-full shadow-lg flex items-center justify-center border-4 border-white">
                {/* イラスト - 王冠と家 */}
                <div className="text-center">
                  {/* 王冠 */}
                  <svg className="w-12 h-8 mx-auto mb-1" viewBox="0 0 50 30">
                    <path d="M5 25 L10 10 L18 18 L25 5 L32 18 L40 10 L45 25 Z" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1"/>
                    <circle cx="10" cy="10" r="3" fill="#fbbf24"/>
                    <circle cx="25" cy="5" r="3" fill="#fbbf24"/>
                    <circle cx="40" cy="10" r="3" fill="#fbbf24"/>
                  </svg>
                  {/* 家のイラスト */}
                  <svg className="w-24 h-20 mx-auto" viewBox="0 0 100 80">
                    {/* 左の家 */}
                    <path d="M10 45 L25 30 L40 45" fill="#dc2626"/>
                    <rect x="12" y="45" width="26" height="25" fill="#fef3c7"/>
                    <rect x="20" y="55" width="8" height="15" fill="#92400e"/>
                    {/* 右の家 */}
                    <path d="M50 40 L70 22 L90 40" fill="#f97316"/>
                    <rect x="52" y="40" width="36" height="30" fill="#fef3c7"/>
                    <rect x="64" y="52" width="12" height="18" fill="#92400e"/>
                    <rect x="55" y="48" width="8" height="8" fill="#93c5fd"/>
                    <rect x="78" y="48" width="8" height="8" fill="#93c5fd"/>
                  </svg>
                </div>
              </div>
            </div>
            <h3 className="text-base md:text-lg font-bold text-gray-800 text-center mb-3 leading-relaxed">
              圧倒的な施工実績が<br/>
              あるからこそ、優良施工店<br/>
              をお手配できます
            </h3>
            <p className="text-sm text-gray-600 text-center leading-relaxed">
              長きにわたる運営実績と豊かなデータベースから、<br/>
              お客様にピッタリの優良施工店を<br/>
              厳選してご提案いたします。
            </p>
          </div>

          {/* Feature 03 */}
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              {/* Feature番号バッジ */}
              <div className="absolute -top-2 -right-2 z-10 bg-[#f16f21] text-white text-xs px-2 py-1 rounded-full">
                <span className="text-[10px] block leading-none">Feature</span>
                <span className="text-lg font-bold leading-none">03</span>
              </div>
              {/* 円形カード */}
              <div className="w-48 h-48 md:w-52 md:h-52 bg-gradient-to-br from-white to-[#fef7f0] rounded-full shadow-lg flex items-center justify-center border-4 border-white">
                {/* イラスト - 見積書比較 */}
                <div className="flex items-end gap-2">
                  {/* 左の見積書 */}
                  <svg className="w-16 h-20" viewBox="0 0 60 80">
                    <rect x="5" y="5" width="50" height="70" fill="white" stroke="#d1d5db" strokeWidth="2" rx="2"/>
                    <rect x="10" y="12" width="30" height="4" fill="#e5e7eb"/>
                    <rect x="10" y="20" width="40" height="3" fill="#f3f4f6"/>
                    <rect x="10" y="26" width="35" height="3" fill="#f3f4f6"/>
                    <rect x="10" y="32" width="40" height="3" fill="#f3f4f6"/>
                    <rect x="10" y="38" width="30" height="3" fill="#f3f4f6"/>
                    <text x="30" y="60" textAnchor="middle" fontSize="14" fill="#374151" fontWeight="bold">A社</text>
                  </svg>
                  {/* 右の見積書 */}
                  <svg className="w-16 h-20" viewBox="0 0 60 80">
                    <rect x="5" y="5" width="50" height="70" fill="white" stroke="#d1d5db" strokeWidth="2" rx="2"/>
                    <rect x="10" y="12" width="30" height="4" fill="#e5e7eb"/>
                    <rect x="10" y="20" width="40" height="3" fill="#f3f4f6"/>
                    <rect x="10" y="26" width="35" height="3" fill="#f3f4f6"/>
                    <rect x="10" y="32" width="40" height="3" fill="#f3f4f6"/>
                    <rect x="10" y="38" width="30" height="3" fill="#f3f4f6"/>
                    <text x="30" y="60" textAnchor="middle" fontSize="14" fill="#374151" fontWeight="bold">B社</text>
                  </svg>
                </div>
              </div>
            </div>
            <h3 className="text-base md:text-lg font-bold text-gray-800 text-center mb-3 leading-relaxed">
              お見積りを比較して、<br/>
              お客様に合った<br/>
              施工店を選択できます
            </h3>
            <p className="text-sm text-gray-600 text-center leading-relaxed">
              充実の相談サポートと、優良施工店の<br/>
              データベースによりお客様の状況に<br/>
              マッチしたお見積りを提案します。
            </p>
          </div>
        </div>

        {/* CTAボタン */}
        <div className="text-center">
          <button
            onClick={scrollToDiagnosisForm}
            className="inline-flex items-center justify-center bg-[#f16f21] hover:bg-[#e05a10] text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            施工店を探す
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
