import axios from "axios";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Topbar from "../../components/Topbar";
var FormData = require("form-data");

const EditProfile = () => {
  const [userCredentials, setUserCredentials] = useState({
    name: "",
    mobile: "",
    address: "",
    email: "",
    skill: "",
    citizenship: "",
    contract: "",
    photo: "",
    certificate: "",
  });

  const [selectedCheckboxes, setSelectedCheckboxes] = useState([""]);

   // for file change 
   const [fileInputs, setFileInputs] = useState({
    photo: null,
    citizenship: null,
    certificate: null,
    contract: null,
  });

  const handleFileChange = (event:any, inputName:any) => {
    const selectedFile = event.target.files[0];
    setFileInputs((prevState) => ({
      ...prevState,
      [inputName]: selectedFile,
    }));
  };


  const allServices = useSelector(
    (state: any) => state?.allServices?.allServices
  );

  const techId = useSelector((state: any) => state?.useSlice?.userData?.id);

  const router = useRouter();

  const handleChange = (event: any) => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  // handling checkboxes selection
  const handleCheckboxChange = (event: any) => {
    const checkboxId = event.target.id;
    if (event.target.checked) {
      setSelectedCheckboxes([...selectedCheckboxes, checkboxId]);
    } else {
      setSelectedCheckboxes(
        selectedCheckboxes.filter((id) => id !== checkboxId)
      );
    }
  };

  // console.log(selectedCheckboxes);

  const handleSubmit = (event: any) => {
    event?.preventDefault();
    userCredentials.skill = JSON.stringify(selectedCheckboxes);
    // console.log(userCredentials);

  
    try {

      var data = new FormData();
      data.append("id", techId);
      data.append("phone", userCredentials.mobile);
      data.append("skill", userCredentials.skill);
      data.append("name", userCredentials.name);
      data.append("address", userCredentials.address);
      data.append("email", userCredentials.email);
      Object.entries(fileInputs).forEach(([key, value]) => {
        data.append(key, value);
      });
     
      var config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://smartcare.com.np/techsewa/publicControl/updateTechnician",
        // headers: {
        //   'Cookie': 'cisessionssgroup=yXPSjM7XLNu2xruQex3DiwxrbQkmsG8Bw3FCLa7i%2FBEHiifusptzVf%2BhaT5prPZYzXIeNzeMsC6n8Uz7dg4A%2FV80n0k9qD185O56N0bluacf9WDHSpiwW76Sxd3kCQzXpasxZO7pHUq9y8v5Vy6G9rg1foBnY11Gu6Vq2lFjPtOXj59XNOUqlLE2%2B%2BYf52YJHG7Zrv0pZAkVVCyi6wIIS0dIrzBgcZmRdXkoDbi9HfMcFB3NfjNpqvCzEjhRV64DX%2F5bNJ3PzM5y35X3JFj590ZEjh5zg2V29V3niOxsYlw%3D',
        //   ...data.getHeaders()
        // },
        data: data,
      };

      axios(config)
        .then(function (response) {
          // console.log(JSON.stringify(response.data));
          const data = response.data;
          if (data.message === "Success") {
            router.push("/repair");
            alert("Update Successful");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error: any) {
      alert("Update Failed!");
    }
  };

  return (
    <div>
      <NextSeo
        title="Edit Profile | Technical Sewa"
        description="Edit Profile page of Technical Sewa"
      />
      <Topbar />
      <div className=" md:w-[80rem] mx-5 md:m-auto bg-gray-200 rounded-lg mt-5 p-10 mb-20">
        <span className="text-[#2591B2] block xsm:text-xl md:text-3xl">
          Update Profile
        </span>
        <form action="" className=" flex flex-col" onSubmit={handleSubmit}>
          <div className="grid xsm:grid-cols-1 md:grid-cols-2 xsm:mt-5 md:mt-10 text-xl gap-5">
            <div className="flex xsm:flex-col md:flex-row xsm:gap-2 md:gap-5 justify-between xsm:w-full md:w-[450px] m-auto">
              <span className="md:tech-profile-label">Name</span>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={userCredentials.name}
                placeholder="Name"
                required
                className="tech-profile-input md:w-2/3"
              />
            </div>
            <div className="flex xsm:flex-col md:flex-row xsm:gap-2 md:gap-5 justify-between xsm:w-full md:w-[450px] m-auto">
              <span className="md:tech-profile-label">Mobile</span>
              <input
                name="mobile"
                type="tel"
                minLength={10}
                required
                onChange={handleChange}
                value={userCredentials.mobile}
                placeholder="Mobile"
                className="tech-profile-input md:w-2/3"
              />
            </div>
            <div className="flex xsm:flex-col md:flex-row xsm:gap-2 md:gap-5 justify-between xsm:w-full md:w-[450px] m-auto">
              <span className="md:tech-profile-label">Address</span>
              <input
                onChange={handleChange}
                value={userCredentials.address}
                type="text"
                name="address"
                placeholder="Address"
                required
                className="tech-profile-input md:w-2/3"
              />
            </div>
            <div className="flex xsm:flex-col md:flex-row xsm:gap-2 md:gap-5 justify-between xsm:w-full md:w-[450px] m-auto">
              <span className="md:tech-profile-label">E-mail</span>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={userCredentials.email}
                placeholder="Email"
                required
                className="tech-profile-input md:w-2/3"
              />
            </div>
            <div className="flex xsm:flex-col md:flex-row xsm:gap-2 md:gap-5 justify-between xsm:w-full md:w-[450px] m-auto">
              <span className="md:tech-profile-label">Citizenship</span>
              <div className="xsm:full md:w-2/3 rounded-lg bg-white">
                <input
                  type="file"
                  name="citizenship"
                  placeholder="name"
                  required
                  onChange={(event) => handleFileChange(event, 'ctzn')}
                  className="tech-profile-input w-full"
                />
              </div>
            </div>
            <div className="flex xsm:flex-col md:flex-row xsm:gap-2 md:gap-5 justify-between xsm:w-full md:w-[450px] m-auto">
              <span className="md:tech-profile-label">Contract</span>
              <div className="tech-profile-input xsm:full md:w-2/3 rounded-lg bg-white">
                <input
                  type="file"
                  name="contract"
                  placeholder="Contract"
                  onChange={(event) => handleFileChange(event, 'contract')}
                  required
                  className=" w-full"
                />
              </div>
            </div>
            <div className="flex xsm:flex-col md:flex-row xsm:gap-2 md:gap-5 justify-between xsm:w-full md:w-[450px] m-auto">
              <span className="md:tech-profile-label">Photo</span>
              <div className="tech-profile-input xsm:full md:w-2/3 rounded-lg bg-white">
                <input
                  type="file"
                  name="photo"
                  placeholder="photo"
                  required
                  onChange={(event) => handleFileChange(event, 'photo')}
                  className=" w-full"
                />
              </div>
            </div>
            <div className="flex xsm:flex-col md:flex-row xsm:gap-2 md:gap-5 justify-between xsm:w-full md:w-[450px] m-auto">
              <span className="md:tech-profile-label">Certificate</span>
              <div className="xsm:full md:w-2/3 tech-profile-input bg-white">
                <input
                  type="file"
                  name="certificate"
                  className=" w-full"
                  placeholder="Certificate"
                  required
                  onChange={(event) => handleFileChange(event, 'certificate')}
                />
              </div>
            </div>
          </div>
          <h2 className="mt-16 mb-5">Services</h2>
          <div className="xsm:w-[80vw] md:w-[1200px] m-auto grid md:grid-cols-4 xsm:grid-cols-2 gap-y-3 text-lg ">
            {allServices.map((items: any, index: any) => {
              const product = items?.product_name;
              return (
                <div className="flex gap-5 items-center">
                  <input
                    type="checkbox"
                    name="certificate"
                    id={items?.product_name}
                    onChange={handleCheckboxChange}
                    checked={selectedCheckboxes.includes(product)}
                  />
                  <span className="xsm:w-24 md:w-full">
                    {items?.product_name}
                  </span>
                </div>
              );
            })}
          </div>
          <button
            className="bg-[#2591B2] xsm:p-2 md:p-3 text-white rounded-xl w-24 mt-10 self-end md:mr-20"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
