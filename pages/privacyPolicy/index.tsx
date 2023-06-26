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

const PrivacyPolicy = () => {
  const [policy, setPolicy] = useState("");

  useEffect(() => {
    fetch("https://smartcare.com.np/techsewa/publiccontrol/privacy")
      .then((response) => response?.json())
      .then((data) => setPolicy(data));
  }, []);

  return (
    <div>
      <NextSeo
        title="Privacy policy | Technical Sewa"
        description="Privacy policy page of Technical Sewa"
        canonical="https://technicalsewa.com/privacyPolicy"
      />
      <Topbar />
      <div className="bg-[#2591b2ca]  md:h-[389px] xsm:h-[200px] text-white text-5xl flex items-center">
        <h2 className="xsm:w- md:w-[800px] m-auto text-center font-extrabold xsm:text-2xl  lg:text-4xl">
          Privacy Policy
        </h2>
      </div>
      <div className="w-full px-10 lg:px-0 m-auto text-justify content text-lg  my-10 max-w-[70rem]">
        {parser(`<div>${policy}</div>`)}
      </div>

      {/* Bottom navbar */}
      <BottomNavbar />
      {/* footerSection */}
      {/* copyright */}
      <Footerinfo />
      <Copyright />
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
