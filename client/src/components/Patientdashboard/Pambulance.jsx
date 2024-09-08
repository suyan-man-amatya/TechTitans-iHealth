import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Button, Card } from "react-bootstrap";
import "leaflet/dist/leaflet.css"; // Import leaflet CSS
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS

// Example ambulance data
const ambulances = [
  {
    id: 1,
    name: "Ambulance 1",
    phone: "123-456-7890",
    fare: "$50",
    position: [51.505, -0.09],
  },
  {
    id: 2,
    name: "Ambulance 2",
    phone: "123-456-7891",
    fare: "$60",
    position: [51.515, -0.1],
  },
  {
    id: 3,
    name: "Ambulance 3",
    phone: "123-456-7892",
    fare: "$70",
    position: [51.525, -0.11],
  },
];

function Pambulance() {
  const [selectedAmbulance, setSelectedAmbulance] = useState(null);

  const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  const handleBookAmbulance = async (ambulance) => {
    setSelectedAmbulance(ambulance);

    try {
      const position = await getCurrentPosition();
      const { latitude, longitude } = position.coords;

      const response = await fetch("http://localhost:3000/book-ambulance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ambulance: ambulance.name, // Changed from `ambulanceId` to `ambulance`
          phoneno: ambulance.phone, // Added `phoneno`
          fare: ambulance.fare,
          location: {
            lat: latitude,
            lng: longitude,
          },
        }),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Booking successful!");
      } else {
        alert(result.message || "Error booking ambulance");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error booking ambulance");
    }
  };

  return (
    <div>
      <aside className="sidebar w-24 h-screen fixed top-0 left-0 flex flex-col text-white">
        <Sidebar />
      </aside>
      <main className="flex-1 ml-24 mt-5 p-6 flex flex-col bg-gray-100">
        <div className="mb-4">
          <Button
            variant="primary"
            onClick={() => handleBookAmbulance(selectedAmbulance)}
            disabled={!selectedAmbulance} // Disable button if no ambulance is selected
          >
            Book Ambulance
          </Button>
        </div>
        <div className="flex-1 flex">
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            style={{ height: "500px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {ambulances.map((ambulance) => (
              <Marker key={ambulance.id} position={ambulance.position}>
                <Popup>
                  <Card style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title>{ambulance.name}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        Phone: {ambulance.phone}
                      </Card.Subtitle>
                      <Card.Text>Fare: {ambulance.fare}</Card.Text>
                      <Button
                        variant="primary"
                        onClick={() => handleBookAmbulance(ambulance)}
                      >
                        Book
                      </Button>
                    </Card.Body>
                  </Card>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </main>
    </div>
  );
}

export default Pambulance;
