import styled from "styled-components";
import { FiMail } from "react-icons/fi";

export const ContactContainer = styled.div`
  position: relative;
  top: 600px;
  height: 650px;

  @media screen and (max-width: 768px) {
    top: 55rem;
  }

  @media screen and (max-width: 300px) {
    margin: 0 0 0 80px;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const H1 = styled.h1`
  font-size: 50px;
  display: grid;
  place-items: center;
  margin: 0 0 60px 0;

  @media screen and (max-width: 300px) {
    font-size: 40px;
    text-align: center;
  }
`;

export const ContactBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 1000px;
  height: 250px;
  border: 4px solid #000;
  justify-content: space-evenly;
  align-items: center;
  background-color: #7c4dff;
  border-radius: 10px;
  align-self: center;

  @media screen and (max-width: 768px) {
    width: 350px;
    height: 450px;
    flex-direction: column;
  }
`;

export const P1 = styled.p`
  display: flex;
  font-size: 40px;
  color: #fff;

  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #000;
  justify-content: center;
  align-self: center;
`;

export const P2 = styled.p`
  justify-content: center;
  align-self: center;
  font-size: 19px;
  color: #fff;
`;

export const Button = styled.button`
  width: 180px;
  height: 57px;
  font-size: 17px;
  color: #000;
  justify-content: center;
  align-self: center;
  background-color: #fff;
  border: 4px solid #000;
  text-decoration: none;
  border-radius: 32px;

  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: #f7f0ff;
    border: 4px solid #9f40ff;
    cursor: pointer;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const MailIcon = styled(FiMail)`
  size: 24px;
  margin: 0 0 0 5px;
`;
