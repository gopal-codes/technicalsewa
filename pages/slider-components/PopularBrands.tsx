import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import SliderElement from "../../components/SliderElement";

const settings = {
  dots: false,
  autoplay: true,
  infinite: true,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 1,
  // nextArrow: <SampleNextArrow />,
  // prevArrow: <SamplePrevArrow />,
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
};
type Props = {};

const PopularBrands = (props: Props) => {
  const [popular, setPopular] = useState();
  const allServices = useSelector(
    (state: any) => state?.allServices?.allServices
  );

  const popularBrands = allServices?.filter(
    (items: any) => items?.brand_name === "Popular Brands"
  );
  useEffect(() => {
    if (popularBrands.length < 3) {
      const temp = popularBrands.push(popularBrands[0]);
      setPopular(temp);
    }
  }, [popularBrands]);

  const dispatch = useDispatch();
  return (
    <div className="bg-white md:mt-[25px] ">
      <div className="container mx-auto  pl-[10px] sm:pl-[0px]">
        <div className="flex items-center justify-center pr-[10px]">
          <h1 className="text-[var(--primary-color)] md:text-[20px] text-[17px] leading-[38.88px] font-bold">
            Popular Brands
          </h1>
          {/* <p className="md:hidden text-[#2591B2] text-[12px] leading-[18px] font-normal cursor-pointer">
            View All
          </p> */}
        </div>
        <Slider {...settings} className="mt-5 ">
          {popularBrands?.map((items: any, index: any) => {
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

export default PopularBrands;
