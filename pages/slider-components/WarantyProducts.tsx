import React from "react";
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
  // nextArrow: <SampleNextArrow />,
  // prevArrow: <SamplePrevArrow />,
  slidesToShow: 6,
  slidesToScroll: 1,

  responsive: [
    // {
    //   breakpoint: 1280,
    //   settings: {
    //     slidesToShow: 5,
    //     slidesToScroll: 2,
    //     infinite: true,
    //     dots: true,
    //   },
    // },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
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

const WarantyProducts = (props: Props) => {
  const allServices = useSelector(
    (state: any) => state?.allServices?.allServices
  );
  const warrantyProducts = allServices?.filter(
    (items: any) => items?.brand_name === "Warranty Products"
  );

  // console.log(warrantyProducts, "warrantyproducts");

  const dispatch = useDispatch();

  return (
    <div className="bg-white md:pt-[38px] pt-[40px] pb-5 mt-3">
      <div className="container mx-auto pl-[10px] sm:pl-[10px]">
        <div className="flex items-center justify-center pr-[10px] ">
          <h1 className="text-[var(--primary-color)] md:text-[20px] text-[17px] leading-[38.88px] font-bold">
            Warranty Products
          </h1>
        </div>
        <Slider {...settings} className="mt-[28.5px] ">
          {warrantyProducts?.map((items: any, index: any) => {
            let imageUrl;
            if (items?.image_url) {
              imageUrl = items?.image_url.replace(
                "https://smartcare.com.np/multiservice/",
                "https:////smartcare.com.np/techsewa/"
              );
            }
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

export default WarantyProducts;
