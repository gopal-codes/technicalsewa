import { NextSeo } from "next-seo";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveUrl,
  setServiceUrl,
  setSubCategory,
} from "../../redux/productDetails";
import { setProductIdSlug } from "../../redux/slugSlice";
import { icons } from "../../utils/category-icons";

const Services = (props: any) => {
  const { service, iconIndex } = props;
  const allServices = useSelector(
    (state: any) => state?.allServices?.allServices
  );
  const services = allServices.filter(
    (item: any, index: any) => item?.brand_name === service
  );
  const popularServices = allServices.filter(
    (item: any, index: any) => item?.brand_name === "Popular Brands"
  );

  // console.log(services);

  // Making style dynamic
  const style = "";

  const dispatch = useDispatch();
  return (
    <div className=" basis-[70%]">
      <NextSeo
        title="Service | Technical Sewa"
        description="Service page of Technical Sewa"
      />
      <div className="bg-white pt-[30px] pl-[30px] pr-[130px] md:pr-[50px] xsm:px-2 pb-[31px] border rounded-[5px]">
        <h2 className="text-[#2591B2] text-[18px] leading-[22px] font-bold tracking-[0.02em] text-center flex items-center gap-2 justify-center">
          <span>{icons[iconIndex]}</span>
          <span>{service}</span>
        </h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 mt-[28px]">
          {services.map((items: any, index: any) => {
            // console.log(items);
            let imageUrl;
            if (items?.image_url) {
              imageUrl = items?.image_url.replace(
                "https://smartcare.com.np/multiservice/",
                "https:////smartcare.com.np/techsewa/"
              );
            }
            return (
              <div
                key={index}
                onClick={() => {
                  dispatch(setSubCategory(items?.product_name));
                  dispatch(setActiveUrl(items?.url_product_name));
                  dispatch(setServiceUrl(items?.url_product_name));
                  dispatch(setProductIdSlug(items?.product_id));
                }}
              >
                <Link
                  className=""
                  href={{
                    pathname: `/repair/${items?.url_product_name}`,
                  }}
                >
                  <div className="flex w-full items-center justify-between flex-col cursor-pointer">
                    <div className="h-[100px] flex flex-col justify-end">
                      <Image
                        loading="lazy"
                        src={imageUrl}
                        alt={items?.alt}
                        width={80}
                        height={80}
                        className="w-20 h-auto"
                      />
                    </div>
                    {items?.brand_name !== "Popular Brands" &&
                    items?.brand_name !== "Warranty Products" ? (
                      <p className="text-[#505056] text-[13px] font-normal leading-[15.23px] mt-[10px] h-1/4">
                        {items?.product_name}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      {/* Popular Brands */}
      <div className="bg-white pt-[30px] pl-[30px] xl:pr-[130px] md:pr-[50px] pb-[31px] border border-[#EDEDED] rounded-[5px] mt-[30px]">
        <h2 className="text-[#2591B2] text-[18px] leading-[22px] font-bold tracking-[0.02em] text-center flex items-center justify-center gap-2">
          <span>{icons[1]}</span>

          <span>Popular Brands</span>
        </h2>
        <div className="grid xl:grid-cols-4 md:grid-cols-3 mt-[28px]">
          {popularServices
            .filter((item: any, index: any) => index < 4)
            .map((items: any, index: any) => {
              let imageUrl;
              if (items?.image_url) {
                imageUrl = items?.image_url.replace(
                  "https://smartcare.com.np/multiservice/",
                  "https:////smartcare.com.np/techsewa/"
                );
              }
              return (
                <div
                  className="flex w-full items-center justify-center flex-col"
                  key={index}
                >
                  <div className="h-[100px] flex items-center">
                    <Image
                      src={imageUrl}
                      alt={items?.alt}
                      width={80}
                      height={80}
                      className="w-24 h-auto"
                    />
                  </div>
                  <p className="text-[#505056] text-[13px] font-normal leading-[15.23px] mt-[10px]">
                    {items?.product_name}
                  </p>
                </div>
              );
            })}
        </div>
        {/* ALL Popular Brands */}
        <h2 className="mt-[50px] text-[#121212] text-[16px] leading-[18.75px] font-normal tracking-[0.02em] ">
          All Popular Brand Services
        </h2>
        <div className="grid grid-cols-4 mt-[25px] gap-[18px]">
          {popularServices.map((items: any, index: any) => (
            <div key={index}>
              <p className="text-[#505056] text-[15px] leading-[18px] font-normal tracking-[0.02em] cursor-pointer">
                {items?.product_name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
