import React from "react";
import Image from "next/image";

type Props = {};

const DownloadOurApp = (props: Props) => {
  return (
    <div className="bg-[#FBFCFE] pb-[40px] sm:pb-0">
      <div className="container mx-auto pt-[38px] pb-[56px] px-[10px]">
        <div className=" items-center gap-[20px] justify-between flex flex-col lg:flex-row">
          <div className="w-full">
            <h3 className="md:text-[32px] text-[17px] leading-[48px] font-semibold md:mb-[36px] mb-[0px]">
              Download our App
            </h3>
            <p className="text-[#000000CC] md:text-[16px] text-[10px] leading-[24px] font-normal md:mb-[34px] mb-[15px]">
              Enter mobile number to get APP download Link
            </p>
          </div>
          <div className=" flex items-center mb-[22px] w-full">
            <input
              type="text"
              placeholder="Type your mobile number"
              className="border md:h-[56px] h-[40px] bg-white pl-[24px] md:w-[570px] w-full  input_btn outline-none text-[12px] md:text-[16px] "
            />
            <button className="bg-[#2591B2] rounded-tr-[5px] rounded-br-[5px] text-[#FBFCFE] md:text-[16px] leading-[25.2px] font-normal md:pt-[16px] md:pb-[15px] md:pl-[35px] md:pr-[36px] h-[40px] md:h-[56px] px-[15px] sm:px-0 tracking-[0.1em] text-[12px] sm:w-32">
              SEND
            </button>
          </div>
          <div className=" items-center gap-[17px] hidden">
            <Image 
              width={250}
              height={200}
              src="/../assets/googleplay.png"
              alt="googleplay.png"
              className="cursor-pointer"
            />
            <Image width={250} height={200}
              src="/../assets/appstore.png"
              alt="appstore.png"
              className="mt-[-9px] cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadOurApp;
