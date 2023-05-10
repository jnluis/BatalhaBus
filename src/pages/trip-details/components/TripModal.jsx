import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import ChildModal from "./ChildModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
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
        className="font-bold w-[274px] h-[64px] text-white text-[24px] bg-[#259D49] border-[#3ED26A] border-4 rounded-[10px]"
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
        <Box sx={{ ...style, width: 400 }}>
          <h1>My Full Trip</h1>
          <p>Insert your ticket ID here:</p>
          <input
            type="text"
            id="TicketID"
            name="fname"
            defaultValue={"Ticket ID"}
          ></input>
          <p>
            Tip: You can find your ticket ID in the from of the ticket below the
            QR code
          </p>
          <button>Add</button>
          <ChildModal />
        </Box>
      </Modal>
    </div>
  );
}

/* Button: <Button onClick={handleOpen}>Open modal</Button> */
