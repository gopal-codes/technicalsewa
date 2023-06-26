import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Topbar from "../../../components/Topbar";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import Image from "next/image";
import { NextSeo } from "next-seo";

const PartPurjaDetails = () => {
  const [brand, setBrand] = useState<any>();
  const product = useSelector((state: any) => state?.partSlice?.activeItem);
  // console.log(product);

  const router = useRouter();
  const slug = router?.query?.part;
  console.log(product);
  useEffect(() => {
    // Getting SEO
    try {
      fetch(
        `https://smartcare.com.np/techsewa/publiccontrol/publicmasterconfig/getSeoContent?url=https://smartcare.com.np/part-purja/${slug}`
      )
        .then((res) => res.json())
        .then((data) => setBrand(data?.brands));
    } catch {
      (error: any) => console.log(error.message);
    }
  }, []);

  // console.log(brand);

  let imageUrl = "";
  if (product?.filename) {
    imageUrl = product?.filename.replace(
      "https://smartcare.com.np/multiservice/",
      "https:////smartcare.com.np/techsewa/"
    );
  }

  return (
    <div className="">
      <NextSeo
        title={brand?.btitle}
        description={brand?.description}
        canonical={brand?.cannonical}
        defaultTitle={brand?.alt}
        openGraph={{
          type: `${brand?.og_type}`,
          title: `${brand?.og_title}`,
          description: `${brand?.og_desc}`,
          url: `${brand?.og_url}`,
          siteName: `${brand?.og_site_name}`,
        }}
      />
      {/* <Script src={brand?.json_ld} /> */}
      <Topbar />
      <div className="border-2 border-[#2591B2] mt-10 w-[80rem]  sm:mb-20 m-auto rounded-xl flex flex-col p-10 lg:w-[780px] md:w-[500px] sm:w-[400px] xsm:w-[300px] xsm:mb-20 ">
        <Image
        width={250} height={200}
          src={imageUrl || ""}
          className="h-auto min-h-[200px] w-[500px] self-center rounded-md "
          alt="parts"
        />
        <span className="text-xl bg-[#2591B2] w-96 sm:w-52 xsm:w-40 xsm:text-sm my-2 text-center m-auto p-2  rounded-xl text-white">
          {product?.features}
        </span>
        <div className="flex flex-col text-lg font-extrabold gap-2 xsm:text-sm mt-5">
          <span>{parse(`<div>${product?.blog_name}</div>`)}</span>
          <hr />
          <span>Market Price: {product?.market_rate}</span>
          <hr />
          <span className="text-[#2591B2]">Our Offer: {product?.our_rate}</span>
          <hr />
          <span>Contact: {product?.contact_info}</span>
          <hr />
          <div>
            <span>Description</span>
            <span className="font-semibold opacity-60 w-4/5">
              {parse(`<div>${product?.blog_desc}</div>`)}
            </span>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartPurjaDetails;
