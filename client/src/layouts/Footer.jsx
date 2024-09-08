import React from "react";
import Logo from "../assets/web-logo2.png";
import DcAvatar from "../assets/footerDoc.png";
// import { FaRegCopyright } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="rounded-2xl shadow-inner bg-gradient-to-t from-white to-green-200 m-5 py-4 mt-36">
      <div className="upper-footer flex justify-between h-2/4 px-40">
        <div className="logo-section  flex flex-col items-center justify-center ">
          <div className="h-40 w-40">
            {" "}
            <img src={Logo} alt="" />
          </div>
          <div className="text text-2xl text-green-500 font-medium">
            Let's Dive into the World.
          </div>
        </div>
        <div className="text-section flex flex-row items-center text-lg font-normal">
          <div className="row px-32">
            <div className="hover:text-green-500 transition hover:cursor-pointer">
              <Link to={"/"}>Home</Link>
            </div>
            <div className="py-4 hover:text-green-500 transition hover:cursor-pointer">
              <Link to={"/about"}>About</Link>
            </div>
            <div className="hover:text-green-500 transition hover:cursor-pointer">
              <Link to={"/carecenter"}>Care services</Link>
            </div>
          </div>

          <div className="doc w-32">
            <img src={DcAvatar} alt="" />
          </div>
        </div>
      </div>
      <div className="px-16 py-1">
        <hr className="hr font-bold" />
      </div>
      <div className="lower-footer flex justify-between px-24">
        <div className="copyright flex items-center">
          <div className="copyright-logo">{/* <FaRegCopyright /> */}</div>
          <div className="copyright-text font-normal">All rights reserved.</div>
        </div>
        <div className="tandcs flex font-normal gap-8">
          <div>Terms and services</div>
          <div>Privacy Policies</div>
          <div>Cookies</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
