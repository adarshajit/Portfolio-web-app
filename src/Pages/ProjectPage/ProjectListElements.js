import styled from "styled-components";

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px;
`;

export const H1 = styled.h1`
  font-size: 50px;
  font-weight: 800;
`;

export const P = styled.p`
  font-size: 70px;
  font-weight: 600;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 25px 0 0 0;
`;

export const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;
export const Button1 = styled.button`
  border-style: none;
  font-size: 18px;
  font-weight: 600;
  width: 200px;
  height: 60px;
  color: #fff;
  border-radius: 50px;
  background-color: #7c4dff;
  border: 3px solid #000;

  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: #641eff;
    cursor: pointer;
  }
`;

export const Button2 = styled.button`
  border-style: none;
  display: flex;
  flex-direction: row;
  font-size: 18px;
  font-weight: 600;
  width: 200px;
  height: 60px;
  color: #7c4dff;
  border-radius: 50px;
  background-color: #fff;
  border: 3px solid #7c4dff;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

export const Text = styled.div`
  align-self: center;
`;

export const SocialIcon = styled.div`
  align-self: center;
  margin: 4px 0 0 4px;
  justify-content: center;
`;
