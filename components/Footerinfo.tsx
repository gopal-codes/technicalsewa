import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Map from "./GmapComponent";
import Copyright from "./Copyright";
import Image from "next/image";

type Props = {};

const Footerinfo = (props: Props) => {
  const router = useRouter();
  const [home, setHome] = useState(false);
  const [service, setService] = useState(false);

  const homeclick = () => {
    setHome(!home);
    setService(false);
    router.push("/repair");
  };
  const serviceClick = () => {
    setService(!service);
    setHome(false);
    router.push("/service");
  };

  return (
    <>
      <div className="bg-[#2591b2] pb-[20px] sm:block">
        <div className="xl:w-[80rem] sm:w-full  m-auto">
          <div className="container mx-auto pt-[36px] px-[10px] sm:px-0">
            <h1 className="text-[#FFFFFF] text-center text-[16px] leading-[18.75px] font-semibold px-5">
              We Are Available In
            </h1>
            <div className="flex xsm:flex-col md:flex-row justify-between m-auto mt-5 items-center gap-5 p-5 md:w-[700px] lg:w-[950px]">
              <div className="grid grid-cols-3 text-white gap-2">
                <div>
                  <p className="text-white" >Pokhara</p>
                </div>
                <div>
                  <p className="text-white" >Butwal</p>
                </div>
                <div>
                  <p className="text-white" >kathmandu</p>
                </div>
                <div>
                  <p className="text-white" >Chitwan</p>
                </div>
                <div>
                  <p className="text-white" >Bhairawa</p>
                </div>
                <div>
                  <p className="text-white" >Kavre</p>
                </div>
                <div>
                  <p className="text-white" >Lalitpur</p>
                </div>
                <div>
                  <p className="text-white" >Lumbini</p>
                </div>
                <div>
                  <p className="text-white" >Mustang</p>
                </div>
                <div>
                  <p className="text-white" >Ilam</p>
                </div>
                <div>
                  <p className="text-white" >Jhapa</p>
                </div>
                <div>
                  <p className="text-white" >Dharan</p>
                </div>
                <div>
                  <p className="text-white" >Manang</p>
                </div>
                <div>
                  <p className="text-white" >Hetauda</p>
                </div>
                <div>
                  <p className="text-white" >Sindhupalchowk</p>
                </div>
                <div>
                  <p className="text-white" >Dhangadi</p>
                </div>
              </div>
              <div className="flex items-start justify-start">
                {/* <FooterMap /> */}
                <div className="border border-white bg-[#203E9A] text-white w-[80px] h-[30px] flex items-center justify-center">
                
                  <Link target="_blank" href="https://www.google.com/maps/place/27%C2%B042'08.4%22N+85%C2%B018'35.8%22E/@27.702328,85.309943,15z/data=!4m4!3m3!8m2!3d27.7023333!4d85.3099444?hl=en&entry=ttu">  Direction</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#FBFCFE]/[0.23] w-full mx-auto h-[1px]"></div>
          <div className="flex xsm:flex-col md:flex-row flex-wrap  container mx-auto mt-[24px] xsm:gap-5 md:gap-[100px] justify-center">
            <div className="md:flex-row flex flex-col items-center md:gap-[21px]  px-[10px]">
              <div className="cursor-pointer">
                <Image
                  src="/assets/ts-final-logo.png"
                  height={100}
                  width={300}
                  className="bg-white p-2 rounded-lg w-[210px] h-auto"
                  alt="logo.png"
                />
              </div>
              <div className=" mt-[20px] md:mt-0">
                <h2 className="text-[#FFFFFF] text-[14px] leading-[16.41px] font-bold  mb-[8px]">
                  Contact us
                </h2>
                <h3 className="text-white text-[13px] leading-[15.23px] font-light mb-[8px]">
                  Technical Sewa Pvt. Ltd.
                </h3>
                <h3 className="text-white text-[13px] leading-[15.23px] font-light">
                  Kumaripati, Lalitpur, Near Bluebird College, Nepal
                </h3>
              </div>
            </div>
            <div className="flex flex-col justify-end items-end gap-[15px]">
              <div className="flex items-center gap-[8px] justify-center">
                <Link href="https://www.facebook.com/people/repair-and-Solution/100089561034752/" aria-label="facebook Icon">
                  <svg
                    className="cursor-pointer "
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="https:////www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4036 5.59644 25 12.5 25ZM17 11H14V8.899C14 8.402 14.402 8 14.9 8H17V5H14.904C13.791 5 12.862 5.41 12.118 6.233C11.374 7.054 11 8.556 11 9.745V11H8V14H11V21H14V14H17V11Z"
                      fill="white"
                    />
                  </svg>
                </Link>
                <Link href="https://www.instragram.com/repair-and-service " aria-label="Instragram Icon">
                  <svg
                    className="cursor-pointer"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="https:////www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M25 12.5C25 19.4036 19.4036 25 12.5 25C5.59644 25 0 19.4036 0 12.5C0 5.59644 5.59644 0 12.5 0C19.4036 0 25 5.59644 25 12.5ZM12.5 10C11.837 10 11.2011 10.2634 10.7322 10.7322C10.2634 11.2011 10 11.837 10 12.5C10 13.163 10.2634 13.7989 10.7322 14.2678C11.2011 14.7366 11.837 15 12.5 15C13.163 15 13.7989 14.7366 14.2678 14.2678C14.7366 13.7989 15 13.163 15 12.5C15 11.837 14.7366 11.2011 14.2678 10.7322C13.7989 10.2634 13.163 10 12.5 10ZM6.31802 6.31802C7.16193 5.47411 8.30653 5 9.5 5H15.5C16.6935 5 17.8381 5.47411 18.682 6.31802C19.5259 7.16193 20 8.30653 20 9.5V15.5C20 16.6935 19.5259 17.8381 18.682 18.682C17.8381 19.5259 16.6935 20 15.5 20H9.5C8.30653 20 7.16193 19.5259 6.31802 18.682C5.47411 17.8381 5 16.6935 5 15.5V9.5C5 8.30653 5.47411 7.16193 6.31802 6.31802ZM10.0251 10.0251C9.36875 10.6815 9 11.5717 9 12.5C9 13.4283 9.36875 14.3185 10.0251 14.9749C10.6815 15.6313 11.5717 16 12.5 16C13.4283 16 14.3185 15.6313 14.9749 14.9749C15.6313 14.3185 16 13.4283 16 12.5C16 11.5717 15.6313 10.6815 14.9749 10.0251C14.3185 9.36875 13.4283 9 12.5 9C11.5717 9 10.6815 9.36875 10.0251 10.0251ZM17 9H16V8H17V9Z"
                      fill="white"
                    />
                  </svg>
                </Link>
                <Link href="https://www.youtube.com/repair-and-service" aria-label="youtube Icon">
                  <svg
                    className="cursor-pointer"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="https:////www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4036 5.59644 25 12.5 25ZM13.14 7H13.051V7.001H12.858C11.9058 7.00437 10.9537 7.02137 10.002 7.052L9.831 7.059L9.745 7.062L9.573 7.068L9.403 7.075C8.293 7.125 7.236 7.205 6.749 7.335C6.40937 7.42689 6.09986 7.60645 5.85151 7.85568C5.60316 8.10491 5.42469 8.41505 5.334 8.755C5.233 9.134 5.162 9.638 5.114 10.157L5.104 10.261L5.082 10.521L5.074 10.625L5.071 10.677L5.064 10.78C5.01 11.6 5.002 12.343 5 12.558V12.681C5.0053 13.3604 5.03265 14.0394 5.082 14.717L5.09 14.821L5.098 14.926C5.148 15.498 5.222 16.067 5.333 16.484C5.42385 16.8238 5.60238 17.1337 5.85072 17.3827C6.09907 17.6318 6.40849 17.8112 6.748 17.903C7.235 18.035 8.292 18.114 9.402 18.163L9.573 18.17L9.744 18.177L9.831 18.181L10.001 18.187C11.341 18.233 12.619 18.239 12.928 18.239H13.07C13.681 18.238 18.09 18.216 19.25 17.904C19.5896 17.8121 19.8991 17.6325 20.1475 17.3833C20.3958 17.1341 20.5743 16.824 20.665 16.484C20.776 16.066 20.85 15.498 20.9 14.926L20.909 14.822L20.917 14.717C20.989 13.765 20.998 12.851 20.999 12.657V12.582C20.998 12.395 20.99 11.539 20.925 10.625L20.917 10.521L20.895 10.261L20.885 10.157C20.837 9.638 20.766 9.135 20.665 8.755C20.574 8.41518 20.3955 8.10519 20.1472 7.85601C19.8989 7.60682 19.5895 7.42717 19.25 7.335C18.127 7.033 13.962 7.003 13.14 7ZM11.4 15.028V10.21L15.557 12.62L11.4 15.028Z"
                      fill="white"
                    />
                  </svg>
                </Link>
                <Link href="https://twitter.com/repair-and-service" aria-label="twitter Icon">
                  <svg
                    className="cursor-pointer"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="https:////www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4036 5.59644 25 12.5 25ZM18.2361 8.89882C18.8528 8.82118 19.4479 8.65882 20 8.41177C19.5841 9.02588 19.0679 9.56235 18.4656 9.98588C18.4728 10.12 18.4728 10.2471 18.4728 10.3812C18.4728 14.3835 15.3681 19 9.71797 19C7.98279 19 6.36233 18.4988 5 17.6376C5.24379 17.6659 5.48757 17.68 5.73136 17.68C7.11807 17.6866 8.4658 17.2285 9.55306 16.3812C8.91165 16.3697 8.29003 16.1606 7.77559 15.7832C7.26114 15.4059 6.87974 14.8794 6.68499 14.2776C7.14395 14.3667 7.61763 14.3498 8.06883 14.2282C6.66348 13.9529 5.60229 12.7247 5.60229 11.2565V11.2353C6.01816 11.4471 6.4914 11.5882 7.00048 11.5882C6.16874 11.0588 5.63098 10.1271 5.63098 9.07529C5.63098 8.52471 5.78155 8.00235 6.04685 7.55765C7.55975 9.38588 9.8327 10.5929 12.3853 10.72C12.3351 10.5012 12.3064 10.2682 12.3064 10.0282C12.3064 8.35529 13.6831 7 15.3681 7C16.2715 7 17.0674 7.35294 17.6338 7.96C18.3294 7.81882 18.989 7.57176 19.5841 7.21882C19.3547 7.93176 18.8671 8.52471 18.2361 8.89882Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </div>
              <h3 className="text-white md:text-[13px] max-w-[280px] text-[10px] leading-[24px] font-normal ">
                Enter mobile number to get APP download Link
              </h3>
              <div className=" flex items-center justify-end mb-[22px] w-full">
                <input
                  name="phoneNumber"
                  type="text"
                  placeholder="Type your mobile number"
                  className="border md:h-[32px] bg-white pl-[14px] md:w-[170px] w-full  input_btn text-xs "
                />
                <button className="bg-[#000000] rounded-tr-[5px] rounded-br-[5px] text-[#FBFCFE] md:text-[13px] leading-[25.2px] font-normal   h-[32px] md:h-[32px]  px-[8px] tracking-[0.1em] text-[12px] ">
                  SEND
                </button>
              </div>
            </div>
            <div className=" items-end justify-center md:flex-col pr-[125px] xl:pr-[90px]  hidden md:hidden">
              <Image width={250} height={200}
                src="/../assets/googleplay.png"
                alt="googleplay.png"
                className="cursor-pointer"
              />
              <Image width={250} height={200}
                src="/../assets/appstore.png"
                alt="appstore.png"
                className="cursor-pointer mr-[5px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footerinfo;

import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
import {
  useLoadScript,
  GoogleMap,
  Marker,
  MarkerF,
} from "@react-google-maps/api";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import LoadingComponent from "./LoadingComponent";
// import locationIcon from '@iconify/react'

const FooterMap = (props: any) => {
  const latlong = props.latlong;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyC2iS_ad-zpImBQFaY3XeZVdzxNLU4nz8s",
  });
  if (!isLoaded) return <LoadingComponent />;
  return <GMap />;
};

// const center = { lat: 44, lng: 80 };
const GMap = (props: any) => {
  // const latlong = useSelector((state: any) => state.mapSlice.location);
  const latlong = { lat: 27.6700695, lng: 85.3198825 };
  return (
    <div className="w-[300px] h-[200px] border-2 border-black">
      {/* <GoogleMap
        zoom={15}
        center={{ lat: 27.6700695, lng: 85.3198825 }}
        mapContainerClassName="map-container w-[400px] h-[196px] "
      >
        <MarkerF position={{ lat: 27.6700695, lng: 85.3198825 }} />
      </GoogleMap> */}
      <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3532.4843496553463!2d85.30994299999999!3d27.702327999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDQyJzA4LjQiTiA4NcKwMTgnMzUuOCJF!5e0!3m2!1sen!2snp!4v1685699307616!5m2!1sen!2snp" width="100%" height="100%"   loading="lazy" ></iframe>
    </div>
  );
};
