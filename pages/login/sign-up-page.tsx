import React from "react";
import Topbar from "../../components/Topbar";
import { IoPersonAddSharp } from "react-icons/io5";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

const SignUpPage = () => {
  return (
    <div className="xl:w-[80rem] sm:w-full  m-auto">
      <Topbar />
      <div className="flex flex-col items-center mt-[50px]  h-screen m-auto gap-16">
        <div className="flex items-center justify-center flex-col">
          <Image
            width={250} height={200}
            src="/assets/ts-final-logo.png"
            className="xsm:w-[100px] md:w-[150px] h-auto"
            alt="logo"
          />
          <p className="text-[#666666] text-[13px] leading-[19.5px] font-light mt-[12px] font-poppins ">
            Sign Up on Technical Sewa
          </p>
        </div>
        <div className="text-[60px] flex xsm:flex-col md:flex-row gap-5">
          <div className="flex flex-col justify-center items-center gap-3 w-[250px]">
            <div className="h-[70px] hover:cursor-pointer">
              <Link href="/login/sign-up">
                <IoPersonAddSharp className="border-[2px] border-red-400 text-[#2591B2] rounded-full p-2" />
              </Link>
            </div>
            <span className="text-xl">Sign Up to Hire</span>
            <p className="text-[13px] h-[38px]">
              Hire the right Professional for your project
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3 w-[250px] text-center">
            <div className="h-[70px]">
              <Link href="/login/sign-up-pro">
                <IoPersonAddSharp className="hover:cursor-pointer border-[2px] border-red-400 text-[#2591b2] rounded-full p-2" />
              </Link>
            </div>
            <span className="text-xl whitespace-normal break-words">
              Sign Up as a Professional
            </span>
            <p className="text-[13px]">
              Expand your service business with <strong>Technical Sewa</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
