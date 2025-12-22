"use client";

import JapanMapWithStats from "./JapanMapWithStats";

const HeroSection = () => {
  const scrollToDiagnosisForm = () => {
    const element = document.getElementById('diagnosis-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative py-8 md:py-16 px-4 overflow-hidden bg-gradient-to-b from-[#fff8f0] to-white">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* メインビジュアル */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
          {/* 左側: キャッチコピーと統計情報 */}
          <div className="flex-1 w-full lg:w-1/2">
            {/* メインキャッチコピー */}
            <div className="mb-6 md:mb-8">
              <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 leading-tight mb-4">
                信頼と安心の<br/>全国ネットワーク
              </h1>
            </div>

            {/* 統計情報（月桂冠付き） */}
            <div className="flex flex-wrap gap-4 md:gap-6 mb-6 md:mb-8">
              {/* 累計施工実績 */}
              <div className="flex items-center">
                <LaurelLeft />
                <div className="text-center px-2">
                  <p className="text-xs text-gray-600 mb-1">累計施工実績</p>
                  <p className="text-2xl md:text-3xl font-bold text-[#f16f21]">
                    38,000<span className="text-sm font-normal">店</span>
                  </p>
                </div>
                <LaurelRight />
              </div>

              {/* 加盟店 */}
              <div className="flex items-center">
                <LaurelLeft />
                <div className="text-center px-2">
                  <p className="text-xs text-gray-600 mb-1">加盟店</p>
                  <p className="text-2xl md:text-3xl font-bold text-[#f16f21]">
                    5,500<span className="text-sm font-normal">店</span>
                  </p>
                </div>
                <LaurelRight />
              </div>

              {/* 直営店 */}
              <div className="flex items-center">
                <LaurelLeft />
                <div className="text-center px-2">
                  <p className="text-xs text-gray-600 mb-1">直営店</p>
                  <p className="text-2xl md:text-3xl font-bold text-[#f16f21]">
                    100<span className="text-sm font-normal">店</span>
                  </p>
                </div>
                <LaurelRight />
              </div>
            </div>

            {/* サブキャッチコピー */}
            <div className="mb-6 md:mb-8">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                比較で納得、直営で安心。<br className="hidden md:block"/>
                すべてが揃う外壁塗装の窓口。
              </p>
            </div>

            {/* CTAボタン */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a
                href="tel:0120-000-000"
                className="inline-flex items-center justify-center bg-white border-2 border-[#f16f21] text-[#f16f21] font-bold py-3 px-6 rounded-lg text-base md:text-lg transition-all duration-300 hover:bg-[#fff5f0] shadow-md"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                ご相談・お問い合わせ
              </a>
              <button
                onClick={scrollToDiagnosisForm}
                className="inline-flex items-center justify-center bg-[#f16f21] hover:bg-[#e05a10] text-white font-bold py-3 px-6 rounded-lg text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                60秒！無料相場診断
              </button>
            </div>
          </div>

          {/* 右側: 日本地図（地域別統計付き） */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <JapanMapWithStats />
          </div>
        </div>
      </div>
    </section>
  );
};

// 月桂冠（左側）
const LaurelLeft = () => (
  <svg width="24" height="48" viewBox="0 0 24 48" className="text-[#f16f21] opacity-80">
    <path
      d="M20 4c-4 2-6 6-6 10 0 4-2 8-6 12 4-2 8-6 10-12 2-4 2-8 2-10z"
      fill="currentColor"
    />
    <path
      d="M20 14c-4 2-6 6-6 10 0 4-2 8-6 12 4-2 8-6 10-12 2-4 2-8 2-10z"
      fill="currentColor"
    />
    <path
      d="M18 24c-3 2-5 5-5 8 0 4-2 6-5 10 4-2 7-5 9-10 1-3 1-6 1-8z"
      fill="currentColor"
    />
  </svg>
);

// 月桂冠（右側）
const LaurelRight = () => (
  <svg width="24" height="48" viewBox="0 0 24 48" className="text-[#f16f21] opacity-80 scale-x-[-1]">
    <path
      d="M20 4c-4 2-6 6-6 10 0 4-2 8-6 12 4-2 8-6 10-12 2-4 2-8 2-10z"
      fill="currentColor"
    />
    <path
      d="M20 14c-4 2-6 6-6 10 0 4-2 8-6 12 4-2 8-6 10-12 2-4 2-8 2-10z"
      fill="currentColor"
    />
    <path
      d="M18 24c-3 2-5 5-5 8 0 4-2 6-5 10 4-2 7-5 9-10 1-3 1-6 1-8z"
      fill="currentColor"
    />
  </svg>
);

export default HeroSection;
