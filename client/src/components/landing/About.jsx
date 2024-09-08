import React from "react";
import Doc from "../../assets/doctors2.png";
import Logo from "../../assets/web-logo2.png";
import Button from "../../layouts/Button";
import Car from "../../assets/ambulance3.png";
import DummyCharts from "../../layouts/Charts";
import PieChart from "../../layouts/Charts2";

function About() {
  return (
    <>
      <div className="bg-aboutback bg-cover mx-8 rounded-3xl shadow-lg">
        <div className="flex flex-col justify-center h-2/5 rounded-3xl shadow-sm  items-center text-center backdrop-blur-sm ">
          <div className="text-area  flex flex-col w-3/4 justify-center items-center pl-20 ">
            <div className="slog rounded-full flex w-1/5 justify-center px-3 py-2 ">
              <img src={Logo} alt="" />
            </div>
            <div className="title text-5xl py-3 w-2/4">
              <h1 className="font-semibold  sm:text-lg md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                We're changing the whole game.
              </h1>
            </div>
            <div className="description text-slate-400"></div>
            <div className="book  sm:text-lg md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
              <Button title="Connect with our Professionals ↗" />
            </div>
          </div>
          <div className="flex justify-center image-area  w-3/4 ">
            <img style={{ height: "50vh" }} src={Doc} alt="" />
          </div>
        </div>
      </div>

      <div className="containers m-8 flex justify-around px-48 gap-10 shadow-lg rounded-3xl my-7">
        <div className="image w-2/4  text-xl font-bold">
          <img src={Car} alt="" />
        </div>
        <div className="text-areaa w-2/4 py-7 flex flex-col items-center ">
          <div className="title text-3xl font-semibold pt-7">Lives Saved</div>
          <div className="description">Our services has saved many lives</div>
          <PieChart />
        </div>
      </div>
      <div className="mx-20 my-12">
        <DummyCharts className="mx-20" />
      </div>
    </>
  );
}

export default About;
