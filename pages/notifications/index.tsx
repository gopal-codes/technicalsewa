import axios from "axios";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdNotificationsActive } from "react-icons/md";
import { useSelector } from "react-redux";
import Topbar from "../../components/Topbar";

const Notifications = () => {
  const [notification, setNotification] = useState([]);
  const userId = useSelector((state: any) => state?.userSlice?.userData?.id);
  const userType = useSelector((state: any) => state?.userSlice?.type);

  useEffect(() => {
    let data = new FormData();
    data.append("user_id", userId);
    data.append("user_type", userType);

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://smartcare.com.np/test/getNotificationToken",
      // headers: {
      //   ...data.getHeaders()
      // },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data);
        const data = response.data;
        setNotification(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // console.log(notification);

  return (
    <div>
      <NextSeo
        title="Notifications | Technical Sewa"
        description="Notifications page of Technical Sewa"
      />
      <Topbar />
      <div className="flex flex-col md:items-center mt-5 md:mt-20 p-3">
        <div className="flex items-center text-[25px] gap-2 border-b-2 w-44 border-[var(--primary-color)]">
          <h2 className="">Notifications</h2>
          <MdNotificationsActive />
        </div>
        {!notification.length ? (
          <p className="mt-2">No new Notifications</p>
        ) : (
          ""
        )}
        {/* items */}
        <div className="mt-10 flex flex-col gap-3 bg-gray-200 p-5 rounded-xl overflow-auto">
          <h3 className="font-bold text-center text-[var(--primary-color)]">
            Welcome to Technical Sewa
          </h3>
          <div className="flex border-l-8  md:w-[600px] justify-between  border-[var(--primary-color)] rounded-l-full gap-2 h-[91px] pl-1">
            <div className="flex gap-3">
              <Image
                src="/test.png"
                alt="user image"
                height={91}
                width={100}
                className="h-[91px] w-[100px] object-cover bg-[#2591b26a] rounded-full"
              />
              <div className="w-[200px] max-h-full">
                <p className="text-[15px] h-[90px] overflow-auto  flex items-center">
                  Professional Repair Services On Demand
                </p>
              </div>
            </div>
            <Image
            width={250} height={200}
              src="/test.png"
              alt="feature image "
              className="h-[91px] w-[100px] object-cover bg-[#2591b26a]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
