import styled from "styled-components";

export const TechContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin: 50px 0 0 0;
    height: 400px;
  }
`;

export const H1 = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 40px;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin: 80 20px 0 20px;
  }
`;
export const P = styled.p`
  display: flex;
  justify-content: center;
  font-size: 18px;
  @media screen and (max-width: 768px) {
    margin: 10px;
  }
`;
