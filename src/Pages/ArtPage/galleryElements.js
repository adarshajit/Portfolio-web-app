import styled from "styled-components";

export const ArtContainer = styled.div`
  margin: 70px 0 0 0;
  display: flex;
  flex-direction: column;
`;

export const H1 = styled.h1`
  font-size: 38px;
  font-weight: 600;
  margin: 0 0 0 100px;

  @media screen and (max-width: 768px) {
    display: grid;
    place-items: center;
    margin: 0;
  }
`;

export const P = styled.p`
  font-size: 20px;
  color: #5e5e5e;
  margin: 0 0 0 100px;
  font-weight: 500;
  @media screen and (max-width: 768px) {
    font-size: 18px;
    display: flex;
    align-self: center;
    margin: 0;
  }
`;
export const ArtGrid = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-auto-rows: 75px;
  margin: 40px 100px 0 100px;
  grid-gap: 5px;

  @media screen and (min-width: 1720px) {
    grid-gap: 20px;
  }
`;

export const ArtBox = styled.div`
  max-width: 500px;
  max-height: 500px;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-self: center;
  grid-column: span 3;
  grid-row: span 5;

  justify-content: center;

  &:hover {
    cursor: pointer;
    transition: 0.3s all ease-in-out;
    transform: scale(1.01);
    box-shadow: -6px 32px 33px -28px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: -6px 32px 33px -28px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -6px 32px 33px -28px rgba(0, 0, 0, 0.75);
  }

  @media screen and (max-width: 768px) {
    max-width: 500px;
    max-height: 500px;
  }

  /* @media screen and (min-width: 360px) {
    width: 350px;
  } */
`;

export const Img = styled.img`
  max-width: 400px;
  max-height: 350px;
  display: flex;
  align-self: center;
  margin: 30px 15px 15px 15px;

  @media screen and (max-width: 768px) {
    max-width: 280px;
    max-height: 350px;
    margin-left: 32px;
  }
`;
