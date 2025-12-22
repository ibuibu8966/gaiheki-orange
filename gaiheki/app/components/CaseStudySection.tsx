"use client";

const CaseStudySection = () => {
  const caseStudies = [
    {
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop",
      title: "外壁の塗装",
      location: "大阪府",
      price: "1,000,000",
    },
    {
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop",
      title: "外壁と屋根の塗装",
      location: "滋賀県",
      price: "1,240,000",
    },
    {
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
      title: "外壁の張り替え",
      location: "熊本県",
      price: "5,000,000",
    },
    {
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop",
      title: "屋根のカバー工法",
      location: "新潟県",
      price: "1,480,000",
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop",
      title: "大規模修繕（外壁修繕・屋上防水）",
      location: "東京都",
      price: "4,300,000",
    },
    {
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400&h=300&fit=crop",
      title: "屋根の塗装",
      location: "宮城県",
      price: "660,000",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <p className="text-[#f16f21] text-sm font-semibold tracking-wider mb-2">
            Case Study
          </p>
          <div className="flex justify-center gap-1 mb-4">
            <span className="w-2 h-2 bg-[#f16f21] rounded-full"></span>
            <span className="w-2 h-2 bg-[#f16f21] rounded-full"></span>
            <span className="w-2 h-2 bg-[#f16f21] rounded-full"></span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            施工実績
          </h2>
        </div>

        {/* 施工実績グリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <div key={index} className="group cursor-pointer">
              {/* 画像 */}
              <div className="relative overflow-hidden mb-3">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* 情報 */}
              <div>
                <h3 className="font-bold text-gray-800 mb-1">{study.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{study.location}</p>
                <div className="flex items-center gap-2">
                  <span className="bg-[#f16f21] text-white text-xs px-2 py-1 font-bold">
                    工事金額
                  </span>
                  <span className="text-xl font-bold text-gray-800">
                    {study.price}
                  </span>
                  <span className="text-sm text-gray-600">円</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
