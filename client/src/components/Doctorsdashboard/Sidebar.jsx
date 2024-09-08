import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/web-logo2.png";
import { PiCirclesThreePlus } from "react-icons/pi";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaAmbulance, FaUsers, FaRegQuestionCircle } from "react-icons/fa";
import { SiCashapp } from "react-icons/si";
import { MdAttachEmail, MdSettings } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { FiBell } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { MdMoreTime } from "react-icons/md";

function Sidebar() {
  return (
    <div className="top-0">
      <nav className="flex w-screen justify-between p-4 bg-gray-800 text-white">
        <div className="logo"></div>
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
          <NavLink to="/ddashboard">
            <img className="logoofdashboard" src={Logo} alt="Logo" />
          </NavLink>
        </div>
        <div className="icons flex items-center justify-items-center flex-col gap-8 text-lg mt-9">
          <NavLink
            to="/ddashboard"
            className={({ isActive }) =>
              `flex items-center ${
                isActive ? "bg-gray-700 rounded-lg p-2" : ""
              }`
            }
          >
            <PiCirclesThreePlus />
          </NavLink>
          <NavLink
            to="/dappointment"
            className={({ isActive }) =>
              `flex items-center ${
                isActive ? "bg-gray-700 rounded-lg p-2" : ""
              }`
            }
          >
            <MdOutlineCalendarMonth />
          </NavLink>
          <NavLink
            to="/salary"
            className={({ isActive }) =>
              `flex items-center ${
                isActive ? "bg-gray-700 rounded-lg p-2" : ""
              }`
            }
          >
            <SiCashapp />
          </NavLink>
          <NavLink
            to="/demail"
            className={({ isActive }) =>
              `flex items-center ${
                isActive ? "bg-gray-700 rounded-lg p-2" : ""
              }`
            }
          >
            <MdAttachEmail />
          </NavLink>
          <NavLink
            to="/dmessages"
            className={({ isActive }) =>
              `flex items-center ${
                isActive ? "bg-gray-700 rounded-lg p-2" : ""
              }`
            }
          >
            <AiFillMessage />
          </NavLink>
          <NavLink
            to="/dreport"
            className={({ isActive }) =>
              `flex items-center ${
                isActive ? "bg-gray-700 rounded-lg p-2" : ""
              }`
            }
          >
            <MdMoreTime />
          </NavLink>
          <NavLink
            to="/dsettings"
            className={({ isActive }) =>
              `flex items-center mb-5 ${
                isActive ? "bg-gray-700 rounded-lg p-2" : ""
              }`
            }
          >
            <MdSettings />
          </NavLink>
          <NavLink
            to="/dhelp"
            className={({ isActive }) =>
              `flex items-center mt-14 ${
                isActive ? "bg-gray-700 rounded-lg p-2" : ""
              }`
            }
          >
            <FaRegQuestionCircle />
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center mb-3 ${
                isActive ? "bg-gray-700 rounded-lg p-2" : ""
              }`
            }
          >
            <FiLogOut />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
