import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProjectContainer = styled.div`
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

export const ProjectGrid = styled.div`
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

export const ProjectFlex = styled.div`
  display: flex;
  flex-direction: row;
  grid-gap: 40px;
  align-self: flex-start;
  margin: 40px 100px 0 120px;

  @media screen and (max-width: 768px) {
    grid-gap: 5px;
    flex-direction: column;
    align-self: center;
    margin: 40px;
  }
`;

export const ProjectBox = styled.div`
  width: 400px;
  height: 350px;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-self: center;
  grid-column: span 3;
  grid-row: span 5;
  border: 3px solid #000;
  justify-content: center;
  transition: 0.3s all ease-in-out;

  &:hover {
    cursor: pointer;
    transition: 0.3s all ease-in-out;
    transform: scale(1.01);
    box-shadow: -6px 32px 33px -28px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: -6px 32px 33px -28px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -6px 32px 33px -28px rgba(0, 0, 0, 0.75);
  }

  @media screen and (max-width: 360px) {
    width: 280px;
  }

  @media screen and (min-width: 360px) {
    width: 350px;
  }
`;

export const P = styled.p`
  font-size: 22px;
  padding: 12px 0 0 12px;
  font-weight: 600;
`;

export const Img = styled.img`
  width: 300px;
  height: 200px;
  display: flex;
  align-self: center;
  margin: 30px 15px 15px 15px;

  @media screen and (max-width: 768px) {
    width: 250px;
    height: 220px;
    margin-left: 32px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const P1 = styled.p`
  font-size: 18px;
  padding: 5px 0 7px 12px;
  font-weight: 500;
`;

export const LinkR = styled(Link)`
  color: #000;
  text-decoration: none;
`;

export const Img1 = styled.img`
  margin: 15px 0 0 27px;
  height: 230px;
  width: 250px;
`;
