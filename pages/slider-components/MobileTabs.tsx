import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import SliderElement from "../../components/SliderElement";

const settings = {
  dots: false,
  autoplay: false,
  infinite: true,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
  // nextArrow: <SampleNextArrow />,
  // prevArrow: <SamplePrevArrow />
};
type Props = {};

const MobileTabs = (props: Props) => {
  const allServices = useSelector(
    (state: any) => state?.allServices?.allServices
  );
  const mobileServices = allServices?.filter(
    (items: any) => items?.brand_name === "Mobiles & Tabs"
  );

  const dispatch = useDispatch();

  return (
    <div className="bg-white pt-[43px] md:pt-0 md:mt-[38px]">
      <div className="container mx-auto pl-[10px] sm:pl-[0px]">
        <div className="flex items-center justify-center pr-[10px]">
          <h1 className="text-[var(--primary-color)] text-[17px] md:text-[20px] leading-[38.88px] font-bold">
            Mobiles & Tabs
          </h1>
          {/* <p className="md:hidden text-[#2591B2] text-[12px] leading-[18px] font-normal cursor-pointer">
            View All
          </p> */}
        </div>
        <div className="flex items-center justify-center xsm:gap-5 md:gap-10 mt-[28.5px]">
          {mobileServices?.map((items: any, index: any) => {
            return (
              <div key={index}>
                <SliderElement aria-hidden="false" items={items} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileTabs;
