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
    margin: 0 5px 0 5px;
  }
  @media screen and (max-width: 300px) {
    margin: 0 0 0 80px;
  }
`;

export const H1 = styled.h1`
  display: grid;
  place-items: center;
  font-size: 50px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`;

export const P = styled.p`
  display: grid;
  place-items: center;
  font-size: 24px;
  color: #5e5e5e;
  margin: 20px 0 0 0;
  font-weight: 500;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    text-align: center;
    padding: 0 5px 0 5px;
  }
`;

export const BoxContainer = styled.div`
  width: 1000px;
  height: 280px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  background-color: #fff;
  margin: 70px 0 0 0;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 350px;
    height: 650px;
  }
`;

export const Button = styled.button`
  margin: 24px 24px 0 0;
  width: 180px;
  height: 57px;
  font-size: 17px;
  color: #fff;
  justify-content: center;
  align-self: center;
  background-color: #7c4dff;
  border: none;
  text-decoration: none;
  border-radius: 32px;
  border: 3px solid #000;
  font-weight: 600;

  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: #641eff;
    cursor: pointer;
  }
`;

export const Img = styled.img`
  max-width: 150px;
  max-height: 150px;
`;

export const Img1 = styled.img`
  max-width: 200px;
  max-height: 180px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const P1 = styled.p`
  justify-content: right;
  align-self: center;
  text-align: center;
  font-size: 28px;
  margin: 0 0 10px 10px;
  font-weight: 600;
`;

export const P2 = styled.p`
  font-size: 18px;
  margin: 0 20px 0 20px;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;
