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
  labels: ["Base Salary", "Bonuses", "Deductions"],
  datasets: [
    {
      data: [5000, 1200, 300],
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

const barData = {
  labels: ["Base Salary", "Bonuses", "Deductions"],
  datasets: [
    {
      label: "Amount",
      data: [5000, 1200, 300],
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
          return `Amount: ${tooltipItem.raw}`;
        },
      },
    },
  },
};

function Salary() {
  return (
    <div>
      <section className="salary flex">
        <aside className="sidebar w-64 h-screen fixed top-0 left-0 flex flex-col text-white">
          <Sidebar />
        </aside>
        <main className="flex-1 ml-24 p-6 flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-4 border border-gray-300 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-2">Latest Salary</h2>
              <p className="text-gray-700">Date: September 2024</p>
              <p className="text-2xl font-bold text-green-600">$5,000</p>
            </div>

            <div className="bg-white p-4 border border-gray-300 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-2">Salary Details</h2>
              <div className="space-y-4">
                {/* Sample user cards */}
                <div className="border border-gray-200 rounded-md p-3 flex items-center justify-between">
                  <span className="font-medium">Dr. John Doe</span>
                  <span className="font-medium">2024-01-12</span>
                  <span className="text-green-600">$2,500</span>
                </div>
                <div className="border border-gray-200 rounded-md p-3 flex items-center justify-between">
                  <span className="font-medium">Dr. John Doe</span>
                  <span className="font-medium">2024-02-12</span>
                  <span className="text-green-600">$2,500</span>
                </div>
              </div>
            </div>
          </div>

          {/* Charts Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pie Chart Card */}
            <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-sm flex items-center justify-center">
              <div className="w-full max-w-sm">
                <h2 className="text-lg font-semibold mb-4 text-center">
                  Salary Distribution
                </h2>
                <Pie data={pieData} options={pieOptions} />
              </div>
            </div>

            {/* Bar Chart Card */}
            <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-4 text-center">
                Salary Breakdown
              </h2>
              <Bar data={barData} options={barOptions} />
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}

export default Salary;
