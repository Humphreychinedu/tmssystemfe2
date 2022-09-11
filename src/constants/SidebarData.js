import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as PATHS from "./Paths";

export const SidebarData = [
  {
    title: "Dashboard",
    path: PATHS.DASHBOARD,
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Home",
    path: PATHS.HOME,
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Employee",
    path: PATHS.EMPLOYEE,
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Bookings",
    path: PATHS.BOOKINGS,
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Department",
    path: PATHS.DEPARTMENT,
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "Accomodation",
    path: PATHS.ACCOMODATION,
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];