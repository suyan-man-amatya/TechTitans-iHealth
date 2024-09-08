import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/web-logo2.png";
import { PiCirclesThreePlus } from "react-icons/pi";
import { MdOutlineCalendarMonth } from "react-icons/md";
// import { FaAmbulance } from "react-icons/fa";
import { SiCashapp } from "react-icons/si";
import { MdAttachEmail, MdSettings } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { FiBell } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { FaAmbulance, FaUsers, FaRegQuestionCircle } from "react-icons/fa";
import { FiPaperclip } from "react-icons/fi";

function Sidebar() {
  return (
    <div className="top-0 ">
      <nav className="flex w-screen justify-between p-4 bg-gray-800 text-white">
        <div className="logo">Icon here</div>
        <div className="icons w-[9rem] flex justify-between">
          <div className="search">
            <IoSearch />
          </div>
          <div className="notification">
            <FiBell />
          </div>
          <div className="profile">
            <CgProfile />
          </div>
        </div>
      </nav>

      <div className="slider bg-black text-white h-screen w-[6rem]">
        <div className="logo h-[80px] w-[80px] ms-3">
          <Link to="/pdashboard">
            {" "}
            <img className="logoofdashboard" src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="icons flex items-center justify-items-center flex-col gap-8 text-lg mt-9">
          <Link to="/pdashboard" className="flex items-center">
            <PiCirclesThreePlus />
          </Link>
          <Link to="/pappointment" className="flex items-center">
            <MdOutlineCalendarMonth />
          </Link>
          <NavLink
            to="/pambulance"
            className={({ isActive }) =>
              `flex items-center ${
                isActive ? "bg-gray-700 rounded-lg p-2" : ""
              }`
            }
          >
            <FaAmbulance />
          </NavLink>
          <NavLink
            to="/preports"
            className={({ isActive }) =>
              `flex items-center ${
                isActive ? "bg-gray-700 rounded-lg p-2" : ""
              }`
            }
          >
            <FiPaperclip />
          </NavLink>

          <Link to="/pemail" className="flex items-center">
            <MdAttachEmail />
          </Link>
          <Link to="/pmessages" className="flex items-center">
            <AiFillMessage />
          </Link>
          <Link to="/psettings" className="flex items-center mb-5">
            <MdSettings />
          </Link>
          <Link to="/phelp" className="flex items-center mt-14">
            <FaRegQuestionCircle />
          </Link>
          <Link to="/" className="flex items-center mb-3">
            <FiLogOut />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
