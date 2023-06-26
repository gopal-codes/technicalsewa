import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import SliderElement from "../../components/SliderElement";

type Props = {};
const CCTV = (props: Props) => {
  const allServices = useSelector(
    (state: any) => state?.allServices?.allServices
  );
  const cctvServices = allServices?.filter(
    (items: any) => items?.brand_name === "CCTV Repair Service"
  );

  const dispatch = useDispatch();

  return (
    <div className="bg-[#FBFCFE] md:bg-white pt-[43px]  md:mt-[38px] pb-[44px]">
      <div className="container mx-auto pl-[10px] sm:pl-[0px]">
        <div className="flex items-center justify-center pr-[10px]">
          <h1 className="text-[var(--primary-color)] text-[17px] md:text-[20px] leading-[38.88px] font-bold">
            CCTV Repairs
          </h1>
          {/* <p className='sm:hidden text-[#BB243F]/[0.5] text-[12px] leading-[18px] font-normal cursor-pointer'>View All</p> */}
        </div>
        <div className=" flex justify-center xsm:gap-5  md:gap-10 mt-[28.5px]">
          {cctvServices?.map((items: any, index: any) => {
            return (
              <div key={index}>
                <SliderElement items={items} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CCTV;
