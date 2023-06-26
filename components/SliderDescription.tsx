import React from "react";

const SliderDescription = (props: any) => {
  const { title } = props;
  return (
    <div>
      <p
        // onMouseOver={}
        className={`text-[12px] mt-2 text-center px-3 truncate-2 h-[38px] overflow-hidden`}
      >
        {title}
      </p>
    </div>
  );
};

export default SliderDescription;
