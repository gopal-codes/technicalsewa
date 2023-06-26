import axios from "axios";
import React, { useEffect, useState } from "react";
import CountUp, { useCountUp } from "react-countup";

type Props = {};

const Number = (props: Props) => {
  const [users, setUsers] = useState({
    customers: 100,
    complains: 100,
    technicians: 100,
  });
  useEffect(() => {
    axios
      .get("https://smartcare.com.np/techsewa/publiccontrol/getGetTotalFooter")
      .then((response) => {
        let data = response.data;
        let numberedData = {
          customers: parseInt(data.customers),
          complains: parseInt(data.complains),
          technicians: parseInt(data.technicians),
        };
        setUsers(numberedData);
      });
  }, []);
  // console.log(users, "users");

  return (
    <div className="md:mt-[92px] mt-[50px] bg-[#2591B2]">
      <div className="container mx-auto grid md:grid-cols-4 grid-cols-2 text-white pt-[65px] pb-[75px] md:gap-[30px]">
        <div className="flex items-center justify-center flex-col">
          <div className=" text-[37px] leading-[78px] font-medium cursor-pointer transform hover:scale-105 sm:text-[30px] transition duration-300 ease-out">
            {" "}
            <CountUp
              end={users?.complains}
              duration={3}
              enableScrollSpy
              className="md:text-[30px]"
            />
            +
          </div>

          <h2 className=" text-[18px]  md:text-[22px] leading-[33px] font-normal">
            Complaints
          </h2>
        </div>
        <div className="flex items-center justify-center flex-col">
          <div className=" text-[37px]  sm:text-[30px] leading-[78px] font-medium cursor-pointer transform hover:scale-105 transition duration-300 ease-out">
            <CountUp end={users?.customers} duration={3.1} enableScrollSpy />+
          </div>
          <h2 className=" text-[18px]  md:text-[22px] leading-[33px] font-normal">
            Customers
          </h2>
        </div>
        <div className="flex items-center justify-center flex-col">
          <div className=" text-[37px]  sm:text-[30px] leading-[78px] font-medium cursor-pointer transform hover:scale-105 transition duration-300 ease-out">
            <CountUp end={users?.technicians} duration={3} enableScrollSpy />+
          </div>
          <h2 className=" text-[18px]  md:text-[22px] leading-[33px] font-normal">
            Technicians
          </h2>
        </div>
        <div className="flex items-center justify-center flex-col">
          <div className=" text-[37px]  sm:text-[30px] leading-[78px] font-medium cursor-pointer transform hover:scale-105 transition duration-300 ease-out">
            <CountUp end={12} duration={1.1} enableScrollSpy />+
          </div>
          <h2 className=" text-[18px]  md:text-[22px] leading-[33px] font-normal">
            Service Providers
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Number;
