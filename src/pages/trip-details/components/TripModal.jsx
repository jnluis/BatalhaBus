import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import ChildModal from "./ChildModal";
import CloseButton from "../../../components/CloseButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "6px solid #000",
  pt: 2,
  px: 4,
  pb: 3,
};

export default function TripModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button
        className="font-bold w-[274px] h-[64px] text-black text-[24px] bg-[#259D49] border-[#3ED26A] border-4 rounded-[10px]"
        onClick={handleOpen}
      >
        INSERT TICKET ID
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400, BorderRadius: "60px" }}>
          <div className="flex justify-between">
            <h1
              style={{ fontSize: "24px", color: "black", fontWeight: "Bold" }}
              className="mb-2"
            >
              My Full Trip
            </h1>
            <span className="justify-self-end">
              <CloseButton handleClose={handleClose} />
            </span>
          </div>

          <p className="mb-2" style={{ color: "black" }}>
            Insert your ticket ID here:
          </p>
          <input
            type="text"
            id="TicketID"
            name="fname"
            placeholder={"Ticket ID"}
            className="mb-2 bg-blue-200 rounded-[10px] border border-black pl-2 ml-4"
            style={{ color: "black" }}
          ></input>
          <p className="mb-2" style={{ color: "gray", fontSize: "14px" }}>
            Tip: You can find your ticket ID in the front of the ticket, below
            the QR code.
          </p>
          <ChildModal />
        </Box>
      </Modal>
    </div>
  );
}
