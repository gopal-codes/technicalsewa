import React from "react";
import { FadeLoader } from "react-spinners";

const LoadingComponent = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <FadeLoader color="#2591b2"></FadeLoader>;
    </div>
  );
};

export default LoadingComponent;
