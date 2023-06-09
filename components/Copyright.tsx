import React from "react";

type Props = {};

const Copyright = (props: Props) => {
  return (
    <div className="bg-[#054355] py-[9px]">
      <p className="flex items-center justify-center text-white md:text-[14px] text-[10px] opacity-[0.5] tracking-[0.3px] leading-[14.06px] font-light">
        Copyright
        <svg
          className="ml-[12px] mr-[2px]"
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="https:////www.w3.org/2000/svg"
        >
          <path
            d="M6.5 13C10.0236 13 13 10.0236 13 6.5C13 2.97635 10.0236 0 6.5 0C2.97635 0 0 2.97635 0 6.5C0 10.0236 2.97635 13 6.5 13ZM6.5 1.3C9.31905 1.3 11.7 3.68095 11.7 6.5C11.7 9.31905 9.31905 11.7 6.5 11.7C3.68095 11.7 1.3 9.31905 1.3 6.5C1.3 3.68095 3.68095 1.3 6.5 1.3Z"
            fill="white"
            fillOpacity="0.7"
          />
          <path
            d="M6.66992 9.75C7.25557 9.75 8.34757 9.6408 9.07947 8.9102L8.16037 7.9898C7.87242 8.27775 7.31472 8.45 6.66992 8.45C5.61302 8.45 4.71992 7.5569 4.71992 6.5C4.71992 5.4431 5.61302 4.55 6.66992 4.55C7.31537 4.55 7.87307 4.72225 8.16037 5.00955L9.07947 4.09045C8.34822 3.3592 7.25557 3.25 6.66992 3.25C4.87787 3.25 3.41992 4.70795 3.41992 6.5C3.41992 8.29205 4.87787 9.75 6.66992 9.75Z"
            fill="white"
            fillOpacity="0.75"
          />
        </svg>{" "}
        2023 Technical Sewa
        <span className="border-l-2 pl-[5px] ml-[5px] border-white ">
          All Rights Reserved
        </span>
      </p>
    </div>
  );
};

export default Copyright;
