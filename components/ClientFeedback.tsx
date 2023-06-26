import React from "react";
import Image from "next/image";

type Props = {};

const ClientFeedback = (props: Props) => {
  return (
    <div className="bg-[#ED1B26]/[0.05] w-full grid grid-cols-2">
      <div className="w-full 2xl:flex 2xl:items-center 2xl:justify-center 2xl:flex-col 2xl:pb-[60px]">
        <h2 className="text-black text-[32px] leading-[37.5px] font-semibold mt-[22px] ml-[85px]">
          What Our Happy Clients Say
        </h2>
        <div className="bg-white h-[408px] feedback w-[307px] mt-[52px] ml-[161px] flex items-center relative justify-center pl-[24px] pr-[17px]">
          <svg
            className="absolute top-[21px] right-[17px]"
            width="67"
            height="48"
            viewBox="0 0 67 48"
            fill="none"
            xmlns="https:////www.w3.org/2000/svg"
          >
            <path
              d="M50.593 39.7137L50.593 39.7137L50.5961 39.7072L54.8883 30.7618L55.232 30.0455H54.4375H46.0625C43.9 30.0455 42.0582 29.249 40.5108 27.6337L40.5102 27.6331C38.9596 26.02 38.1875 24.0909 38.1875 21.8182V8.72727C38.1875 6.45456 38.9596 4.52545 40.5102 2.91232L40.5108 2.91171C42.0582 1.29644 43.9 0.5 46.0625 0.5H58.625C60.7875 0.5 62.6308 1.29648 64.1812 2.91202C65.7291 4.52509 66.5 6.45429 66.5 8.72727V28.4727C66.5 29.1002 66.4492 29.7483 66.3466 30.4174L66.3464 30.419C66.2525 31.0455 66.048 31.6187 65.7337 32.1428L65.7222 32.162L65.7125 32.1822L59.7453 44.5094L59.7445 44.511C59.2941 45.4497 58.657 46.1771 57.8317 46.7064C57.0024 47.2382 56.1186 47.5 55.1703 47.5C53.2589 47.5 51.8128 46.6714 50.7829 44.9623C49.7559 43.255 49.6909 41.5266 50.593 39.7137ZM12.9055 39.7137L12.9055 39.7137L12.9086 39.7072L17.2008 30.7618L17.5445 30.0455H16.75H8.375C6.21252 30.0455 4.37073 29.249 2.8233 27.6337L2.82271 27.6331C1.27206 26.02 0.5 24.0909 0.5 21.8182V8.72727C0.5 6.45456 1.27206 4.52545 2.82271 2.91232L2.8233 2.91171C4.37073 1.29644 6.21252 0.5 8.375 0.5H20.9375C23.1 0.5 24.9434 1.29648 26.4937 2.91202C28.0416 4.52509 28.8125 6.45429 28.8125 8.72727V28.4727C28.8125 29.1006 28.763 29.749 28.6632 30.4183C28.5666 31.0451 28.3607 31.6185 28.0462 32.1428L28.0347 32.162L28.025 32.1822L22.0578 44.5094L22.057 44.511C21.6066 45.4497 20.9695 46.1771 20.1442 46.7064C19.3149 47.2382 18.4311 47.5 17.4828 47.5C15.5714 47.5 14.1253 46.6714 13.0954 44.9623C12.0684 43.255 12.0034 41.5266 12.9055 39.7137Z"
              stroke="#ED1B26"
            />
          </svg>

          <p className="text-[18px] leading-[27.81px] font-medium italic text-center">
            Such service platforms are available in other countries. I’ve
            personally used those when I was abroad. I’m very pleased that such
            a portal is available here in Bangladesh as well.{" "}
          </p>
          <div className="absolute left-[50%] transform translate-x-[-50%] bottom-[-12%] flex items-center justify-center flex-col">
            <Image width={250} height={200}
              src="/../assets/juniorceo.png"
              className=""
              alt="juniorceo.png"
            />
            <h2 className="text-[#ED1B26] text-[18px] leading-[27.81px] font-bold mt-[-10px] ">
              Jenifer , CEO
            </h2>
          </div>
          <svg
            className="absolute top-[50%] transform translate-y-[-50%] 2xl:right-[-35%] xl:right-[-30%]"
            width="45"
            height="29"
            viewBox="0 0 45 29"
            fill="none"
            xmlns="https:////www.w3.org/2000/svg"
          >
            <path
              d="M22.5004 25.98C19.1113 25.98 16.364 20.8402 16.364 14.5C16.364 8.15979 19.1113 3.02002 22.5004 3.02002C25.8894 3.02002 28.6367 8.15979 28.6367 14.5C28.6367 20.8402 25.8894 25.98 22.5004 25.98Z"
              fill="#ED1B26"
            />
            <path
              d="M31.7045 14.5C31.7045 12.56 31.2341 6.18 25.5068 1.5C27.1023 0.88 28.8409 0.5 30.6818 0.5C38.5773 0.5 45 6.78 45 14.5C45 22.22 38.5773 28.5 30.6818 28.5C28.8409 28.5 27.1023 28.12 25.5068 27.5C31.2341 22.82 31.7045 16.44 31.7045 14.5ZM14.3182 0.5C16.1591 0.5 17.8977 0.88 19.4932 1.5C18.2455 2.52 17.2432 3.64 16.4455 4.76C15.7705 4.6 15.0545 4.5 14.3182 4.5C8.67273 4.5 4.09091 8.98 4.09091 14.5C4.09091 20.02 8.67273 24.5 14.3182 24.5C15.0545 24.5 15.7705 24.4 16.4455 24.24C17.2432 25.36 18.2455 26.48 19.4932 27.5C17.8977 28.12 16.1591 28.5 14.3182 28.5C6.42273 28.5 0 22.22 0 14.5C0 6.78 6.42273 0.5 14.3182 0.5Z"
              fill="#ED1B26"
            />
          </svg>
          <svg
            className="absolute top-[50%] transform translate-y-[-50%] 2xl:left-[-35%] xl:left-[-30%]"
            width="45"
            height="29"
            viewBox="0 0 45 29"
            fill="none"
            xmlns="https:////www.w3.org/2000/svg"
          >
            <path
              d="M22.4996 25.98C25.8887 25.98 28.636 20.8402 28.636 14.5C28.636 8.15979 25.8887 3.02002 22.4996 3.02002C19.1106 3.02002 16.3633 8.15979 16.3633 14.5C16.3633 20.8402 19.1106 25.98 22.4996 25.98Z"
              fill="#ED1B26"
            />
            <path
              d="M13.2955 14.5C13.2955 12.56 13.7659 6.18 19.4932 1.5C17.8977 0.88 16.1591 0.5 14.3182 0.5C6.42273 0.5 0 6.78 0 14.5C0 22.22 6.42273 28.5 14.3182 28.5C16.1591 28.5 17.8977 28.12 19.4932 27.5C13.7659 22.82 13.2955 16.44 13.2955 14.5ZM30.6818 0.5C28.8409 0.5 27.1023 0.88 25.5068 1.5C26.7545 2.52 27.7568 3.64 28.5545 4.76C29.2295 4.6 29.9455 4.5 30.6818 4.5C36.3273 4.5 40.9091 8.98 40.9091 14.5C40.9091 20.02 36.3273 24.5 30.6818 24.5C29.9455 24.5 29.2295 24.4 28.5545 24.24C27.7568 25.36 26.7545 26.48 25.5068 27.5C27.1023 28.12 28.8409 28.5 30.6818 28.5C38.5773 28.5 45 22.22 45 14.5C45 6.78 38.5773 0.5 30.6818 0.5Z"
              fill="#ED1B26"
            />
          </svg>
        </div>
      </div>
      <div className="relative w-full  flex justify-end items-end">
        <Image width={250} height={200}
          src="/../assets/clientfeedback.png"
          className="w-[563px] h-[598px] 2xl:w-[650px] 2xl:h-[730px] "
          alt="feedback.png"
        />
      </div>
    </div>
  );
};

export default ClientFeedback;
