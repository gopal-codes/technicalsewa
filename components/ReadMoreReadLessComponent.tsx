import React, { useState } from "react";
import parse from "html-react-parser"
import { BiDownArrowCircle, BiUpArrowCircle } from "react-icons/bi";
import { AiFillCaretRight } from "react-icons/ai";
import { setActiveBlog } from "../redux/blogs";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const ReadMoreReadLessComponent = (props: any) => {
  const [collapse, setCollapse] = useState(true);

  const { blog_desc, blog_name, items } = props;

  console.log(blog_desc)
  const router = useRouter();
  const dispatch = useDispatch();

  let htmlContent = blog_desc;
  return (
    <> 
      <div
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        className={`text-[#505056] text-[16px] leading-[25.6px] font-normal font-Roboto tracking-[0.01em] w-full mt-[23px] mb-[14px]  ${
          collapse && blog_name ? "h-52" : "h-full"
        } overflow-hidden text-justify`}
      >
        {/* parse(`${blog_desc}`) */}
        {/* {blog_desc} */}
    {/* <p>hello</p> */}
      </div>
      <div className="flex items-center gap-[7px] cursor-pointer">
        <div className="flex text-[var(--primary-color)] items-center gap-5">
          <div
            className=" text-[16px] leading-[25.6px] font-medium tracking-[0.02em]"
            onClick={() => setCollapse(!collapse)}
          >
            {collapse && blog_name ? (
              <div className="flex justify-center items-center gap-2 ">
                <span>Read Less</span>
                <BiUpArrowCircle className="text-xl" />
              </div>
            ) : (
              <div className="flex justify-center items-center gap-2 ">
                <span>Read More</span>
                <BiDownArrowCircle className="text-xl" />
              </div>
            )}
          </div>
          <div>
            <div
              className="flex justify-center items-center text-[var(--primary-color)]  gap-2 "
              onClick={() => {
                dispatch(setActiveBlog(items));
                router.push("/repair/blogs/posts");
              }}
            >
              <span className="underline">Visit Blog</span>
              <AiFillCaretRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadMoreReadLessComponent;
