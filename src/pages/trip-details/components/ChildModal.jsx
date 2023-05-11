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
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Button
          onClick={handleOpen}
          className="mb-4"
          style={{
            color: "black",
            fontWeight: "Bold",
            borderRadius: "60px",
            border: "2px solid black",
            backgroundColor: "cornflowerblue",
            BorderRadius: "60px",
          }}
        >
          Add Me
        </Button>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style }}>
          <h1
            style={{
              fontSize: "24px",
              color: "black",
              fontWeight: "Bold",
            }}
          >
            My Route
          </h1>
          <div className="flex flex-nowrap flex-row mb-8">
            <div className="basis-full">
              <span>
                From: <u>Oliveira de Frades</u> to <u>Batalha</u>
              </span>
            </div>
          </div>
          <div className="relative border-l-4 border-dashed border-sky-500 ml-4 pl-4 flex flex-col">
            <div class="h-4 w-4 bg-sky-500 rounded-full absolute -left-2.5 -top-2"></div>
            <span
              className="basis-full mb-1"
              style={{ fontSize: "16px", color: "black", fontWeight: "Bold" }}
            >
              Partida <u>Oliveira de Frades</u>
            </span>

            <span className="mb-4">Hora prevista: 23h15</span>

            <div className="basis-full flex mb-8">
              <div className="basis-3/5 flex">
                <span>
                  <Bus />
                </span>
                <span
                  className="pl-2"
                  style={{
                    fontSize: "16px",
                    color: "black",
                    fontWeight: "Bold",
                  }}
                >
                  Viatura 5{" "}
                </span>
              </div>
              <div className="basis-2/5 flex">
                <span>
                  <Seat />
                </span>
                <span
                  className="pl-2"
                  style={{
                    fontSize: "16px",
                    color: "black",
                    fontWeight: "Bold",
                  }}
                >
                  Lugar 45
                </span>
              </div>
            </div>

            <div className="basis-full flex mb-1">
              <span className="basis-1/6">
                <Switch />
              </span>
              <span
                className="basis-2/3"
                style={{ fontSize: "16px", color: "black", fontWeight: "Bold" }}
              >
                Ligação: <u>Coimbra B</u>
              </span>
            </div>

            <span className="mb-4 mb-4">Hora prevista: 01h00</span>

            <div className="basis-full flex mb-8">
              <div className="basis-3/5 flex">
                <span>
                  <Bus />
                </span>
                <span
                  className="pl-2"
                  style={{
                    fontSize: "16px",
                    color: "black",
                    fontWeight: "Bold",
                  }}
                >
                  {" "}
                  Viatura 2{" "}
                </span>
              </div>
              <div className="basis-2/5  flex">
                <span>
                  <Seat />
                </span>
                <span
                  className="pl-2"
                  style={{
                    fontSize: "16px",
                    color: "black",
                    fontWeight: "Bold",
                  }}
                >
                  Lugar 25
                </span>
              </div>
            </div>

            <span
              className="mb-1"
              style={{ fontSize: "16px", color: "black", fontWeight: "Bold" }}
            >
              Chegada <u>Batalha</u>
            </span>
            <span>Hora Prevista: 02h15 </span>
            <div class="h-4 w-4 bg-sky-500 rounded-full absolute -left-2.5 -bottom-2"></div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
