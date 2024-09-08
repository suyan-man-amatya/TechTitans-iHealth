import React, { useState, useEffect } from "react";
import Modal from "react-modal"; // Import react-modal
import Sidebar from "./Sidebar";
import "./Add.css";

// Bind modal to app element for accessibility
Modal.setAppElement("#root");

function Addmedicine() {
  const [name, setName] = useState("");
  const [quality, setQuality] = useState("");
  const [price, setPrice] = useState("");
  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false); // Modal state

  // Fetch medicines data
  const fetchMedicines = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/add-medicine");
      if (!response.ok) {
        throw new Error("Failed to fetch medicines");
      }
      const data = await response.json();
      setMedicines(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMedicines();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newMedicine = { name, quality, price };

    try {
      const response = await fetch("http://localhost:3000/add-medicine", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMedicine),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Medicine added:", result);
        setName("");
        setQuality("");
        setPrice("");
        // Fetch updated list of medicines
        fetchMedicines();
        closeModal(); // Close the modal after submission
      } else {
        const result = await response.json();
        console.error("Error:", result.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div>
      <section className="flex">
        <aside className="sidebar w-24 h-screen fixed top-0 left-0 flex flex-col text-white">
          <Sidebar />
        </aside>
        <main className="flex-1 ml-24 p-6 bg-gray-100 flex flex-col">
          <div className="flex justify-end">
            <button
              onClick={openModal}
              className="bg-blue-500 text-white py-1 px-2 rounded-lg text-sm hover:bg-blue-600 mb-4 w-auto"
            >
              Add New Medicine
            </button>
          </div>

          {/* Modal */}
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Add Medicine"
            className="Modal"
            overlayClassName="Overlay"
          >
            <h2 className="text-xl font-bold mb-4">Add Medicine</h2>
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Quality</label>
                <input
                  type="text"
                  value={quality}
                  onChange={(e) => setQuality(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Price</label>
                <input
                  type="text"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
              >
                Add Medicine
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

          {/* Medicine List Table */}
          <div className="overflow-x-auto">
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="py-3 px-6 border-b text-left">SN</th>
                  <th className="py-3 px-6 border-b text-left">Name</th>
                  <th className="py-3 px-6 border-b text-left">Quality</th>
                  <th className="py-3 px-6 border-b text-left">Price</th>
                </tr>
              </thead>
              <tbody>
                {medicines.map((medicine) => (
                  <tr key={medicine._id}>
                    <td className="py-3 px-6 border-b">{medicine._id}</td>
                    <td className="py-3 px-6 border-b">{medicine.name}</td>
                    <td className="py-3 px-6 border-b">{medicine.quality}</td>
                    <td className="py-3 px-6 border-b">{medicine.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </section>
    </div>
  );
}

export default Addmedicine;
