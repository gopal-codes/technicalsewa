import Link from "next/link";
import React, { useEffect, useState } from "react";
import Topbar from "../../components/Topbar";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { FaFileContract } from "react-icons/fa";
import { FiAlertCircle, FiMail } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { RiFilePaper2Line } from "react-icons/ri";
import axios from "axios";
import { IoNotificationsOutline } from "react-icons/io5";
import { NextSeo } from "next-seo";
import Image from "next/image";

type Props = {};

const index = (props: Props) => {
  const user = useSelector((state: any) => state?.userSlice?.userData);
  const router = useRouter();

  useEffect(() => {
    const FormData = require("form-data");
    let data = new FormData();
    data.append("user_id", "416");
    data.append("type", "Customer");

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://smartcare.com.np/techsewa/publicControl/getAlertByToken",
      // headers: {
      //   ...data.getHeaders(),
      // },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <NextSeo
        title="Profile | Technical Sewa"
        description="Profile page of Technical Sewa"
      />
      <Topbar />
      <div className="pb-[120px] md:w-1/2 m-auto md:mt-10">
        <div className="bg-[#2591B2] pb-[17px] md:rounded-t-lg">
          <div className="flex items-center justify-between pr-[20.58px]">
            <div className=" flex gap-[16px] items-center pt-[37px] pl-[22px]">
              <Image
              width={250} height={200}
                src={user?.photo}
                alt="profile.png"
                className="w-20 h-20 rounded-xl bg-white"
              />
              <div>
                <h2 className="text-[13px] leading-[19.5px] font-bold font-poppins text-white">
                  {user?.name ? user?.name : "Vlad Vladimir"}
                </h2>
                <p className="text-white text-[13px] leading-[19.5px] font-normal font-poppins mt-[3px]">
                  {user?.mobile ? user?.mobile : "+977 -- -- ---"}
                </p>
              </div>
            </div>

            <Link
              href={
                user.type === "Customer"
                  ? "/profile/edit"
                  : "profile/edit-profile"
              }
            >
              <svg
                width="29"
                className="mb-[-30px]"
                height="28"
                viewBox="0 0 29 28"
                fill="none"
                xmlns="https:////www.w3.org/2000/svg"
              >
                <path
                  d="M7 19.3626H21.423V20.3928H7V19.3626ZM19.0535 10.6058C19.4656 10.1937 19.4656 9.57554 19.0535 9.16346L17.1991 7.30907C16.7871 6.89698 16.1689 6.89698 15.7568 7.30907L8.03022 15.0357V18.3324H11.3269L19.0535 10.6058ZM16.478 8.03022L18.3324 9.88461L16.7871 11.4299L14.9327 9.57554L16.478 8.03022ZM9.06043 17.3022V15.4478L14.2115 10.2967L16.0659 12.1511L10.9148 17.3022H9.06043Z"
                  fill="white"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="27.423"
                  height="26.3928"
                  rx="13.1964"
                  stroke="white"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="bg-[#2591B2]/[0.05]">
          <p className="text-[#999999] text-[12px] leading-[18px] font-semibold py-[7px] pl-[16px]">
            General Details
          </p>
        </div>
        <div className="px-[18.5px] pt-[12px] flex items-center justify-between pb-[12px]">
          <div className="flex items-center gap-[20px] text-[var(--primary-color)]">
            <GoLocation />
            <p className="text-[#505056] text-[13px] leading-[19.2px] font-normal font-poppins">
              {user?.address}
            </p>
          </div>
        </div>
        <div className="px-[18.5px] pt-[12px] flex items-center justify-between pb-[12px]">
          <div className="flex items-center gap-[20px] text-[var(--primary-color)]">
            <FiMail />
            <p className="text-[#505056] text-[13px] leading-[19.2px] font-normal font-poppins">
              {user?.email}
            </p>
          </div>
        </div>
        {/* notification */}
        <div
          className="px-[18.5px] pt-[12px] flex items-center justify-between pb-[12px] cursor-pointer"
          onClick={() => router.push("/notifications")}
        >
          <div className="flex items-center gap-[19.26px] text-[var(--primary-color)]">
            <IoNotificationsOutline />
            <p className="text-[#505056] text-[13px] leading-[19.2px] font-normal font-poppins">
              Notifications
            </p>
          </div>

          <svg
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="https:////www.w3.org/2000/svg"
          >
            <path
              d="M0.5 1L7.5 8L0.5 15"
              stroke="#808080"
              stroke-linecap="round"
            />
          </svg>
        </div>
        {/* Alerts */}
        <div
          className="px-[18.5px] pt-[12px] flex items-center justify-between pb-[12px] cursor-pointer"
          onClick={() => router.push("/alert")}
        >
          <div className="flex items-center gap-[19.26px] text-[var(--primary-color)]">
            <FiAlertCircle />
            <p className="text-[#505056] text-[13px] leading-[19.2px] font-normal font-poppins">
              Alerts
            </p>
          </div>

          <svg
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="https:////www.w3.org/2000/svg"
          >
            <path
              d="M0.5 1L7.5 8L0.5 15"
              stroke="#808080"
              stroke-linecap="round"
            />
          </svg>
        </div>

        {/* Help center */}
        <div className="bg-[#2591B2]/[0.05]">
          <p className="text-[#999999] text-[12px] leading-[18px] font-semibold py-[7px] pl-[16px]">
            Help Center
          </p>
        </div>

        {/* Privacy Policy */}
        <div className="px-[18.5px] pt-[12px] flex items-center justify-between pb-[12px]">
          <div className="flex items-center gap-[19.26px]">
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="https:////www.w3.org/2000/svg"
            >
              <path
                d="M7.25 1.59273L12.6944 3.85455V7.27273C12.6944 10.56 10.3767 13.5927 7.25 14.4945C4.12333 13.5927 1.80556 10.56 1.80556 7.27273V3.85455L7.25 1.59273ZM7.25 0L0.25 2.90909V7.27273C0.25 11.3091 3.23667 15.0836 7.25 16C11.2633 15.0836 14.25 11.3091 14.25 7.27273V2.90909L7.25 0ZM6.47222 4.36364H8.02778V5.81818H6.47222V4.36364ZM6.47222 7.27273H8.02778V11.6364H6.47222V7.27273Z"
                fill="#2591B2"
              />
            </svg>
            <Link href="/privacyPolicy">
              <p className="text-[#505056] text-[13px] leading-[19.2px] font-normal font-poppins">
                Privacy Policy{" "}
              </p>
            </Link>
          </div>
          <svg
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="https:////www.w3.org/2000/svg"
          >
            <path
              d="M0.5 1L7.5 8L0.5 15"
              stroke="#808080"
              stroke-linecap="round"
            />
          </svg>
        </div>
        {/* Terms and conditions */}
        <div className="px-[18.5px] pt-[12px]  flex items-center justify-between pb-[12px]">
          <div className="flex items-center gap-[19.26px] text-[var(--primary-color)]">
            <RiFilePaper2Line />
            <Link href="/terms-and-conditions">
              <p className="text-[#505056] text-[13px] leading-[19.2px] font-normal font-poppins">
                Terms & Conditions{" "}
              </p>
            </Link>
          </div>
          <svg
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="https:////www.w3.org/2000/svg"
          >
            <path
              d="M0.5 1L7.5 8L0.5 15"
              stroke="#808080"
              stroke-linecap="round"
            />
          </svg>
        </div>
        {/* Terms and Use */}
        <div className="px-[18.5px] pt-[12px]  flex items-center justify-between pb-[12px]">
          <div className="flex items-center gap-[19.26px]">
            <FaFileContract className="text-[var(--primary-color)]" />
            <Link href="/terms-of-use">
              <p className="text-[#505056] text-[13px] leading-[19.2px] font-normal font-poppins">
                Terms & Use{" "}
              </p>
            </Link>
          </div>
          <svg
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="https:////www.w3.org/2000/svg"
          >
            <path
              d="M0.5 1L7.5 8L0.5 15"
              stroke="#808080"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
      {/* footer navbar */}
      {/* <Footer/> */}
    </>
  );
};

export default index;
