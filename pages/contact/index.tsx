import { Footer } from "antd/es/layout/layout";
import axios from "axios";
import React, { useEffect, useState } from "react";
// import BottomNavbar from "../../components/BottomNavbar";
// import Copyright from "../../components/Copyright";
// import Footerinfo from "../../components/Footerinfo";
import Topbar from "../../components/Topbar";
import { baseUrl } from "../api/baseUrl";
import parse from "html-react-parser";
import Head from "next/head";
import { NextSeo } from "next-seo";

const Contact = () => {
  const [contactDetails, setContactDetails] = useState({
    brands: [{ description: "" }],
  });

  useEffect(() => {
    var data = new FormData();

    var config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://smartcare.com.np/techsewa/masterconfig/publicmasterconfig/GetContactUs",
      //   headers: {
      //     'Cookie': 'cisessionssgroup=yndBjTBmBfMk8hgC%2FtgfeQ%2BGoXZz3rXNgkQ0G2vLlsOpIpS7HJ2oGv6%2FzLvJBaWGk80QCTGFI0cAfZ3lmaQSPombK9wF%2FSrQl53Nvrhx1%2BfPq4HIFFn3%2FtThvhR%2FBcw%2FPRLe3NIZAHdVGqpGjPLSNPXd8gRoarc8tIRcTi0ZZI8hmvS2EKQwlgoZ2ew%2Bkxnq%2FhwUszg0N5hpI4whVCLwtUQR%2Fna2CkzhpI4U0%2Bm%2FOEhcRPPZS9wGKGWABCCrCA1d4w0X9e1279SCF2LVIAc6K7Y64GBcUn3SPL4zfBX3GWs%3D',
      //     ...data.getHeaders()
      //   },
      data: data,
    };

    axios(config)
      .then(function (response) {
        // console.log(response.data);
        let data: any = response.data;
        setContactDetails(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  console.log(contactDetails?.brands[0]?.description);
  return (
    <div>
      <NextSeo
        title="Contact | Technical Sewa"
        description="Contact page of Technical Sewa"
        canonical="https://technicalsewa.com/repair/contact"
      />
      <Topbar />
      <div className="bg-[#2591b2ca]  md:h-[389px] xsm:h-[200px] text-white text-5xl flex items-center">
        <h2 className="xsm:w- md:w-[800px] m-auto text-center font-extrabold xsm:text-2xl  lg:text-4xl">
          Contact Us
        </h2>
      </div>
      <div className="w-full px-10 lg:px-0 m-auto text-justify content text-2xl  my-10 max-w-[70rem]">
        {parse(`<div>${contactDetails?.brands[0]?.description}</div>`)}
      </div>
      {/* Bottom navbar */}
      {/* <BottomNavbar /> */}
      {/* footerSection */}
      {/* <FooterSection /> */}
      {/* copyright */}
      {/* <Footerinfo /> */}
      {/* <Copyright /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Contact;
