import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AboutSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const AboutText = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
`;

export const P = styled.p`
  font-size: 80px;
  font-weight: 600;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 50px;
  }
`;

export const P1 = styled.p`
  font-size: 22px;
  font-weight: 500;
  color: #5a5a5a;
  text-align: left;
  @media screen and (max-width: 768px) {
    font-size: 18px;
    padding: 0 5px 0 5px;
    text-align: center;
  }
`;

export const Img = styled.img`
  width: 450px;
  height: 450px;

  @media screen and (max-width: 768px) {
    width: 350px;
  }
`;
