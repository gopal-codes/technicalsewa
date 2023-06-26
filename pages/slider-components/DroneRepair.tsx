import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
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

const DroneRepair = (props: Props) => {
  const allServices = useSelector(
    (state: any) => state?.allServices?.allServices
  );
  const droneServices = allServices?.filter(
    (items: any) => items?.brand_name === "Drone Repair"
  );

  const dispatch = useDispatch();

  return (
    <div className="bg-[#fff] md:mt-[38px] ">
      <div className="container mx-auto pl-[10px] sm:pl-[0px]">
        <div className="flex items-center justify-center pr-[10px]">
          <h1 className="text-[var(--primary-color)] md:text-[20px] text-[17px] leading-[38.88px] font-bold">
            Drone Repairs
          </h1>
          {/* <p className='md:hidden text-[#BB243F]/[0.5] text-[12px] leading-[18px] font-normal cursor-pointer'>View All</p> */}
        </div>
        {/* <Slider {...settings} className="mt-[28.5px] "> */}
        <div className="flex justify-center gap-10 mt-[38.5px]">
          {droneServices?.map((items: any, index: any) => {
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

export default DroneRepair;
