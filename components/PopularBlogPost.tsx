import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveBlog, setAllBlogs } from "../redux/blogs";
import { getDate } from "../utils/date-converter";

const PopularBlogPost = (props: any) => {
  let blogs = useSelector((state: any) => state?.blogsSlice?.blogs);
  // const blogs = props.blogs;
  // console.log(blogs, "redux blog");
  const dispatch = useDispatch();
  const router = useRouter();

  let sortedBlogs;
  if (blogs) {
    sortedBlogs = [...blogs].sort((a: any, b: any) => {
      let c: any = new Date(b.created_ts);
      let d: any = new Date(a.created_ts);
      return d - c;
    });
  } else {
    sortedBlogs = [];
  }
  const recentBlogs = sortedBlogs?.slice(0, 3); // take the first 3 elements

  const memoizedRecentBlogs = useMemo(
    () =>
      recentBlogs?.map((items: any, index: any) => {
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
            className="flex flex-col items-center"
            onClick={() => {
              dispatch(setActiveBlog(items));
              router.push("/repair/blogs/posts");
            }}
          >
            <Image
              src={imageUrl || ""}
              alt="popular blog"
              width={200}
              height={80}
              className="w-full h-auto bg-[#2591B2]"
            />
            <h2 className="text-[#232323] text-[16px] leading-[18.75px] tracking-[0.02em] font-medium font-Roboto xsm:w-[150px] md:w-[221px] text-center mt-2">
              {items?.blog_name}
            </h2>
            <p className="text-[#505056] text-[13px] mt-2 leading-[15.23px] font-light  tracking-[0.055em] ">
              {getDate(items?.created_ts)}
            </p>
          </div>
        );
      }),
    [recentBlogs]
  );

  return (
    <div className="mb-5">
      {/* popular posts */}
      <div className="mt-[29px] rounded-[5px] bg-white pt-[20px] pl-[23px] pr-[16px] flex flex-col gap-10 pb-5">
        <h2 className="text-[#000000] text-[22px] leading-[35.2px] font-medium tracking-[0.02em] font-Roboto">
          Popular Posts
        </h2>
        {memoizedRecentBlogs}
      </div>
    </div>
  );
};

export default PopularBlogPost;
