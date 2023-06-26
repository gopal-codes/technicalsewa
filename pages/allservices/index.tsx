import React, { useEffect, useState } from "react";
import BottomNavbar from "../../components/BottomNavbar";
import Copyright from "../../components/Copyright";
import Footerinfo from "../../components/Footerinfo";
import Topbar from "../../components/Topbar";
import Link from "next/link";
import Services from "./services";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setActiveCategory } from "../../redux/productDetails";
import Service from "../service";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { icons } from "../../utils/category-icons";
//  import { Anchor, Row, Col } from 'antd';

type Props = {};

const Allservices = (props: any) => {
  const [currentService, setCurrentService] = useState("Appliances Repair");
  const [iconIndex, setIconIndex] = useState(1);
  const allServicesTitle = [
    "Appliances Repair",
    "Popular Brands",
    "Warranty Products",
    "Electrician & Plumber",
    "Air-Purifier/Humidifier",
    "Mobiles & Tabs",
    "CCTV Repair Service",
    "Computer/Printer",
    "Medical Equipment",
    "Drone Repair",
    "Carpenter Service",
    "Cleaning & Pest Control",
  ];

  //SET UP INITIAL REDUX CATEGORY
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setActiveCategory("Appliances Repair"));
  }, []);

  //NAVIGATION WITH CATEGORY BUTTON LINK
  const router = useRouter();
  // console.log(router);
  useEffect(() => {
    if (router?.query?.brandName) {
      // console.log(router);
      const serviceFromLink: any = router?.query?.brandName;

      setCurrentService(serviceFromLink);
    }
  }, [router]);
  // console.log(currentService);

  // HANDLE CATEGORY CLICK
  const handleClick = (title: any) => {
    setCurrentService(title);
    // console.log(currentService);
    dispatch(setActiveCategory(title));
  };

  return (
    <>
      <NextSeo
        title="All Services | Technical Sewa"
        description="All Services page of Technical Sewa"
        canonical="https://technicalsewa.com/repair/allservices"
      />
      <Topbar />
      <div className="xsm:hidden md:block">
        <div className="bg-[#F5F5F5] pt-[20px] pb-[79px] xl:w-[80rem] px-2 sm:w-full  m-auto">
          <div className="container mx-auto flex gap-[26px] ">
            <div className="bg-[var(--primary-color)] basis-[20%] px-[16px] flex flex-col gap-2 pt-[18px] pb-[100px] border-[#EDEDED] rounded-[10px] ">
              {allServicesTitle.map((title: any, index: any) => {
                return (
                  <div key={index}
                    className={`border-2 hover:cursor-pointer border-[var(--primary-color)]  p-3 rounded-lg flex items-center gap-2 ${
                      currentService === title
                        ? "bg-black text-white"
                        : "bg-white"
                    }`}
                    onClick={() => {
                      setCurrentService(title);
                      setIconIndex(index);
                    }}
                  >
                    {/* <span className="text-[var(--primary-color)]">
                      {icons[index]}
                    </span> */}

                    <h1>{title}</h1>
                  </div>
                );
              })}
            </div>

            <Services service={currentService} iconIndex={iconIndex} />
          </div>
        </div>
        <div className="container mx-auto fixed top-[40%]"></div>

        <BottomNavbar />
        <Footerinfo />
        <Copyright />
      </div>
      <div className="md:hidden">
        <Service />
      </div>
    </>
  );
};

export default Allservices;
