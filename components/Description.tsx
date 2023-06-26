import React from "react";

type Props = {};

const Description = (props: Props) => {
  return (
    <div className="bg-[#FBFCFE]">
      <div className="container mx-auto flex items-center gap-[33px] pt-[28px] pb-[43px] ">
        <div className="basis-[60%] ">
          <p className="text-[#000000] text-[18px] leading-[32.4px] font-normal ">
            {" "}
            Technical Sewa Private Limited is a leading national company that
            deals with various repairing and maintenance services of multi brand
            and multi products viz. Home appliances, consumer entertainment,
            air-conditioning, small appliances, Medical equipment currency
            counting machine with our years of experience, we are nationally
            recognized as an expert in customer support services and in repair
            and maintenance services.ted to sales services to support partners
            of choice for leading Home appliances, consumer entertainment,
            air-conditioning, small appliances, Medical equipment currency
            counting machine company, etc. we are dedicated to making continues
            innovative solution, high flexibility and provide quality service to
            that our customers have access to first rate life cycle care for
            their products.
          </p>
        </div>
        <div className="basis-[40%] ">
          <div className="grid grid-cols-2 gap-[20px]">
            <div className="flex items-center gap-[22px] cursor-pointer">
              <div className="bg-[#1F3F98] w-[49px] h-[49px] rounded-[27px] flex items-center justify-center ">
                <svg
                  width="14"
                  height="20"
                  viewBox="0 0 14 20"
                  fill="none"
                  xmlns="https:////www.w3.org/2000/svg"
                  className=""
                >
                  <path
                    d="M8 2H6L5 0H9L8 2ZM14 11V20H0V11C0 8.24 2.24 6 5 6V4H4V3H10V4H9V6C11.76 6 14 8.24 14 11Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div>
                <p className="text-[#000000CC] text-[18px] leading-[27px] font-semibold">
                  Sanitising Hands{" "}
                </p>
                <p className="text-[#000000CC] text-[18px] leading-[27px] font-semibold">
                  & Equipments
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[22px] cursor-pointer">
              <div className="bg-[#1F3F98] w-[49px] h-[49px] rounded-[27px] flex items-center justify-center">
                <svg
                  width="14"
                  height="20"
                  viewBox="0 0 14 20"
                  fill="none"
                  xmlns="https:////www.w3.org/2000/svg"
                  className="animate-pulse"
                >
                  <path
                    d="M8 2H6L5 0H9L8 2ZM14 11V20H0V11C0 8.24 2.24 6 5 6V4H4V3H10V4H9V6C11.76 6 14 8.24 14 11Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p className="text-[#000000CC] text-[18px] leading-[27px] font-semibold">
                Enduring Masks
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-[20px] mt-[61px]">
            <div className="flex items-center gap-[22px] cursor-pointer">
              <div className="bg-[#1F3F98] w-[49px] h-[49px] rounded-[27px] flex items-center justify-center relative">
                <span className="absolute h-[45px] w-[45px] rounded-full animate-ping bg-sky-400 transition delay-700 opacity-[95%]"></span>
                <svg
                  width="14"
                  height="20"
                  viewBox="0 0 14 20"
                  fill="none"
                  xmlns="https:////www.w3.org/2000/svg"
                  className=""
                >
                  <path
                    d="M8 2H6L5 0H9L8 2ZM14 11V20H0V11C0 8.24 2.24 6 5 6V4H4V3H10V4H9V6C11.76 6 14 8.24 14 11Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p className="text-[#000000CC] text-[18px] leading-[27px] font-semibold">
                24/7 Support
              </p>
            </div>
            <div className="flex items-center gap-[22px] cursor-pointer">
              <div className="bg-[#1F3F98] w-[49px] h-[49px] rounded-[27px] flex items-center justify-center relative">
                {/* <span className='absolute h-[45px] w-[45px] rounded-full   bg-sky-400 opacity-[95%]'></span> */}
                <svg
                  width="14"
                  height="20"
                  viewBox="0 0 14 20"
                  fill="none"
                  xmlns="https:////www.w3.org/2000/svg"
                  className=""
                >
                  <path
                    d="M8 2H6L5 0H9L8 2ZM14 11V20H0V11C0 8.24 2.24 6 5 6V4H4V3H10V4H9V6C11.76 6 14 8.24 14 11Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p className="text-[#000000CC] text-[18px] leading-[27px] font-semibold">
                Ensuring Gloves
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
