import React, { useState, useEffect } from "react";
import Modal from "react-modal"; // Import react-modal
import axios from "axios";
import Sidebar from "./Sidebar";
import "./Drep.css";

// Bind modal to app element for accessibility
Modal.setAppElement("#root");

function Drep() {
  const [patients, setPatients] = useState([]);
  const [medicines, setMedicines] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState("");
  const [selectedMedicines, setSelectedMedicines] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    reportTitle: "",
    reportDescription: "",
  });

  // Dummy medicine data
  const dummyMedicines = [
    { _id: "med1", name: "Aspirin", price: 10 },
    { _id: "med2", name: "Ibuprofen", price: 15 },
    { _id: "med3", name: "Paracetamol", price: 5 },
  ];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const patientsResponse = await axios.get(
          "http://localhost:3000/patients"
        );
        setPatients(patientsResponse.data);

        // Comment out the actual API call for medicines and use dummy data
        // const medicinesResponse = await axios.get(
        //   "http://localhost:3000/medicines"
        // );
        setMedicines(dummyMedicines);
      } catch (error) {
        console.error(
          "Error fetching data:",
          error.response ? error.response.data : error.message
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleMedicineChange = (id) => {
    setSelectedMedicines((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((medicineId) => medicineId !== id)
        : [...prevSelected, id]
    );
  };

  const handleGenerateReport = () => {
    if (!selectedPatient) return;
    setModalIsOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", {
      ...formData,
      selectedMedicines,
    });

    try {
      // Save prescribed medicines to the database
      await axios.post("http://localhost:3000/prescribedMedicines", {
        patientId: selectedPatient,
        reportTitle: formData.reportTitle,
        reportDescription: formData.reportDescription,
        prescribedMedicines: selectedMedicines,
      });
      alert("Report generated and medicines prescribed successfully.");
    } catch (error) {
      console.error(
        "Error submitting form:",
        error.response ? error.response.data : error.message
      );
    }

    setModalIsOpen(false);
  };

  const closeModal = () => setModalIsOpen(false);

  return (
    <div>
      <section className="flex">
        <aside className="sidebar w-64 h-screen fixed top-0 left-0 flex flex-col text-white">
          <Sidebar />
        </aside>
        <main className="flex-1 ml-64 p-6 bg-gray-100 flex flex-col">
          <div className="flex flex-col items-start mb-4">
            {/* Patient Selection Box */}
            <select
              className="mb-4 p-2 border rounded"
              value={selectedPatient}
              onChange={(e) => setSelectedPatient(e.target.value)}
            >
              <option value="">Select a patient</option>
              {patients.map((patient) => (
                <option key={patient._id} value={patient._id}>
                  {patient.fullname}
                </option>
              ))}
            </select>

            {/* Generate Report Button */}
            {selectedPatient && (
              <button
                onClick={handleGenerateReport}
                className="px-4 py-2 mb-4 bg-blue-500 text-white rounded hover:bg-blue-600"
                disabled={loading}
              >
                {loading ? "Loading..." : "Generate Report"}
              </button>
            )}
          </div>

          {/* Patient Cards List */}
          <div className="grid grid-cols-1 gap-4">
            {patients.map((patient) => (
              <div
                key={patient._id}
                className="bg-white p-4 rounded-lg shadow-md w-full"
              >
                <h3 className="text-lg font-semibold">{patient.fullname}</h3>
                <p className="text-gray-600">
                  Date of Visit: {patient.dateOfVisit || "N/A"}
                </p>
                {/* Additional patient information can be added here */}
              </div>
            ))}
          </div>
        </main>
      </section>

      {/* Report Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Generate Report Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <h2 className="text-xl font-bold mb-4">Generate Report</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label htmlFor="reportTitle" className="block text-gray-700">
              Report Title
            </label>
            <input
              type="text"
              id="reportTitle"
              name="reportTitle"
              value={formData.reportTitle}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter report title"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="reportDescription" className="block text-gray-700">
              Report Description
            </label>
            <textarea
              id="reportDescription"
              name="reportDescription"
              value={formData.reportDescription}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter report description"
            />
          </div>

          {/* Medicines List with Checkboxes */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Medicine List</h3>
            {medicines.map((medicine) => (
              <div key={medicine._id} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={`medicine-${medicine._id}`}
                  checked={selectedMedicines.includes(medicine._id)}
                  onChange={() => handleMedicineChange(medicine._id)}
                  className="mr-2"
                />
                <label
                  htmlFor={`medicine-${medicine._id}`}
                  className="text-gray-700"
                >
                  {medicine.name} - ${medicine.price}
                </label>
              </div>
            ))}
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={closeModal}
            className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 mt-2"
          >
            Close
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default Drep;
