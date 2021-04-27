import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as BiIcons from "react-icons/bi";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/about",
    icon: <BiIcons.BiFace />,
    cName: "nav-text",
  },

  {
    title: "Projects",
    path: "/projects",
    icon: <RiIcons.RiSuitcaseFill />,
    cName: "nav-text",
  },

  {
    title: "Volunteering",
    path: "/volunteering",
    icon: <FaIcons.FaHandshake />,
    cName: "nav-text",
  },
];
