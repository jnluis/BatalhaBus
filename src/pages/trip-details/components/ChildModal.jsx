import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Bus from "./Icons/Bus";
import Seat from "./Icons/Seat";
import Switch from "./Icons/Switch";
import Modal from "@mui/material/Modal";

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

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, BorderRadius: "60px" }}>
          <h1>My Route</h1>
          <div className="flex flex-nowrap flex-row mb-4">
            <div className="basis-full">
              <span>
                From: <u>Oliveira de Frades</u> to <u>Batalha</u>
              </span>
            </div>
          </div>
          <div className="border-l-4 border-dashed border-sky-500 ml-4 pl-2 flex flex-col">
            <span className="basis-full mb-4">
              Partida <u>Oliveira de Frades</u>
            </span>

            <span className="mb-4">Hora prevista: 23h15</span>

            <div className="basis-full flex mb-8">
              <span className="basis-1/6">
                <Bus />
              </span>
              <span className="basis-1/3">Viatura 5 </span>
              <span className="basis-1/6">
                <Seat />
              </span>
              <span className="basis-1/3">Lugar 45</span>
            </div>

            <div className="basis-full mb-4">
              <span className="basis-1/6">
                <Switch />
              </span>
              <span className="basis-2/3">
                Ligação: <u>Coimbra B</u>
              </span>
            </div>

            <span className="mb-4 mb-4">Hora prevista: 01h00</span>

            <div className="basis-full flex mb-8">
              <span className="basis-1/6">
                <Bus />
              </span>
              <span className="basis-1/3">Viatura 2 </span>
              <span className="basis-1/6">
                <Seat />
              </span>
              <span className="basis-1/3">Lugar 25</span>
            </div>

            <span className="mb-4"> Chegada Prevista: 02h15 </span>
            <span className="mb-4">
              <u>Batalha</u>
            </span>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
