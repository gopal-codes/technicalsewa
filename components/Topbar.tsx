import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { setReduxUserData } from "../redux/userSlice";
import Burger from "./mblviewComponents/Burger";
import Image from "next/image";

type Props = {};

const Topbar = (props: Props) => {
  const [signedIn, setSignedIn] = useState(false);
  const id = useSelector((state: any) => state?.userSlice?.userData?.id);
  // console.log(id);

  useEffect(() => {
    if (id) {
      setSignedIn(true);
    } else {
      setSignedIn(false);
    }
  }, [id]);

  const dispatch = useDispatch();

  const router = useRouter();
  const handleSignInOut = () => {
    if (signedIn) {
      router.push("/repair");
      dispatch(setReduxUserData(null));
    } else {
      router.push("/login");
    }
  };

  // getting user's Data

  const userData = useSelector((state: any) => state?.userSlice?.userData);
  // console.log(userData);

  //handling toggle of training dropdown
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };
  
  return (
    <div className="sticky top-0 bg-white z-50">
      <div className="md:border-b-[1px] md:border-[#D9D9D9] xl:w-[80rem] xl:px-0 md:px-10 sm:w-full  m-auto">
        <div className="container mx-auto  md:flex md:items-center md:justify-between md:pt-[9px] pb-[10px] grid grid-cols-3">
          <Link
            href="/"
            className="hidden md:block"
            aria-label="website logo link"
          >
            <div className="cursor-pointer ">
              <Image
                width={250}
                height={200}
                src="/assets/ts-final-logo.png"
                alt="logo"
                className="w-[210px] h-[40px]"
              />
            </div>
          </Link>

  

          <div className=" items-center gap-[22px] hidden md:flex">
            <ul className=" items-center gap-[26px] hidden md:flex">
              <li>
              <div
            className="relative"
            onMouseEnter={handleMenuToggle}
            onMouseLeave={handleMenuToggle}
          >
            <p className="text-[#505056] text-[15px] leading-[17.58px] tracking-[0.02em] font-normal cursor-pointer">
              Training
            </p>
            {showMenu && (
              <div className="absolute z-10 mt-0 bg-white rounded-md shadow-lg md:w-[350px]">
                <div className="py-1">
            
             
                <p className=" pt-1 py-2">
                    </p>
                  <Link href="training/fridgeactraining" className='w-[full]'>
                    <p className="block px-6 py-2 text-sm text-[grey] hover:bg-gray-100">
                      Fridge & AC Training Training In Kathmandu
                    </p>
                    <hr />
                  </Link>
                  <Link  href="training/wachingmachinetraining" className='w-[full]'>
                    <p className="block px-6 py-2 text-sm text-[grey] hover:bg-gray-100">
                      Washing Machine Repair Training In Kathmandu
                    </p>
                    <hr />
                  </Link>
                  <Link href="training/homeappliancestraining" className='w-[full]'>
                    <p className="block px-6 py-2 text-sm text-[grey] hover:bg-gray-100">
                      Home Appliances Repair Training In Kathmandu
                    </p>
                    <hr />
                  </Link>
                  <Link href="training/ledtvtraining" className='w-[full]'>
                    <p className="block px-6 py-2 text-sm text-[grey] hover:bg-gray-100">
                      Led Tv Training In Kathmandu
                    </p>
                    <hr />
                  </Link>
                  <Link href="training/plumbingtraining" className='w-[full]'>
                    <p className="block px-6 py-2 text-sm text-[grey] hover:bg-gray-100">
                      Plumbing Training In Kathmandu
                    </p>
                  </Link>
             
            
                </div>
              </div>
            )}
          </div>
              </li>
              <li>
                <Link
                  aria-label="All Services Link"
                  href="/allservices"
                  className="text-[#505056] text-[15px] leading-[17.58px] tracking-[0.02em] font-normal cursor-pointer"
                >
                  All Services
                </Link>
              </li>

              <li>
                <Link
                  aria-label="Professionals Link"
                  href="/professionals"
                  className="text-[#505056] text-[15px] leading-[17.58px] tracking-[0.02em] font-normal cursor-pointer"
                >
                  Professionals
                </Link>
              </li>
              <li>
                <Link
                  aria-label="Part Purja Link"
                  href="/partpurja"
                  className="text-[#505056] text-[15px] leading-[17.58px] tracking-[0.02em] font-normal cursor-pointer"
                >
                  Part Purja
                </Link>
              </li>
              <li className={`${signedIn ? "block" : "hidden"}`}>
                <Link
                  aria-label="Profile Link"
                  href="/profile"
                  className="text-[#505056] text-[15px] leading-[17.58px] tracking-[0.02em] font-normal cursor-pointer"
                >
                  Profile
                </Link>
              </li>
              <li className={`${signedIn ? "block" : "hidden"}`}>
                <Link
                  aria-label="Complain Link"
                  href="/complains"
                  className="text-[#505056] text-[15px] leading-[17.58px] tracking-[0.02em] font-normal cursor-pointer"
                >
                  Complains
                </Link>
              </li>
              {/* <li className={`${signedIn ? "block" : "hidden"}`}>
                <Link
                  href="/notifications"
                  className="text-[#505056] text-[15px] leading-[17.58px] tracking-[0.02em] font-normal cursor-pointer"
                >
                  <MdNotifications />
                </Link>
              </li> */}
            </ul>
            <button
              className=" hidden md:flex items-center bg-[#2591B2] gap-[8px] py-[8.5px] px-[13px]  rounded-[3px]"
              onClick={handleSignInOut}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 11"
                fill="none"
                xmlns="https:////www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.80267 0.0378123C5.56467 -0.196217 4.66667 0.697351 4.66667 1.58084V9.41916C4.66667 10.3026 5.56467 11.1962 6.80267 10.9622C9.77733 10.4001 12 8.16839 12 5.5C12 2.83161 9.77733 0.599932 6.80267 0.0378123ZM6.862 3.42453C6.98702 3.31956 7.15656 3.2606 7.33333 3.2606C7.51011 3.2606 7.67965 3.31956 7.80467 3.42453L9.80467 5.10417C9.92965 5.20916 9.99986 5.35154 9.99986 5.5C9.99986 5.64846 9.92965 5.79084 9.80467 5.89584L7.80467 7.57547C7.67893 7.67746 7.51053 7.73389 7.33573 7.73262C7.16093 7.73134 6.99373 7.67246 6.87012 7.56865C6.74652 7.46485 6.6764 7.32442 6.67488 7.17762C6.67337 7.03083 6.74056 6.8894 6.862 6.7838L7.724 6.05988H0.666667C0.489856 6.05988 0.320286 6.00089 0.195262 5.8959C0.0702379 5.7909 0 5.64849 0 5.5C0 5.35151 0.0702379 5.2091 0.195262 5.10411C0.320286 4.99911 0.489856 4.94012 0.666667 4.94012H7.724L6.862 4.2162C6.73702 4.1112 6.66681 3.96882 6.66681 3.82036C6.66681 3.6719 6.73702 3.52952 6.862 3.42453Z"
                  fill="#FDFEFF"
                />
              </svg>
              <p className="text-white text-[16px]s">
                {`${signedIn ? "Sign Out" : "Sign In"}`}
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between ml-4 mb-3">
        <div className="flex items-center justify-center md:hidden">
          <Link href="/">
            <Image
              src="/assets/ts-final-logo.png"
              width={250}
              height={200}
              className="h-7"
              alt="logo"
            />
          </Link>
        </div>
        <Burger />
      </div>
    </div>
  );
};

export default Topbar;
