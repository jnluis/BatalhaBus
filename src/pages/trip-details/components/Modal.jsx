import React from "react";

const Modal = () => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
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
        </Typography>
      </Box>
    </Modal>
  );
};

/* Button: <Button onClick={handleOpen}>Open modal</Button> */

export default Modal;
