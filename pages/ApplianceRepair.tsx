import React, { useMemo } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import {
  SampleNextArrow,
  SamplePrevArrow,
} from "../components/SliderButtonFunction";
import Link from "next/link";
import {
  setActiveProductName,
  setSubCategory,
  // setProductCategoryList,
  setProductId,
  setActiveCategory,
  setProductCategoryList,
  setActiveUrl,
  setServiceUrl,
} from "../redux/productDetails";
import axios from "axios";
import { setProductIdSlug } from "../redux/slugSlice";
import Image from "next/image";
import SliderDescription from "../components/SliderDescription";
import SliderElement from "../components/SliderElement";
import { baseUrl } from "./api/baseUrl";

const settings = {
  dots: false,
  autoplay: true,
  infinite: true,
  speed: 500,
  slidesToShow: 7,
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
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 3,
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

const ApplianceRepair = (props: Props) => {
  const dispatch = useDispatch();

  const allServices = useSelector(
    (state: any) => state?.allServices?.allServices
  );
  // console.log(allServices);
  const appllianceServices = allServices?.filter(
    (items: any) => items?.brand_name === "Appliances Repair"
  );
  // console.log(appllianceServices);

  //Getting Category
  const handleProductClick = (id: any) => {
    try {
      var data = new FormData();
      data.append("product_id", id);
      var config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${baseUrl}techsewa/publicControl/GetProductcategiryByProduct`,
        // headers: {},
        // data: data,
      };
      axios(config).then((response) => {
        let data = response.data;
        // console.log(data, "appliancie");
        dispatch(setProductCategoryList(data));
      });
    } catch (error: any) {
      console.log("Axios Error: " + error);
    }
  };

  return (
    <div className="bg-[#FBFCFE] pt-[38px] pb-10">
      <div className="container mx-auto pl-[10px] sm:pl-[0px]">
        <div className="flex items-center justify-center pr-[10px]">
          <h2 className="text-[var(--primary-color)] md:text-[20px] text-[17px] leading-[38.88px] font-bold">
            Appliance Repair
          </h2>
        </div>
        <Slider {...settings} className="mt-[28.5px] ">
          {appllianceServices?.map((items: any, index: any) => {
            // console.log(items);

            return (
              <div key={index}>
                <SliderElement aria-hidden="false" items={items} />
              </div>
            );
          })}
          {/* {memoizedValue} */}
        </Slider>
      </div>
    </div>
  );
};

export default ApplianceRepair;
