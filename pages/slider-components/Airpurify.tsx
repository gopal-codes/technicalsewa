import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

const Airpurify = (props: Props) => {
  const allServices = useSelector(
    (state: any) => state?.allServices?.allServices
  );
  const humidifierServices = allServices?.filter(
    (items: any) => items?.brand_name === "Air-Purifier/Humidifier"
  );
  // // console.log(allServices, "allservices from redux");

  const dispatch = useDispatch();

  return (
    <div className="bg-[white] md:pt-[15px]">
      <div className="container mx-auto pl-[10px] sm:pl-[0px]">
        <div className="flex items-center justify-center pr-[10px]">
          <h1 className="text-[var(--primary-color)] text-[17px] md:text-[20px] leading-[38.88px] font-bold">
            Air-Purifier/Humidifier
          </h1>
        </div>
        <div className="flex justify-center items-center gap-10 mt-[28.8px]">
          {humidifierServices?.map((items: any, index: any) => {
            let imageUrl;
            imageUrl = items?.image_url.replace(
              "https://smartcare.com.np/multiservice/",
              "https:////smartcare.com.np/techsewa"
            );
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

export default Airpurify;
