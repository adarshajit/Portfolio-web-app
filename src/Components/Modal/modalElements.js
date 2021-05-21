import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Img = styled.img`
  display: block;
  max-width: 60%;
  max-height: 80%;
  margin: 60px auto;
  box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 768px) {
    margin: 150px auto;
    max-width: 80%;
    max-height: 80%;
  }
`;
