import React, { useEffect, useState } from "react";

import { GiWashingMachine, GiDeliveryDrone } from "react-icons/gi";
import { AiFillStar, AiFillSafetyCertificate } from "react-icons/ai";
import { FaTablet, FaStethoscope } from "react-icons/fa";
import { GiCctvCamera, GiHammerNails } from "react-icons/gi";
import { RiComputerFill } from "react-icons/ri";
import { MdPlumbing, MdAir, MdCarpenter, MdPestControl } from "react-icons/md";
import Image from "next/image";

const SubCategories = (props: any) => {
  const { imageUrl, brandName, click, index } = props;
  const icons = [
    <GiWashingMachine />,
    <AiFillStar />,
    <AiFillSafetyCertificate />,
    <MdPlumbing />,
    <MdAir />,
    <FaTablet />,
    <GiCctvCamera />,
    <RiComputerFill />,
    <FaStethoscope />,
    <GiDeliveryDrone />,
    <GiHammerNails />,
    <MdPestControl />,
  ];

  return (
    <div
      className="flex items-center justify-center flex-col cursor-pointer"
      onClick={click}
    >
      {/* {icons[index]} */}
      {/* <div className="text-5xl text-[#2591B2]">{icons[index]}</div> */}
      <Image src={imageUrl} alt="error_loading" width={48} height={48} />
      <p className="mt-[22px] text-[#000] text-[6.65px] md:text-[15px] leading-[17.58px] font-medium text-center">
        {brandName}
      </p>
    </div>
  );
};

export default SubCategories;

// // Category Icon Array
// const iconSvgArray = {
//   appliance: <GiWashingMachine />,
//   popular: <AiFillStar />,
//   warranty: <VscWorkspaceTrusted />,
//   plumber: <MdPlumbing />,
//   humidfier: <MdAir />,
//   mobile: <FaTablet />,
//   cctv: <GiCctvCamera />,
//   computer: <GrPersonalComputer />,
//   // medical:<BiPlusMedical/>,
//   // drone:<GiDeliveryDrone/>,
//   // carpenter:<GiHandSaw/>,
//   // pest:<MdPestControl/>,
// };
