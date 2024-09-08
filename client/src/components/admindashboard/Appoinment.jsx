import React, { useState } from "react";
import Modal from "react-modal";
import Sidebar from "./Sidebar";
import "./Appoin.css";

// Set the app element for accessibility
Modal.setAppElement("#root");

function Appointments() {
  const initialAppointments = [
    {
      id: 1,
      name: "John Doe",
      address: "123 Elm Street",
      phone: "555-1234",
      email: "john.doe@example.com",
      date: "2024-09-10",
      time: "10:00 AM",
      status: "Approved",
      notes: "Follow-up needed next week.",
      bloodGroup: "O+",
      visitCount: 3,
    },
    {
      id: 2,
      name: "Jane Smith",
      address: "456 Oak Avenue",
      phone: "555-5678",
      email: "jane.smith@example.com",
      date: "2024-09-12",
      time: "2:00 PM",
      status: "Pending",
      notes: "Initial consultation.",
      bloodGroup: "A-",
      visitCount: 1,
    },
    {
      id: 3,
      name: "Emily Johnson",
      address: "789 Pine Road",
      phone: "555-8765",
      email: "emily.johnson@example.com",
      date: "2024-09-15",
      time: "11:00 AM",
      status: "Approved",
      notes: "Needs special dietary recommendations.",
      bloodGroup: "B+",
      visitCount: 5,
    },
    {
      id: 4,
      name: "Michael Brown",
      address: "101 Maple Drive",
      phone: "555-4321",
      email: "michael.brown@example.com",
      date: "2024-09-18",
      time: "9:00 AM",
      status: "Approved",
      notes: "Regular check-up.",
      bloodGroup: "AB-",
      visitCount: 2,
    },
    {
      id: 5,
      name: "Sarah Davis",
      address: "202 Birch Street",
      phone: "555-6789",
      email: "sarah.davis@example.com",
      date: "2024-09-20",
      time: "3:00 PM",
      status: "Pending",
      notes: "Blood test required.",
      bloodGroup: "O-",
      visitCount: 4,
    },
    {
      id: 6,
      name: "David Wilson",
      address: "303 Cedar Lane",
      phone: "555-9876",
      email: "david.wilson@example.com",
      date: "2024-09-22",
      time: "1:00 PM",
      status: "Approved",
      notes: "Follow-up on recent surgery.",
      bloodGroup: "A+",
      visitCount: 6,
    },
    {
      id: 7,
      name: "Olivia Martinez",
      address: "404 Elm Street",
      phone: "555-3456",
      email: "olivia.martinez@example.com",
      date: "2024-09-25",
      time: "10:30 AM",
      status: "Pending",
      notes: "Consultation for allergy symptoms.",
      bloodGroup: "B-",
      visitCount: 3,
    },
    {
      id: 8,
      name: "James Anderson",
      address: "505 Oak Avenue",
      phone: "555-6543",
      email: "james.anderson@example.com",
      date: "2024-09-28",
      time: "2:30 PM",
      status: "Approved",
      notes: "Routine check-up.",
      bloodGroup: "AB+",
      visitCount: 7,
    },
    {
      id: 9,
      name: "Isabella Thomas",
      address: "606 Pine Road",
      phone: "555-5432",
      email: "isabella.thomas@example.com",
      date: "2024-09-30",
      time: "11:30 AM",
      status: "Approved",
      notes: "Diabetes management.",
      bloodGroup: "O+",
      visitCount: 5,
    },
    {
      id: 10,
      name: "Ethan Taylor",
      address: "707 Maple Drive",
      phone: "555-4321",
      email: "ethan.taylor@example.com",
      date: "2024-10-02",
      time: "4:00 PM",
      status: "Pending",
      notes: "Check-up for new symptoms.",
      bloodGroup: "A-",
      visitCount: 2,
    },
    {
      id: 11,
      name: "Sophia Clark",
      address: "808 Birch Street",
      phone: "555-8765",
      email: "sophia.clark@example.com",
      date: "2024-10-05",
      time: "9:00 AM",
      status: "Approved",
      notes: "Regular follow-up.",
      bloodGroup: "B+",
      visitCount: 8,
    },
    {
      id: 12,
      name: "Liam Lewis",
      address: "909 Cedar Lane",
      phone: "555-5678",
      email: "liam.lewis@example.com",
      date: "2024-10-08",
      time: "12:00 PM",
      status: "Pending",
      notes: "Pre-surgical consultation.",
      bloodGroup: "AB-",
      visitCount: 3,
    },
    {
      id: 13,
      name: "Mia Robinson",
      address: "1010 Elm Street",
      phone: "555-6789",
      email: "mia.robinson@example.com",
      date: "2024-10-10",
      time: "10:00 AM",
      status: "Approved",
      notes: "Routine check-up and vaccine update.",
      bloodGroup: "O-",
      visitCount: 6,
    },
    {
      id: 14,
      name: "Noah Walker",
      address: "1111 Oak Avenue",
      phone: "555-9876",
      email: "noah.walker@example.com",
      date: "2024-10-12",
      time: "2:00 PM",
      status: "Approved",
      notes: "Consultation for physical therapy.",
      bloodGroup: "A+",
      visitCount: 4,
    },
    {
      id: 15,
      name: "Charlotte Harris",
      address: "1212 Pine Road",
      phone: "555-3456",
      email: "charlotte.harris@example.com",
      date: "2024-10-15",
      time: "1:30 PM",
      status: "Pending",
      notes: "Follow-up on medication side effects.",
      bloodGroup: "B-",
      visitCount: 3,
    },
  ];

  const itemsPerPage = 8; // Number of items per page
  const [appointments, setAppointments] = useState(initialAppointments);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const openModal = (appointment) => {
    setSelectedAppointment(appointment);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedAppointment(null);
  };

  const totalPages = Math.ceil(appointments.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentAppointments = appointments.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <section className="appoinment">
        <aside className="sidebar w-64 h-screen fixed top-0 left-0 flex flex-col">
          <Sidebar />
        </aside>
        <main className="flex ml-24 mt-5 p-4 flex-col w-full">
          <h1 className="text-xl font-bold mb-4">Appointments</h1>
          <div className="overflow-x-auto">
            <table className="min-w-[90vw] bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="py-2 px-4 text-left">Name</th>
                  <th className="py-2 px-4 text-left">Address</th>
                  <th className="py-2 px-4 text-left">Date</th>
                  <th className="py-2 px-4 text-left">Status</th>
                  <th className="py-2 px-4 text-left">Operations</th>
                </tr>
              </thead>
              <tbody>
                {currentAppointments.map((appointment) => (
                  <tr
                    key={appointment.id}
                    className={`border-b ${
                      appointment.status === "Approved"
                        ? "bg-green-100"
                        : "bg-yellow-100"
                    }`}
                  >
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
                        onClick={() => openModal(appointment)}
                        className="text-blue-500 hover:text-blue-700 bg-red-300 rounded-lg p-2 font-semibold"
                      >
                        See Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-center">
            <nav>
              <ul className="flex list-style-none">
                {Array.from({ length: totalPages }, (_, index) => (
                  <li
                    key={index + 1}
                    className={`mx-1 ${
                      currentPage === index + 1 ? "font-bold" : ""
                    }`}
                  >
                    <button
                      onClick={() => handlePageChange(index + 1)}
                      className={`px-4 py-2 border rounded ${
                        currentPage === index + 1
                          ? "bg-blue-500 text-white"
                          : "bg-white text-blue-500"
                      }`}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </main>
      </section>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Appointment Details"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2 className="text-xl font-bold mb-4">Appointment Details</h2>
        {selectedAppointment && (
          <div>
            <p>
              <strong>Name:</strong> {selectedAppointment.name}
            </p>
            <p>
              <strong>Address:</strong> {selectedAppointment.address}
            </p>
            <p>
              <strong>Phone:</strong> {selectedAppointment.phone}
            </p>
            <p>
              <strong>Email:</strong> {selectedAppointment.email}
            </p>
            <p>
              <strong>Date:</strong> {selectedAppointment.date}
            </p>
            <p>
              <strong>Time:</strong> {selectedAppointment.time}
            </p>
            <p>
              <strong>Status:</strong> {selectedAppointment.status}
            </p>
            <p>
              <strong>Notes:</strong> {selectedAppointment.notes}
            </p>
            <p>
              <strong>Blood Group:</strong> {selectedAppointment.bloodGroup}
            </p>
            <p>
              <strong>Visit Count:</strong>
              <span className="bg-blue-500 px-5 rounded-xl ps-3 text-white">
                {" "}
                {selectedAppointment.visitCount}
              </span>
            </p>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Close
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default Appointments;
