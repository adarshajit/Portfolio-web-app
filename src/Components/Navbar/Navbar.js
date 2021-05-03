import React from "react";
import {
  Nav,
  Bars,
  NavLink,
  NavMenu,
  NavBtn,
  H1,
  NavText,
} from "./navbarElements";

import { IoHomeSharp as HomeIconFill } from "react-icons/io5";
import { BiFace as AboutIcon } from "react-icons/bi";
import { FaSuitcase as ProjectIcon } from "react-icons/fa";
import { FiMail as MailIcon } from "react-icons/fi";
import { IconContext } from "react-icons/lib";
const Navbar = ({ toggle }) => {
  return (
    <>
      <H1>Logo</H1>
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
            <NavLink to="/y" activeStyle>
              <MailIcon />
            </NavLink>
          </IconContext.Provider>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
