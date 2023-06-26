import Link from "next/link";
import React from "react";
import FotterSectionBacklink from "./FotterSectionBacklink";

type Props = {};

const BottomNavbar = (props: Props) => {
  return (
    <div className="bg-[#00071B] hidden md:block">
      <div className="m-auto xl:w-[80rem] sm:w-full ">
        <div className=" flex items-center 2xl:gap-[51px] xl:gap-[40px] text-white 2xl:pl-[20px] container mx-auto pt-[20px] md:gap-[41px] pb-[20px] 2xl:w-[950px] xl:w-[900px]">
          <Link
            href="/repair"
            className="text-[14px] leading-[16.41px] font-medium"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-[14px] leading-[16.41px] font-medium"
          >
            About Us
          </Link>
          <Link
            href="/blogs"
            className="text-[14px] leading-[16.41px] font-medium"
          >
            Blog
          </Link>
          <Link
            href="/team"
            className="text-[14px] leading-[16.41px] font-medium"
          >
            Our team
          </Link>
          <Link
            href="/terms-and-conditions"
            className="text-[14px] leading-[16.41px] font-medium"
          >
            Terms and Conditions
          </Link>
          <Link
            href="/privacyPolicy"
            className="text-[14px] leading-[16.41px] font-medium"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-use"
            className="text-[14px] leading-[16.41px] font-medium"
          >
            Terms of Use
          </Link>
          <Link
            href="/contact"
            className="text-[14px] leading-[16.41px] font-medium"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <FotterSectionBacklink />
    </div>
  );
};

export default BottomNavbar;
