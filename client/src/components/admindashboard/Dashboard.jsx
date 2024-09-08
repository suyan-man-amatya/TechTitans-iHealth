import React from "react";
import Logo from "../../assets/web-logo2.png";
import Hospital from "../../assets/hospital.png";
import calender from "../../assets/calender.png";
import Doc from "../../assets/doctorhd.png";
import Button from "../../layouts/Button";
import { FaRegCalendarDays } from "react-icons/fa6";
import { LuAlarmClock } from "react-icons/lu";
import Chart from "./Chart";
import Sidebar from "./Sidebar";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";

const appointments = [
  {
    id: 1,
    hospitalName: "ABCD",
    hospitalAddress: "Sitapaila, Kathmandu",
    doctorName: "Dr. Abhinash Khatri",
    doctorPosition: "Dermatologist",
    appointmentDate: "2024-09-11",
    appointmentTime: "12:00",
  },
  // Add more appointments as needed
];

const Admindashboard = () => {
  return (
    <section className="flex">
      {/* Sidebar */}
      <aside className="sidebar w-24 h-screen fixed top-0 bg-dark left-0 flex flex-col">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex ml-24 mt-5 p-4 w-full">
        <div className="flex-1 h-full flex-col">
          <div className="flex items-center mb-8">
            <div className="profilephoto bg-profile rounded-full w-24 h-24 flex items-center justify-center">
              <div className="photo">
                <img
                  className="rounded-full w-24 h-24 object-cover"
                  src={Doc}
                  alt="Profile"
                />
              </div>
            </div>
            <div className="text flex flex-col ml-8">
              <div className="text1 text-2xl font-semibold">
                <h1>Welcome Back Admin!!!</h1>
              </div>
              <div className="text2 text-center text-xs font-bold mt-2">
                <p>Check your every situation and activities</p>
              </div>
              <div className="btn mt-3">
                <Button title="Check it now" />
              </div>
            </div>
          </div>

          <div className="containerthird flex-1 bg-white shadow-lg rounded-lg p-6">
            <div className="cardnoone flex space-x-4">
              <div className="appoinmentcard flex-1 p-5 bg-gray-50 rounded-lg shadow-md">
                <div className="app mb-4">
                  <div className="title text-xl font-medium">
                    <h1>Check the Appointments</h1>
                  </div>
                  {appointments.map((appointment) => (
                    <div
                      key={appointment.id}
                      className="appoinsec flex mt-4 p-4 border-b"
                    >
                      <div className="hospitalphoto text-center w-[30%]">
                        <img
                          src={Hospital}
                          alt="Hospital"
                          className="w-48 h-28 object-cover rounded-lg"
                        />
                        <div className="hospitalname text-lg font-semibold">
                          {appointment.hospitalName}
                        </div>
                        <div className="hospitaladdress text-sm text-gray-600">
                          {appointment.hospitalAddress}
                        </div>
                      </div>
                      <div className="doctorphoto flex flex-col items-center w-[70%] ml-4">
                        <div className="cards flex items-center mb-4">
                          <img
                            src={Doc}
                            alt="Doctor"
                            className="h-14 w-14 rounded-full"
                          />
                          <div className="doctorname ml-4">
                            <div className="name text-lg font-semibold">
                              {appointment.doctorName}
                            </div>
                            <div className="position text-sm text-gray-600">
                              {appointment.doctorPosition}
                            </div>
                          </div>
                          <div className="videocall ml-4">
                            <Button title="Video Call" />
                          </div>
                        </div>
                        <div className="calendar flex items-center justify-evenly bg-gray-100 w-full h-12 rounded-lg mt-5 p-2">
                          <div className="calendarparts flex items-center justify-evenly w-1/2">
                            <div className="calendarlogo">
                              <FaRegCalendarDays />
                            </div>
                            <div className="calendardate">
                              {appointment.appointmentDate}
                            </div>
                          </div>
                          <div className="timeparts flex items-center justify-evenly w-1/2">
                            <div className="tilelogo">
                              <LuAlarmClock />
                            </div>
                            <div className="time">
                              {appointment.appointmentTime}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <hr />
                <div className="cardsection mt-5">
                  <div className="chart1 mb-5">
                    <div className="title font-semibold text-xl">
                      Patient Activities
                    </div>
                    <div className="todaydatehere">
                      <p>Today, 31 Aug 2024</p>
                    </div>
                  </div>
                  <div className="chart2 mt-10">
                    <Chart />
                  </div>
                </div>
              </div>
              <div className="listofappointments flex-1 p-5 bg-gray-50 rounded-lg shadow-md">
                <div className="apponelist">
                  <div className="heading text-xl font-medium mb-4">
                    <h1>List Of Appointments</h1>
                  </div>
                  <div className="calendarphoto">
                    <Calendar
                      className="w-full border rounded-lg"
                      // Add your calendar props here
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Admindashboard;
