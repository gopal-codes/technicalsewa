import Link from "next/link";
import Router from "next/router";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { icons } from "../utils/category-icons";

const BlogCategoryComponent = () => {
  const categories = useSelector((state: any) => {
    return state?.allServices?.category;
  });
  const allServices = useSelector(
    (state: any) => state.allServices.allServices
  );

  const sendProps = (brandName: any) => {
    Router.push({
      pathname: "/repair/allservices",
      query: {
        brandName,
      },
    });
  };
// hello
  const memoizedCategory: any = useMemo(
    () =>
      categories
        ?.filter((items: any, index: any) => index < 12)
        ?.map((items: any, index: any) => {
          // console.log(items);
          return (
            <div
              key={index}
              onClick={() => sendProps(items?.brand_name)}
              className="border-b-[1px] border-[#D9D9D9] flex items-center justify-between my-[2px]"
            >
              <div className="flex gap-5 text-[#000000] text-[14px] leading-[22.4px] font-normal font-Roboto py-[10px]">
                <div className=" text-xl text-[var(--primary-color)]">
                  {icons[index]}
                </div>
                <p>{items?.brand_name}</p>
              </div>{" "}
              <div className="h-[25px] w-[34px] bg-[#F3F5F7] rounded-[8px] flex items-center justify-center cursor-pointer">
                <p className="text-black text-[12px] leading-[19.2px] tracking-[0.02em] font-normal font-Roboto">
                  {
                    allServices.filter(
                      (service: any, index: any) =>
                        service?.brand_name === items?.brand_name
                    ).length
                  }
                </p>
              </div>
            </div>
          );
        }),
    [categories || []]
  );

  return (
    <div className="pl-[28px] pt-[20px] rounded-[5px] bg-white pb-[55px] pr-[21px] hover:cursor-pointer">
      <h2 className="text-[#000000] text-[22px] leading-[35.2px] font-medium tracking-[0.02em] font-Roboto">
        Categories
      </h2>
      {memoizedCategory}
    </div>
  );
};

export default BlogCategoryComponent;
