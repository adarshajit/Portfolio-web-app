import styled from "styled-components";

export const OrgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 400px;

  @media screen and (max-width: 768px) {
    top: 800px;
  }
`;

export const H1 = styled.h1`
  display: grid;
  place-items: center;
  font-size: 40px;

  @media screen and (min-width: 768px) {
    font-size: 50px;
  }
`;

export const P = styled.p`
  display: grid;
  place-items: center;
  font-size: 24px;
  color: #5e5e5e;
  @media screen and (max-width: 768px) {
    font-size: 18px;
    text-align: center;
  }
`;
