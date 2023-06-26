import React, { useState } from "react";
import Topbar from "../../components/Topbar";
import { BsPersonFill } from "react-icons/bs";
import { FaSuitcase } from "react-icons/fa";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";

const Index = () => {
  const [type, setType] = useState("");
  const [username, setUserName] = useState("");

  const router = useRouter();
  // handling type click
  const handleTypeClick = (value: any) => {
    setType(value);
  };

  // handling submit
  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Reseting password
    var data = new FormData();
    data.append("username", username);
    data.append("type", type);

    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://smartcare.com.np/techsewa/publiccontrol/resetpassword",
      // headers: {
      //   ...data.getHeaders()
      // },
      data: data,
    };

    axios(config)
      .then(function (response) {
        // console.log(response.data);
        const data = response?.data;
        if (data?.status === "Success") {
          alert(data?.msg);
          router.push("/login");
        } else {
          alert(data?.msg);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleChange = (event: any) => {
    // console.log(event?.target?.value);
    const { value } = event?.target;
    setUserName(value);
  };

  return (
    <div className="xl:w-[80rem] sm:w-full  m-auto">
      <Topbar />
      <div className="flex flex-col items-center mt-[50px]  h-screen m-auto gap-16">
        <div className="flex items-center justify-center flex-col">
          <Image width={250} height={200}
            src="/assets/ts-final-logo.png" 
            className="xsm:w-[100px] md:w-[150px] h-auto xsm:hidden  md:block"
            alt="logo"
          />
        </div>
        <div className="text-[60px] flex flex-row gap-10 md:gap-20">
          <div
            className="flex flex-col justify-center items-center gap-3"
            onClick={() => handleTypeClick("Customer")}
          >
            <div className="h-[70px] hover:cursor-pointer">
              <BsPersonFill className="border-[2px] border-red-400 text-[#2591B2] rounded-full p-2" />
            </div>
            <span className="text-xl ">Customer</span>
            {/* <p className="text-[13px] h-[38px]">
              Hire the right Professional for your project
            </p> */}
          </div>
          <div
            className="flex flex-col justify-center items-center gap-3 text-center hover:cursor-pointer"
            onClick={() => handleTypeClick("Technician")}
          >
            <div className="h-[70px]">
              <FaSuitcase className=" border-[2px] border-red-400 text-[#2591b2] rounded-full p-2" />
            </div>
            <span className="text-xl whitespace-normal break-words">
              Technician
            </span>
            {/* <p className="text-[13px]">
              Expand your service business with <strong>Smart Care</strong>
            </p> */}
          </div>
        </div>
        {/* Getting username for password reset */}
        <div className={`${type.length ? "block" : "hidden"}`}>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="flex items-center justify-center flex-col">
              {/* <Image
                src="/assets/ts-final-logo.png" width={300}
                className="xsm:w-[100px] md:w-[150px] h-auto"
                alt=""
                width={250} height={200}
              /> */}
              <div>
                <p className="text-[#666666] text-[13px] leading-[19.5px] font-light mt-[12px] font-poppins ">
                  {type}
                </p>
              </div>
              <input
                name="username"
                type="text"
                required
                placeholder="Username"
                className="border w-full border-[#D9D9D9] pt-[15px] pl-[20px] pb-[18px] mt-[20px] placeholder:text-[#666666]/[0.4] placeholder:italic placeholder:text-[10px] placeholder:font-normal placeholder:leading-[15px] font-poppins outline-none rounded-[2px]"
                value={username}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="bg-[#2591B2] text-white text-[15px] leading-[18.23px] font-normal w-full rounded-[5px] py-[15px] mt-[44px]"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;
