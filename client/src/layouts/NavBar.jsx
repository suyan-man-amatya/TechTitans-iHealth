import React from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";

import Logo from "../assets/web-logo2.png";

import "./navbar.css";

function NavBar() {
  return (
    <>
      <nav className="flex justify-between items-center p-7">
        <div className="logo">
          <img className="w-14" src={Logo} alt="" />
        </div>
        <div className="items flex gap-7">
          <div className="item hover:text-green-500">
            <NavLink className="home" to={"/"}>
              Home
            </NavLink>
          </div>
          <div className="item hover:text-green-500">
            <NavLink className="about" to={"/about"}>
              About
            </NavLink>
          </div>
          <div className="item hover:text-green-500">
            <NavLink className="care" to={"/carecenter"}>
              Care Service
            </NavLink>
          </div>
        </div>
        <div className="login">
          <NavLink to={"/signin"}>
            <Button title="Login" />
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
