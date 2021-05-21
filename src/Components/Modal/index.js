import React from "react";
import { Backdrop, Img } from "./modalElements";

const Modal = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e) => {
    setSelectedImg(null);
  };
  return (
    <>
      <Backdrop onClick={handleClick}>
        <Img src={selectedImg} alt="enlarged pic" />
      </Backdrop>
    </>
  );
};

export default Modal;
