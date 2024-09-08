import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import Sidebar from "./Sidebar";
function Pmessages() {
  return (
    <div>
      <section className="messages">
        <aside className="sidebar w-64 h-[80vh] fixed top-0 left-0 flex flex-col">
          <Sidebar />
        </aside>
        <main className="flex ml-24 mt-5 p-4 flex-col w-full">
          <h1 className="text-xl font-bold mb-4">Message</h1>
          <div className="container flex border border-1  h-[80vh]">
            <div className="userslist  w-[10vw] h-[80vh] border border-grey-200 flex flex-col">
              <div className="users flex items-center justify-center p-4 border border-grey-100">
                <div className="icon">
                  <FaCircleUser />
                </div>
                <h1 className="ms-2">user1</h1>
              </div>
              <div className="users flex items-center justify-center p-4 border border-grey-100">
                <div className="icon">
                  <FaCircleUser />
                </div>
                <h1 className="ms-2">user1</h1>
              </div>
              <div className="users flex items-center justify-center p-4 border border-grey-100">
                <div className="icon">
                  <FaCircleUser />
                </div>
                <h1 className="ms-2">user1</h1>
              </div>
              <div className="users flex items-center justify-center p-4 border border-grey-100">
                <div className="icon">
                  <FaCircleUser />
                </div>
                <h1 className="ms-2">user1</h1>
              </div>
              <div className="users flex items-center justify-center p-4 border border-grey-100">
                <div className="icon">
                  <FaCircleUser />
                </div>
                <h1 className="ms-2">user1</h1>
              </div>
              <div className="users flex items-center justify-center p-4 border border-grey-100">
                <div className="icon">
                  <FaCircleUser />
                </div>
                <h1 className="ms-2">user1</h1>
              </div>
              <div className="users flex items-center justify-center p-4 border border-grey-100">
                <div className="icon">
                  <FaCircleUser />
                </div>
                <h1 className="ms-2">user1</h1>
              </div>
              <div className="users flex items-center justify-center p-4 border border-grey-100">
                <div className="icon">
                  <FaCircleUser />
                </div>
                <h1 className="ms-2">user1</h1>
              </div>
              <div className="users flex items-center justify-center p-4 border border-grey-100">
                <div className="icon">
                  <FaCircleUser />
                </div>
                <h1 className="ms-2">user1</h1>
              </div>
              <div className="users flex items-center justify-center p-4 border border-grey-100">
                <div className="icon">
                  <FaCircleUser />
                </div>
                <h1 className="ms-2">user1</h1>
              </div>
            </div>
            <div className="messagebox  w-[80vw]  bg-white p-5  h-screen">
              This is messagebox
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}

export default Pmessages;
