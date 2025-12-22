"use client";

const AboutServiceSection = () => {
  const scrollToDiagnosisForm = () => {
    const element = document.getElementById('diagnosis-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* セクション1: 業界の常識を変える - ベージュ背景・円形カード */}
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
              業界の"常識"を変える、透明なプラットフォーム
            </h2>
          </div>

          {/* 特徴グリッド - 3列 */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-10 mb-12">
            {/* Feature 01 - 紹介だけで費用がかかる仕組みをやめました */}
            <div className="flex flex-col items-center">
              <div className="relative mb-6">
                {/* Feature番号バッジ */}
                <div className="absolute -top-2 -right-2 z-10 bg-[#f16f21] text-white text-xs px-2 py-1 rounded-full">
                  <span className="text-[10px] block leading-none">Feature</span>
                  <span className="text-lg font-bold leading-none">01</span>
                </div>
                {/* 円形カード */}
                <div className="w-48 h-48 md:w-52 md:h-52 bg-gradient-to-br from-white to-[#fef7f0] rounded-full shadow-lg flex items-center justify-center border-4 border-white">
                  {/* イラスト - 手数料0円 */}
                  <div className="text-center">
                    <svg className="w-16 h-16 mx-auto mb-2" viewBox="0 0 64 64">
                      {/* コイン/お金のアイコン */}
                      <circle cx="32" cy="32" r="28" fill="#fef3c7" stroke="#fbbf24" strokeWidth="2"/>
                      <text x="32" y="38" textAnchor="middle" fontSize="20" fill="#f59e0b" fontWeight="bold">¥</text>
                      {/* バツ印 */}
                      <line x1="48" y1="8" x2="56" y2="16" stroke="#dc2626" strokeWidth="3" strokeLinecap="round"/>
                      <line x1="56" y1="8" x2="48" y2="16" stroke="#dc2626" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                    <p className="text-gray-500 text-xs">紹介手数料</p>
                    <p className="text-[#f16f21] text-2xl font-bold">なし</p>
                  </div>
                </div>
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-800 text-center mb-3 leading-relaxed">
                紹介だけで費用がかかる<br/>
                仕組みをやめました
              </h3>
              <p className="text-sm text-gray-600 text-center leading-relaxed px-2">
                一般的な見積サイトでは、受注が決まる前の"紹介"だけで手数料が発生。私たちはこの前提を見直しています。
              </p>
              <div className="mt-3 text-xs text-left px-2">
                <p className="text-gray-700"><span className="font-bold text-[#f16f21]">だから安心：</span>納得いくまで比較できる</p>
                <p className="text-gray-700"><span className="font-bold text-[#f16f21]">だから安い：</span>見積りが適正価格に</p>
              </div>
            </div>

            {/* Feature 02 - 多重下請けで間を抜かれない */}
            <div className="flex flex-col items-center">
              <div className="relative mb-6">
                {/* Feature番号バッジ */}
                <div className="absolute -top-2 -right-2 z-10 bg-[#f16f21] text-white text-xs px-2 py-1 rounded-full">
                  <span className="text-[10px] block leading-none">Feature</span>
                  <span className="text-lg font-bold leading-none">02</span>
                </div>
                {/* 円形カード */}
                <div className="w-48 h-48 md:w-52 md:h-52 bg-gradient-to-br from-white to-[#fef7f0] rounded-full shadow-lg flex items-center justify-center border-4 border-white">
                  {/* イラスト - 直接つながる */}
                  <div className="text-center">
                    <svg className="w-20 h-16 mx-auto mb-2" viewBox="0 0 80 64">
                      {/* お客様 */}
                      <circle cx="15" cy="20" r="8" fill="#fcd34d"/>
                      <ellipse cx="15" cy="45" rx="10" ry="15" fill="#60a5fa"/>
                      {/* 矢印 */}
                      <path d="M30 32 L50 32" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" markerEnd="url(#arrowGreen)"/>
                      <defs>
                        <marker id="arrowGreen" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                          <polygon points="0 0, 10 3.5, 0 7" fill="#22c55e" />
                        </marker>
                      </defs>
                      {/* 施工店 */}
                      <circle cx="65" cy="20" r="8" fill="#fcd34d"/>
                      <ellipse cx="65" cy="45" rx="10" ry="15" fill="#f97316"/>
                      <rect cx="60" y="16" width="10" height="5" fill="#fbbf24" rx="1"/>
                    </svg>
                    <p className="text-[#22c55e] text-sm font-bold">直接</p>
                    <p className="text-gray-700 text-xs">施工店とつながる</p>
                  </div>
                </div>
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-800 text-center mb-3 leading-relaxed">
                "多重下請け"で間を抜かれない<br/>
                施工店と直結
              </h3>
              <p className="text-sm text-gray-600 text-center leading-relaxed px-2">
                私たちは一次施工店と直接つながる前提で、価格と責任の見通しを良くします。
              </p>
              <div className="mt-3 text-xs text-left px-2">
                <p className="text-gray-700"><span className="font-bold text-[#f16f21]">だから安心：</span>責任の所在と品質が明確</p>
                <p className="text-gray-700"><span className="font-bold text-[#f16f21]">だから安い：</span>中間マージンを最小化</p>
              </div>
            </div>

            {/* Feature 03 - 一度の入力で複数社比較 */}
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
                  <div className="flex items-end gap-1">
                    {/* 見積書A */}
                    <svg className="w-12 h-16" viewBox="0 0 48 64">
                      <rect x="4" y="4" width="40" height="56" fill="white" stroke="#d1d5db" strokeWidth="2" rx="2"/>
                      <rect x="8" y="10" width="24" height="3" fill="#e5e7eb"/>
                      <rect x="8" y="16" width="32" height="2" fill="#f3f4f6"/>
                      <rect x="8" y="21" width="28" height="2" fill="#f3f4f6"/>
                      <rect x="8" y="26" width="32" height="2" fill="#f3f4f6"/>
                      <text x="24" y="48" textAnchor="middle" fontSize="10" fill="#374151" fontWeight="bold">A社</text>
                    </svg>
                    {/* 見積書B */}
                    <svg className="w-12 h-16" viewBox="0 0 48 64">
                      <rect x="4" y="4" width="40" height="56" fill="white" stroke="#d1d5db" strokeWidth="2" rx="2"/>
                      <rect x="8" y="10" width="24" height="3" fill="#e5e7eb"/>
                      <rect x="8" y="16" width="32" height="2" fill="#f3f4f6"/>
                      <rect x="8" y="21" width="28" height="2" fill="#f3f4f6"/>
                      <rect x="8" y="26" width="32" height="2" fill="#f3f4f6"/>
                      <text x="24" y="48" textAnchor="middle" fontSize="10" fill="#374151" fontWeight="bold">B社</text>
                    </svg>
                    {/* 見積書C */}
                    <svg className="w-12 h-16" viewBox="0 0 48 64">
                      <rect x="4" y="4" width="40" height="56" fill="white" stroke="#d1d5db" strokeWidth="2" rx="2"/>
                      <rect x="8" y="10" width="24" height="3" fill="#e5e7eb"/>
                      <rect x="8" y="16" width="32" height="2" fill="#f3f4f6"/>
                      <rect x="8" y="21" width="28" height="2" fill="#f3f4f6"/>
                      <rect x="8" y="26" width="32" height="2" fill="#f3f4f6"/>
                      <text x="24" y="48" textAnchor="middle" fontSize="10" fill="#374151" fontWeight="bold">C社</text>
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-800 text-center mb-3 leading-relaxed">
                一度の入力で複数社<br/>
                内訳まで横並び比較
              </h3>
              <p className="text-sm text-gray-600 text-center leading-relaxed px-2">
                条件入力は1回。下地補修、塗料グレード、足場、保証などを同一フォーマットで見比べられます。
              </p>
              <div className="mt-3 text-xs text-left px-2">
                <p className="text-gray-700"><span className="font-bold text-[#f16f21]">だから安心：</span>"なぜ安い／高い"が分かる</p>
                <p className="text-gray-700"><span className="font-bold text-[#f16f21]">だから安い：</span>健全な競争で高値を回避</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* セクション2: 外壁塗装の窓口とは - オレンジ背景 */}
      <section className="relative bg-gradient-to-b from-[#f5a623] to-[#e8941e] py-16 md:py-24 px-4 overflow-hidden">
        {/* 背景デコレーション - 波線 */}
        <div className="absolute inset-0 overflow-hidden">
          {/* 上部の波 */}
          <svg className="absolute top-0 left-0 w-full h-32 opacity-20" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="white" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
          {/* 下部の波 */}
          <svg className="absolute bottom-0 left-0 w-full h-32 opacity-20" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="white" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,197.3C672,192,768,160,864,165.3C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
          {/* 装飾用の円 */}
          <div className="absolute top-20 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-10 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-yellow-300/20 rounded-full blur-xl"></div>
          <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-orange-300/20 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* タイトル */}
          <div className="text-center mb-10 md:mb-14">
            <p className="text-white/90 text-sm mb-2 tracking-widest font-medium">About Service</p>
            <div className="flex justify-center gap-1.5 mb-5">
              <span className="w-2.5 h-2.5 bg-[#e74c3c] rounded-full animate-pulse"></span>
              <span className="w-2.5 h-2.5 bg-[#e74c3c] rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></span>
              <span className="w-2.5 h-2.5 bg-[#e74c3c] rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              外壁塗装の窓口とは
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed max-w-3xl mx-auto drop-shadow">
              全国の優良リフォーム会社、塗装専門会社とのネットワークを持ち、<br className="hidden md:block" />
              独立した第三者機関の立場からお客様のご要望やご希望に沿った会社をご案内しています。
            </p>
            <p className="text-white text-sm md:text-base leading-relaxed max-w-3xl mx-auto mt-2 drop-shadow">
              また、ご紹介にとどまらず直営店舗も全国に構えており、外壁塗装の窓口が責任をもって施工を承ることも可能です。
            </p>
          </div>

          {/* フローチャート */}
          <div className="relative flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-2">
            {/* 左: お客様 */}
            <div className="relative bg-white/25 backdrop-blur-sm rounded-3xl p-6 w-full max-w-[280px] shadow-lg border border-white/30">
              {/* 吹き出し */}
              <div className="absolute -top-4 left-4 bg-[#fffbeb] text-[#92400e] text-xs px-3 py-1.5 rounded-full shadow-md font-medium border border-[#fde68a]">
                塗装の相談をしたい
              </div>
              <div className="absolute -top-4 right-4 bg-[#fffbeb] text-[#92400e] text-xs px-3 py-1.5 rounded-full shadow-md font-medium border border-[#fde68a]">
                見積もりが欲しい
              </div>
              {/* イラスト - 3人の人物 */}
              <div className="flex justify-center mb-3 pt-6">
                <svg className="w-32 h-28" viewBox="0 0 140 100">
                  {/* 左の人 */}
                  <circle cx="30" cy="25" r="12" fill="#fbbf24"/>
                  <ellipse cx="30" cy="65" rx="18" ry="28" fill="#f97316"/>
                  {/* 中央の人 */}
                  <circle cx="70" cy="20" r="14" fill="#fcd34d"/>
                  <ellipse cx="70" cy="62" rx="20" ry="32" fill="#fb923c"/>
                  {/* 右の人 */}
                  <circle cx="110" cy="25" r="12" fill="#fbbf24"/>
                  <ellipse cx="110" cy="65" rx="18" ry="28" fill="#f97316"/>
                </svg>
              </div>
              <p className="text-white text-center font-bold text-lg drop-shadow">お客様</p>
            </div>

            {/* 曲線矢印（左→中央） */}
            <div className="hidden lg:flex items-center">
              <svg className="w-16 h-20" viewBox="0 0 60 80">
                <defs>
                  <marker id="arrowhead1" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="white" />
                  </marker>
                </defs>
                <path d="M5 40 Q30 10 55 40" stroke="white" strokeWidth="3" fill="none" markerEnd="url(#arrowhead1)" opacity="0.8"/>
                <path d="M5 45 Q30 75 55 45" stroke="white" strokeWidth="3" fill="none" markerEnd="url(#arrowhead1)" opacity="0.8"/>
              </svg>
            </div>
            <div className="lg:hidden py-2">
              <svg className="w-12 h-12" viewBox="0 0 50 50">
                <defs>
                  <marker id="arrowheadMobile1" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="white" />
                  </marker>
                </defs>
                <path d="M25 5 L25 40" stroke="white" strokeWidth="3" fill="none" markerEnd="url(#arrowheadMobile1)" opacity="0.8"/>
              </svg>
            </div>

            {/* 中央: 外壁塗装の窓口 */}
            <div className="bg-white rounded-3xl p-6 shadow-2xl w-full max-w-[340px] border-4 border-white relative">
              {/* PCイラスト */}
              <div className="flex justify-center mb-4">
                <svg className="w-28 h-20" viewBox="0 0 120 80">
                  {/* モニター */}
                  <rect x="15" y="5" width="90" height="55" rx="4" fill="#374151" stroke="#1f2937" strokeWidth="2"/>
                  <rect x="20" y="10" width="80" height="45" fill="#60a5fa"/>
                  {/* 画面内容 */}
                  <rect x="25" y="15" width="30" height="4" fill="white" opacity="0.8"/>
                  <rect x="25" y="22" width="50" height="3" fill="white" opacity="0.6"/>
                  <rect x="25" y="28" width="40" height="3" fill="white" opacity="0.6"/>
                  {/* スタンド */}
                  <rect x="50" y="60" width="20" height="8" fill="#6b7280"/>
                  <rect x="40" y="68" width="40" height="6" rx="2" fill="#4b5563"/>
                </svg>
              </div>
              <div className="text-center mb-4">
                <p className="text-[#dc2626] text-xs mb-1 font-medium">業界最大級の<span className="text-[#f16f21] font-bold">外壁塗装専門サイト</span></p>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 border-b-2 border-[#f16f21] inline-block pb-1">外壁塗装の窓口</h3>
              </div>
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 bg-gradient-to-r from-[#f16f21] to-[#f59e0b] px-3 py-2 rounded-lg shadow">
                  <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-[#f16f21]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-white font-bold text-sm">お客様への無料相談サポート</span>
                </div>
                <div className="flex items-center gap-2 bg-gradient-to-r from-[#f16f21] to-[#f59e0b] px-3 py-2 rounded-lg shadow">
                  <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-[#f16f21]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-white font-bold text-sm">優良施工店の紹介・相見積もりの手配</span>
                </div>
                <div className="flex items-center gap-2 bg-gradient-to-r from-[#f16f21] to-[#f59e0b] px-3 py-2 rounded-lg shadow">
                  <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-[#f16f21]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-white font-bold text-sm">工事の直接請負・アフターフォロー</span>
                </div>
              </div>
            </div>

            {/* 曲線矢印（中央→右） */}
            <div className="hidden lg:flex items-center">
              <svg className="w-16 h-20" viewBox="0 0 60 80">
                <defs>
                  <marker id="arrowhead2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="white" />
                  </marker>
                </defs>
                <path d="M5 40 Q30 10 55 40" stroke="white" strokeWidth="3" fill="none" markerEnd="url(#arrowhead2)" opacity="0.8"/>
                <path d="M5 45 Q30 75 55 45" stroke="white" strokeWidth="3" fill="none" markerEnd="url(#arrowhead2)" opacity="0.8"/>
              </svg>
            </div>
            <div className="lg:hidden py-2">
              <svg className="w-12 h-12" viewBox="0 0 50 50">
                <defs>
                  <marker id="arrowheadMobile2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="white" />
                  </marker>
                </defs>
                <path d="M25 5 L25 40" stroke="white" strokeWidth="3" fill="none" markerEnd="url(#arrowheadMobile2)" opacity="0.8"/>
              </svg>
            </div>

            {/* 右: 優良施工店・直営店舗 */}
            <div className="flex flex-col gap-4 w-full max-w-[280px]">
              {/* 優良施工店 */}
              <div className="bg-white rounded-3xl p-5 shadow-xl border-2 border-gray-100">
                <div className="flex items-center justify-center gap-4 mb-2">
                  {/* 家のイラスト */}
                  <svg className="w-20 h-20" viewBox="0 0 80 80">
                    {/* 屋根 */}
                    <path d="M10 40 L40 15 L70 40" fill="#dc2626" stroke="#b91c1c" strokeWidth="2"/>
                    {/* 壁 */}
                    <rect x="15" y="40" width="50" height="35" fill="#fef3c7" stroke="#d97706" strokeWidth="1"/>
                    {/* ドア */}
                    <rect x="33" y="50" width="14" height="25" fill="#92400e" rx="1"/>
                    <circle cx="44" cy="63" r="1.5" fill="#fbbf24"/>
                    {/* 窓 */}
                    <rect x="20" y="48" width="10" height="10" fill="#93c5fd" stroke="#60a5fa" strokeWidth="1"/>
                    <line x1="25" y1="48" x2="25" y2="58" stroke="#60a5fa" strokeWidth="1"/>
                    <line x1="20" y1="53" x2="30" y2="53" stroke="#60a5fa" strokeWidth="1"/>
                    <rect x="50" y="48" width="10" height="10" fill="#93c5fd" stroke="#60a5fa" strokeWidth="1"/>
                    <line x1="55" y1="48" x2="55" y2="58" stroke="#60a5fa" strokeWidth="1"/>
                    <line x1="50" y1="53" x2="60" y2="53" stroke="#60a5fa" strokeWidth="1"/>
                  </svg>
                  {/* 2人の作業員 */}
                  <div className="flex -space-x-2">
                    <svg className="w-12 h-16" viewBox="0 0 50 70">
                      <circle cx="25" cy="12" r="10" fill="#fcd34d"/>
                      <ellipse cx="25" cy="45" rx="14" ry="22" fill="#3b82f6"/>
                      <rect x="12" y="8" width="26" height="6" fill="#fbbf24" rx="2"/>
                    </svg>
                    <svg className="w-12 h-16" viewBox="0 0 50 70">
                      <circle cx="25" cy="12" r="10" fill="#fcd34d"/>
                      <ellipse cx="25" cy="45" rx="14" ry="22" fill="#22c55e"/>
                      <rect x="12" y="8" width="26" height="6" fill="#fbbf24" rx="2"/>
                    </svg>
                  </div>
                </div>
                <p className="text-gray-800 font-bold text-center text-lg">優良施工店</p>
              </div>

              {/* 直営店舗 */}
              <div className="bg-white rounded-3xl p-4 shadow-xl border-3 border-[#f16f21] relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#f16f21] text-white text-xs px-2 py-0.5 rounded-bl">
                  DIRECT
                </div>
                <p className="text-gray-800 font-bold text-center text-lg py-2">直営店舗</p>
              </div>
            </div>
          </div>

          {/* 下部テキスト */}
          <div className="text-center mt-10">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-8 py-3 border border-white/30">
              <p className="text-white font-bold text-lg md:text-xl drop-shadow">
                高品質のリフォームを適正価格でご提供します
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutServiceSection;
