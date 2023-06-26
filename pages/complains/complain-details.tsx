import axios from "axios";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Topbar from "../../components/Topbar";
import { getDate } from "../../utils/date-converter";

const ComplainDetails = () => {
  // const [allcomplainDetails, setAllComplainDetails] = useState([]);
  const [complainDetails, setComplainDetails] = useState({
    cust_first_name: "",
    cust_address: "",
    cust_phone_mobile: "",
    call_service_desc: "",
    call_uid: "",
    brand: "",
    brand_name: "",
    product_name: "",
    model_number: "",
    Call_status_val: "",
    call_dt: "",
    call_tm: "",
    call_serial_no: "",
    defect_code: "",
    repair_code: "",
    symptom_code: "",
    call_engineer_remark: "",
    customer_remarks: "",
    tech_mobile: "",
    service_category_name: "",
    tech_name: "",
    model: "",
    tech_email: "",
    tech_address: "",
  });

  const [receipts, setReceipts] = useState({});

  // Getting id from router
  const router = useRouter();
  const id: any = router?.query?.id;
  // console.log(id);

  useEffect(() => {
    // getting complain details
    var data = new FormData();
    data.append("complain_id", id);
    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://smartcare.com.np/techsewa/publiccontrol/publicComplain/getcomplaindetails",
      //   headers: {
      //     ...data.getHeaders()
      //   },
      data: data,
    };
    axios(config)
      .then(function (response) {
        const data = response.data;
        setComplainDetails(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [id]);

  const complain = useSelector(
    (state: any) => state?.complainSlice?.activeComplain
  );

  // console.log(complain);

  return (
    <div className="xsm:mb-20">
      <NextSeo
        title="Complain Details | Technical Sewa"
        description="Complian details page of Technical Sewa"
      />
      <Topbar />
      <div className="mx-2 mt-5 md:mt-10 grid md:w-[768px] md:m-auto md:grid-cols-2 gap-5">
        <div className="flex flex-col bg-gray-200 ">
          <h2 className="bg-[var(--primary-color)] text-white p-2 rounded-t-lg">
            Customer Info
          </h2>
          <div className="flex flex-col p-2">
            <span>{`Name: ${complainDetails?.cust_first_name}`}</span>
            {/* <span>{`Email: ${complainDetails?.cu}`}</span> */}
            <span>{`Address: ${complainDetails?.cust_address}`}</span>
            <span>{`Mobile: ${complainDetails?.cust_phone_mobile}`}</span>
            <span>{`Remark: ${
              complainDetails?.customer_remarks || "N/A"
            }`}</span>
          </div>
        </div>
        <div className="flex flex-col bg-gray-200">
          <h2 className="bg-[var(--primary-color)] text-white p-2 rounded-t-lg">
            Product Information
          </h2>
          <div className="flex flex-col p-2">
            <span>{`Id: ${complainDetails?.call_uid}`}</span>
            <span>{`Brand Name: ${complain?.brand_name}`}</span>
            <span>{`Product: ${complainDetails?.product_name || "N/A"}`}</span>
            <span>{`Model: ${complainDetails?.model || "N/A"}`}</span>
            <span>{`Service Name: ${
              complainDetails?.service_category_name || "N/A"
            }`}</span>
          </div>
        </div>
        <div className="flex flex-col bg-gray-200">
          <h2 className="bg-[var(--primary-color)] text-white p-2 rounded-t-lg">
            Techinical Information
          </h2>
          <div className="flex flex-col p-2">
            <span>{`Name: ${
              complainDetails?.tech_name || "Technical Sewa"
            }`}</span>
            <span>{`Email: ${
              complainDetails?.tech_email || "onlineCustomer@smartcare.com"
            }`}</span>
            <span>{`Address:  ${
              complainDetails?.tech_address || "Kumaripati, Lalitpur"
            }`}</span>
            <span>{`Mobile: ${
              complainDetails?.tech_mobile || "9802074555"
            }`}</span>
            <span>{`Remark: ${
              complainDetails?.call_engineer_remark || "N/A"
            }`}</span>
          </div>
        </div>
        <div className="flex flex-col bg-gray-200">
          <h2 className="bg-[var(--primary-color)] text-white p-2 rounded-t-lg">
            Call Summary
          </h2>
          <div className="flex flex-col p-2">
            <span>{`Status: ${complain?.Call_status_val}`}</span>
            <span>{`Dealer Number: ${complainDetails?.tech_mobile} `}</span>
            <span>{`Date: ${getDate(complainDetails?.call_dt)}`}</span>
            <span>{`Time: ${complain?.call_tm}`}</span>
            <span>{`Serial No: ${
              complainDetails?.call_serial_no || "N/A"
            }`}</span>
            <span>{`Defect Code: ${
              complainDetails?.defect_code || "N/A"
            }`}</span>
            <span>{`Repair Code: ${
              complainDetails?.repair_code || "N/A"
            }`}</span>
            <span>{`Symptom Code: ${
              complainDetails?.symptom_code || "N/A"
            }`}</span>
            <span>{`Remark: ${
              complainDetails?.call_engineer_remark || "N/A"
            }`}</span>
          </div>
        </div>
        {/* <div className="flex flex-col bg-gray-200">
          <h2 className="bg-[var(--primary-color)] text-white p-2 rounded-t-lg">
            Payment Information
          </h2>
          <div className="flex flex-col p-2">
            <span>{`Name: `}</span>
            <span>{`Email: `}</span> 
            <span>{`Address: ${complainDetails?.cust_address}`}</span>
            <span>{`Mobile: ${complainDetails?.cust_phone_mobile}`}</span>
            <span>{`Remark: ${complainDetails?.call_service_desc}`}</span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ComplainDetails;
