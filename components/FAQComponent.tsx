import axios from "axios";
import React, { useEffect, useState } from "react";

const FAQComponent = (props: any) => {
  const [data, setData] = useState();
  const slug = props;

  return (
    <div>
      <div className="xsm:hidden md:block container mx-auto pt-[101px] pb-[111px]">
        <h2 className="text-[#2591B2] text-[23px] leading-[32.89px] font-semibold tracking-[0.01em] text-center">
          FAQ On Washing Machine Repair And Services
        </h2>
        <div className="px-[30px] mt-[40px]">
          <div className="bg-[#2591B21A] py-[12px] pl-[16px]">
            <p className="text-[#505056] text-[16px] leading-[22.88px] font-normal tracking-[0.01em]">
              What brands of microwave ovens do you repair?
            </p>
          </div>
          <p className="text-[#505056] text-[16px] leading-[25.6px] font-normal tracking-[0.01em] mt-[12px]">
            Technical Sewa Technicians can work with any brand of microwave.
            However, LG, Samsung, Whirlpool, IFB, ELECTROLUX, Skyworth, and
            Hisense are the popular brands that Technical Sewa normally deals
            with.
          </p>
        </div>
        <div className="px-[30px] mt-[55px]">
          <div className="bg-[#2591B21A] py-[12px] pl-[16px]">
            <p className="text-[#505056] text-[16px] leading-[22.88px] font-normal tracking-[0.01em]">
              Should I trust Technical Sewa Microwave oven Repair and Services
              technician?
            </p>
          </div>
          <p className="text-[#505056] text-[16px] leading-[25.6px] font-normal tracking-[0.01em] mt-[12px]">
            All Microwave Repair and Services on Smart Care are experienced and
            background checked. Our main concern is our client’s safety. So, You
            do not have to worry about it.
          </p>
        </div>
        <div className="px-[30px] mt-[55px]">
          <div className="bg-[#2591B21A] py-[12px] pl-[16px]">
            <p className="text-[#505056] text-[16px] leading-[22.88px] font-normal tracking-[0.01em]">
              What are the services Smart Care provides in Microwave repair?
            </p>
          </div>
          <p className="text-[#505056] text-[16px] leading-[25.6px] font-normal tracking-[0.01em] mt-[12px]">
            Microwave Repair and Services Provided by Smart Care include
            diagnosis of the fault in the microwave, repair it, and replacing
            the genuine parts if needed.
          </p>
        </div>
        <div className="px-[30px] mt-[55px]">
          <div className="bg-[#2591B21A] py-[12px] pl-[16px]">
            <p className="text-[#505056] text-[16px] leading-[22.88px] font-normal tracking-[0.01em]">
              How much will it cost me to get my microwave Oven repaired?
            </p>
          </div>
          <p className="text-[#505056] text-[16px] leading-[25.6px] font-normal tracking-[0.01em] mt-[12px]">
            The cost of the Microwave Repair and Services cannot be fixed before
            a diagnosis of the fault in the microwave. After analyzing the
            problem, adding service charge, and spare parts cost if needed to be
            replaced, we can decide the cost.
          </p>
        </div>
        <div className="px-[30px] mt-[55px]">
          <div className="bg-[#2591B21A] py-[12px] pl-[16px]">
            <p className="text-[#505056] text-[16px] leading-[22.88px] font-normal tracking-[0.01em]">
              Why should I keep my microwave clean?
            </p>
          </div>
          <p className="text-[#505056] text-[16px] leading-[25.6px] font-normal tracking-[0.01em] mt-[12px]">
            The remaining food or grease on the bottom of your microwave, as
            well as moisture from the steam in the air, can combine with filth
            and oil to produce a bacteria-friendly environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
