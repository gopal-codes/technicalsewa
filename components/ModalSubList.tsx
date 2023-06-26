import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import {
  setActiveCategory,
  setActiveProductName,
  setProductCategoryList,
  setProductDetails,
  setServiceUrl,
  setSubCategory,
} from "../redux/productDetails";
import { setProductIdSlug } from "../redux/slugSlice";

const ModalSubList = (props: any) => {
  const [subList, setSubList] = useState([]);
  const activeCategory = useSelector(
    (state: any) => state.productDetails.activeCategory
  );
  //product id
  const { id } = props;
  // console.log(id);
  const dispatch = useDispatch();
  const productList = useSelector(
    (state: any) => state?.productListSlice?.productList
  );

  const memoizedProductList = useMemo(
    () =>
      productList.map((items: any, index: any) => {
        // console.log(items);
        return (
          <div key={index} className="min-w-[160px]">
            <List items={items} />
          </div>
        );
      }),
    [productList]
  );

  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2">
      {memoizedProductList}
    </div>
  );
};

export default ModalSubList;

const List = (props: any) => {
  const dispatch = useDispatch();
  const items = props?.items;

  console.log(items, "product");
  useEffect(() => {
    dispatch(setActiveProductName(items));
  }, []);

  let imageUrl;
  if (items?.image_url) {
    imageUrl = items?.image_url.replace(
      "https://smartcare.com.np/multiservice/",
      "https:////smartcare.com.np/techsewa/"
    );
  }

  return (
    <div
      onClick={() => {
        dispatch(setProductDetails(items));
        dispatch(setServiceUrl(items?.url_product_name));
        dispatch(setProductIdSlug(items?.product_id));
        dispatch(setActiveCategory(items?.brand_name));
        dispatch(setSubCategory(items?.product_name));
      }}
    >
      <Link
        href={{
          pathname: `/repair/${items?.url_product_name}`,
        }}
      >
        <div className="flex flex-col justify-center items-center mb-5 li">
          <div
            className={`rounded-full p-2 h-20 border-2 border-[var(--primary-color)] flex items-center`}
          >
            <Image width={250} height={200} src={imageUrl} className="w-20 rounded-full p-2" alt="" />
          </div>
          {/* <Image width={250} height={200}
            src={items?.image_url}
            className="border-2 border-bla
          h-10 w-32 justify-center text-center text-white bg-[#2591B2] py-5 text-xl flex items-center rounded-xl"
            alt="err"
          /> */}
          {items?.brand_name !== "Popular Brands" ? (
            <span className="mt-2 w-32 h-10 line-clamp-2  text-[12px] text-center">
              <strong>{items?.product_name}</strong>
            </span>
          ) : (
            ""
          )}
          {/* <div className="text-[11px]  w-full text-justify">
        {parse(items?.description)}
      </div> */}
        </div>
      </Link>
    </div>
  );
};
