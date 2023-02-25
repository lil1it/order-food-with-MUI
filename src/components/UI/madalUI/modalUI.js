import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/system";

export default function ModalUI({ onOpen, onClose, children }) {
  return (
    // <div>
    <Modal
      open={onOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <StyledBox>{children}</StyledBox>
    </Modal>
    // </div>
  );
}

const StyledBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: theme.palette.primary.contrastText,
  width: 700,
  backgroundColor: theme.palette.primary.main,
  border: "2px solid #000",
  boxShadow: 24,
  padding: 2,
  borderRadius: "14px",
}));
