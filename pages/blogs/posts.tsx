import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import urlencode from "urlencode";
import BottomNavbar from "../../components/BottomNavbar";
import Copyright from "../../components/Copyright";
import Footerinfo from "../../components/Footerinfo";
import Topbar from "../../components/Topbar";
import { getDate } from "../../utils/date-converter";
import parse from "html-react-parser";
import PopularBlogPost from "../../components/PopularBlogPost";
import BlogCategoryComponent from "../../components/BlogCategoryComponent";
import Head from "next/head";
import { NextSeo } from "next-seo";
import Image from "next/image";

type Props = {};

const posts = (props: Props) => {
  const product = useSelector((state: any) => state?.blogsSlice?.activeBlog);
  // console.log(product);

  let imageUrl = "";
  if (product?.filename) {
    imageUrl = product?.filename.replace(
      "https://smartcare.com.np/multiservice/",
      "https:////smartcare.com.np/techsewa/"
    );
  }

  return (
    <div className="bg-[#F9F9F9]">
      <NextSeo
        title="Blog Details | Technical Sewa"
        description="Blog Datails page of Technical Sewa"
      />
      <Topbar />
      <div className=" relative mb-[60px]">
        <div className=" flex items-center justify-center mt-[0px]">
          <Image
            width={100}
            height={100}
            src="/../assets/partpurja/banner.jpg"
            className="w-full md:h-auto xsm:min-h-[150px]"
            alt="banner"
          />
        </div>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transform text-[#F9F9F9] flex items-center justify-center flex-col">
          <h2 className=" md:text-[35px] leading-[52.5px] font-bold tracking-[0.02em] mb-[11px] professional_title">
            Blog
          </h2>
          <p className="md:text-[18px] leading-[27px] text-[#F9F9F9] tracking-[0.02em] professional_title font-normal">
            Home <span className="mx-[10px]">{`>`}</span> Blog
            <span className="mx-[10px]">{`>`}</span> Posts
          </p>
        </div>
      </div>

      <div className="container mx-auto mb-[120px]">
        <div className="flex xsm:flex-col md:flex-row gap-[40px]">
          <div className="basis-[70%]  ">
            <div className="grid grid-cols-1 gap-[42px]  ">
              <Link href="">
                <div className="bg-white rounded-[5px] pt-[39px] px-[20px] pb-[22px]">
                  <p className="text-[#505056] text-[12px] leading-[14.06px] font-normal tracking-[0.055em] font-Roboto mb-[12px]">
                    {getDate(product?.created_ts)}
                  </p>
                  <h4 className="text-[#232323] text-[28px] leading-[32.81px] font-medium font-Roboto tracking-[0.02em] mb-[24px]">
                    {product?.blog_name}
                  </h4>
                  <Image
                  width={250} height={200}
                    src={imageUrl}
                    alt="/../assets/blogs/blog1.jpg"
                    className="w-full h-[350px] object-cover bg-[#2591B2] bg-opacity-5 min-h-[150px]"
                  />
                  <div className="text-[#505056] text-[16px] leading-[25.6px] font-normal font-Roboto tracking-[0.01em] w-full mt-[23px] mb-[14px]  text-justify">
                    {parse(`<div> ${product?.blog_desc}</div>`)}
                  </div>
                  <h2 className="text-[#232323] text-[20px] leading-[23.44px] font-medium tracking-[0.02em] mt-[22px]">
                    Related Tags:
                  </h2>
                  <div className="grid grid-cols-2 items-center gap-[9px] mt-[22px] ">
                    <div className="bg-[#2591B21A] rounded-[39px] w-fit">
                      <p className="text-[#2591B2] text-[12px] leading-[14.06px] font-medium font-Roboto tracking-[0.02em] py-[5px] px-[13px]">
                        Manual
                      </p>
                    </div>
                    <div className="bg-[#2591B21A] rounded-[39px] w-fit">
                      <p className="text-[#2591B2] text-[12px] leading-[14.06px] font-medium font-Roboto tracking-[0.02em] py-[5px] px-[13px]">
                        LED TV
                      </p>
                    </div>
                    <div className="bg-[#2591B21A] rounded-[39px] w-fit">
                      <p className="text-[#2591B2] text-[12px] leading-[14.06px] font-medium font-Roboto tracking-[0.02em] py-[5px] px-[13px]">
                        Machine Repair
                      </p>
                    </div>
                    <div className="bg-[#2591B21A] rounded-[39px] w-fit">
                      <p className="text-[#2591B2] text-[12px] leading-[14.06px] font-medium font-Roboto tracking-[0.02em] py-[5px] px-[13px]">
                        DIY
                      </p>
                    </div>
                  </div>
                  {/* <div className='flex items-center gap-[7px] cursor-pointer'>
                                        <p className='text-[#232323] text-[16px] leading-[25.6px] font-medium tracking-[0.02em]'>Read More </p><svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="https:////www.w3.org/2000/svg">
                                            <path d="M9.3 11.275C9.1 11.075 9.004 10.8334 9.012 10.55C9.02067 10.2667 9.125 10.025 9.325 9.82505L12.15 7.00005H1C0.716667 7.00005 0.479 6.90405 0.287 6.71205C0.0956668 6.52072 0 6.28338 0 6.00005C0 5.71672 0.0956668 5.47905 0.287 5.28705C0.479 5.09572 0.716667 5.00005 1 5.00005H12.15L9.3 2.15005C9.1 1.95005 9 1.71238 9 1.43705C9 1.16238 9.1 0.925049 9.3 0.725049C9.5 0.525049 9.73767 0.425049 10.013 0.425049C10.2877 0.425049 10.525 0.525049 10.725 0.725049L15.3 5.30005C15.4 5.40005 15.471 5.50838 15.513 5.62505C15.5543 5.74172 15.575 5.86672 15.575 6.00005C15.575 6.13338 15.5543 6.25838 15.513 6.37505C15.471 6.49172 15.4 6.60005 15.3 6.70005L10.7 11.3C10.5167 11.4834 10.2877 11.575 10.013 11.575C9.73767 11.575 9.5 11.475 9.3 11.275Z" fill="#232323" />
                                        </svg>
                                    </div> */}
                </div>
              </Link>
            </div>
          </div>
          <div className="basis-[30%]  ">
            <BlogCategoryComponent />
            {/* popular posts */}
            <PopularBlogPost />
          </div>
        </div>
      </div>
      <BottomNavbar />
      <Footerinfo />
      <Copyright />
    </div>
  );
};

export default posts;
