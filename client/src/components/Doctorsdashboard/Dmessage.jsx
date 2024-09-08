import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import Sidebar from "./Sidebar";
import { IoMdCall } from "react-icons/io";
import { MdVideoCall } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";

function Messages() {
  return (
    <div>
      <section className="messages  rounded-md">
        <aside className="sidebar w-64 h-[80vh] fixed top-0 left-0 flex flex-col ">
          <Sidebar />
        </aside>
        <main className="flex ml-24 mt-5 p-4 flex-col w-full bg-gray-400">
          <div className="container flex border border-1  h-[80vh] rounded-2xl shadow-xl">
            <div className="userslist  w-[10vw] h-[80vh] border border-grey-200 rounded-2xl gap-2 flex flex-col bg-gray-600 text-white font-semibold ">
              <div className="users flex flex-row items-center justify-center p-4 rounded-2xl gap-5  bg-gray-700">
                <div className="icon">
                  <FaCircleUser size={30} />
                </div>
                <div className="flex flex-col text-left w-2/3">
                  <h5 className="text-sm">Doctor 1</h5>
                  {/* <span className="text-sm font-thin">Message</span> */}
                </div>
              </div>
              <div className="users flex flex-row items-center justify-center p-4 rounded-2xl gap-5  bg-gray-700">
                <div className="icon">
                  <FaCircleUser size={30} />
                </div>
                <div className="flex flex-col text-left w-2/3">
                  <h5 className="text-sm">Doctor 1</h5>
                  {/* <span className="text-sm font-thin">Message</span> */}
                </div>
              </div>
              <div className="users flex flex-row items-center justify-center p-4 rounded-2xl gap-5  bg-gray-700">
                <div className="icon">
                  <FaCircleUser size={30} />
                </div>
                <div className="flex flex-col text-left w-2/3">
                  <h5 className="text-sm">Doctor 1</h5>
                  {/* <span className="text-sm font-thin">Message</span> */}
                </div>
              </div>
              <div className="users flex flex-row items-center justify-center p-4 rounded-2xl gap-5  bg-gray-700">
                <div className="icon">
                  <FaCircleUser size={30} />
                </div>
                <div className="flex flex-col text-left w-2/3">
                  <h5 className="text-sm">Doctor 1</h5>
                  {/* <span className="text-sm font-thin">Message</span> */}
                </div>
              </div>
              <div className="users flex flex-row items-center justify-center p-4 rounded-2xl gap-5  bg-gray-700">
                <div className="icon">
                  <FaCircleUser size={30} />
                </div>
                <div className="flex flex-col text-left w-2/3">
                  <h5 className="text-sm">Doctor 1</h5>
                  {/* <span className="text-sm font-thin">Message</span> */}
                </div>
              </div>
              <div className="users flex flex-row items-center justify-center p-4 rounded-2xl gap-5  bg-gray-700">
                <div className="icon">
                  <FaCircleUser size={30} />
                </div>
                <div className="flex flex-col text-left w-2/3">
                  <h5 className="text-sm">Doctor 1</h5>
                  {/* <span className="text-sm font-thin">Message</span> */}
                </div>
              </div>
              <div className="users flex flex-row items-center justify-center p-4 rounded-2xl gap-5  bg-gray-700">
                <div className="icon">
                  <FaCircleUser size={30} />
                </div>
                <div className="flex flex-col text-left w-2/3">
                  <h5 className="text-sm">Doctor 1</h5>
                  {/* <span className="text-sm font-thin">Message</span> */}
                </div>
              </div>
              <div className="users flex flex-row items-center justify-center p-4 rounded-2xl gap-5  bg-gray-700">
                <div className="icon">
                  <FaCircleUser size={30} />
                </div>
                <div className="flex flex-col text-left w-2/3">
                  <h5 className="text-sm">Doctor 1</h5>
                  {/* <span className="text-sm font-thin">Message</span> */}
                </div>
              </div>
            </div>

            <div className="messagebox  w-[80vw]  bg-white">
              <div className="users flex flex-row gap-5 items-center justify-between px-10 py-4 bg-gray-400 text-white rounded-xl">
                <div className="user flex gap-4 items-center">
                  <div className="icon">
                    <FaCircleUser size={30} />
                  </div>
                  <div className="flex flex-col text-left w-2/3">
                    <h1>user1</h1>
                    <span className="text-sm font-thin">Message</span>
                  </div>
                </div>
                <div className="call flex gap-4">
                  <IoMdCall size={26} />
                  <MdVideoCall size={26} />
                  <FaInfoCircle size={26} />
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}

export default Messages;
