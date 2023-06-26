import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setActiveCategory,
  setProductDetails,
  setServiceUrl,
  setSubCategory,
} from "../redux/productDetails";
import { setProductIdSlug } from "../redux/slugSlice";
import SliderDescription from "./SliderDescription";

const SliderElement = (props: any) => {
  const { items } = props;
  const dispatch = useDispatch();
  // console.log(items);
  let imageUrl;
  if (items?.image_url) {
    imageUrl = items?.image_url.replace(
      "https://smartcare.com.np/multiservice/",
      "https://smartcare.com.np/techsewa/"
    );
  }

  useEffect(() => {
    const elements = document.querySelectorAll('[tabindex="-1"]');
    elements.forEach((element) => {
      // Perform your DOM manipulation here
      element?.setAttribute('aria-hidden', 'false');
    });

    var parentElement = document.querySelectorAll('slick-track');
    parentElement?.forEach((ele)=>{
      ele?.setAttribute('aria-hidden', 'false');
    })

    // const element1 = document.querySelector('slick-slide');
    // element1?.setAttribute('aria-hidden', 'false');
    // const element2 = document.querySelector('slick-current');
    // element2?.setAttribute('aria-hidden', 'false');
    // const element3 = document.querySelector('');
    // element3?.setAttribute('aria-hidden', 'false');
    
  }, []);


  return (
    <div
      aria-hidden="false"
      className="cursor-pointer "
      onClick={() => {
        dispatch(setActiveCategory(items?.brand_name));
        dispatch(setSubCategory(items?.product_name));
        dispatch(setServiceUrl(items?.url_product_name));
        dispatch(setProductIdSlug(items?.product_id));
        dispatch(setProductDetails(items));
      }}
    >
      <Link
        aria-label={`repair ${items?.url_product_name}`}
        href={{
          pathname: `/repair/${items?.url_product_name}`,
        }}
      >
        <div className="bg-white transform hover:scale-[105%] transition-all duration-200 ease-in-out rounded-[5px] mb-[10px] flex items-center justify-center flex-col w-[106px] xsm:w-[86px] h-[100px] md:w-[162px] xsm:h-[90px] md:h-[106px] 2xl:w-[93%] m-auto">
          {items?.brand_name === "Appliance Repair" ? (
            <Image
              src={imageUrl}
              alt={items?.alt}
              height={72}
              width={122}
              className="xsm:[80px] md:w-[122px] md:h-[72px] object-cover"
            />
          ) : (
            <Image
              src={imageUrl}
              alt={items?.alt}
              height={72}
              width={122}
              className="xsm:[80px] md:w-[122px] md:h-[72px] object-cover"
            />
          )}
        </div>
        {items?.brand_name !== "Popular Brands" &&
        items?.brand_name !== "Warranty Products" ? (
          <h2 className="text-center  text-black text-[12px] md:text-[15px] leading-[21.09px] font-bold truncate">
            {items?.product_name}
          </h2>
        ) : (
          ""
        )}
        <SliderDescription className="text-[#000]" title={items?.title} />
      </Link>
    </div>
  );
};

export default SliderElement;
