import { Rating } from "@mui/material";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";

const RatingComponent = (props: any) => {
  const [allRatings, setAllRatings] = useState({
    list: [],
    total: 0,
  });

  const { professional } = props;

  useEffect(() => {
    // Getting Ratings
    var data = new FormData();
    data.append("type", "Customer");

    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://smartcare.com.np/techsewa/publiccontrol/publicComplain/getRatingDetails",
      //   headers: {
      //     ...data.getHeaders()
      //   },
      data: data,
    };

    axios(config)
      .then(function (response) {
        // console.log(response?.data);
        const data = response?.data;
        setAllRatings(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // const memoizedRatings = useMemo(())

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 xsm:mt-5 md:mt-10 hidden">
      {allRatings?.list.map((items: any, index: any) => (
        <div key={index} className="flex gap-2 md:gap-5">
          <Image width={250} height={200}
            src={items?.tech_image}
            alt="ratings"
            className="w-[100px] h-[100px] bg-[var(--primary-color)] rounded-lg"
          />
          <div className="flex flex-col justify-center">
            <span>{items?.customer_name}</span>
            <span>{items?.review}</span>
            <Rating name="read-only" value={parseInt(items?.rating)} readOnly />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RatingComponent;
