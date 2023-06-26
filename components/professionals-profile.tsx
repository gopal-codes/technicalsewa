import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import RatingComponent from "./RatingComponent";
import ProfessionalLocation from "./Professional-Location";
import Image from "next/image";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 780,
  bgcolor: "background.paper",
  border: "2px solid var(--primary-color)",
  boxShadow: 24,
  p: 4,
  maxHeight: "70vh",
  overflow: "auto",
};

export default function ProfessionalProfile(props: any) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [showRating, setShowRating] = React.useState(true);

  const { professional } = props;
  // console.log(professional);

  const handleClick = (show: any) => {
    setShowRating(show);
  };

  return (
    <div className="">
      <button
        onClick={handleOpen}
        className="bg-[#ED1B261A] rounded-[4.08px] text-[#505056] text-[16px] leading-[19px] font-normal py-[6.8px] px-[17.9px]"
      >
        View
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex flex-col items-center md:mt-5 md:mb-5 mb-2">
            <span className="block  w-[150px] text-xl text-[var(--primary-color)] font-extrabold text-center">
              {professional?.sc_name}
            </span>
          </div>
          <div className="flex-col flex items-center">
            <div className="flex flex-row justify-center gap-[40px]  items-center w-full">
              <div className="flex flex-col justify-center gap-2">
                <div className="flex flex-col justify-between">
                  <strong className="mr-2">Address:</strong>
                  <span className="block  w-[150px]">
                    {professional?.sc_address}
                  </span>
                </div>
                <div className="flex flex-col justify-between hidden">
                  <strong className="mr-2">Mobile:</strong>
                  <span className="block  w-[150px]">
                    {professional?.mobile}
                  </span>
                </div>
                <div className="flex flex-col justify-between">
                  <strong className="mr-2">Email:</strong>
                  <span className=" block  w-[150px]">
                    {professional?.sc_email}
                  </span>
                </div>
              </div>
              <Image width={250} height={200}
                src={professional?.photo}
                alt="professionals"
                className="w-[100px] h-[100px] bg-[var(--primary-color)] rounded-lg"
              />
            </div>
            <div className="flex gap-5 mt-5 md:mt-10">
              <span
                className="border-2 border-[var(--primary-color)] px-[8px] py-[2px] text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white hover:cursor-pointer"
                onClick={() => handleClick(true)}
              >
                Ratings
              </span>
              <span
                className="border-2 border-[var(--primary-color)] px-[8px] py-[2px] text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white hover:cursor-pointer"
                onClick={() => handleClick(false)}
              >
                Location
              </span>
            </div>
            <div className="mt-5">
              {showRating ? (
                <RatingComponent professional={professional} />
              ) : (
                <ProfessionalLocation />
              )}
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
