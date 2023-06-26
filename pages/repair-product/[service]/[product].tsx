import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Topbar from "../../../components/Topbar";
import { useDispatch, useSelector } from "react-redux";
import { setStoreLocation } from "../../../redux/gmap";
import AutocompleteGmap from "../../../components/Autocomplete-gmap";
import { useLoadScript } from "@react-google-maps/api";
import { setUserLocation } from "../../../redux/userSlice";
import Head from "next/head";
import LoadingComponent from "../../../components/LoadingComponent";
import { NextSeo } from "next-seo";
// import { Alert } from "antd";


interface AutocompleteGmapProps {
  latlong: number[];
}

const Location = () => {
  const [location, setLocation] = useState("");
  const [latlong, setLatlong] = useState<any>();
  const [address, setAddress] = useState("N/A");

  const [clientLocation, setClientLocation] = useState({
    latitude: 0.0,
    longitude: 0.0,
  });
  const [blocked, setBlocked] = useState(true);
  const userId = useSelector((state: any) => state?.userSlice?.userData?.id);

  // getting brand id
  const brand = useSelector(
    (state: any) => state?.productDetails?.activeSubCategory
  );
  const allservices = useSelector(
    (state: any) => state?.allServices?.allServices
  );

  const id: any = allservices.map((items: any, index: any) => {
    if (items?.brand_name === brand) {
      return items?.brand_id;
    }
  });
  // console.log(id);

  // Get user address From Redux
  const place = useSelector((state: any) => state?.mapSlice?.serviceLocation);

  useEffect(() => {
    //GETTING LOCATION
    var data = new FormData();
    data.append("brand_id", id);

    var config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://smartcare.com.np/techsewa/publicControl/holocation",
      // headers: {
      //   ...data.getHeaders()
      // },
      data: data,
    };
    location;

    axios(config)
      .then(async function (response) {
        // console.log(JSON.stringify(response.data));
        const data = await response.data;
        setLocation(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [id]);

  // console.log(location?.split(", ").map(parseFloat));
  const dispatch = useDispatch();
  useEffect(() => {
    let center: any = location?.split(", ").map(parseFloat);
    setLatlong(center);
    dispatch(setStoreLocation(center));
  }, [location]);

  const router = useRouter();

  // ASK FOR LOCATION

  // Redux user location
  const locateUser: any = useSelector(
    (state: any) => state?.userSlice?.location
  );

  useEffect(() => {
    setClientLocation({
      latitude: locateUser?.lat,
      longitude: locateUser?.lng,
    });
  }, [locateUser]);

  useEffect(() => {
    // ASK FOR LOCATION
    if (navigator.geolocation) {
      // console.log(navigator);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setClientLocation(position.coords);
          dispatch(setStoreLocation(position.coords));
          setAddress("N/A");
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  // Changing Address on place specification
  useEffect(() => {
    setAddress(place);
  }, [place]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyC2iS_ad-zpImBQFaY3XeZVdzxNLU4nz8s",
    libraries: ["places"],
  });

  if (!isLoaded) return <LoadingComponent />;

  const handleProceedClick = () => {
    // console.log(clientLocation);
    if (clientLocation.latitude !== 0.0) {
      setBlocked(false);
    }
    if (clientLocation.latitude === 0.0) {
      // console.log(blocked);
      alert("Please Provide Your Location to continue!.");
    } else {
      if (!userId) {
        router.push({
          pathname: "/login",
          query: {
            deal: true,
          },
        });
      } else {
        dispatch(setUserLocation(clientLocation));
        router.push("/complains/log-complains");
      }
    }
  };
  const params = useRouter();
  const { product } = params.query

  return (
    <div className="xsm:m-5 min-h-[500px]">
      <NextSeo
        title="Contact | Technical Sewa"
        description="product page of Technical Sewa"
        canonical={`https://technicalsewa.com/repair-product/${product}`}
      />
      <Head>
        <title>Technical Sewa | Set Location</title>
      </Head>
      <Topbar />
      <div className="flex flex-col xsm:w-full md:w-[700px] m-auto bg-gray-200 xsm:p-2 md:p-10  mt-5 xsm:gap-2 md:gap-5 rounded-lg">
        <h2 className="xsm:text-xl md:text-3xl text-[#2591B2]">
          Location Info
        </h2>
        <span className="md:mt-3 xsm:text-26px md:text-xl font-bold">
          Enter Adress
        </span>
        {/* <input
          type="text"
          name="search-location"
          id="search-loaction"
          placeholder="Search Nearest Location"
          className="p-3 rounded-xl outline-none"
        /> */}
        {/* <Map latlong={latlong} /> */}
        <div className="flex flex-col gap-5 flex-grow-1">
          <div>
            <AutocompleteGmap latlong={latlong} />
          </div>
          <div className="">
            <div className="mt-2">
              <span className="xsm:text-26px md:text-xl font-bold">
                Our Address
              </span>
              <div className="flex flex-wrap gap-5 xsm:mt-2 md:mt-3 text-sm">
                <span>{`Latitude: ${parseFloat(latlong[0]).toFixed(7)}`}</span>
                <span>{`Longitude: ${parseFloat(latlong[1]).toFixed(7)}`}</span>
              </div>
            </div>
            <div className="mt-2">
              <span className="xsm:text-26px md:text-xl font-bold">
                Your Address
              </span>
              <div className="flex flex-col">
                <div className="flex gap-2 font-bold mt-2 text-sm">
                  <span className="w-[50px]">Place :</span>
                  <span className="underline flex-1">{address}</span>
                </div>
                <div className="flex gap-5 mt-2  text-sm">
                  <span>{`Latitude: ${address !== "N/A" ? clientLocation?.latitude : "N/A"
                    }`}</span>
                  <span>{`Longitude: ${address !== "N/A" ? clientLocation?.longitude : "N/A"
                    }`}</span>
                </div>
                <div className="xsm:hidden md:block">
                  <div className="flex gap-10 justify-end xsm:mt-3 md:my-10">
                    <div onClick={handleProceedClick}>
                      {/* <Link href="/login"> */}
                      <button className=" md:flex items-center bg-[#2591B2] gap-[8px] xsm:py-[5px] md:py-[8.5px] px-[13px] rounded-[3px]">
                        <p className="text-[#FDFEFF] text-[15px] py-2 px-3 leading-[18.23px] font-normal tracking-[0.02em]">
                          Proceed
                        </p>
                      </button>
                      {/* </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed md:hidden bottom-[80px] right-[30px] z-[9999]">
        <div className="flex gap-10 justify-center xsm:mt-3 md:my-10">
          <div onClick={handleProceedClick}>
            {/* <Link href="/login"> */}
            <button className=" md:flex items-center bg-[#2591B2] gap-[8px] xsm:py-[5px] md:py-[8.5px] px-[13px] rounded-[3px]">
              <p className="text-[#FDFEFF] text-[15px] py-2 px-3 leading-[18.23px] font-normal tracking-[0.02em]">
                Proceed
              </p>
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
