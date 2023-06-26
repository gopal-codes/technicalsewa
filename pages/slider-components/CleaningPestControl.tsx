import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { setProductDetails, setServiceUrl } from "../../redux/productDetails";
import { setProductIdSlug } from "../../redux/slugSlice";
import { setActiveCategory } from "../../redux/productDetails";
import { setSubCategory } from "../../redux/productDetails";
import SliderDescription from "../../components/SliderDescription";
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

const CleaningPestControl = (props: Props) => {
  const allServices = useSelector(
    (state: any) => state?.allServices?.allServices
  );
  const pestControlServices = allServices?.filter(
    (items: any) => items?.brand_name === "Cleaning & Pest Control"
  );
  // console.log(allServices);

  const dispatch = useDispatch();

  return (
    <div className="bg-[#fff] md:pt-[38px] ">
      <div className="container mx-auto pl-[10px] sm:pl-[0px]">
        <div className="flex items-center justify-center pr-[10px]">
          <h1 className="text-[var(--primary-color)] text-[17px] md:text-[20px] leading-[38.88px] font-bold">
            Cleaning & Pest Control
          </h1>
          {/* <p className='md:hidden text-[#BB243F]/[0.5] text-[12px] leading-[18px] font-normal cursor-pointer'>View All</p> */}
        </div>
        {/* <Slider {...settings} className="mt-[28.5px] "> */}
        <div className="flex justify-center gap-10 mt-5">
          {pestControlServices?.map((items: any, index: any) => {
            let imageUrl;
            if (items?.image_url) {
              imageUrl = items?.image_url.replace(
                "https://smartcare.com.np/multiservice/",
                "https:////smartcare.com.np/techsewa/"
              );
            }
            return (
              <div
                className="cursor-pointer w-[200px]"
                key={index}
                onClick={() => {
                  dispatch(setProductDetails(items));
                  dispatch(setServiceUrl(items?.url_product_name));
                  dispatch(setProductIdSlug(items?.product_id));
                  dispatch(setActiveCategory(items?.brand_name));
                  dispatch(setSubCategory(items?.product_name));
                }}
              >
                <Link
                  aria-label={`repair allservices ${items?.url_product_name}`}
                  href={{
                    pathname: `/repair/allservices/${items?.url_product_name}`,
                  }}
                >
                  <div className="bg-white  transform hover:scale-[105%] transition-all duration-200 ease-in-out rounded-[5px] mb-[27px] flex items-center justify-center flex-col w-[106px] h-[100px] md:w-[162px] md:h-[106px] 2xl:w-[93%] m-auto">
                    <Image
                      height={72}
                      width={122}
                      src={imageUrl}
                      alt={items?.alt}
                      className="w-[122px] h-[76px] object-cover"
                    />
                  </div>
                  <p className="text-center text-[#000000] text-[12px] md:text-[15px] leading-[21.09px] font-bold">
                    {items?.product_name}
                  </p>
                  <SliderDescription title={items?.title} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CleaningPestControl;
