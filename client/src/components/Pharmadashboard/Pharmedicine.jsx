import React, { useState } from "react";
import Sidebar from "./Sidebar";

function Medicinelist() {
  // Sample patient data with billing status
  const [patients, setPatients] = useState([
    { id: 1, name: "John Doe", age: 30, gender: "Male", billStatus: "Pending" },
    {
      id: 2,
      name: "Jane Smith",
      age: 25,
      gender: "Female",
      billStatus: "Paid",
    },
    {
      id: 3,
      name: "Emily Johnson",
      age: 40,
      gender: "Female",
      billStatus: "Pending",
    },
    {
      id: 4,
      name: "Michael Brown",
      age: 35,
      gender: "Male",
      billStatus: "Paid",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  // Filter patients based on search term
  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to handle bill status change
  const handleStatusChange = (id, status) => {
    setPatients(
      patients.map((patient) =>
        patient.id === id ? { ...patient, billStatus: status } : patient
      )
    );
  };

  return (
    <div>
      <aside className="sidebar w-64 h-screen fixed top-0 left-0 flex flex-col  text-white">
        <Sidebar />
      </aside>
      <main className="flex-1 ml-24 p-6 bg-gray-100 flex flex-col">
        {/* Search Bar and Button */}
        <div className="mb-6 flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search for a patient..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
          />
          <button
            onClick={() => {}}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700"
          >
            Search
          </button>
        </div>

        {/* Patient List */}
        <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Patient List</h2>
          {filteredPatients.length === 0 ? (
            <p>No patients found.</p>
          ) : (
            <ul className="space-y-4">
              {filteredPatients.map((patient) => (
                <li
                  key={patient.id}
                  className="flex justify-between items-center p-4 border border-gray-300 rounded-md"
                >
                  <div>
                    <p className="font-semibold">{patient.name}</p>
                    <p>Age: {patient.age}</p>
                    <p>Gender: {patient.gender}</p>
                    <p>
                      Status:{" "}
                      <span
                        className={
                          patient.billStatus === "Paid"
                            ? "text-green-600"
                            : "text-red-600"
                        }
                      >
                        {patient.billStatus}
                      </span>
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleStatusChange(patient.id, "Paid")}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                    >
                      Mark as Paid
                    </button>
                    <button
                      onClick={() => handleStatusChange(patient.id, "Pending")}
                      className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                    >
                      Mark as Pending
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
}

export default Medicinelist;
