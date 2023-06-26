import React, { useEffect, useState } from "react";
import Topbar from "../components/Topbar";
import BottomNavbar from "../components/BottomNavbar";
import Footerinfo from "../components/Footerinfo";
import Copyright from "../components/Copyright";
import DownloadOurApp from "../components/DownloadOurApp";
import axios from "axios";
import { useSelector } from "react-redux";
import Link from "next/link";
import ProfessionalProfile from "../components/professionals-profile";
import Image from "next/image";
import { TbPhoneCall } from "react-icons/tb";
import { NextSeo } from "next-seo";
import { Input } from "@mui/material";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
const desc = ["terrible", "bad", "normal", "good", "wonderful"];

type Props = {};

const professionals = (props: Props) => {
  const [filteredTechnicianCategory, setFilteredTechnicianCategory] = useState(
    []
  );
  const [allTechnicianList, setAllTechnicianList] = useState<any>([]);
  const [technicianList, setTechnicianList] = useState([]);

  const [checkedboxes, setCheckedboxes] = useState([""]);
  const [searchedLocation, setSearchedLocation] = useState("");

  // handling checkboxes selection
  const handleCheckboxChange = (event: any) => {
    const checkboxId = event.target.id;
    if (event.target.checked) {
      setCheckedboxes([...checkedboxes, checkboxId]);
    } else {
      setCheckedboxes(checkedboxes.filter((id) => id !== checkboxId));
    }
  };

  // console.log(checkedboxes);

  // useEffect(() => {
  //   const filteredList:any = checkedboxes.map((brandName: any, index) => {
  //     return allTechnicianList.map((items: any, index: any) => {
  //       if (brandName === items?.brand_name) {
  //         return items;
  //       }
  //     });
  //   });
  //   setTechnicianList(filteredList)
  // }, [checkedboxes]);

  useEffect(() => {
    if (searchedLocation?.length) {
      const temp = allTechnicianList.filter((items: any) => {
        return (
          items?.sc_address
            ?.toLowerCase()
            .includes(searchedLocation.toLowerCase()) ||
          items?.sc_address
            ?.toLowerCase()
            .includes(searchedLocation?.toLowerCase())
        );
      });
      setTechnicianList(temp);
    }
  }, [searchedLocation]);

  useEffect(() => {
    var data = new FormData();

    var config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://smartcare.com.np/techsewa/publicControl/getTechnicianProfilePublic",
      // headers: {
      //   ...data.getHeaders()
      // },
      data: data,
    };

    axios(config)
      .then(function (response) {
        // console.log(response.data);
        setTechnicianList(response?.data);
        setAllTechnicianList(response?.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (searchedLocation.length !== 0) {
    }
  }, [searchedLocation]);

  // console.log(technicianList);
  const handleFilterClick = (event: any) => {
    const value = event.target.value;
    console.log(value);
  };

  const availableServices = useSelector(
    (state: any) => state?.allServices?.category
  );
  console.log(availableServices);

  const handleLocationChange = (event: any) => {
    event.preventDefault();
    console.log(event?.target?.value);
    setSearchedLocation(event?.target?.value);
  };

  // console.log(technicianList);

  return (
    <div>
      <NextSeo
        title="Hire Professionals | Technical Sewa"
        description="Hire proffesional from Technical Sewa"
        canonical="https://technicalsewa.com/repair/professionals"
      />
      <Topbar />
      <div>
        <div className="mt-[0px] relative">
          <Image
            src="/../assets/professionals/profesionalBanner.jpg"
            alt="professional"
            width={100}
            height={100}
            className="w-full h-[240px] object-cover"
          />
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transform text-[#F9F9F9] flex items-center justify-center flex-col">
            <h2 className="text-[35px] leading-[52.5px] font-bold tracking-[0.02em] mb-[11px] professional_title">
              Professional
            </h2>
            <p className="text-[18px] leading-[27px] font-normal text-[#F9F9F9]tracking-[0.02em] professional_title">
              Home &gt; Professionals
            </p>
          </div>
        </div>
        <div className="bg-[#FAFAFA] pb-[35px] hidden">
          <div className="mx-auto container">
            <div className="pt-[18px]  mb-5">
              <h2 className="text-[#2591B2] leading-[15.23px] tracking-[0.02em] font-bold">
                Search by Location
              </h2>
              <div className="items-center gap-[20px] mt-[14px]">
                <Input
                  size="medium"
                  placeholder="Location"
                  name="searchedLocation"
                  value={searchedLocation}
                  onChange={handleLocationChange}
                />
              </div>
            </div>
            <div className="mt-[14px] ">
              <h2 className="text-[#2591B2] leading-[15.23px] tracking-[0.02em] font-bold">
                Services
              </h2>
              <div className="grid xsm:grid-cols-2 md:grid-cols-5 pl-[27px] gap-y-[18px] pt-[18px]">
                {/* <div className="flex items-center gap-[6px]">
                  <input
                    type="checkbox"
                    className="h-[13px] w-[13px]  "
                    name="services"
                  />
                  <p className="text-[#505056] text-[14px] leading-[16.41px] font-normal ml-[13px]">
                    All Services
                  </p>
                </div> */}
                {availableServices
                  ?.filter((items: any, index: any) => index < 12)
                  .map((items: any, index: any) => {
                    const product = items?.brand_name;

                    return (
                      <div className="flex gap-5 items-center">
                        <input
                          type="checkbox"
                          name={items?.brand_name}
                          id={items?.brand_name}
                          // checked={filteredTechnicianCategory.includes(
                          //   items?.brand_name
                          // )}
                          onChange={handleCheckboxChange}
                        />
                        <span className="text-[#505056] text-[14px] leading-[16.41px] font-normal ">
                          {items?.brand_name}
                        </span>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div
              className="w-[296px] h-[41px] flex items-center justify-center bg-[#2591B2] mt-[29px] mx-auto cursor-pointer"
              onClick={handleFilterClick}
            >
              <p className="text-[13px] leading-[15.23px] font-bold tracking-[0.02em] text-white">
                APPLY FILTERS
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto container">
          <div className=" mt-[39px] pb-[39px]">
            <div className="">
              <div className="flex xsm:flex-col md:flex-row items-center justify-between">
                <div>
                  <h2 className="text-[#121212] text-[32px] leading-[37.5px] font-normal tracking-[0.01em]">
                    Our Professionals{" "}
                  </h2>
                  <p className="text-[#505056] text-[14px] mt-[12px] leading-[16.41px] font-normal tracking-[0.01em]">
                    Showing 1-20 of 50
                  </p>
                </div>
                <div className="flex items-center gap-[17px] pt-[29px]">
                  {/* <Select
                    defaultValue="Default Sorting"
                    style={{ width: 210 }}
                    onChange={handleChange}
                    options={[
                      { value: "jack", label: "Jack" },
                      { value: "lucy", label: "Lucy" },
                      { value: "Yiminghe", label: "yiminghe" },
                      { value: "disabled", label: "Disabled", disabled: true },
                    ]}
                  /> */}
                  <svg
                    className="cursor-pointer"
                    width="27"
                    height="25"
                    viewBox="0 0 27 25"
                    fill="none"
                    xmlns="https:////www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.5"
                      width="11.1111"
                      height="10"
                      rx="1"
                      fill="#D9D9D9"
                    />
                    <rect
                      x="15.1113"
                      y="0.5"
                      width="11.1111"
                      height="10"
                      rx="1"
                      fill="#D9D9D9"
                    />
                    <rect
                      y="14.5"
                      width="11.1111"
                      height="10"
                      rx="1"
                      fill="#D9D9D9"
                    />
                    <rect
                      x="15.1113"
                      y="14.5"
                      width="11.1111"
                      height="10"
                      rx="1"
                      fill="#D9D9D9"
                    />
                  </svg>
                  <svg
                    className="cursor-pointer"
                    width="25"
                    height="23"
                    viewBox="0 0 25 23"
                    fill="none"
                    xmlns="https:////www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.222656"
                      width="24"
                      height="6.13331"
                      rx="1"
                      fill="#2591B2"
                    />
                    <rect
                      x="0.222656"
                      y="8.43311"
                      width="24"
                      height="6.13331"
                      rx="1"
                      fill="#2591B2"
                    />
                    <rect
                      x="0.222656"
                      y="16.8667"
                      width="24"
                      height="6.13331"
                      rx="1"
                      fill="#2591B2"
                    />
                  </svg>
                </div>
              </div>
              <div className="grid xsm:grid-cols-1 md:grid-cols-2 gap-x-[31px] gap-y-[44px] mt-[33px]">
                {technicianList
                  // .filter((items: any, index: any) => index < 8)
                  .map((items: any, index: any) => {
                    console.log(items);
                    return (
                      <div
                        key={index}
                        className="border border-[#EDEDED]  flex justify-between  rounded-[5px] gap-[36px] relative p-2"
                      >
                        <div className=" xsm:w-[230px] md:w-full flex items-center gap-[15px]">
                          <div className="basis-[30%] flex items-center justify-center">
                            <img
                              src={`${items?.photo ? items?.photo:"/../assets/user.jpg"}`}
                              alt="user image"
                              // height={160}
                              // width={160}
                              // layout="responsive"
                              className=" my-2 w-[160px] h-[160px] object-cover"
                            />
                          </div>

                          <div className="basis-[70%]">
                            <h3 className="text-[#2591B2] text-[22px] leading-[25.78px] font-bold">
                              {`${items?.sc_name}`}
                            </h3>
                            <div className="mt-[8px]">
                              {/* <p className="text-[#505056] text-[16px] leading-[19px] font-normal">
                            Kumaripati, Lalitpur
                            </p> */}
                              <div className=" gap-3 items-center hidden">
                                <span className="text-red-400">
                                  <TbPhoneCall />
                                </span>
                                {/* <p className="text-[#505056] hidden text-[16px] leading-[19px] font-normal">
                                {items?.mobile}
                              </p> */}
                              </div>
                            </div>
                            <div className="mt-[17px] flex  gap-[5px]">
                              <button className="bg-[#1F3F981A] text-[#2591B2] text-[12px] leading-[14px] font-normal py-[2px] px-[9px] rounded-[3px]">
                                Kent
                              </button>
                              <button className="bg-[#1F3F981A] text-[#2591B2] text-[12px] leading-[14px] font-normal py-[2px] px-[9px] rounded-[3px]">
                                Bravos
                              </button>
                              <button className="bg-[#1F3F981A] text-[#2591B2] text-[12px] leading-[14px] font-normal py-[2px] px-[9px] rounded-[3px]">
                                Haier
                              </button>
                            </div>
                            <div className="mt-[26px] flex gap-[13.6px]">
                              <Link href="/allservices">
                                <button className="bg-[#2591B2] rounded-[4.08px] text-[#FFFFFF] text-[16px] leading-[19px] font-normal py-[6.8px] px-[17.9px]">
                                  Book Now
                                </button>
                              </Link>
                              <ProfessionalProfile professional={items} />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <DownloadOurApp />
      <BottomNavbar />
      <Footerinfo />
      <Copyright />
    </div>
  );
};

export default professionals;
