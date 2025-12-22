"use client";

import Image from "next/image";

const JapanMapWithStats = () => {
  return (
    <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
      <Image
        src="https://gaiheki-madoguchi.com/images/hero-bg-pc.svg"
        alt="日本地図 - 地域別加盟店・直営店数"
        width={500}
        height={500}
        className="w-full h-auto"
        priority
        unoptimized
      />
    </div>
  );
};

export default JapanMapWithStats;
