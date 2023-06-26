import Link from "next/link";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import { useDispatch } from "react-redux";
import { getDate } from "../utils/date-converter";
import { setActiveComplain } from "../redux/complainSlice";

const ComplainComponent = (props: any) => {
  const { complains, status } = props;
  // console.log(complains);
  const complainsToShow = complains?.list.filter(
    (items: any, index: any) => items?.Call_status_val === status
  );
  // console.log(complainsToShow);

  const router = useRouter();

  const dispatch = useDispatch();

  const memoizedComplains = useMemo(
    () =>
      complainsToShow.length ? (
        complainsToShow?.map((items: any, index: any) => (
          <div className="px-[14px] shadow-sm" key={index}>
            <Link
              href={{
                pathname: `/complains/complain-details`,
                query: { id: items?.id },
              }}
            >
              <div
                className="border border-[#EDEDED] rounded-[5px]"
                onClick={() => {
                  router.push({
                    pathname: `/complains/complain-details`,
                    query: { id: items?.id },
                  });
                  dispatch(setActiveComplain(items));
                }}
              >
                <div className="flex pl-[9px] pr-[13px] pt-[14px] justify-between pb-[6px] bg-[#2591B2]/[0.05]">
                  <div>
                    <h2 className="text-[#2591B2] text-[26px] leading-[41.6px] font-medium font-poppins">
                      {items?.call_tm}
                    </h2>
                    <p className="text-[#414141] text-[16px] leading-[25.6px] font-normal font-poppins">
                      {getDate(items?.call_dt)}
                    </p>
                  </div>
                  <svg
                    width="16"
                    height="4"
                    viewBox="0 0 16 4"
                    fill="none"
                    xmlns="https:////www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 2C4 0.9 3.1 -1.35505e-07 2 -8.74228e-08C0.9 -3.93402e-08 -1.35505e-07 0.9 -8.74228e-08 2C-3.93402e-08 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2ZM6 2C6 3.1 6.9 4 8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 -3.97774e-07 8 -3.49691e-07C6.9 -3.01609e-07 6 0.9 6 2ZM12 2C12 3.1 12.9 4 14 4C15.1 4 16 3.1 16 2C16 0.899999 15.1 -6.60042e-07 14 -6.11959e-07C12.9 -5.63877e-07 12 0.9 12 2Z"
                      fill="#676767"
                    />
                  </svg>
                </div>
                <div className="pt-[13px] pb-[9px] pl-[11px]">
                  <p className="text-[#414141] text-[14px] leading-[22.4px] font-normal font-poppins">
                    {items?.brand_name}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))
      ) : (
        <div className="min-h-[30vh] text-center mt-10">{`No ${status} Complains`}</div>
      ),
    [complainsToShow]
  );

  return <div className="flex flex-col gap-5">{memoizedComplains}</div>;
};

export default ComplainComponent;
