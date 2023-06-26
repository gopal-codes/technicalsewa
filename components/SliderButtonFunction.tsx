import React from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

export const SampleNextArrow = ({ onClick }: any) => {
  return (
    <div
      onClick={onClick}
      className="absolute sm:hidden top-[-33%] text-[#2591B2] right-[2.5%] carousel_btn  items-center justify-center hidden cursor-pointer md:flex"
    >
      <AiOutlineRight />
    </div>
  );
};

export const SamplePrevArrow = ({ onClick }: any) => {
  return (
    <div
      onClick={onClick}
      className="absolute sm:hidden top-[-33%] text-[#2591B2] right-[7.5%] carousel_btn  items-center justify-center hidden cursor-pointer md:flex mr-5"
    >
      <AiOutlineLeft />
      {/* <p className='bg-red-400'>hello</p> */}
    </div>
  );
};
