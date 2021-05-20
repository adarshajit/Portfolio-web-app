import React from "react";
import artImages from "./artData";
import Footer from "../../Components/Footer/Footer";
import { ArtContainer, ArtGrid, Img, H1, ArtBox } from "./artElements";

const Art = () => {
  return (
    <>
      <ArtContainer>
        <H1>Art</H1>
        <ArtGrid>
          {artImages.map((images) => {
            return (
              <ArtBox>
                <Img src={images.imgUrl} alt="this is a test" />
              </ArtBox>
            );
          })}
        </ArtGrid>
      </ArtContainer>
      <Footer />
    </>
  );
};

export default Art;
