import React from "react";
import {
  Nav,
  Bars,
  NavLink,
  NavMenu,
  NavBtn,
  Logo,
  NavText,
  LogoContainer,
} from "./navbarElements";

import { IoHomeSharp as HomeIconFill } from "react-icons/io5";
import { BiFace as AboutIcon } from "react-icons/bi";
import { FaSuitcase as ProjectIcon } from "react-icons/fa";
import { FiMail as MailIcon } from "react-icons/fi";
import { IconContext } from "react-icons/lib";
import logo from "../../Assets/logo.png";
const Navbar = ({ toggle }) => {
  return (
    <>
      <LogoContainer>
        <Logo src={logo} />
      </LogoContainer>
      <Nav>
        <Bars onClick={toggle} />
        <NavMenu>
          <NavLink exact to="/" activeStyle>
            <HomeIconFill />
            <NavText>Home</NavText>
          </NavLink>

          <NavLink to="/about" activeStyle>
            <AboutIcon />
            <NavText>About</NavText>
          </NavLink>
          <NavLink to="/projects" activeStyle>
            <ProjectIcon />
            <NavText>Projects</NavText>
          </NavLink>
        </NavMenu>

        <NavBtn>
          <IconContext.Provider value={{ size: "24px" }}>
            <a
              href="mailto:adarshajit@gmail.com?body=Hi%20Adarsh,"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#5e5e5e" }}
            >
              <MailIcon />
            </a>
          </IconContext.Provider>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
