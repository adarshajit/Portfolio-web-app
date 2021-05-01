import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarLink to="/" onClick={toggle}>
          Home
        </SidebarLink>
        <SidebarLink to="/about" onClick={toggle}>
          About
        </SidebarLink>
        <SidebarLink to="/projects" onClick={toggle}>
          Projects
        </SidebarLink>
        <SidebarLink to="/volunteering" onClick={toggle}>
          Volunteering
        </SidebarLink>
      </SidebarWrapper>
      <SideBtnWrap>
        <SidebarRoute to="/" onClick={toggle}>
          Contact Me
        </SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
