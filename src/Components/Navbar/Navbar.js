import React from "react";
import { Nav, Bars, NavLink, NavMenu, NavBtn, H1 } from "./navbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <H1>Logo</H1>
      <Nav>
        <Bars onClick={toggle} />
        <NavMenu>
          <NavLink to="/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/projects" activeStyle>
            Projects
          </NavLink>
          <NavLink to="/volunteering" activeStyle>
            Volunteering
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavLink to="/home" activeStyle>
            Contact Me
          </NavLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
