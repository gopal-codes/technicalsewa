import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import Footer from "../../components/mblviewComponents/Footer";
import axios from "axios";
import Topbar from "../../components/Topbar";
import { useSelector } from "react-redux";
import ComplainComponent from "../../components/complain-component";
import BottomNavbar from "../../components/BottomNavbar";
import Footerinfo from "../../components/Footerinfo";
import Copyright from "../../components/Copyright";
import Head from "next/head";
import { NextSeo } from "next-seo";

const onChange = (key: string) => {
  // console.log(key);
};

type Props = {};

const Index = (props: Props) => {
  const [complains, setComplains] = useState({ list: [] });
  const user = useSelector((state: any) => state?.userSlice?.userData);

  useEffect(() => {
    if (user?.id) {
      // getting complains
      try {
        var data = new FormData();
        data.append("id", user?.id);
        data.append("type", user?.type);
        data.append("page", "");
        data.append("call_id", "");

        var config = {
          method: "post",
          maxBodyLength: Infinity,
          url: "https://smartcare.com.np/techsewa/publicControl/getcomplain",
          // headers: {
          //   ...data.getHeaders()
          // },
          data: data,
        };

        axios(config)
          .then(function (response) {
            const data: any = response.data;
            // console.log(data);
            setComplains(data);
          })
          .catch(function (error) {
            console.log(error);
          });
      } catch {
        alert("Error getting complains!");
      }
    }
  }, [user?.id]);

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <div>
          <p className="text-[#2591B2] text-[12px] leading-[19px]">Open</p>
        </div>
      ),
      children: <ComplainComponent complains={complains} status="Open" />,
    },
    {
      key: "2",
      label: (
        <div>
          <p className="text-[#00] text-[12px] leading-[19px]">Closed</p>
        </div>
      ),
      children: <ComplainComponent complains={complains} status="Closed" />,
    },
    {
      key: "3",
      label: (
        <div>
          <p className="text-[#00] text-[12px] leading-[19px]">Cancelled</p>
        </div>
      ),
      children: <ComplainComponent complains={complains} status="Cancelled" />,
    },
  ];

  return (
    <div>
      <NextSeo
        title="Complains | Technical Sewa"
        description="About page of Technical Sewa"
      />
      <Topbar />
      <div className=" md:w-[728px] m-auto md:mt-10">
        <Tabs
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          className="complain"
        />
      </div>
    </div>
  );
};

export default Index;
