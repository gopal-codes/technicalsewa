import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";

type Props = {};

const OurClients = (props: Props) => {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://smartcare.com.np/techsewa/masterconfig/publicmasterconfig/getConfigList"
      )
      .then((res) => {
        let data = res.data.brands;
        setClients(data);
        // console.log(clients);
      });
  }, []);

  const memoizedClients = useMemo(
    () =>
      clients
        .filter((item, index) => index < 6)
        .map((item: any, index) => (
          <div
            className="flex items-center justify-center border sm:border-0 w-32 mx-auto sm:w-20"
            key={index}
          >
            <Image width={250} height={200} src={item?.image_url} alt={`error_loading ${index}`} />
          </div>
        )),
    [clients]
  );

  const memoizedBottomClients = useMemo(
    () =>
      clients
        .filter((item: any, index) => index > 5 && index < 8)
        .map((item: any, index) => {
          // // console.log(item);
          return (
            <div
              className="flex items-center justify-center border sm:border-0 w-32 sm:w-20 mx-auto md:mx-0"
              key={index}
            >
              <Image width={250} height={200} src={item?.image_url} alt="error_loading" />
            </div>
          );
        }),
    [clients]
  );

  return (
    <div className="container mx-auto pt-[40px] md:pb-[40px] pb-[60px] px-[15px] sm:px-0">
      <h2 className="text-[#232323] md:text-[32px]  text-[17px] leading-[38.88px] font-bold text-center">
        Our Clients
      </h2>
      <div className="grid md:grid-cols-6 grid-cols-2 gap-y-[20px] md:gap-y-[0px] mt-[30px] gap-x-[10px]">
        {memoizedClients}
      </div>
      <div className="md:flex md:items-center md:gap-[56px] gap-x-[10px] md:justify-center grid grid-cols-2 md:mt-[30.75px] mt-[20px]">
        {memoizedBottomClients}
      </div>
    </div>
  );
};

export default OurClients;
