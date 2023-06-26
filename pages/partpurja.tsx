import React, { useEffect, useState } from "react";
import { Select } from "antd";
import Topbar from "../components/Topbar";
import BottomNavbar from "../components/BottomNavbar";
import Footerinfo from "../components/Footerinfo";
import Copyright from "../components/Copyright";
import axios from "axios";
import { baseUrl } from "./api/baseUrl";
import parse from "html-react-parser";
import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setActiveItem, setPartPurjaSlug } from "../redux/partpurjaSlice";
import { NextSeo } from "next-seo";
// import { Rate } from 'antd';
type Props = {};

const Partpurja = (props: Props) => {
  const [allParts, setAllParts] = useState([]);
  const [order, setOrder] = useState("default");
  const [defaultOrder, setDefaultOrder] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(
        `${baseUrl}/techsewa/publiccontrol/publicmasterconfig/getfeaturedDetails`
      )
      .then((response) => {
        setAllParts(response?.data);
        setDefaultOrder(response?.data);
      });
  }, []);
  // console.log(allParts);

  useEffect(() => {
    let tempParts = allParts;
    if (order === "Ascending") {
      tempParts.sort((a: any, b: any) => a?.features?.localeCompare(b?.name));
      setAllParts(tempParts);
    }
    if (order === "Descending") {
      tempParts.sort((a: any, b: any) => b?.features?.localeCompare(a?.name));
      setAllParts(tempParts);
    } else {
      setAllParts(defaultOrder);
    }
  }, [order]);

  const handleChange = (value: string) => {
    // console.log(`selected ${value}`);
    setOrder(value);
  };

  return (
    <div>
      <NextSeo
        title="PartPurja | Technical Sewa"
        description="PartPurja page of Technical Sewa"
        canonical="https://technicalsewa.com/repair/partpurja"
      />
      <div className="xl:w-[80rem] sm:w-full  m-auto">
        <Topbar />
      </div>
      <div className="mb-10">
        <div className=" relative mb-[39px]">
          <div className=" flex items-center justify-center mt-[0px]">
            <Image
            width={250} height={200}
              src="/../assets/partpurja/banner.jpg"
              className="w-full object-cover h-[240px]"
              alt="banner"
            />
          </div>
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transform text-[#F9F9F9] flex items-center justify-center flex-col">
            <h2 className="text-[35px] leading-[52.5px] font-bold tracking-[0.02em] mb-[11px] professional_title">
              Part Purja
            </h2>
            <p className="text-[18px] leading-[27px] font-normal text-[#F9F9F9] tracking-[0.02em] professional_title">
              Home &gt; Part Purja
            </p>
          </div>
        </div>
        <div className="container mx-auto xl:w-[80rem] sm:w-full ">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-[#121212] text-[32px] leading-[37.5px] font-normal tracking-[0.01em]">
                Featured Products{" "}
              </h2>
              <p className="text-[#505056] text-[14px] mt-[12px] leading-[16.41px] font-normal tracking-[0.01em]">
                Showing 1-20 of 200 Products
              </p>
            </div>
            <Select
              defaultValue="Default Sorting"
              style={{ width: 210 }}
              onChange={handleChange}
              options={[
                { value: "Descending", label: "Descending" },
                { value: "Ascending", label: "Ascending" },
                { value: "Default", label: "Default" },
                // { value: "Yiminghe", label: "yiminghe" },
                // { value: "disabled", label: "Disabled", disabled: true },
              ]}
            />
          </div>
          <div className="w-full h-[1px] bg-[#EDEDED] rounded-[5px] mt-[33px] mb-[47px]"></div>
          {/* products */}
          <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-[22px] gap-y-[47px] mb-[72px] sm:m-auto">
            {allParts.map((items: any, index: any) => {
              // // console.log(items, "part purja product");
              console.log(items);
              const slug = items?.page_url.replace(/\s+/g, "-");

              let imageUrl = "";
              if (items?.filename) {
                imageUrl = items?.filename.replace(
                  "https://smartcare.com.np/multiservice/",
                  "https:////smartcare.com.np/techsewa/"
                );
              }

              return (
                <div key={index}>
                  <Link
                    href={{
                      pathname: `/repair/partpurja/details`,
                      query: { part: slug },
                    }}
                  >
                    <div className="border border-[#EDEDED] rounded-[5px] cursor-pointer hover:shadow-lg hover:border-2 hover:border-red-300 flex flex-col justify-between items-center w-[250px] sm:w-[200px] m-auto">
                      <div
                        className="flex items-center justify-center px-2 pt-2 "
                        onClick={() => dispatch(setActiveItem(items))}
                      >
                        <Image
                        width={250} height={200}
                          src={imageUrl || ""}
                          alt={items?.features}
                          className="w-full h-[150px] overflow-hidden  rounded-t-[5px] bg-[var(--primary-color)] text-white bg-opacity-70"
                        />
                      </div>
                      <div className="px-[17px] flex flex-col justify-between items-start p-5">
                        <div className="bg-[#1F3F981A] rounded-[37px] mt-[8px] py-[5px] px-[10px] inline-block] w-full text-center">
                          <p className=" text-[12px] font-bold inline-block p-2 md:whitespace-nowrap w-full sm:text-[10px] text-[#2591B2] text-center">
                            {items?.features}
                          </p>
                        </div>
                        <h2 className="text-[#121212] text-justify leading-[17.01px] font-bold max-w-257px mt-[15px] pb-[13px] h-[51px] text-[12px]">
                          {/* htmlString variable */}
                          {parse(`<div>${items?.blog_name}</div>`)}
                        </h2>

                        <div className="flex items-center justify-between mt-[18px] w-full">
                          <p className="text-[var(--primary-color)] text-[14px] leading-[24.3px] tracking-[0.01em] font-extrabold">
                            {`Rs. ${items?.our_rate}`}
                          </p>
                          <p className="text-[#ED1B26] text-[10px] leading-[17.01px] font-normal tracking-[0.01em] line-through">
                            {`Rs. ${items?.market_rate}`}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <BottomNavbar />
      <Footerinfo />
      <Copyright />
    </div>
  );
};

export default Partpurja;
