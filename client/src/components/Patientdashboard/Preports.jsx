import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import ReportModal from "./ReportModal"; // Import the modal component
import axios from "axios"; // Import axios for API calls

function Preports() {
  const [reports, setReports] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch reports from the server
  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get("http://localhost:3000/reports");
        setReports(response.data);
      } catch (error) {
        console.error("Error fetching reports:", error);
      }
    };

    fetchReports();
  }, []); // Empty dependency array ensures this runs once on mount

  // Function to handle adding a new report
  const handleAddReport = (newReport) => {
    setReports([...reports, newReport]);
  };

  return (
    <div>
      <section className="reports">
        <aside className="w-24 h-full text-white fixed top-0 left-0 flex flex-col">
          <Sidebar />
        </aside>
        <main className="flex ml-24 mt-5 p-4 flex-col w-[80vw]">
          <div className="flex flex-col items-start">
            {/* Add Report Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 mb-4 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add Report
            </button>

            {/* Display Reports */}
            <div className="w-full bg-white p-4 rounded shadow">
              <h2 className="text-xl font-bold mb-2">Reports</h2>
              {reports.length > 0 ? (
                <ul className="list-disc pl-5">
                  {reports.map((report, index) => (
                    <li key={index} className="mb-2">
                      <h3 className="text-lg font-semibold">{report.title}</h3>
                      {report.image && (
                        <img
                          src={`http://localhost:3000/uploads/${report.image}`}
                          alt={report.title}
                          className="w-32 h-32 object-cover"
                        />
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No reports available</p>
              )}
            </div>
          </div>
        </main>
      </section>

      {/* Report Modal */}
      <ReportModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddReport={handleAddReport}
      />
    </div>
  );
}

export default Preports;
