import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { RiBarChartHorizontalLine as BarLine } from "react-icons/ri";

export const Nav = styled.nav`
  background: #fff;
  height: 80px;
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  z-index: 10;
`;
export const NavText = styled.span`
  padding-left: 7px;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    justify-content: left;
  }
`;
export const Logo = styled.img`
  align-self: center;
  padding: 0 1rem;
  width: 100px;

  @media screen and (max-width: 768px) {
    width: 90px;
  }
`;

export const NavLink = styled(Link)`
  color: #737373;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    color: #000;
    transition: all 0.3s ease-in-out;
  }

  &.active {
    color: #7c4dff;
  }
`;

export const Bars = styled(BarLine)`
  display: none;
  color: #000;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }

  @media screen and (max-width: 300px) {
    right: -80px;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  position: absolute;
  align-items: center;
  margin-right: -24px;
  margin-top: 20px;
  justify-content: center;
  right: 3rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
