import React, { useEffect, useState } from "react";
import BottomNavbar from "../../../components/BottomNavbar";
import Copyright from "../../../components/Copyright";
import Footerinfo from "../../../components/Footerinfo";
import Topbar from "../../../components/Topbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import CountUp, { useCountUp } from "react-countup";
import { useRouter } from "next/router";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// import productDetails, {
//   setProductDetails,
//   setProductId,
// } from "../../../../redux/productDetails";
import ProductDescription from "../../../components/ProductDescription";
import PopularServicesSlide from "../../../components/PopularServicesSlide";
import FAQComponent from "../../../components/FAQComponent";
import Link from "next/link";
import WhySmart from "../../../components/WhySmart";
import ProductBannerContent from "../../../components/ProductBannerContent";
import Parser from "html-react-parser";
import {
  SampleNextArrow,
  SamplePrevArrow,
} from "../../../components/SliderButtonFunction";
import Head from "next/head";
import { NextSeo } from "next-seo";
import Script from "next/script";
// import banner from "/../../assets/servicedetails/banner.jpg";

const settings = {
  dots: false,
  autoplay: true,
  infinite: true,
  speed: 500,
  // slidesToShow: 7,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
  // nextArrow: <SampleNextArrow />,
  // prevArrow: <SamplePrevArrow />
};

type Props = {};

