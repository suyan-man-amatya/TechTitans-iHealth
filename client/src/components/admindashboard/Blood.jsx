import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Blood = () => {
  const [bloodRequest, setBloodRequest] = useState({
    bloodType: "",
    quantity: "",
  });
  const [requests, setRequests] = useState([]);
  const [alertVisible, setAlertVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBloodRequest((prevRequest) => ({
      ...prevRequest,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("http://localhost:3000/blood-demands", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bloodRequest),
      });

      // Add the new request to the list with status "notfound"
      setRequests((prevRequests) => [
        ...prevRequests,
        { ...bloodRequest, status: "notfound" },
      ]);

      setBloodRequest({ bloodType: "", quantity: "" });
      setAlertVisible(true);

      // Hide the alert after 3 seconds
      setTimeout(() => setAlertVisible(false), 3000);
    } catch (error) {
      console.error("Error submitting blood request:", error);
    }
  };

  return (
    <div>
      <section className="blood flex">
        <aside className="sidebar w-24 h-screen fixed top-0 left-0 flex flex-col">
          <Sidebar />
        </aside>
        <main className="flex-1 ml-24 p-6">
          <h1 className="text-xl font-bold mb-4">Request Blood</h1>

          {alertVisible && (
            <div className="bg-green-500 text-white p-4 mb-4 rounded-lg shadow-md">
              Blood request submitted successfully.
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="mb-4">
              <label htmlFor="bloodType" className="block text-gray-700">
                Blood Type
              </label>
              <input
                type="text"
                id="bloodType"
                name="bloodType"
                value={bloodRequest.bloodType}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Enter blood type (e.g., A+, B-, O+)"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="quantity" className="block text-gray-700">
                Quantity (in units)
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={bloodRequest.quantity}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Enter quantity"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Submit Request
            </button>
          </form>

          {/* List of Blood Requests */}
          <div className="mt-6">
            <h2 className="text-lg font-bold mb-4">Blood Requests</h2>
            <table className="w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="py-2 px-4 text-left">Blood Type</th>
                  <th className="py-2 px-4 text-left">Quantity</th>
                  <th className="py-2 px-4 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((request, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2 px-4">{request.bloodType}</td>
                    <td className="py-2 px-4">{request.quantity}</td>
                    <td className="py-2 px-4">{request.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Blood;
