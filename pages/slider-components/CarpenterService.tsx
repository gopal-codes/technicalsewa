import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import SliderElement from "../../components/SliderElement";

// const SampleNextArrow = () => {
//     return (
//         <div className='bg-red-500'>
//             helo
//         </div>
//     )
// }
// const SamplePrevArrow = () => {
//     return (
//         <div className='bg-green-500'>
//             helo0
//         </div>
//     )
// }

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

const CarpenterService = (props: Props) => {
  const allServices = useSelector(
    (state: any) => state?.allServices?.allServices
  );
  const carpentServices = allServices?.filter(
    (items: any) => items?.brand_name === "Carpenter Service"
  );

  const dispatch = useDispatch();

  return (
    <div className="bg-[#FBFCFE] md:bg-white pt-[43px] md:mt-[38px] pb-[44px]">
      <div className="container mx-auto pl-[10px] sm:pl-[0px]">
        <div className="flex items-center justify-center pr-[10px]">
          <h1 className="text-[var(--primary-color)] text-[17px] md:text-[20px] leading-[38.88px] font-bold">
            Carpenter Services
          </h1>
          {/* <p className='md:hidden text-[#BB243F]/[0.5] text-[12px] leading-[15px] font-normal cursor-pointer'>View All</p> */}
        </div>
        {/* <Slider {...settings} className="mt-[28.5px] "> */}
        <div className="flex justify-center gap-2 mt-10">
          {carpentServices?.map((items: any, index: any) => {
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

export default CarpenterService;
