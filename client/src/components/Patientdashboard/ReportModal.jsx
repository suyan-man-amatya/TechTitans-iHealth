import React, { useState } from "react";
import axios from "axios";
import { IoMdClose } from "react-icons/io";

function ReportModal({ isOpen, onClose, onAddReport }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !image) {
      alert("Please fill out all fields");
      return;
    }

    setLoading(true);

    // Prepare FormData
    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);

    try {
      const response = await axios.post(
        "http://localhost:3000/reports",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      onAddReport(response.data); // Assuming backend returns the added report
      onClose();
    } catch (error) {
      console.error("Error adding report:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg relative w-96">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          <IoMdClose size={24} />
        </button>
        <h2 className="text-2xl mb-4">Add Report</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="title"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 rounded p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="image"
            >
              Image
            </label>
            <input
              id="image"
              type="file"
              onChange={handleImageChange}
              className="w-full border border-gray-300 rounded p-2"
              required
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ReportModal;
