import styled from "styled-components";

import { FiMail } from "react-icons/fi";

export const ContactContainer = styled.div`
  position: relative;
  top: 600px;
  height: 650px;

  @media screen and (max-width: 768px) {
    top: 55rem;
  }

  @media screen and (max-width: 350px) {
    padding: 0 0 0 38px;
    top: 170rem;
    max-width: 270px;
    max-height: 270px;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
`;

export const H1 = styled.h1`
  font-size: 50px;
  display: grid;
  place-items: center;
  margin: 0 0 60px 0;

  @media screen and (max-width: 350px) {
    font-size: 30px;
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
  margin: 0 0 100px 0;

  @media screen and (max-width: 768px) {
    width: 350px;
    height: 450px;
    flex-direction: column;
  }

  @media screen and (max-width: 350px) {
    top: 170rem;
    max-width: 270px;
    max-height: 270px;
  }
`;

export const P1 = styled.p`
  display: flex;
  font-size: 40px;
  color: #fff;
  font-weight: 600;

  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #000;
  justify-content: center;
  align-self: center;

  @media screen and (max-width: 350px) {
    font-size: 30px;
  }
`;

export const P2 = styled.p`
  justify-content: center;
  align-self: center;
  font-size: 19px;
  color: #fff;
  font-weight: 600;
`;

export const Button = styled.button`
  width: 180px;
  height: 57px;
  font-size: 17px;
  color: #000;
  font-weight: 600;
  justify-content: center;
  align-self: center;
  background-color: #fff;
  border: 4px solid #000;
  text-decoration: none;
  border-radius: 32px;

  &:hover {
    transition: all 0.3s ease-in-out;
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
  margin: 5px 0 -2px 9px;
`;

export const Icon = styled.div`
  color: #000;
  cursor: pointer;
  &:hover {
    color: #7c4dff;
    transition: all 0.3s ease-in-out;
  }
`;

export const P3 = styled.p`
  color: #5a5a5a;
  font-size: 24px;
  display: grid;
  font-weight: 500;
  place-items: center;
  margin: -50px 0 0 0;
`;

export const IconWrapper = styled.div`
  display: grid;
  place-items: center;
  margin: 50px 0 0 0;
  grid-template-columns: 1fr 1fr 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 70px;
  }
`;

export const SocialIcon = styled.div`
  color: #000;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  &:hover {
    color: #7c4dff;
    transition: all 0.3s ease-in-out;
  }
`;

export const P = styled.p`
  padding: 32px;
  font-weight: 500;
  margin-top: 40px;
  font-size: 18px;
`;
