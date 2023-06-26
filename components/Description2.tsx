import React, { useEffect, useState } from "react";
import axios from "axios";

type Props = {};

const Description2 = (props: Props) => {
  const [desc, setDesc] = useState<any>(null);

  useEffect(() => {
    let fetchData = async () => {
      let data = await axios.get(
        "https://smartcare.com.np/techsewa/publicControl/midcontent"
      );
      setDesc(data.data);
    };
    fetchData();
  }, []);
  console.log(desc)
  const paragraphs = desc?.description?.split("</p>");
  return (
    <div className="bg-[rgb(37,145,178)] mt-[42px] mx-auto">
      <div className="container xl:w-[80rem] sm:w-full  sm-w-full m-auto grid md:grid-cols-3 grid-cols-1 text-white pt-[35px] pb-[5px] md:gap-[30px] gap-6">
        {/* <p className='text-white max-w-[1184px] xl:max-w-[984px] text-center text-[18px] leading-[32.4px] font-normal'>We are nationally proving ater sales support service for Washing Machine, Refrigerator, Air-conditioner, Vacuum Cleaner, Microwave Oven and Medical Equiment... we have wide of range of Technicians who are fully trend and experience more than 10 years. we have available all types of spare parts in genuine.</p> */}
        {/* <p className="text-white  text-[10px] md:text-[14px] leading-[18px] whitespace-normal break-words break-all ">
        Welcome to Technical Sewa, your premier destination for high-quality electronic repair services. Trust us for efficient and affordable solutions to address all your appliance repair needs. Our skilled technicians specialize in repairing a wide range of appliances, including washing machines, microwaves, LED TVs, vacuum cleaners, and mobile phones. We understand the inconvenience caused by malfunctioning appliances, and our mission is to provide prompt and reliable
        </p>
        <p className="text-white   text-[10px] md:text-[14px] leading-[18px] whitespace-normal break-words break-all">
        repairs to restore optimal performance. As authorized service providers for popular brands, we offer trustworthy repairs that maintain the quality and functionality of your appliances. From Samsung and LG to Whirlpool and more, we handle repairs for various manufacturers. Our comprehensive services extend beyond appliance repair. We provide warranty products, electrical and plumbing services, air purifier and humidifier maintenance, mobile phone and CCTV
        </p>

        <p className="text-white  text-[10px] md:text-[14px] leading-[18px] whitespace-normal break-words break-all">
        system repairs, computer and printer services, medical equipment repairs, drone repairs, carpentry services, and cleaning and pest control services. With Technical Sewa, you receive top-quality service from dedicated professionals who prioritize customer satisfaction. Contact us today to schedule a repair or inquire about our services. Trust Technical Sewa to be your reliable partner in maintaining the excellent condition of your appliances and home.
        </p> */}
        {/* {desc?.description} */}
        {/* <p
            className="text-gray-600"
            dangerouslySetInnerHTML={{ __html: `${paragraphs}</p>` }}
          /> */}
        {paragraphs?.map((paragraph: any, index: any) => (
          <div key={index} className="p-4  rounded ">
            <div
              className="text-white text-justify"
              dangerouslySetInnerHTML={{ __html: `${paragraph}</p>` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Description2;
