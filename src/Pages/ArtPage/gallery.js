import React from "react";
import artImages from "./artData";
import { ArtContainer, ArtGrid, Img, H1, ArtBox, P } from "./galleryElements";

const Gallery = ({ setSelectedImg }) => {
  return (
    <ArtContainer>
      <H1>Art</H1>
      <P>Showcase of my artworks and posters</P>
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
