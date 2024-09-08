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

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

const pieData = {
  labels: ["Medicines", "Supplements", "Other"],
  datasets: [
    {
      data: [65, 20, 15],
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
      label: "Sales ($)",
      data: [3000, 2500, 3200, 2800, 3500, 4000, 4200],
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
          return `Sales: $${tooltipItem.raw}`;
        },
      },
    },
  },
};

function PharmacyDashboard() {
  return (
    <div>
      <aside className="sidebar w-64 h-screen fixed top-0 left-0 flex flex-col  text-white">
        <Sidebar />
      </aside>
      <main className="flex-1 ml-24 mt-5 p-6 flex flex-col bg-gray-100">
        <h1>Pharmacy Dashboard</h1>
        <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-4">Billing Details</h2>
          <div className="flex flex-col space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-medium">Total Sales:</span>
              <span className="text-2xl font-bold text-green-600">$15,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Total Expenses:</span>
              <span className="text-2xl font-bold text-red-600">$5,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Net Revenue:</span>
              <span className="text-2xl font-bold text-blue-600">$10,000</span>
            </div>
          </div>
        </div>

        {/* Charts Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Pie Chart Card */}
          <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-sm flex items-center justify-center">
            <div className="w-full max-w-sm">
              <h2 className="text-lg font-semibold mb-4 text-center">
                Sales Distribution
              </h2>
              <Pie data={pieData} options={pieOptions} />
            </div>
          </div>

          {/* Bar Chart Card */}
          <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4 text-center">
              Monthly Sales
            </h2>
            <Bar data={barData} options={barOptions} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default PharmacyDashboard;
