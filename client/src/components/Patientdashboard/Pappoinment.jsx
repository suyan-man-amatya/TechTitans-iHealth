import React, { useState } from "react";
import Sidebar from "./Sidebar";
function Pappoinment() {
  // Sample appointment data
  const [appointments, setAppointments] = useState([
    { id: 1, date: "2024-09-15", time: "10:00 AM", doctor: "Dr. John Doe" },
    { id: 2, date: "2024-09-20", time: "02:00 PM", doctor: "Dr. Jane Smith" },
    { id: 3, date: "2024-09-25", time: "11:00 AM", doctor: "Dr. Emily Davis" },
  ]);

  // Function to handle cancellation
  const handleCancel = (id) => {
    // You would typically make an API call here to cancel the appointment
    // and then update the state accordingly.
    setAppointments(
      appointments.filter((appointment) => appointment.id !== id)
    );
  };

  return (
    <>
      <aside className="sidebar w-64 h-screen fixed top-0 left-0 flex flex-col  text-white">
        <Sidebar />
      </aside>
      <main className="flex-1 ml-24 mt-5 p-6 flex flex-col bg-gray-100">
        <div className="p-6 bg-gray-100 min-h-screen">
          <h1 className="text-2xl font-bold mb-4">Upcoming Appointments</h1>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            {appointments.length === 0 ? (
              <p>No upcoming appointments.</p>
            ) : (
              <ul className="space-y-4">
                {appointments.map((appointment) => (
                  <li
                    key={appointment.id}
                    className="flex justify-between items-center p-4 border border-gray-300 rounded-md"
                  >
                    <div>
                      <p className="font-semibold">{appointment.date}</p>
                      <p>{appointment.time}</p>
                      <p className="text-gray-600">
                        Doctor: {appointment.doctor}
                      </p>
                    </div>
                    <button
                      onClick={() => handleCancel(appointment.id)}
                      className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                    >
                      Cancel
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default Pappoinment;
