import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import parse from "html-react-parser";

const ProductDescription = (props: any) => {
  const [productDescription, setProductDescription] = useState("<p></p>");

  const activeSubCategory = useSelector(
    (state: any) => state.productDetails.activeSubCategory
  );
  const list = useSelector((state: any) => state.productDetails.productList);
  console.log(list, "lisst");

  //Sub Category List
  const activeProduct = useSelector(
    (state: any) => state.activeProductSlice.activeProductName
  );

  // console.log(activeProduct, "product on description product-page");

  useEffect(() => {
    setProductDescription(activeProduct?.content);
  }, [activeProduct?.content]);

  useEffect(() => {
    var axios = require("axios");
    var FormData = require("form-data");
    var data = new FormData();
    data.append("product_id", "11");

    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://smartcare.com.np/techsewa/publicControl/GetProductcategiryByProduct",
      // headers: {
      //   ...data.getHeaders(),
      // },
      data: data,
    };

    axios(config)
      .then(function (response: any) {
        // console.log(response.data);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  });
  console.log(productDescription, "details");

  const details = useSelector(
    (state: any) => state?.productDetails?.buyProductDetails
  );
  console.log(details);

  return (
    <div className="text-black">{parse("<div>" + details + "</div>")}</div>
  );
};

export default ProductDescription;
