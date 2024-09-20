import React from "react";
import { ModalContainer } from "./style";

interface Props {
  children: React.ReactNode;
  handleClose: () => void
}

const Modal = ({ children, handleClose }: Props) => {
  return (
    <ModalContainer>
      <div className="close_bg" onClick={handleClose} />
      {children}
    </ModalContainer>
  );
};

export default Modal;
