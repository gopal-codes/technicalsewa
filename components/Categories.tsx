import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Button, Modal } from "antd";
import axios from "axios";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import SubCategories from "./SubCategories";
import ModalSubList from "./ModalSubList";
import {
  setActiveCategory,
  setActiveUrl,
  setSubCategory,
} from "../redux/productDetails";
import { setCategories } from "../redux/allServices";
import { setReduxProductList } from "../redux/productListSlice";
import { icons } from "../utils/category-icons";
import { baseUrl } from "../pages/api/baseUrl";
// import { GiWashingMachine } from "react-icons/gi";
// import Slider from "react-slick";

type Props = {};
// const settings = {
//     dots: false,
//     infinite: true,
//     autoplay: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     responsive: [
//         {
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 3,
//                 infinite: true,
//                 dots: true
//             }
//         },
//         {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 2,
//                 initialSlide: 2
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 4,
//                 slidesToScroll: 3
//             }
//         }
//     ]
// };

const Categories = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [brand, setBrand] = useState(false);
  const [brands, setBrands] = useState([]);
  const [activeCategory, setactiveCategory] = useState("Appliances Repair");
  const [activeSubCategory, setActiveSubCategory] = useState({
    productName: "",
    productId: "",
    productUrl: "",
  });
  const [productList, setProductList] = useState([]);
  const dispatch = useDispatch();
  const [iconIndex, setIconIndex] = useState(Number);
  useEffect(() => {
    axios
      .get(`${baseUrl}techsewa/masterconfig/publicmasterconfig/getServiceList`)
      .then((res) => {
        let data = res?.data?.brands;
        setBrands(res.data.brands);
        dispatch(setCategories(data));
        // console.log(brands);
      })
      .catch((error) => console.log("Axios Error: " + error));
    let initialCategory = "Appliances Repair Service";
    dispatch(setActiveCategory(initialCategory));
  }, []);
  const allServices = useSelector(
    (state: any) => state.allServices.allServices
  );
  // console.log(allServices);

  useEffect(() => {
    let subcategory = allServices.filter(
      (items: any, index: any) => items?.brand_name === activeCategory
    );
    // console.log(subcategory, "sub-category");
    let obj = {
      productName: subcategory[0]?.product_name,
      productId: subcategory[0]?.product_id,
      productUrl: subcategory[0]?.url_product_name,
    };
    setActiveSubCategory(obj);
  }, [activeCategory]);

  //Redux sub category
  useEffect(() => {
    dispatch(setSubCategory(activeSubCategory.productName));
  }, [activeSubCategory]);

  // category click function
  const handleCategoryClick = (category: any) => {
    setactiveCategory(category);
    setOpen(true);
    dispatch(setActiveCategory(category));
  };

  const updateSubCategory = (id: any, name: any, url: any) => {
    let obj = {
      productName: name,
      productId: id,
      productUrl: url,
    };
    setActiveSubCategory(obj);
    dispatch(setSubCategory(obj?.productName));
  };

  // console.log(activeSubCategory, "activeSubCategory");
  useEffect(() => {
    // console.log(activeCategory);
    setProductList(
      allServices.filter(
        (items: any, index: any) => items?.brand_name === activeCategory
      )
    );
  }, [activeCategory, allServices]);

  useEffect(() => {
    dispatch(setReduxProductList(productList));
  }, [productList]);
  // console.log(productList);

  const memoizedActiveCategoryProducts = useMemo(
    () =>
      allServices
        .filter(
          (items: any, index: any) => items?.brand_name === activeCategory
        )
        .map((items: any, index: any) => {
          return (
            <div
              className="flex flex-row justify-start items-center overflow-x-hidden"
              key={index}
            >
              <div
                className="text-[#505656] p-2 text-[16px] leading-[21.87px] tracking-[0.02em] no-underline font-normal cursor-pointer hover:text-[#000] transform hover:scale-[102%] transition duration-200 ease-out hover:underline  my-[10px]"
                onClick={() =>
                  updateSubCategory(
                    items?.product_id,
                    items?.product_name,
                    items?.url_product_name
                  )
                }
              >
                {items?.product_name}
              </div>
            </div>
          );
        }),
    [allServices]
  );

  const memoizedTopCategories = useMemo(
    () =>
      brands.length
        ? brands
          .filter((items: any, index) => index < 7)
          .map((items: any, index) => {
            let imageUrl = "";
            if (items?.image_url) {
              imageUrl = items?.image_url.replace(
                "https://smartcare.com.np/multiservice/",
                "https://smartcare.com.np/techsewa/"
              );
            }


            return (
              <SubCategories
                brandName={items?.brand_name}
                imageUrl={imageUrl}
                index={index}
                key={index}
                click={() => {
                  handleCategoryClick(items?.brand_name);
                  setIconIndex(index);
                }}
              />
            );
          })
        : "",
    [brands]
  );

  const memoizedBottomCategories = useMemo(
    () =>
      brands.length
        ? brands
          .filter((items: any, index) => 6 < index && index < 12)
          .map((items: any, index) => {
            let imageUrl = "";
            if (items?.image_url) {
              imageUrl = items?.image_url.replace(
                "https://smartcare.com.np/multiservice/",
                "https:////smartcare.com.np/techsewa/"
              );
            }
            return (
              <div key={index + 7} onClick={() => setIconIndex(index + 7)}>
                <SubCategories
                  brandName={items?.brand_name}
                  index={index + 7}
                  imageUrl={imageUrl}
                  // imageUrl={iconSvgArray[index]}
                  key={index}
                  click={() => {
                    handleCategoryClick(items?.brand_name);
                  }}
                />
              </div>
            );
          })
        : "",
    [brands]
  );

  return (
    <div className="">
      <Modal
        title={
          <span className="flex gap-2 ml-4 mt-2">
            <span className="text-[28px]">{icons[iconIndex]}</span>
            <span>{activeCategory}</span>
          </span>
        }
        centered
        open={open}
        footer={[]}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={756}
      >
        <div className="flex flex-row">
          <div className="bg-[#F6F6F6] sm:w-52 overflow-y-scroll overflow-x-hidden pl-[24px] w-[262px] mt-[18px] pt-7 hidden">
            {memoizedActiveCategoryProducts}
          </div>
          {/* Modal Sublist */}
          <div className="flex-1 p-5 overflow-auto overflow-y-hidden">
            <ModalSubList id={activeSubCategory.productId} />
          </div>
        </div>
      </Modal>
      <div className="container mx-auto px-[10px] sm:px-0  md:pt-[44px] pt-[50px] md:pb-[30px] ">
        {/* Category  */}
        {/* top-flex category  */}
        <div className="md:grid md:grid-cols-7 lg:grid-cols-7 hidden gap-[19px]">
          {memoizedTopCategories}
        </div>
        {/* bottom-flex category  */}
        <div className="md:flex items-center justify-center gap-[60px] 2xl:gap-[70px] mt-[33.34px] hidden">
          {memoizedBottomCategories}
        </div>
      </div>
    </div>
  );
};

export default Categories;
