import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../pages/api/baseUrl";
import parse from "html-react-parser";
import { useDispatch, useSelector } from "react-redux";
import { icons } from "../../utils/category-icons";
import {
  setActiveCategory,
  setProductDetails,
  setServiceUrl,
  setSubCategory,
} from "../../redux/productDetails";
import { useRouter } from "next/router";
import { setCategories } from "../../redux/allServices";
import { Modal } from "antd";
import { setActiveItem } from "../../redux/partpurjaSlice";
import { setProductIdSlug } from "../../redux/slugSlice";
import Image from "next/image";

type Props = {};

const Products = (props: Props) => {
  const [allParts, setAllParts] = useState([]);
  const [open, setOpen] = useState(false);
  const [icon, setIcon] = useState<any>();
  const [activeCategory, setactiveCategory] = useState("Appliances Repair");

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        "https://smartcare.com.np/techsewa/masterconfig/publicmasterconfig/getServiceList"
      )
      .then((res) => {
        let data = res?.data?.brands;
        dispatch(setCategories(data));
        // console.log(brands);
      })
      .catch((error) => console.log("Axios Error: " + error));
    let initialCategory = "Appliances Repair";
    dispatch(setActiveCategory(initialCategory));
  }, []);

  useEffect(() => {
    axios
      .get(
        `${baseUrl}/techsewa/publiccontrol/publicmasterconfig/getfeaturedDetails`
      )
      .then((response) => setAllParts(response.data));
  }, []);

  const allServices = useSelector((state: any) => state?.allServices?.category);

  const allServicesForModal = useSelector(
    (state: any) => state?.allServices?.allServices
  );

  const updateSubCategory = (id: any, name: any, url: any) => {
    let obj = {
      productName: name,
      productId: id,
      productUrl: url,
    };
    dispatch(setSubCategory(obj?.productName));
  };

  return (
    <div className="md:hidden p-2 mt-2">
      <Modal
        title={
          <span className="flex gap-2 items-center">
            <span className="text-[28px]">{icon}</span>
            <span>{activeCategory}</span>
          </span>
        }
        centered
        open={open}
        footer={[]}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={756}
      >
        <div className="flex flex-row justify-center max-h-[80vh] pb-10 mt-5 ml-3">
          <div className="bg-[#F6F6F6] sm:w-52 overflow-scroll overflow-x-hidden w-[262px] grid grid-cols-2 p-2">
            {allServicesForModal
              .filter((items: any, index: any) => {
                return items?.brand_name === activeCategory;
              })
              .map((items: any, index: any) => {
                // console.log(items);
                let imageUrl;
                if (items?.image_url) {
                  imageUrl = items?.image_url.replace(
                    "https://smartcare.com.np/multiservice/",
                    "https:////smartcare.com.np/techsewa/"
                  );
                }
                return (
                  <div className="flex flex-row justify-center" key={index}>
                    <div
                      className="text-[var(--primary-color)] p-2 text-[16px] leading-[21.87px] tracking-[0.02em] no-underline font-normal cursor-pointer hover:text-[#000] transform hover:scale-[102%] transition duration-200 ease-out hover:underline"
                      onClick={() => {
                        // updateSubCategory(
                        //   items?.product_id,
                        //   items?.product_name,
                        //   items?.url_product_name
                        // );
                        dispatch(setActiveCategory(items?.brand_name));
                        dispatch(setSubCategory(items?.product_name));
                        dispatch(setServiceUrl(items?.url_product_name));
                        dispatch(setProductIdSlug(items?.product_id));
                        dispatch(setProductDetails(items));
                      }}
                    >
                      <Link
                        aria-label={`repair ${items?.url_product_name}`}
                        className=""
                        href={{
                          pathname: `/repair/${items?.url_product_name}`,
                        }}
                      >
                        <div className="flex flex-col justify-center items-center mb-5 li">
                          <div
                            className={`rounded-full p-2 h-16 border-2 border-[var(--primary-color)] flex items-center overflow-hidden`}
                          >
                            <Image
                            width={250} height={200}
                              src={imageUrl}
                              className="w-20 rounded-full p-2 "
                              alt="Warranty Products"
                            />
                          </div>
                          {items?.brand_name !== "Popular Brands" &&
                          items?.brand_name !== "Warranty Products" ? (
                            <span className="mt-2 w-32 h-5 line-clamp-2  text-[12px] text-center">
                              <strong>{items?.product_name}</strong>
                            </span>
                          ) : (
                            ""
                          )}
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </Modal>
      <div className="flex flex-col items-center justify-between px-[10px]">
        <div className="flex flex-row justify-between xsm:w-full mb-5">
          <h3 className="text-[#232323] md:text-[20px] text-[17px] leading-[38.88px] font-bold">
            Service Categories
          </h3>
          <div>
            <Link href="/service" aria-label="/service">
              <p className="md:hidden text-[#2591B2] text-[12px] leading-[18px] font-normal cursor-pointer mt-2">
                View All
              </p>
            </Link>
          </div>
        </div>
        {Array.isArray(allServices) && allServices?.length ? (
          <div className="grid grid-cols-3 gap-7">
            {allServices
              .filter((items: any, index: any) => index < 12)
              .map((items: any, index: any) => {
                // console.log(items);
                let imageUrl = "";
                if (items?.image_url) {
                  imageUrl = items?.image_url.replace(
                    "https://smartcare.com.np/multiservice/",
                    "https:////smartcare.com.np/techsewa/"
                  );
                }

                return (
                  //     <Link href={{
                  //   pathname: `/repair/allservices/${activeSubCategory?.productUrl}`,
                  //   query: { product_id: activeSubCategory.productId },
                  // }}>
                  <div
                    className="flex flex-col items-center gap-2"
                    key={index}
                    onClick={() => {
                      setactiveCategory(items?.brand_name);
                      setIcon(icons[index]);
                      dispatch(setActiveCategory(items?.brand_name));
                      // router.push("/service");
                      setOpen(true);
                    }}
                  >
                    <div
                      className="
                     text-[#2591B2]"
                    >
                      {/* {icons[index]} */}
                      <Image
                        src={imageUrl}
                        alt="categories"
                        height={48}
                        width={48}
                        className=" text-[#2591B2]"
                      />
                    </div>
                    <span className="xsm:text-[12px] w-[86px] text-center">
                      {items?.brand_name}
                    </span>
                  </div>
                  // </Link>
                );
              })}
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="flex items-center justify-between px-[10px] pt-[30px]">
        <h3 className="text-[#232323] md:text-[20px] text-[17px] leading-[38.88px] font-bold">
          View Our Products
        </h3>
        <Link href="/repair/partpurja" aria-label="/repair/partpurja">
          <p className="md:hidden text-[#2591B2] text-[12px] leading-[18px] font-normal cursor-pointer">
            View All
          </p>
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-x-[12px] gap-y-[13px] mb-[32px] mt-[28px] px-[10px]">
        {allParts
          .filter((items: any, index: any) => index < 3)
          .map((items: any, index: any) => {
            console.log(items)
            let imageUrl = "";
            if (items?.filename) {
              imageUrl = items?.filename.replace(
                "https://smartcare.com.np/multiservice/",
                "https:////smartcare.com.np/techsewa/"
              );
            }
            return (
              <Link key={index} href={`/repair/partpurja/details`}  aria-label="repair partpurjs details">
                <div
                  className="border flex border-[#EDEDED] rounded-[5px] p-[5px] gap-2"
                  key={index}
                  onClick={() => dispatch(setActiveItem(items))}
                >
                  <div className=" w-[160px]">
                    <div>
                      <div className="flex flex-col justify-center items-center">
                        <div className="h-[91px] flex items-center justify-center">
                          <Image width={250} height={200}
                            src={imageUrl || ""}
                            alt={items?.features}
                            className=" h-[91px] w-[100px] object-cover bg-[#2591b26a]"
                          />
                        </div>
                        <h2 className="text-[#232323] text-[12px] leading-[15.4px] tracking-[0.01em] font-bold mt-[9px] pb-[13px] text-center w-[100px]">
                          {items?.features}
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between w-96">
                    <div className=" text-[#505056] text-[14px] h-[91px] overflow-auto leading-[17.01px] my-auto font-normal text-justify tracking-[0.01em] flex flex-col">
                      {parse(`<div>${items?.blog_desc}</div>`)}
                    </div>
                    <div className="px-[10px] pt-[5px] p-[8px] mb-2 flex justify-between items-center">
                      <p className="text-[#232323] text-[11px] tracking-[0.01em] font-normal">
                        {`Market Price: Rs. ${items?.market_rate}`}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="text-[#2591B2] text-[13px] tracking-[0.01em] font-medium">
                          {`Rs. ${items?.our_rate}`}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Products;
