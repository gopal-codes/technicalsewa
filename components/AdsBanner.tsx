import React from "react";
import Image from "next/image";

type Props = {};

const AdsBanner = (props: Props) => {
  return (
    <div className="xsm:mt-16 md:mt-[60px] mt-[40px] bg-red-700">
      <Image width={250} height={200}
        src="/../assets/home-banner.jpg"
        className="w-full md:h-[106px] h-[80px] object-contain"
        alt="banner"
      />
    </div>
  );
};

export default AdsBanner;
