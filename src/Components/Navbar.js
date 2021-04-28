import React from "react";
import { SidebarData } from "./SidebarData";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        {SidebarData.map((item, index) => {
          return (
            <NavMenu key={index}>
              <NavLink to={item.path} activeStyle>
                {item.icon}
                <span>{item.title}</span>
              </NavLink>
            </NavMenu>
          );
        })}
      </Nav>
    </>
  );
};

export default Navbar;
