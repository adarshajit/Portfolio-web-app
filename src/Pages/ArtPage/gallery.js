import React from "react";
import artImages from "./artData";
import { ArtContainer, ArtGrid, Img, H1, ArtBox } from "./galleryElements";

const Gallery = ({ setSelectedImg }) => {
  return (
    <ArtContainer>
      <H1>Art</H1>
      <ArtGrid>
        {artImages.map((art) => {
          const enlargedImg = art.imgUrl;
          return (
            <ArtBox
              onClick={() => {
                setSelectedImg(enlargedImg);
              }}
            >
              <Img src={art.imgUrl} alt="this is a test" />
            </ArtBox>
          );
        })}
      </ArtGrid>
    </ArtContainer>
  );
};

export default Gallery;
