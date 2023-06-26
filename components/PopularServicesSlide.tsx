import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import SliderElement from "./SliderElement";

const PopularServicesSlide = (props: any) => {
  const [list, setList] = useState([]);
  const { settings } = props;
  const { serviceName } = props;
  //getting all services
  const allServices = useSelector(
    (state: any) => state.allServices.allServices
  );

  useEffect(() => {
    const serviceList = allServices.filter(
      (items: any, index: any) => items?.brand_name === serviceName
    );
    setList(serviceList);
  }, [allServices, serviceName]);

  // console.log(list);
  const dispatch = useDispatch();

  return (
    <div className="bg-[#FBFCFE] pt-[38px] pb-[52px] mt-[30px] xl:w-[80rem] sm:w-full  m-auto">
      <div className="container mx-auto pl-[10px] sm:pl-[0px]">
        <div className="flex items-center justify-between pr-[10px]">
          <h4 className="xsm:text-black md:text-[var(--primary-color)] md:text-[20px] text-[17px] leading-[38.88px] font-bold">
            Popular Services Near you
          </h4>
          <p className="md:hidden text-[#2591B2]  text-[12px] leading-[18px] font-normal cursor-pointer">
            View All
          </p>
        </div>
        <Slider
          {...settings}
          slidesToShow={list.length > 7 ? 7 : list?.length}
          className="mt-[28.5px] "
        >
          {list.map((items: any, index: any) => {
            // console.log(items);
            let imageUrl;
            if (items?.image_url) {
              imageUrl = items?.image_url.replace(
                "https://smartcare.com.np/multiservice/",
                "https:////smartcare.com.np/techsewa/"
              );
            }
            return (
              <>
                <SliderElement items={items} />
              </>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default PopularServicesSlide;
