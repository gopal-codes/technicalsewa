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
// import { GiWashingMachine } from "react-icons/gi";1
// import Slider from "react-slick";

type Props = {};

const FotterSectionBacklink = (props: Props) => {
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
              return (
                <div key={index + 7} onClick={() => {
                  setIconIndex(index + 7)
                  handleCategoryClick(items?.brand_name);
                }} 
                className="flex items-center justify-center flex-col cursor-pointer"
                >
                  <p className="text-[#fff] text-[6.65px] md:text-[12px] text-center">
                     {items?.brand_name}
                  </p>
                </div>
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
              return (
                <div key={index + 7} onClick={() => {
                  setIconIndex(index + 7)
                  handleCategoryClick(items?.brand_name);
                }} 
                className="flex items-center justify-center flex-col cursor-pointer"
                >
                  <p className="text-[#fff] text-[6.65px] md:text-[12px] text-center">
                     {items?.brand_name}
                  </p>
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
      <div className="flex justify-center ">
      <div className=" w-[60%] flex justify-center flex-wrap flex-wrap pb-2 gap-3">
        {/* Category  */}
        {/* top-flex category  */}
          {memoizedTopCategories} 
        {/* bottom-flex category  */}
          {memoizedBottomCategories}
      </div>
      </div>
    </div>
  );
};

export default FotterSectionBacklink;
