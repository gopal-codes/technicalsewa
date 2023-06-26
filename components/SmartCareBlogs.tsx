import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import { baseUrl } from "../pages/api/baseUrl";
import Link from "next/link";
import { getDate } from "../utils/date-converter";
import { SampleNextArrow, SamplePrevArrow } from "./SliderButtonFunction";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setActiveBlog } from "../redux/blogs";
import Image from "next/image";
type Props = {};
const settings = {
  dots: false,
  autoplay: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
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
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
  // nextArrow: <SampleNextArrow />,
  // prevArrow: <SamplePrevArrow />
};
const SmartCareBlogs = (props: Props) => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    axios
      .get(`${baseUrl}techsewa/publiccontrol/publicmasterconfig/getblogdetails`)
      .then((response: any) => {
        const data = response.data;

        setBlog(data);

        // IF LESS NO OF BLOGS AVAILBLE
        // const temp = data;
        // if (temp.length < 6) {
        //   while (temp.length < 6) {
        //     let i = 2;
        //     temp.push(data[i % 2]);
        //     i++;
        //   }

        //   // console.log(temp);
        //   setBlog(temp);
        // } else {
        // }
      });
  }, []);

  // console.log(blog);

  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <div className="bg-[#fff]">
      <div className="container mx-auto  md:pt-[50px] pb-[80px]">
        <h2 className="text-[var(--primary-color)] md:text-[32px] mb-10  text-[17px] leading-[38.88px] font-bold text-center">
          Technical Sewa Blog
        </h2>
        <Slider {...settings} className="">
          {blog?.map((items: any, index: any) => {
            // console.log(blog);
            let imageUrl = "";
            if (items?.filename) {
              imageUrl = items?.filename.replace(
                "https://smartcare.com.np/multiservice/",
                "https:////smartcare.com.np/techsewa/"
              );
            }
            return (
              <div
                className=" cursor-pointer hover:shadow-lg rounded-[3px] w-[600px]"
                key={index}
                onClick={() => {
                  dispatch(setActiveBlog(items));
                  router.push("/blogs/posts");
                }}
              >
                <div className="mx-2 bg-white border ">
                  <div className="bg-[#2591b261]">
                    <Image width={250} height={200}
                      src={imageUrl || ""}
                      className="text-white xsm:h-[80px] md:h-[140px] w-full"
                      alt="blog image"
                    />
                  </div>
                  <div className="pl-[12px] pb-[24px] pr-[12px]">
                    <p className="text-[#505056] xsm:text-[10px] md:text-[12px] leading-[14.06px] font-bold font-Roboto mt-[24px]">
                      {getDate(items?.created_ts)}
                    </p>
                    <h2 className="text-[#232323] over-auto xsm:text-[12px] md:text-[18px] font-medium tracking-[0.02em] mt-[14px] xsm:h-[60px] md:h-[80px]">
                      {items?.blog_name}
                    </h2>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default SmartCareBlogs;
