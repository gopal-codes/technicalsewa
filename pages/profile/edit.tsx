import axios from "axios";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Topbar from "../../components/Topbar";
import Image from "next/image";

type Props = {};

const edit = (props: Props) => {
  const [userCredentials, setUserCredentials] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    email: "",
    photo: "",
  });

  const userId: any = useSelector((state: any) => {
    state?.userSlice?.userData;
  });

  const handleChange = (event: any) => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const router = useRouter();
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    // console.log(userCredentials);

    try {
      // updating server with new data
      var data = new FormData();
      data.append("cust_id", userId);
      data.append("firstname", userCredentials?.firstName);
      data.append("lastname", userCredentials?.lastName);
      data.append("phone", userCredentials?.phone);
      data.append("address", userCredentials?.address);
      data.append("email", userCredentials?.email);
      data.append("photo", userCredentials?.photo);

      var config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://smartcare.com.np/techsewa/publicControl/updateCustomer",
        // headers: {
        //   'Cookie': 'cisessionssgroup=yXPSjM7XLNu2xruQex3DiwxrbQkmsG8Bw3FCLa7i%2FBEHiifusptzVf%2BhaT5prPZYzXIeNzeMsC6n8Uz7dg4A%2FV80n0k9qD185O56N0bluacf9WDHSpiwW76Sxd3kCQzXpasxZO7pHUq9y8v5Vy6G9rg1foBnY11Gu6Vq2lFjPtOXj59XNOUqlLE2%2B%2BYf52YJHG7Zrv0pZAkVVCyi6wIIS0dIrzBgcZmRdXkoDbi9HfMcFB3NfjNpqvCzEjhRV64DX%2F5bNJ3PzM5y35X3JFj590ZEjh5zg2V29V3niOxsYlw%3D',
        //   ...data.getHeaders()
        // },
        data: data,
      };

      axios(config)
        .then(function (response) {
          // console.log(JSON.stringify(response.data));
          const data = response.data;
          if (data.message === "Success") {
            router.push("/repair");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      alert("Update Failed!");
    }
  };

  return (
    <>
      <NextSeo
        title="Edit Personal details | Technical Sewa"
        description="Edit Profile page of Technical Sewa"
        canonical="https://technicalsewa.com/profile"
      />
      <Topbar />
      <div className="pb-[120px] md:w-1/2 m-auto md:mt-10">
        <div className="flex items-center justify-between pl-[25px] pr-[16px] pt-[11px]">
          <Link href="/profile">
            <div className="hover:cursor-pointer">
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="https:////www.w3.org/2000/svg"
              >
                <path
                  d="M7.41 10.59L2.83 6L7.41 1.41L6 -2.62268e-07L-2.62268e-07 6L6 12L7.41 10.59Z"
                  fill="#676767"
                />
              </svg>
            </div>
          </Link>
          <h2 className="text-[#414141] text-[14px] leading-[21px] font-normal font-poppins">
            Edit Profile
          </h2>

          <p
            className="text-[#2591B2] text-[14px] leading-[21px] font-normal font-poppins cursor-pointer"
            onClick={handleSubmit}
          >
            Save
          </p>
        </div>
        <div className="h-[1px] w-full bg-[#F2F2F2] mt-[14px]"></div>
        <div className="flex items-center justify-center pt-[26.26px]">
          <Image
          width={250} height={200}
            src=""
            className="bg-[var(--primary-color)] h-[90px] w-[90px] rounded-xl"
            alt="edit"
          />
        </div>
        <div className="pt-[34.26px] pl-[16px]">
          <p className="text-[#999999] text-[14px] leading-[22.4px] font-medium font-poppins">
            Personal Details
          </p>
        </div>
        <form action="" className="px-[16px] mt-[17px] space-y-[18px]">
          <div>
            <p className="text-[#414141] text-[13px] leading-[20.8px] font-normal font-poppins">
              First Name *
            </p>
            <input
              name="firstName"
              type="text"
              value={userCredentials.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              className="border bg-[#F9F9F9] border-[#EDEDED] w-full h-[48px] mt-[5px] outline-none pl-[12px] text-[14px]"
              required
            />
          </div>
          <div>
            <p className="text-[#414141] text-[13px] leading-[20.8px] font-normal font-poppins">
              Last Name *
            </p>
            <input
              name="lastName"
              type="text"
              required
              value={userCredentials.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
              className="border bg-[#F9F9F9] border-[#EDEDED] w-full h-[48px] mt-[5px] outline-none pl-[12px] text-[14px]"
            />
          </div>
          <div>
            <p className="text-[#414141] text-[13px] leading-[20.8px] font-normal font-poppins">
              Primary Contact Number *
            </p>
            <input
              type="tel"
              minLength={10}
              required
              name="phone"
              value={userCredentials.phone}
              onChange={handleChange}
              placeholder="Enter your number"
              className="border bg-[#F9F9F9] border-[#EDEDED] w-full h-[48px] mt-[5px] text-[14px] outline-none pl-[12px]"
            />
          </div>
          <div>
            <p className="text-[#414141] text-[13px] leading-[20.8px] font-normal font-poppins">
              Address
            </p>
            <input
              type="text"
              name="address"
              placeholder="Address"
              required
              onChange={handleChange}
              value={userCredentials.address}
              className="border bg-[#F9F9F9] border-[#EDEDED]text-[14px] w-full h-[48px] mt-[5px] outline-none pl-[12px]"
            />
          </div>
          <div>
            <p className="text-[#414141] text-[13px] leading-[20.8px] font-normal font-poppins">
              Email
            </p>
            <input
              type="text"
              name="email"
              required
              onChange={handleChange}
              value={userCredentials.email}
              placeholder="Email"
              className="border bg-[#F9F9F9] border-[#EDEDED] placeholder:text-[14 px] w-full h-[48px] mt-[5px] outline-none pl-[12px]"
            />
          </div>
          <div>
            <p className="text-[#414141] text-[13px] leading-[20.8px] font-normal font-poppins">
              Add / Change Photo
            </p>
            <input
              type="file"
              name="photo"
              required
              onChange={handleChange}
              value={userCredentials.photo}
              placeholder="Upload Image"
              className="border bg-[#F9F9F9] py-[10px] border-[#EDEDED] placeholder:text-[14 px] w-full mt-[5px] outline-none pl-[12px]"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default edit;
