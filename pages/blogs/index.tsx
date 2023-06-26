import axios from "axios";
import React, { useEffect, useState } from "react";
import BottomNavbar from "../../components/BottomNavbar";
import Copyright from "../../components/Copyright";
import Footerinfo from "../../components/Footerinfo";
import Topbar from "../../components/Topbar";
import { getDate } from "../../utils/date-converter";
import { useDispatch, useSelector } from "react-redux";
import PopularBlogPost from "../../components/PopularBlogPost";
import { setActiveBlog, setAllBlogs } from "../../redux/blogs";
import BlogCategoryComponent from "../../components/BlogCategoryComponent";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import ReadMoreReadLessComponent from "../../components/ReadMoreReadLessComponent";
import Image from "next/image";

type Props = {};

const Blog = (props: Props) => {
  const [blogs, setBlog] = useState([]);
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    axios
      .get(
        `https://smartcare.com.np/techsewa/publiccontrol/publicmasterconfig/getblogdetails`
      )
      .then((response: any) => {
        let data = response.data;
        setBlog(data);
        dispatch(setAllBlogs(data));
      });
  }, []);

  console.log(blogs, "all blogs on blog page");

  return (
    <div className="bg-[#F9F9F9]">
      <NextSeo
        title="Blog | Technical Sewa"
        description="Blog of Technical Sewa"
      />
      <Topbar />
      <div className=" relative mb-[60px]">
        <div className=" flex items-center justify-center mt-[0px]">
          <Image
          width={250} height={200}
            src="/../assets/partpurja/banner.jpg"
            className="w-full object-cover md:h-auto xsm:min-h-[150px]"
            alt="banner"
          />
        </div>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transform text-[#F9F9F9] flex items-center justify-center flex-col">
          <h2 className="text-[35px] leading-[52.5px] font-bold tracking-[0.02em] mb-[11px] professional_title">
            Blog
          </h2>
          <p className="text-[18px] leading-[27px] font-normal text-[#F9F9F9] tracking-[0.02em] professional_title">
            Home <span className="mx-[10px]">&gt;</span> Blog
          </p>
        </div>
      </div>
      <div className="container mx-auto mb-[120px]">
        <div className="flex xsm:flex-col md:flex-row gap-[40px]">
          <div className="basis-[70%]  ">
            <div className="grid grid-cols-1 gap-[42px]  ">
              {blogs
                .filter((items: any, index: any) => index < 5)
                .map((items: any, index: any) => {
                  console.log(items)
                  // console.log(items?.blog_desc, "blog");
                  let imageUrl = "";
                  if (items?.filename) {
                    imageUrl = items?.filename.replace(
                      "https://smartcare.com.np/multiservice/",
                      "https:////smartcare.com.np/techsewa/"
                    );
                  }
                  return (
                    <div
                      key={index}
                      onClick={() => {
                        dispatch(setActiveBlog(items));
                        // router.push("/repair/blogs/posts");
                      }}
                    >
                      <div className="bg-white rounded-[5px] pt-[39px] px-[20px] pb-[22px] hover:cursor-pointer">
                        <p className="text-[#505056] text-[12px] leading-[14.06px] font-normal tracking-[0.055em] font-Roboto mb-[12px]">
                          {getDate(items?.created_ts)}
                        </p>
                        <h4 className="text-[#232323] text-[28px] leading-[32.81px] font-medium font-Roboto tracking-[0.02em] mb-[24px]">
                          {items?.blog_name}
                        </h4>
                        <Image
                          height={10}
                          width={10}
                          src={imageUrl || ""}
                          alt="error loading"
                          className="w-full h-[350px] object-cover bg-[#2591B2] bg-opacity-5 text-gray-500"
                        />
                        <ReadMoreReadLessComponent
                          blog_desc={items?.blog_desc}
                          blog_name={items?.blog_name}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="basis-[30%]  ">
            <BlogCategoryComponent />
            {/* popular posts */}
            <PopularBlogPost allBlogs={blogs} />
          </div>
        </div>
      </div>
      <BottomNavbar />
      <Footerinfo />
      <Copyright />
    </div>
  );
};

export default Blog;
