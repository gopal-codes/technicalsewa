import React, { useEffect, useState } from "react";
import parse from "html-react-parser";

const ProductBannerContent = (props: any) => {
  const { activeCategory, list, activeSubCategory, bannerContent } = props;

  return (
    <div className=" text-[var(--primary-color)] my-10 m-auto xl:w-[80rem] xl:px-0 md:px-10 lg:w-[1024px] md:w-[768px] xsm:w-[320px] ">
      <p className="text-[18px] leading-[17.01px] tracking-[0.02em] font-extrabold">
        {`${activeCategory} / ${activeSubCategory} `}
      </p>
      <h3 className="md:text-[30px] leading-[30.17px] font-bold tracking-[0.02em] max-w-[804px] mt-[15px] xsm:text-lg">
        {list[0]?.text}
        <span className="rounded-[60px] xsm:ml-5 xsm:text-lg md:text-[25.75px] leading-[44.63px] font-bold tracking-[0.02em] text-[#F9F9F9] px-[20px] md:ml-7 p-2 bg-[#1d738d]">
          4.5
        </span>
      </h3>
      <div className="mt-[25px] md:text-[22px] xsm:text-[16px] mb-5 text-black flex flex-col gap-4">
        {parse(`${bannerContent}`)}
      </div>
    </div>
  );
};

export default ProductBannerContent;
