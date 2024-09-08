import React from "react";
import Button from "./Button";

function Hero2() {
  return (
    <div className="sub flex justify-between h-2/4 py-3 gap-3 mx-8 my-20">
      <div className="one rounded-2xl p-3 shadow-md w-1/4 h-72 ">
        <div className="title flex justify-between">
          <div className="text">Latest Visited</div>
          <div className="direct">Re-direct</div>
        </div>
        <div className="images pt-28">Doctors images</div>
        <div className="text text-slate-500">
          More than 4k doctors at your service
        </div>
      </div>

      <div className="two bg-gradient-to-r from-green-100 to-white rounded-2xl p-3 shadow-md w-1/4 h-72">
        <div className="title flex justify-center">
          <div className="text">iHealth</div>
        </div>
        <div className="images pt-16 text-center text-xl font-medium">
          Our Speciality doctors
        </div>
      </div>

      <div className="three bg-gradient-to-r from-white to-blue-100 rounded-2xl p-3 shadow-md w-1/4 h-72">
        <div className="title flex-col ">
          <div className="text font-semibold text-2xl">
            Connect with our professional doctors
          </div>
          <div className="images pt-16">
            <Button title="Connect now" />
          </div>
        </div>
      </div>

      <div className="four rounded-2xl p-3 shadow-md w-1/4 h-72">
        <div className="title flex justify-between">
          <div className="text">Latest Visited</div>
          <div className="direct">Re-direct</div>
        </div>
        <div className="images pt-16">Doctors images</div>
        <div className="text text-slate-500">
          More than 4k doctors at your service
        </div>
      </div>
    </div>
  );
}

export default Hero2;
//hero2
