// import { Footer } from "antd/es/layout/layout";
import React, { useEffect, useState } from "react";
import BottomNavbar from "../../components/BottomNavbar";
import Copyright from "../../components/Copyright";
import Footerinfo from "../../components/Footerinfo";
import Footer from "../../components/mblviewComponents/Footer";
import Topbar from "../../components/Topbar";
import parser from "html-react-parser";
import Head from "next/head";
import { NextSeo } from "next-seo";

const TermsAndConditions = () => {
  const [terms, setTerms] = useState("");
  useEffect(() => {
    fetch("https://smartcare.com.np/techsewa/publiccontrol/terms")
      .then((response) => response?.json())
      .then((data) => {
        setTerms(data);
      });
  });

  return (
    <div className="min-h-screen">
      <NextSeo
        title="Terms and Conditions | Technical Sewa"
        description="Terms and Conditions page of Technical Sewa"
      />
      <Topbar />
      <div className="bg-[#2591b2ca]  md:h-[389px] xsm:h-[200px] text-white text-5xl flex items-center">
        <h2 className="xsm:w- md:w-[800px] m-auto text-center font-extrabold xsm:text-2xl  lg:text-4xl">
          Terms and Conditions
        </h2>
      </div>
      <div className=" w-full px-10 lg:px-0 m-auto text-justify content text-lg  my-10 max-w-[70rem]">
        {parser(`<div>${terms}</div>`)}
      </div>
      {/* Bottom navbar */}
      <BottomNavbar />
      {/* footerSection */}
      {/* <FooterSection /> */}
      {/* copyright */}
      <Footerinfo />
      <Copyright />
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
