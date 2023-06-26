import axios from "axios";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import React, {useState } from "react";
import { useSelector } from "react-redux";
import Topbar from "../../components/Topbar";
import Image from "next/image";

const LogComplain = () => {
  const [complain, setComplain] = useState("");

  // getting user
  const user = useSelector((state: any) => state?.userSlice?.userData);
  console.log(user)
  // getting service details
  const serviceCategory = useSelector(
    (state: any) => state?.productDetails?.activeCategory
  );
  const brandProductCategory = useSelector(
    (state: any) => state?.productDetails?.activeSubCategory
  );

  // getting product-id
  const productId = useSelector(
    (state: any) => state?.productDetails?.productId
  );
  // getting brand-product id
  const productCategory = useSelector(
    (state: any) => state?.productDetails?.productDetails?.value
  );

  // Getting location
  const locateUser: any = useSelector(
    (state: any) => state?.userSlice?.location
  );

  // console.log(locateUser);
  // getting brand-id
  let brandId = "";
  useSelector((state: any) => state?.allServices?.category).map(
    (items: any, index: any) => {
      if (serviceCategory === items?.brand_name) {
        brandId = items?.brand_id;
      }
    }
  );

  const handleChange = (event: any) => {
    const { value } = event.target;
    // console.log(value);
    setComplain(value);
  };

  const router = useRouter();

  const handleSubmit = (event: any) => {
    event.preventDefault();

    // console.log(user.id);
    // console.log(complain);
    // console.log(serviceCategory);
    // console.log(productCategory);
    // console.log(brandId);
    // console.log(productId);
    console.log(locateUser?.lat);
    console.log(locateUser?.lng);
    // Logging Complain
    try {
      var data = new FormData();
      data.append("customer_id", user?.id);
      data.append("customer_remarks", complain);
      data.append("service_category", brandId);
      data.append("product_category", productId);
      data.append("brand_product_id", brandProductCategory);
      data.append("service_id", brandId);
      data.append("lat", locateUser?.lat);
      data.append("long", locateUser?.lng);

      var config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://smartcare.com.np/techsewa/publicControl/logComplain",
        // headers: {
        //   ...data.getHeaders()
        // },
        data: data,
      };

      axios(config)
        .then(function (response) {
          const data = response.data;
          // console.log(data);
          if (data?.status === "Success") {
            router.push("/complains");
            alert(data?.msg);
          } else {
            alert("Register Failed!");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error: any) {
      alert("Register Failed!");
    }
  };

  return (
    <div>
      <NextSeo
        title="Register Complains | Technical Sewa"
        description="Register complains page of Technical Sewa"
      />
      <Topbar />
      <div className="pb-[120px] md:w-1/2 m-auto md:mt-10">
        <div className="flex items-center justify-center pl-[25px] pr-[16px] pt-[11px]">
          <h2 className="text-[var(--primary-color)] text-[14px] leading-[21px]  font-poppins font-bold">
            Register Complain
          </h2>
        </div>
        <div className="h-[1px] w-full bg-[#F2F2F2] mt-[14px]"></div>
        <div className="pt-[34.26px] pl-[16px]">
          <p className="text-[#999999] text-[14px] leading-[22.4px] font-medium font-poppins">
            Personal Details
          </p>
        </div>
        <div className="flex items-center justify-between px-3 pt-[4px]">
          <div className="h-[150px] flex flex-col justify-between mt-2">
            <span className="flex">
              <strong className="w-20">Name:</strong>
              <span>{user?.name}</span>
            </span>
            <span className="flex">
              <strong className="w-20">Address:</strong>
              <span>{user?.address}</span>
            </span>
            <span className="flex">
              <strong className="w-20">Mobile:</strong>
              <span>{user?.mobile}</span>
            </span>
            <span className="flex">
              <strong className="w-20">Email:</strong>
              <span className="w-[175px]">{user?.email}</span>
            </span>
          </div>
          <Image width={250} height={200}
            src={user?.photo}
            className="bg-[var(--primary-color)] h-[90px] w-[90px] rounded-xl"
            alt="user"
          />
        </div>

        <form
          action=""
          className="px-[16px] mt-[17px] space-y-[18px] flex flex-col"
        >
          <div className="flex flex-col">
            <div className="mt-2">
              <p className="text-[#999999] text-[14px] leading-[22.4px] font-medium font-poppins">
                Complain Details
              </p>
              <textarea
                rows={15}
                name="customerRemarks"
                style={{
                  height: "150px",
                }}
                required
                placeholder="Write your message here..."
                onChange={handleChange}
                value={complain}
                className="border bg-[#F9F9F9] border-[#EDEDED] w-full mt-[5px] outline-none pl-[12px]"
              />
            </div>
          </div>
          <button
            className=" md:flex self-end bg-[#2591B2] gap-[8px] xsm:py-[5px] md:py-[8.5px] px-[13px]  rounded-[3px] md:w-[110px]"
            onClick={handleSubmit}
          >
            <p className="text-[#FDFEFF] text-[15px] py-2 px-3 leading-[18.23px] font-normal tracking-[0.02em]">
              Proceed
            </p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogComplain;
