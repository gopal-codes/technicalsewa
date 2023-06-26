import axios from "axios";
import React, { useEffect, useState } from "react";
import BottomNavbar from "../../components/BottomNavbar";
import Copyright from "../../components/Copyright";
import Footerinfo from "../../components/Footerinfo";
import Footer from "../../components/mblviewComponents/Footer";
import Topbar from "../../components/Topbar";
import parser from "html-react-parser";
import Head from "next/head";
import { NextSeo } from "next-seo";

const About = () => {
  const [about, setAbout] = useState("");
  useEffect(() => {
    // Getting aboutus content

    var config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://smartcare.com.np/techsewa/masterconfig/publicmasterconfig/GetAboutUs",
      headers: {
        "Content-Type": "application/json",
      },
      // data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        const data = response?.data?.brands[0].description;
        setAbout(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Topbar />
      <NextSeo
        title="About Us | Technical Sewa"
        description="About page of Technical Sewa"
        canonical="https://technicalsewa.com/about"
      />
      <div className="bg-[#2591b2ca]  md:h-[389px] xsm:h-[200px] text-white text-5xl flex items-center">
        <h1 className="xsm:w- md:w-[800px] m-auto text-center font-extrabold xsm:text-2xl  lg:text-4xl">
          About Us
        </h1>
      </div>
      <div className="w-full px-10 lg:px-0 m-auto text-justify content  my-10 max-w-[70rem] text-lg">
        {parser(`<div>${about}</div>`)}
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

export default About;
