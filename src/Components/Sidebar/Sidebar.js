import React from "react";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
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
