import React, { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Modal from "../../Components/Modal";
import Gallery from "./gallery";

const Art = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <Gallery setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
      <Footer />
    </>
  );
};

export default Art;
