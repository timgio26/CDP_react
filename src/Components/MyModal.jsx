import Box from "@mui/material/Box";
import Fab from '@mui/material/Fab'
// import Button from '@mui/material/Button';
import Modal from "@mui/material/Modal";
import { useState } from "react";
// import { FormCust } from "./FormCust";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  //   border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export function BasicModal({ icon, renderitem }) {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    // console.log("open");
    setOpen(true);
  }
  function handleClose() {
    // console.log("close");
    setOpen(false);
  }

  return (
    <div>
      <div onClick={handleOpen}>
        <Fab color="primary" aria-label="add">
          {icon}
        </Fab>
      </div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>{renderitem({ onClose:  handleClose })}</Box>
      </Modal>
    </div>
  );
}
