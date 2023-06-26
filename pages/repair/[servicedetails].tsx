import React, { useEffect, useState } from "react";
import BottomNavbar from "../../components/BottomNavbar";
import Copyright from "../../components/Copyright";
import Footerinfo from "../../components/Footerinfo";
import Topbar from "../../components/Topbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import CountUp, { useCountUp } from "react-countup";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import  {
  setActiveProductName,
  setBuyProductDetails,
  setProductDetails,
  setServiceImage,
} from "../../redux/productDetails";
import PopularServicesSlide from "../../components/PopularServicesSlide";
import FAQComponent from "../../components/FAQComponent";
import Link from "next/link";
import WhySmart from "../../components/WhySmart";
import {
  SampleNextArrow,
  SamplePrevArrow,
} from "../../components/SliderButtonFunction";
import ProductBannerContent from "../../components/ProductBannerContent";
import parser from "html-react-parser";
import { NextSeo } from "next-seo";
import { FadeLoader } from "react-spinners";

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

const servicedetails = (props: any) => {
  const [list, setList] = useState([{ description: "", text: "" }]);
  const [productDescription, setproductDescription] = useState({
    content: "",
    product_desc: "<div></div>",
    image_url: "",
  });
  const [banner, setBanner] = useState("");
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
  const productId = useSelector((state: any) => state?.slugSlice?.product_id);
  const serviceUrl = useSelector(
    (state: any) => state?.activeProductSlice?.serviceUrl
  );
  // console.log(serviceUrl);

  //GETTING CATEGORY LIST
  // const router = useRouter();
  // // console.log(router.query);
  // let id: any = router?.query?.product_id;
  const { title, description } = props;
  useEffect(() => {
    // Getting SEO
    try {
      fetch(
        `https://smartcare.com.np/techsewa/publiccontrol/publicmasterconfig/getSeoContent?url=https://smartcare.com.np/service/${serviceUrl}`
      )
        .then((res) => res.json())
        .then((data) => setBrand(data?.brands));
    } catch {
      (error: any) => console.log(error.message);
    }
  }, [serviceUrl]);

  // console.log(title);

  useEffect(() => {
    // console.log(id);
    if (productId) {
      try {
        var data = new FormData();
        data.append("product_id", productId);
        var config = {
          method: "post",
          maxBodyLength: Infinity,
          url: "https://smartcare.com.np/techsewa/publicControl/GetProductcategiryByProduct",
          // headers: {},
          data: data,
        };
        axios(config).then(async (response) => {
          let data = await response.data;
          // console.log(data);
          setList(data);
          dispatch(setActiveProductName(data[0]));
        });
      } catch (error: any) {
        console.log("Axios Error: " + error);
      }
    }
  }, [productId]);

  // Main Category
  const activeCategory = useSelector(
    (state: any) => state.productDetails.activeCategory
  );

  // Sub Category
  const activeSubCategory = useSelector(
    (state: any) => state.productDetails.activeSubCategory
  );

  const dispatch = useDispatch();

  const service: [] = useSelector(
    (state: any) => state?.allServices?.serviceSlideList
  );
  useEffect(() => {
    if (service?.length > 0) {
      service?.map((items: any, index: any) => {
        if (productId === items?.product_id) {
          setproductDescription(items);
        }
      });
    }
  }, [service, productId]);

  // dispatching Banner
  useEffect(() => {
    const imageUrl = productDescription?.image_url;
    const updatedUrl = imageUrl
      ? imageUrl.replace("/uploads/", "/test/uploads/")
      : "";
    dispatch(setServiceImage(updatedUrl));
    setBanner(updatedUrl);
  }, [productDescription]);

  return (
    <>
      {brand?.page_url?.length !== 0 ? (
        <div className="xsm:mb-10 md:mb-0">
          <NextSeo
            title={brand?.btitle || "Technical Sewa Service"}
            description={
              brand?.description || "Technical Sewa Product Description"
            }
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
          {/* <Script src={brand?.json_ld} /> */}
          <Topbar />
          <div>
            <div
              className="serivedetail  bg-cover relative  h-[35vh]  w-full flex flex-col justify-center bg-opacity-50"
              style={{
                backgroundImage: `url(${banner})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
              }}
            >
              <div className="xsm:hidden md:block">
                <ProductBannerContent
                  activeCategory={activeCategory}
                  activeSubCategory={activeSubCategory}
                  list={list}
                  banner={productDescription?.image_url}
                  bannerContent={productDescription?.product_desc}
                />
              </div>
            </div>
            <hr />

            <div className="container  mx-auto xl:w-[80rem] xsm:w-full md:px-10 xl:px-0 m-auto mt-5">
              <div className="md:hidden">
                <ProductBannerContent
                  activeCategory={activeCategory}
                  activeSubCategory={activeSubCategory}
                  list={list}
                  banner={productDescription?.image_url}
                  bannerContent={productDescription?.product_desc}
                />
              </div>
              <div className="flex xsm:flex-col-reverse md:flex-row md:items-start items-center gap-[45px]">
                <div className="basis-[70%]">
                  <span className="text-[23px] mb-5 text-[#505056] bg-white leading-[32.89px] font-bold tracking-[0.01em]"></span>
                  <div>{parser(`<div>${productDescription?.content}</div>`)}</div>
                  {/* <ProductDescription product={list} fromSlider={fromSlider} /> */}
                  <WhySmart />
                  <FAQComponent />
                </div>

                <div className="md:fixed 2xl:top-[9%] xl:top-[10%] lg:top-[10%] lg:right-[1rem] xl:right-[5%] 2xl:right-[16%]">
                  <div className="selectProduct_category  xsm:pt-[20px] md:pt-[15px]">
                    <h3 className="text-white text-[24px] leading-[34.32px] font-bold tracking-[0.01em] text-center ">
                      Select Product Category
                    </h3>
                    <div className="flex flex-col xsm:gap-[2px] md:gap-[5px]">
                      {list?.map((items: any, index: any) => {
                        return (
                          <div
                            key={index}
                            onClick={() => {
                              dispatch(setProductDetails(items));
                              dispatch(setBuyProductDetails(items?.content));
                            }}
                          >
                            <Link
                              href={{
                                // pathname: `/repair/byproduct/${items?.model}`,
                                pathname: `/${serviceUrl}/${items?.model}`,
                              }}
                            >
                              <div className="w-[283px] xsm:h-[40px] md:h-[54px] bg-white xsm:mt-[10px] md:mt-[10px] ml-[31px] flex items-center justify-between pr-[15.42px] pl-[19.96px]">
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
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <PopularServicesSlide
            settings={settings}
            serviceName={activeCategory}
          />

          {/* WHY CHOOSE SMART */}
        
          <BottomNavbar />
          <Footerinfo />
          <Copyright />
        </div>
      ) : (
        <div className="flex justify-center items-center h-[100vh]">
          <FadeLoader color="#2591B2" />
        </div>
      )}
    </>
  );
};

export default servicedetails;
