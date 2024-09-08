import React from "react";
import Sidebar from "./Sidebar";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

// Sample data for the pie chart
const pieData = {
  labels: ["Routine Checkups", "Emergency Visits", "Follow-ups"],
  datasets: [
    {
      data: [30, 15, 10],
      backgroundColor: ["#4b6cb7", "#f59e0b", "#ef4444"],
      borderColor: "#ffffff",
      borderWidth: 1,
    },
  ],
};

const pieOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          return `${tooltipItem.label}: ${tooltipItem.raw}`;
        },
      },
    },
  },
};

// Sample data for the bar chart
const barData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Visits",
      data: [4, 6, 3, 5, 7, 2, 8],
      backgroundColor: "#4b6cb7",
      borderColor: "#ffffff",
      borderWidth: 1,
    },
  ],
};

const barOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          return `Visits: ${tooltipItem.raw}`;
        },
      },
    },
  },
};

function Pdashboard() {
  return (
    <div>
      <section className="patientdashboard flex">
        <aside className="sidebar w-64 h-screen fixed top-0 left-0 flex flex-col  text-white">
          <Sidebar />
        </aside>
        <main className="flex-1 ml-24 mt-5 p-6 flex flex-col bg-gray-100">
          <h1>Patient's Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Total Checkups Card */}
            <div className="bg-white p-4 border border-gray-300 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-2">Total Checkups</h2>
              <p className="text-2xl font-bold text-blue-600">45</p>
            </div>

            {/* Upcoming Appointments Card */}
            <div className="bg-white p-4 border border-gray-300 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-2">
                Upcoming Appointments
              </h2>
              <p className="text-2xl font-bold text-yellow-600">3</p>
            </div>

            {/* Payment Due Card */}
            <div className="bg-white p-4 border border-gray-300 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-2">Payment Due</h2>
              <p className="text-2xl font-bold text-red-600">$200</p>
            </div>
          </div>

          {/* Charts Container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Pie Chart Card */}
            <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-sm flex items-center justify-center">
              <div className="w-full max-w-sm">
                <h2 className="text-lg font-semibold mb-4 text-center">
                  Visit Distribution
                </h2>
                <Pie data={pieData} options={pieOptions} />
              </div>
            </div>

            {/* Bar Chart Card */}
            <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-4 text-center">
                Monthly Visits
              </h2>
              <Bar data={barData} options={barOptions} />
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}

export default Pdashboard;
