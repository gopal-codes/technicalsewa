import Image from "next/image";
import React, { useMemo } from "react";
import { TbPhoneCall } from "react-icons/tb";
import ProfessionalProfile from "./professionals-profile";
import Link from "next/link";

const ProfessionalComponent = (props: any) => {
  const { technicianList } = props;
  const memoizedTechnicianList = useMemo(
    () =>
      technicianList.map((items: any, index: any) => {
        return (
          <div
            key={index}
            className="border border-[#EDEDED]  flex justify-between  rounded-[5px] gap-[36px] relative p-2"
          >
            <div className="pt-[11px] xsm:w-[230px] md:w-full">
              <Image
                src="/assets/ts-final-logo.png"
                alt="user image"
                height={91}
                width={100}
                className=" my-2"
              />
              <h4 className="text-[#2591B2] text-[22px] leading-[25.78px] font-bold">
                {`${items?.sc_name}`}
              </h4>
              <div className="mt-[8px]">
                <div className="flex gap-3 items-center">
                  <span className="text-red-400">
                    <TbPhoneCall />
                  </span>
                  <p className="text-[#505056] text-[16px] leading-[19px] font-normal">
                    {items?.mobile}
                  </p>
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
                <Link href="/repair/allservices">
                  <button className="bg-[#2591B2] rounded-[4.08px] text-[#FFFFFF] text-[16px] leading-[19px] font-normal py-[6.8px] px-[17.9px]">
                    Book Now
                  </button>
                </Link>
                <ProfessionalProfile professional={items} />
              </div>
            </div>
          </div>
        );
      }),
    [technicianList]
  );
  return (
    <div className="grid xsm:grid-cols-1 md:grid-cols-2 gap-x-[31px] gap-y-[44px] mt-[33px]">
      {memoizedTechnicianList}
    </div>
  );
};

export default ProfessionalComponent;
