import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import L from "leaflet";

// Default hospital location
const hospitalLocation = { lat: 27.688, lng: 85.292 };

// Calculate distance between two points
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radius of the Earth in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in km
};

const Ambulance = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [bookings, setBookings] = useState([]);
  const ambulancesPerPage = 3;

  useEffect(() => {
    // Fetch booking details
    const fetchBookings = async () => {
      try {
        const response = await fetch("http://localhost:3000/bookings");
        const data = await response.json();
        setBookings(data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  const totalPages = Math.ceil(bookings.length / ambulancesPerPage);

  // Get the bookings for the current page
  const indexOfLastBooking = currentPage * ambulancesPerPage;
  const indexOfFirstBooking = indexOfLastBooking - ambulancesPerPage;
  const currentBookings = bookings.slice(
    indexOfFirstBooking,
    indexOfLastBooking
  );

  // Change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const toggleStatus = async (bookingId, currentStatus) => {
    const newStatus =
      currentStatus === "Unapproved" ? "Approved" : "Unapproved";

    try {
      await fetch(`http://localhost:3000/bookings/${bookingId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });

      // Update the state with the new status
      setBookings((prevBookings) =>
        prevBookings.map((booking) =>
          booking._id === bookingId
            ? { ...booking, status: newStatus }
            : booking
        )
      );
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div>
      <section className="ambulance">
        <aside className="sidebar w-24 h-screen fixed top-0 left-0 flex flex-col text-white">
          <Sidebar />
        </aside>
        <main className="flex ml-24 mt-5 p-4 flex-col w-full">
          <h1 className="text-xl font-bold mb-4">Ambulance Status</h1>

          {/* Booking List Table with Mini Maps */}
          <div className="overflow-x-auto mb-6">
            <table className="min-w-[80vw] bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="py-2 px-4 text-left">Serial Number</th>
                  <th className="py-2 px-4 text-left">License Plate</th>
                  <th className="py-2 px-4 text-left">Distance to Hospital</th>
                  <th className="py-2 px-4 text-left">Location</th>
                  <th className="py-2 px-4 text-left">Booking Details</th>
                  <th className="py-2 px-4 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {currentBookings.map((booking) => (
                  <tr key={booking._id} className="border-b">
                    <td className="py-2 px-4">{booking.ambulance}</td>
                    <td className="py-2 px-4">N/A</td>{" "}
                    {/* License plate is not available in booking data */}
                    <td className="py-2 px-4">
                      {calculateDistance(
                        booking.location.lat,
                        booking.location.lng,
                        hospitalLocation.lat,
                        hospitalLocation.lng
                      ).toFixed(2)}{" "}
                      km
                    </td>
                    <td className="py-10 px-10">
                      <div style={{ height: "200px", width: "300px" }}>
                        <MapContainer
                          center={[booking.location.lat, booking.location.lng]}
                          zoom={14}
                          style={{ height: "100%", width: "100%" }}
                        >
                          <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                          />
                          <Marker
                            position={[
                              booking.location.lat,
                              booking.location.lng,
                            ]}
                            icon={L.icon({
                              iconUrl:
                                "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
                              iconSize: [25, 41],
                              iconAnchor: [12, 41],
                              popupAnchor: [1, -34],
                              shadowUrl:
                                "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
                              shadowSize: [41, 41],
                            })}
                          >
                            <Popup>
                              <div>
                                <h2>Booking Details</h2>
                                <p>Phone: {booking.phoneno}</p>
                                <p>Fare: {booking.fare}</p>
                                <p>
                                  Distance to Hospital:{" "}
                                  {calculateDistance(
                                    booking.location.lat,
                                    booking.location.lng,
                                    hospitalLocation.lat,
                                    hospitalLocation.lng
                                  ).toFixed(2)}{" "}
                                  km
                                </p>
                                <p>
                                  Location: Lat {booking.location.lat}, Lng{" "}
                                  {booking.location.lng}
                                </p>
                                <p>
                                  Timestamp:{" "}
                                  {new Date(booking.timestamp).toLocaleString()}
                                </p>
                              </div>
                            </Popup>
                          </Marker>
                          <Marker
                            position={[
                              hospitalLocation.lat,
                              hospitalLocation.lng,
                            ]}
                            icon={L.icon({
                              iconUrl:
                                "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
                              iconSize: [25, 41],
                              iconAnchor: [12, 41],
                              popupAnchor: [1, -34],
                              shadowUrl:
                                "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
                              shadowSize: [41, 41],
                            })}
                          >
                            <Popup>
                              <div>
                                <h2>Hospital</h2>
                                <p>
                                  Location: {hospitalLocation.lat},{" "}
                                  {hospitalLocation.lng}
                                </p>
                              </div>
                            </Popup>
                          </Marker>
                          <Polyline
                            positions={[
                              [booking.location.lat, booking.location.lng],
                              [hospitalLocation.lat, hospitalLocation.lng],
                            ]}
                            color="blue"
                            weight={2}
                          />
                        </MapContainer>
                      </div>
                    </td>
                    <td className="py-2 px-4">
                      <div>
                        <p>Phone: {booking.phoneno}</p>
                        <p>Fare: {booking.fare}</p>
                        <p>
                          Location: Lat {booking.location.lat}, Lng{" "}
                          {booking.location.lng}
                        </p>
                        <p>
                          Timestamp:{" "}
                          {new Date(booking.timestamp).toLocaleString()}
                        </p>
                      </div>
                    </td>
                    <td
                      className="py-2 px-4 cursor-pointer"
                      onClick={() =>
                        toggleStatus(
                          booking._id,
                          booking.status || "Unapproved"
                        )
                      }
                    >
                      {booking.status || "Unapproved"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 mx-1 bg-gray-300 text-gray-700 rounded"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 mx-1 ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-700"
                } rounded`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 mx-1 bg-gray-300 text-gray-700 rounded"
            >
              Next
            </button>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Ambulance;
