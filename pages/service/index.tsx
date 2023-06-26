import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footerinfo from "../../components/Footerinfo";
// import Footer from "../../components/mblviewComponents/Footer";
import { icons } from "../../utils/category-icons";
import { setCategories } from "../../redux/allServices";
import {
  setActiveCategory,
  setProductDetails,
  setServiceUrl,
  setSubCategory,
} from "../../redux/productDetails";
import { setProductIdSlug } from "../../redux/slugSlice";
import { NextSeo } from "next-seo";
import Image from "next/image";

type Props = {};

const Service = (props: Props) => {
  const [Brands, setBrands] = useState([]);
  const [activeCategory, setActiveCategoryLocal] = useState("");

  const dispatch = useDispatch();

  // Active Category from Redux
  const reduxCat = useSelector(
    (state: any) => state?.productDetails?.activeCategory
  );

  useEffect(() => {
    setActiveCategoryLocal(reduxCat);

    axios
      .get(
        "https://smartcare.com.np/techsewa/masterconfig/publicmasterconfig/getServiceList"
      )
      .then((res) => {
        let data = res?.data?.brands;
        // console.log(data);
        setBrands(res.data.brands);
        dispatch(setCategories(data));
        // console.log(brands);
      })
      .catch((error) => console.log("Axios Error: " + error));
  }, []);

  const allservice = useSelector(
    (state: any) => state?.allServices?.allServices
  );

  const handleCategoryClick = (category: any) => {
    setActiveCategoryLocal(category);
  };

  // console.log(allservice, "allservice servicepage");

  //Updating Redux Active Category
  useEffect(() => {
    dispatch(setActiveCategory(activeCategory));
  }, [activeCategory]);

  return (
    <div className="pb-[120px]">
      <NextSeo
        title="Service | Technical Sewa"
        description="Service page of Technical Sewa"
      />
      {/* <Topbar /> */}
      <div className="px-[14px]">
        <div className=" flex items-center bg-[#FFAA45]/[0.2] rounded-[2px] w-full cursor-pointer pr-[10.5px] md:hidden">
          <input
            type="text"
            placeholder="Search for a service"
            className="w-full outline-none pt-[13px] pb-[13px] pl-[17.99px] placeholder:text-[#495057D4] placeholder:text-[12px] leading-[18px] bg-transparent font-light tracking-[0.3px]"
          />
          <div className="">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="https:////www.w3.org/2000/svg"
            >
              <path
                d="M8.64648 16.646C10.4215 16.6456 12.1453 16.0514 13.5435 14.958L17.9395 19.354L19.3535 17.94L14.9575 13.544C16.0515 12.1457 16.6461 10.4214 16.6465 8.646C16.6465 4.235 13.0575 0.645996 8.64648 0.645996C4.23548 0.645996 0.646484 4.235 0.646484 8.646C0.646484 13.057 4.23548 16.646 8.64648 16.646ZM8.64648 2.646C11.9555 2.646 14.6465 5.337 14.6465 8.646C14.6465 11.955 11.9555 14.646 8.64648 14.646C5.33748 14.646 2.64648 11.955 2.64648 8.646C2.64648 5.337 5.33748 2.646 8.64648 2.646Z"
                fill="#676767"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* <div className='h-[1px] w-full bg-[#F2F2F2] mt-[14px]' >
            </div> */}
      <div className="">
        {/* <h2 className='text-[#2591B2]  text-[17px] leading-[38.88px] mt-[10px] font-bold'>Services</h2> */}
        <div className="flex  mt-[12px] gap-y-[12px] pb-[20px] ">
          <div className="flex gap-[8px] flex-col bg-white pr-[0px] overflow-auto h-[80vh] w-32">
            {Brands.filter((items: any, index: any) => index < 12).map(
              (items: any, index: any) => (
                <div
                key={index}
                  onClick={() => handleCategoryClick(items?.brand_name)}
                  className="flex items-center justify-center flex-col  bg-[white] h-[78px] w-full px-[1px]  pb-[5px]"
                >
                  <div className="text-xl text-[var(--primary-color)]">
                    {icons[index]}
                  </div>
                  <p className="mt-[9px] text-[#000000BF] mx-2 text-[12px] md:text-[15px] leading-[17.58px] font-medium text-center">
                    {items?.brand_name}
                  </p>
                </div>
              )
            )}
          </div>
          <div className="basis-[76%] bg-[#F9F9F9] pl-[19px]">
            <h2 className="mt-[14px] text-[var(--primary-color)] text-[14px] leading-[12.89px] font-normal">
              {activeCategory}
            </h2>
            <div className="grid  grid-cols-2 gap-x-[16px] gap-y-[19px] mt-[11px] pr-[39px]">
              {allservice.map((items: any, index: any) => {
                // console.log(items);
                if (items?.brand_name === activeCategory) {
                  let imageUrl;
                  if (items?.image_url) {
                    imageUrl = items?.image_url.replace(
                      "https://smartcare.com.np/multiservice/",
                      "https:////smartcare.com.np/techsewa/"
                    );
                  }
                  return (
                    <div
                      key={index}
                      onClick={() => {
                        dispatch(setProductDetails(items));
                        dispatch(setServiceUrl(items?.url_product_name));
                        dispatch(setProductIdSlug(items?.product_id));
                        dispatch(setActiveCategory(items?.brand_name));
                        dispatch(setSubCategory(items?.product_name));
                      }}
                    >
                      {/* Select Product Category Page Link */}
                      <Link
                        className=""
                        href={{
                          pathname: `/repair/${items?.url_product_name}`,
                        }}
                      >
                        <div className="flex items-center justify-center flex-col">
                          <div className="w-[106px] h-[70px] bg-white mb-[8px] flex items-center justify-center">
                            <Image
                            width={250} height={200}
                              src={imageUrl}
                              className="w-[80px] h-[50px] "
                              alt="service image"
                            />
                          </div>
                          {items?.brand_name !== "Popular Brands" ? (
                            <div className="text-[#505056] text-[12px] h-[2rem] font-normal text-center">
                              {items?.product_name}
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </Link>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#2591B2] px-[12px]">
        <p className="text-white text-[12px] leading-[21.6px] font-normal text-center pt-[11.88px] pb-[17px]">
          We are nationally proving ater sales support service for Washing
          Machine, Refrigerator, Air-conditioner, Vacuum Cleaner, Microwave Oven
          and Medical Equiment... we have wide of range of Technicians who are
          fully trend and experience more than 10 years. we have available all
          types of spare parts in genuine.
        </p>
        <div className="flex gap-[10.32px] items-center justify-center pb-[14px]">
          <svg
            className="animate-pulse"
            width="25"
            height="26"
            viewBox="0 0 25 26"
            fill="none"
            xmlns="https:////www.w3.org/2000/svg"
          >
            <path
              d="M12.5684 0.881104C5.91441 0.881104 0.5 6.29401 0.5 12.9487C0.5 19.6035 5.91441 25.0164 12.5684 25.0164C19.2224 25.0164 24.6368 19.6035 24.6368 12.9487C24.6368 6.29401 19.2224 0.881104 12.5684 0.881104ZM12.5684 24.2126C6.35771 24.2126 1.30531 19.1594 1.30531 12.9487C1.30531 6.73806 6.35771 1.68491 12.5684 1.68491C18.7791 1.68491 23.8315 6.73806 23.8315 12.9487C23.8315 19.1594 18.7791 24.2126 12.5684 24.2126Z"
              fill="white"
            />
            <path
              d="M15.2028 6.17509H13.1948C10.6373 6.1495 10.3107 7.73228 10.3107 9.44526V10.6909H9.18175C9.13073 10.684 9.07882 10.6891 9.03005 10.7056C8.98129 10.7221 8.93699 10.7496 8.90059 10.786C8.86418 10.8224 8.83666 10.8667 8.82016 10.9155C8.80366 10.9642 8.79862 11.0161 8.80544 11.0672V13.3251C8.79862 13.3761 8.80366 13.428 8.82016 13.4768C8.83666 13.5255 8.86418 13.5698 8.90059 13.6062C8.93699 13.6426 8.98129 13.6701 9.03005 13.6866C9.07882 13.7032 9.13073 13.7082 9.18175 13.7014H10.3107V19.3461C10.3044 19.3972 10.3099 19.4491 10.3268 19.4977C10.3436 19.5464 10.3713 19.5906 10.4079 19.6269C10.4444 19.6632 10.4887 19.6907 10.5375 19.7072C10.5863 19.7238 10.6382 19.729 10.6893 19.7224H12.9885C13.2106 19.748 13.3905 19.5681 13.3197 19.3461L13.3212 13.7014H15.2028C15.2538 13.7082 15.3057 13.7032 15.3545 13.6866C15.4032 13.6701 15.4475 13.6426 15.4839 13.6062C15.5203 13.5698 15.5479 13.5255 15.5644 13.4768C15.5809 13.428 15.5859 13.3761 15.5791 13.3251V11.0672C15.5859 11.0161 15.5809 10.9642 15.5644 10.9155C15.5479 10.8667 15.5203 10.8224 15.4839 10.786C15.4475 10.7496 15.4032 10.7221 15.3545 10.7056C15.3057 10.6891 15.2538 10.684 15.2028 10.6909H13.319L13.3212 9.56192C13.3942 9.08099 13.3942 9.15926 13.8405 9.1856H15.187C15.2916 9.16227 15.403 9.17507 15.4813 9.09905C15.5595 9.02304 15.6047 8.91917 15.5783 8.80929V6.5514C15.5853 6.50042 15.5804 6.44852 15.564 6.39975C15.5476 6.35098 15.5201 6.30665 15.4838 6.27023C15.4474 6.23381 15.4031 6.20627 15.3544 6.18977C15.3057 6.17327 15.2538 6.16824 15.2028 6.17509ZM14.8001 8.39083L13.8563 8.3547C12.6875 8.3547 12.5897 8.98917 12.5897 9.63869L12.5866 11.0657C12.5865 11.1185 12.5969 11.1709 12.617 11.2197C12.6372 11.2685 12.6668 11.3129 12.7041 11.3503C12.7414 11.3877 12.7858 11.4174 12.8346 11.4377C12.8834 11.4579 12.9357 11.4683 12.9885 11.4683H14.8265V12.9224H12.9901C12.8834 12.9224 12.7811 12.9647 12.7056 13.0401C12.6301 13.1154 12.5876 13.2176 12.5874 13.3243L12.5866 18.9698H11.0633V13.3251C11.0633 13.103 10.912 12.9232 10.6893 12.9232H9.55807V11.4691H10.6893C10.7421 11.4692 10.7944 11.4588 10.8432 11.4387C10.892 11.4185 10.9364 11.389 10.9738 11.3517C11.049 11.2757 11.0626 11.1733 11.0626 11.0664V9.44451C11.0626 7.75711 11.4035 6.95331 13.194 6.95331H14.7994V8.39083H14.8001Z"
              fill="white"
            />
          </svg>
          <svg
            className="animate-pulse delay-200"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="https:////www.w3.org/2000/svg"
          >
            <path
              d="M15.6717 9.90202C15.1614 9.90202 14.7836 10.0307 14.4878 10.1933C14.4404 10.0247 14.2846 9.90127 14.1009 9.93815H11.8551C11.6331 9.90127 11.4532 10.0811 11.5217 10.3145V18.5934C11.4532 18.8041 11.6331 18.9847 11.8551 18.9697H14.1009C14.3229 18.9847 14.5028 18.8041 14.5028 18.5821L14.5021 13.5786C14.5013 13.5764 14.493 13.337 14.6443 13.1722C14.7655 13.0412 14.974 12.9742 15.2622 12.9742C15.7424 12.9742 15.9561 13.1707 16.0359 13.6102V18.5821C15.9569 18.8041 16.1368 18.9847 16.3588 18.9697H18.7258C18.9478 18.9847 19.1277 18.8041 19.0479 18.5821V13.4431C19.127 10.83 17.2657 9.90202 15.6717 9.90202ZM18.3232 18.2171H16.7607V13.6102C16.7607 12.7214 16.1865 12.1704 15.263 12.1704C14.7407 12.1704 14.3342 12.324 14.0543 12.6265C13.6651 13.048 13.6953 13.5824 13.7788 13.7013V18.2171H12.257V10.7058H13.699V10.9587C13.6984 11.034 13.7191 11.108 13.7587 11.1721C13.7982 11.2362 13.8551 11.2879 13.9227 11.3211C13.9903 11.3544 14.0659 11.3679 14.1408 11.3601C14.2158 11.3523 14.287 11.3235 14.3463 11.2771L14.4516 11.1958C14.7565 10.9557 15.0718 10.7066 15.6724 10.7066C16.2941 10.7066 18.3239 10.9045 18.3239 13.4439V18.2171H18.3232ZM9.26302 6.14941C8.41858 6.14941 7.73218 6.83581 7.73218 7.68026C7.73218 8.52471 8.41858 9.21111 9.26302 9.21111C10.1075 9.21111 10.7939 8.52471 10.7939 7.68026C10.7939 6.83581 10.1075 6.14941 9.26302 6.14941ZM9.26302 8.4073C8.86263 8.4073 8.53599 8.08066 8.53599 7.68026C8.53599 7.27986 8.86263 6.95322 9.26302 6.95322C9.66342 6.95322 9.99006 7.27986 9.99006 7.68026C9.99006 8.08066 9.66342 8.4073 9.26302 8.4073ZM10.3378 9.90127H8.10398C7.88195 9.90127 7.70207 10.0811 7.75777 10.3145V18.5934C7.70207 18.8041 7.88195 18.9847 8.10398 18.9697H10.3378C10.5598 18.9847 10.7397 18.8041 10.7397 18.5821V10.3032C10.7397 10.1966 10.6973 10.0944 10.622 10.019C10.5466 9.94361 10.4444 9.90127 10.3378 9.90127ZM10.0157 18.2171H8.50588V10.7058H10.0157V18.2171Z"
              fill="white"
            />
            <path
              d="M13.0264 0.881104C6.37164 0.881104 0.95874 6.29401 0.95874 12.9487C0.95874 19.6035 6.37164 25.0164 13.0264 25.0164C19.6811 25.0164 25.094 19.6035 25.094 12.9487C25.094 6.29401 19.6811 0.881104 13.0264 0.881104ZM13.0264 24.2126C6.81569 24.2126 1.76255 19.1594 1.76255 12.9487C1.76255 6.73806 6.81569 1.68491 13.0264 1.68491C19.2371 1.68491 24.2902 6.73806 24.2902 12.9487C24.2902 19.1594 19.2371 24.2126 13.0264 24.2126Z"
              fill="white"
            />
          </svg>
          <svg
            className="animate-pulse delay-700"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="https:////www.w3.org/2000/svg"
          >
            <circle
              cx="12.4579"
              cy="12.9488"
              r="11.612"
              stroke="white"
              strokeWidth="0.860147"
            />
            <path
              d="M12.4573 8.13184C11.1502 8.13184 10.9858 8.13786 10.4722 8.16074C9.9586 8.18482 9.60878 8.2655 9.30231 8.38472C8.98084 8.50563 8.68966 8.6953 8.44913 8.94046C8.20412 9.18112 8.01447 9.47226 7.89339 9.79364C7.77417 10.0995 7.69289 10.4499 7.6694 10.9617C7.64652 11.4765 7.6405 11.6403 7.6405 12.9493C7.6405 14.257 7.64652 14.4208 7.6694 14.9344C7.69349 15.4474 7.77417 15.7972 7.89339 16.1037C8.01682 16.4204 8.18119 16.6889 8.44913 16.9569C8.71646 17.2248 8.985 17.3898 9.3017 17.5126C9.60878 17.6318 9.958 17.7131 10.471 17.7366C10.9852 17.7595 11.149 17.7655 12.4573 17.7655C13.7657 17.7655 13.9289 17.7595 14.4431 17.7366C14.9554 17.7125 15.3065 17.6318 15.6129 17.5126C15.9342 17.3916 16.2252 17.202 16.4655 16.9569C16.7335 16.6889 16.8978 16.4204 17.0213 16.1037C17.1399 15.7972 17.2212 15.4474 17.2452 14.9344C17.2681 14.4208 17.2741 14.257 17.2741 12.9487C17.2741 11.6403 17.2681 11.4765 17.2452 10.9623C17.2212 10.4499 17.1399 10.0995 17.0213 9.79364C16.9002 9.47225 16.7105 9.18111 16.4655 8.94046C16.2251 8.69521 15.9339 8.50553 15.6123 8.38472C15.3053 8.2655 14.9548 8.18422 14.4425 8.16074C13.9283 8.13786 13.7651 8.13184 12.4561 8.13184H12.4579H12.4573ZM12.0256 9.00007H12.4579C13.744 9.00007 13.8963 9.00428 14.4039 9.02776C14.8736 9.04884 15.1289 9.12771 15.2986 9.19334C15.5232 9.28065 15.684 9.38541 15.8526 9.554C16.0212 9.72259 16.1253 9.88275 16.2126 10.1079C16.2789 10.2771 16.3571 10.5324 16.3782 11.0021C16.4017 11.5096 16.4065 11.662 16.4065 12.9475C16.4065 14.2329 16.4017 14.3859 16.3782 14.8934C16.3571 15.3631 16.2783 15.6178 16.2126 15.7876C16.1354 15.9967 16.0122 16.1858 15.852 16.3409C15.6834 16.5095 15.5232 16.6137 15.298 16.701C15.1295 16.7672 14.8742 16.8455 14.4039 16.8671C13.8963 16.89 13.744 16.8954 12.4579 16.8954C11.1718 16.8954 11.0189 16.89 10.5113 16.8671C10.0417 16.8455 9.787 16.7672 9.61721 16.701C9.40797 16.6238 9.21869 16.5008 9.06327 16.3409C8.90296 16.1856 8.77951 15.9963 8.70201 15.787C8.63638 15.6178 8.55751 15.3625 8.53643 14.8928C8.51355 14.3853 8.50873 14.2329 8.50873 12.9462C8.50873 11.6602 8.51355 11.5084 8.53643 11.0009C8.55811 10.5312 8.63638 10.2759 8.70261 10.1061C8.78992 9.88155 8.89468 9.72078 9.06327 9.5522C9.23186 9.38361 9.39202 9.27944 9.61721 9.19214C9.787 9.12591 10.0417 9.04763 10.5113 9.02596C10.9557 9.00549 11.1279 8.99947 12.0256 8.99886V9.00007ZM15.0289 9.79966C14.953 9.79966 14.8778 9.81461 14.8077 9.84366C14.7376 9.87271 14.6739 9.91528 14.6202 9.96896C14.5665 10.0226 14.5239 10.0864 14.4949 10.1565C14.4658 10.2266 14.4509 10.3018 14.4509 10.3777C14.4509 10.4536 14.4658 10.5287 14.4949 10.5989C14.5239 10.669 14.5665 10.7327 14.6202 10.7864C14.6739 10.8401 14.7376 10.8827 14.8077 10.9117C14.8778 10.9407 14.953 10.9557 15.0289 10.9557C15.1822 10.9557 15.3292 10.8948 15.4376 10.7864C15.546 10.678 15.6069 10.531 15.6069 10.3777C15.6069 10.2244 15.546 10.0774 15.4376 9.96896C15.3292 9.86056 15.1822 9.79966 15.0289 9.79966ZM12.4579 10.4752C12.1298 10.4701 11.804 10.5303 11.4994 10.6523C11.1948 10.7743 10.9175 10.9557 10.6836 11.186C10.4498 11.4162 10.2641 11.6906 10.1373 11.9933C10.0106 12.2959 9.94529 12.6208 9.94529 12.949C9.94529 13.2771 10.0106 13.602 10.1373 13.9046C10.2641 14.2073 10.4498 14.4817 10.6836 14.712C10.9175 14.9422 11.1948 15.1236 11.4994 15.2456C11.804 15.3676 12.1298 15.4278 12.4579 15.4227C13.1073 15.4126 13.7267 15.1475 14.1823 14.6847C14.638 14.2219 14.8934 13.5984 14.8934 12.949C14.8934 12.2995 14.638 11.6761 14.1823 11.2132C13.7267 10.7504 13.1073 10.4854 12.4579 10.4752ZM12.4579 11.3428C12.8838 11.3428 13.2923 11.512 13.5934 11.8132C13.8946 12.1143 14.0637 12.5228 14.0637 12.9487C14.0637 13.3745 13.8946 13.783 13.5934 14.0841C13.2923 14.3853 12.8838 14.5545 12.4579 14.5545C12.032 14.5545 11.6236 14.3853 11.3224 14.0841C11.0213 13.783 10.8521 13.3745 10.8521 12.9487C10.8521 12.5228 11.0213 12.1143 11.3224 11.8132C11.6236 11.512 12.032 11.3428 12.4579 11.3428Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      {/* <div className='px-[10px] mb-[30px]'>
                <div className='flex items-center justify-between '>
                    <h1 className='text-[#2591B2] text-[110px] md:text-[20px] leading-[38.88px] font-bold'>Top Service</h1>
                    <p className='md:hidden text-[#BB243F]/[0.5] text-[7px] leading-[18px] font-normal cursor-pointer'>View All</p>
                </div>
                <div className='mt-[7px]'>
                    <Image width={250} height={200} src="/../assets/mblview/topservice.png" className='w-full' alt="" />
                </div>
            </div> */}
      <Footerinfo />
      {/* <Footer/> */}
    </div>
  );
};

export default Service;
