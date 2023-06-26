import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import {
  SampleNextArrow,
  SamplePrevArrow,
} from "../../components/SliderButtonFunction";
import SliderElement from "../../components/SliderElement";

const settings = {
  dots: false,
  autoplay: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
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
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
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
        slidesToScroll: 2,
      },
    },
  ],
  // nextArrow: <SampleNextArrow />,
  // prevArrow: <SamplePrevArrow />
};
type Props = {};

const MedicalEquipments = (props: Props) => {
  const allServices = useSelector(
    (state: any) => state?.allServices?.allServices
  );
  const medicalServices = allServices?.filter(
    (items: any) => items?.brand_name === "Medical Equipment"
  );

  return (
    <div className="bg-[#FBFCFE] pt-[43px] md:mt-[38px] pb-[44px] m-auto">
      <div className="container mx-auto pl-[10px] sm:pl-[0px]">
        <div className="flex items-center justify-center pr-[10px]">
          <h1 className="text-[var(--primary-color)] md:text-[20px] text-[17px] leading-[38.88px] font-bold">
            Medical equipments
          </h1>
        </div>
        <Slider {...settings} className="mt-[28.5px] ">
          {medicalServices?.map((items: any, index: any) => {
            return (
              <div key={index}>
                <SliderElement aria-hidden="false" items={items} />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default MedicalEquipments;
