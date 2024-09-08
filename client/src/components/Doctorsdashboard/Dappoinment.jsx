import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaEdit } from "react-icons/fa";
import Button from "../../layouts/Button";
import "./Dappoin.css";

const initialAppointments = [
  {
    id: 1,
    name: "John Doe",
    address: "123 Elm Street",
    date: "2024-09-10",
    status: "Approved",
  },
  {
    id: 2,
    name: "Jane Smith",
    address: "456 Oak Avenue",
    date: "2024-09-12",
    status: "Pending",
  },
  {
    id: 3,
    name: "Emily Johnson",
    address: "789 Pine Road",
    date: "2024-09-15",
    status: "Approved",
  },
  {
    id: 4,
    name: "Emily Johnson",
    address: "789 Pine Road",
    date: "2024-09-15",
    status: "Pending",
  },
  {
    id: 5,
    name: "Emily Johnson",
    address: "789 Pine Road",
    date: "2024-09-15",
    status: "Approved",
  },
  {
    id: 6,
    name: "Emily Johnson",
    address: "789 Pine Road",
    date: "2024-09-15",
    status: "Pending",
  },
  {
    id: 7,
    name: "Emily Johnson",
    address: "789 Pine Road",
    date: "2024-09-15",
    status: "Approved",
  },
  {
    id: 8,
    name: "Emily Johnson",
    address: "789 Pine Road",
    date: "2024-09-15",
    status: "Pending",
  },
  {
    id: 9,
    name: "Emily Johnson",
    address: "789 Pine Road",
    date: "2024-09-15",
    status: "Approved",
  },
  {
    id: 10,
    name: "Emily Johnson",
    address: "789 Pine Road",
    date: "2024-09-15",
    status: "Pending",
  },
  {
    id: 11,
    name: "Emily Johnson",
    address: "789 Pine Road",
    date: "2024-09-15",
    status: "Approved",
  },
  {
    id: 12,
    name: "Emily Johnson",
    address: "789 Pine Road",
    date: "2024-09-15",
    status: "Pending",
  },
];

function Dappoinment() {
  const [appointments, setAppointments] = useState(initialAppointments);
  const [showModal, setShowModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleEditClick = (appointment) => {
    setSelectedAppointment(appointment);

    setSelectedDate(new Date(appointment.date));
    setShowModal(true);
  };

  const handleDateChange = (date) => {
    if (date instanceof Date && !isNaN(date)) {
      setSelectedDate(date);
    }
  };

  const handleSaveDate = () => {
    if (selectedAppointment) {
      const updatedAppointments = appointments.map((appointment) =>
        appointment.id === selectedAppointment.id
          ? { ...appointment, date: selectedDate.toISOString().split("T")[0] }
          : appointment
      );
      setAppointments(updatedAppointments);
      setShowModal(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <section className="appoinment">
        <aside className="sidebar w-24 h-screen fixed top-0 left-0 flex flex-col text-white bg-dark">
          <Sidebar />
        </aside>
        <main className="flex ml-24 mt-5 p-4 flex-col w-full">
          <h1 className="text-xl font-bold mb-4">Doctor's Appointments</h1>
          <div className="overflow-x-auto">
            <table className="min-w-[90vw] bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="py-2 px-4 text-left">Name</th>
                  <th className="py-2 px-4 text-left">Address</th>
                  <th className="py-2 px-4 text-left">Date</th>
                  <th className="py-2 px-4 text-left">Status</th>
                  <th className="py-2 px-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment) => (
                  <tr key={appointment.id}>
                    <td className="py-2 px-4">{appointment.name}</td>
                    <td className="py-2 px-4">{appointment.address}</td>
                    <td className="py-2 px-4">{appointment.date}</td>
                    <td className="py-2 px-4">
                      <span
                        className={`font-semibold ${
                          appointment.status === "Approved"
                            ? "text-green-600"
                            : "text-yellow-600"
                        }`}
                      >
                        {appointment.status}
                      </span>
                    </td>
                    <td className="py-2 px-4">
                      <button
                        onClick={() => handleEditClick(appointment)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <FaEdit />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-semibold mb-4">
                  Change Appointment Date
                </h2>
                <Calendar
                  onChange={handleDateChange}
                  value={selectedDate}
                  className="mb-4"
                />
                <div className="flex justify-end space-x-4">
                  <Button title="Cancel" onClick={handleCloseModal} />
                  <Button title="Save" onClick={handleSaveDate} />
                </div>
              </div>
            </div>
          )}
        </main>
      </section>
    </div>
  );
}

export default Dappoinment;
