import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import image from "../../assets/timetables.png";
import { Block } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function TimeTableModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button
        onClick={handleOpen}
        className={
          "h-[96px] w-[113px] text-black font-semibold bg-white rounded-[15px] text-[16px] ml-12 mt-4"
        }
      >
        <svg
          width="39"
          height="40"
          viewBox="0 0 39 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ marginLeft: 37, marginBottom: 7 }}
        >
          <path
            d="M12.9915 5H25.2991V1.875C25.4131 0.729167 26.0969 0.104167 27.3504 0C28.604 0.104167 29.2878 0.729167 29.4017 1.875V5H32.8205C34.359 5.05208 35.641 5.54688 36.6667 6.48438C37.6923 7.42188 38.2336 8.59375 38.2906 10V35C38.2336 36.4062 37.6923 37.5781 36.6667 38.5156C35.641 39.4531 34.359 39.9479 32.8205 40H5.47009C3.93162 39.9479 2.64957 39.4531 1.62393 38.5156C0.598291 37.5781 0.0569801 36.4062 0 35V10C0.0569801 8.59375 0.598291 7.42188 1.62393 6.48438C2.64957 5.54688 3.93162 5.05208 5.47009 5H8.88889V1.875C9.00285 0.729167 9.68661 0.104167 10.9402 0C12.1937 0.104167 12.8775 0.729167 12.9915 1.875V5ZM4.10256 35C4.15954 35.7812 4.61538 36.1979 5.47009 36.25H32.8205C33.6752 36.1979 34.1311 35.7812 34.188 35V15H4.10256V35Z"
            fill="black"
          />
        </svg>

        <h5>TIMETABLE</h5>
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <img
          src={image}
          style={{ marginLeft: 250, marginTop: 100 }}
          alt="TimeTable"
        />
        {/* <Box sx={style}>
          <p className="text-[32px] text-[#3B4949]"></p>
          <img src={image} alt="TimeTable" />
        
        </Box> */}
      </Modal>
    </div>
  );
}