const BuyProduct = (props: Props, context: any) => {
  const [description, setDescription] = useState("<p></p>");
  // For Seo
  const [brand, setBrand] = useState({
    btitle: "",
    cannonical: "",
    description: "",
    json_ld: "",
    alt: "",
    og_title: "",
    og_desc: "",
    og_site_name: "",
    og_type: "",
    og_url: "",
    open_field: "",
    page_title: "",
    page_url: "",
    robots: "",
  });

  //Product Service
  const [productService, setProductService] = useState([]);
  const [title, setTitle] = useState("");

  // Main Category
  const activeCategory = useSelector(
    (state: any) => state.productDetails.activeCategory
  );

  // Sub Category
  const activeSubCategory = useSelector(
    (state: any) => state.productDetails.activeSubCategory
  );

  //Sub Category List
  const activeProduct = useSelector(
    (state: any) => state.productDetails.productDetails
  );

  // console.log(activeProduct, "product on product-page");

  // Getting Banner
  const banner = useSelector(
    (state: any) => state?.productDetails?.serviceImage
  );

  //GETTING PRODUCT TO BE BOUGHT
  const id = useSelector(
    (state: any) => state?.productDetails?.productDetails?.value
  );

  // Getting Url
  const productUrl = useSelector(
    (state: any) => state?.productDetails?.productDetails?.model
  );
  const serviceUrl = useSelector(
    (state: any) => state?.activeProductSlice?.serviceUrl
  );

  console.log(productUrl, serviceUrl, "service and product url");
  useEffect(() => {
    var FormData = require("form-data");
    var data = new FormData();
    data.append("brand_id", id);

    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://smartcare.com.np/techsewa/publicControl/getServicesByProductCategory",
      // headers: {
      //   ...data.getHeaders()
      // },
      data: data,
    };

    axios(config)
      .then(function (response) {
        let data = response.data;
        setProductService(data);
      })
      .catch(function (error) {
        console.log(error);
      });
    // Getting Seo content
    try {
      fetch(
        `https://smartcare.com.np/techsewa/publiccontrol/publicmasterconfig/getSeoContent?url=https://smartcare.com.np/service/${serviceUrl}/${productUrl}`
      )
        .then((res) => res.json())
        .then((data) => setBrand(data?.brands?.btitle));
    } catch {
      (error: any) => console.log(error);
    }
  }, []);

  // console.log(title);

  // console.log(activeCategory, "product on buy product");
  // console.log(productService);
  useEffect(() => {
    setDescription(activeProduct);
  }, [activeProduct?.description]);

  console.log(activeProduct, "description");

  return (
    <>
      <Topbar />
      <div className="">
        <NextSeo
          title={brand?.page_title}
          description={brand?.description}
          canonical={brand?.cannonical}
          defaultTitle={brand?.alt}
          openGraph={{
            type: `${brand?.og_type}`,
            title: `${brand?.og_title}`,
            description: `${brand?.og_desc}`,
            url: `${brand?.og_url}`,
            siteName: `${brand?.og_site_name}`,
          }}
        />
        <Script src={brand?.json_ld} />
        <div
          className=" w-full flex flex-col justify-center xsm:h-[200px] md:h-[240px]"
          style={{
            backgroundImage: `url(${banner})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        >
          <div className="xsm:hidden md:block text-[var(--primary-color)] my-10 m-auto xsm:w-[320px] xl:w-[80rem] xl:px-0 md:px-10 lg:w-[1024px] md:w-[768px]">
            <p className="xsm:text-[18px] md:text-[18px] tracking-[0.02em] font-extrabold">
              {`${activeCategory} / ${activeSubCategory} / ${activeProduct?.text} `}
            </p>
            <h2 className="xsm:text-[18px] md:text-[30px] leading-[30.17px] font-bold tracking-[0.02em] max-w-[804px] md:mt-[15px]">
              {activeProduct?.text}
              <span className="rounded-[60px] text-[25.75px] leading-[44.63px] font-bold tracking-[0.02em] text-[#F9F9F9] px-[20px] xsm:ml-5 md:ml-10 p-2 bg-[#1d738d]">
                4.5
              </span>
            </h2>
            <div className="mt-[8.97px] xsm:text-[16px] md:text-[22px] text-black ">
              {Parser("<div>" + activeProduct?.description + "</div>")}
            </div>
          </div>
        </div>
        <hr />
        <div className=" container mx-auto xl:w-[80rem] sm:w-full  m-auto xl:px-0 md:px-10 mt-5">
          <div className="md:hidden text-[var(--primary-color)] my-10 m-auto xsm:w-[320px] xl:w-[80rem] xl:px-0 md:px-10 lg:w-[1024px] md:w-[768px]">
            <p className="xsm:text-[18px] md:text-[18px] tracking-[0.02em] font-extrabold">
              {`${activeCategory} / ${activeSubCategory} / ${activeProduct?.text} `}
            </p>
            <h2 className="xsm:text-[18px] md:text-[30px] leading-[30.17px] font-bold tracking-[0.02em] max-w-[804px] md:mt-[15px]">
              {activeProduct?.text}
              <span className="rounded-[60px] xsm:ml-5 xsm:text-lg md:text-[25.75px] leading-[44.63px] font-bold tracking-[0.02em] text-[#F9F9F9] px-[20px] md:ml-7 p-2 bg-[#1d738d]">
                4.5
              </span>
            </h2>
            <div className="mt-[8.97px] xsm:text-[16px] md:text-[22px] text-black ">
              {Parser("<div>" + activeProduct?.description + "</div>")}
            </div>
          </div>
          <div className="flex gap-[45px] xsm:flex-col-reverse md:flex-row md:items-start">
            <div className="basis-[70%]">
              <h2 className="text-[23px] mb-5 text-[#505056] leading-[32.89px] font-bold tracking-[0.01em]">
                {activeProduct?.text}
              </h2>
              <ProductDescription />
              <WhySmart />
            </div>

            <div className="sm:m-auto md:m-0 md:fixed top-[9%] right-[16%] ">
              <div className="selectProduct_category  xsm:pt-[20px] md:pt-[15px]">
                <h2 className="text-white text-[20px] leading-[34.32px] font-bold tracking-[0.01em] text-center ">
                  Hire a Expert for
                </h2>
                <h4 className="text-white xsm:text-[18px] md:text-[24px] font-bold tracking-[0.01em] text-center ">
                  {activeProduct?.text}
                </h4>
                <div className="flex flex-col xsm:gap-[2px] md:gap-[0px]">
                  {productService?.map((items: any, index: any) => (
                    <div key={index}>
                      <Link
                        href={`/repair-product/${serviceUrl}/${activeProduct?.model}`}
                      >
                        <div className="w-[283px] xsm:h-[40px] md:h-[54px] bg-white xsm:mt-[10px] md:mt-[10px] ml-[31px] flex items-center justify-between pr-[15.42px] pl-[19.96px] cursor-pointer">
                          <p className="text-[#232323] no-underline xsm:text-[14px] md:text-[18px] leading-[25.74px] font-normal cursor-pointer">
                            {items?.text}
                          </p>
                          <svg
                            width="8"
                            height="14"
                            viewBox="0 0 8 14"
                            fill="none"
                            xmlns="https:////www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.13672 1L6.57903 7L1.13672 13"
                              stroke="#121212"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PopularServicesSlide settings={settings} serviceName={activeCategory} />

      {/* WHY CHOOSE SMART */}
      {/* <div className="hidden"> */}
  
      {/* </div> */}
      {/* <FAQComponent /> */}
      <BottomNavbar />
      <Footerinfo />
      <Copyright />
    </>
  );
};

export default BuyProduct;
