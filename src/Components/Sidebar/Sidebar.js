import React from "react";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarRoute,
  Logo,
} from "./SidebarElements";

import MyLogo from "../../Assets/logo.png";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <Logo src={MyLogo} />
        <SidebarRoute to="/" onClick={toggle}>
          Home
        </SidebarRoute>
        <SidebarRoute to="about" onClick={toggle}>
          About
        </SidebarRoute>
        <SidebarRoute to="projects" onClick={toggle}>
          Projects
        </SidebarRoute>
        <SidebarRoute to="contact" onClick={toggle}>
          Contact Me
        </SidebarRoute>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
