import { Spin } from "antd";
import Router, { useRouter } from "next/router";
import React from "react";
import { FadeLoader } from "react-spinners";
import IndexPage from "./IndexPage";



const index = () => {

  const router = useRouter()
  console.log(router.route)

 

  return (
    <div >
     
      <IndexPage />

    </div>
  );
};

export default index;
