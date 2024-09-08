import React from "react";
import Sidebar from "./Sidebar";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

// Sample data for charts
const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Appointments",
      data: [30, 45, 60, 55, 70, 80, 65],
      fill: false,
      borderColor: "#4b6cb7",
      tension: 0.1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          return `Appointments: ${tooltipItem.raw}`;
        },
      },
    },
  },
};

function Ddashboard() {
  return (
    <div>
      <section className="dashboarddoc">
        <aside className="sidebar w-24 h-screen fixed top-0 left-0 flex flex-col  text-white">
          <Sidebar />
        </aside>
        <main className="flex ml-28 mt-5 p-2 flex-col w-[90vw] bg-gray-100">
          <h1 className="text-3xl font-bold mb-6">Doctor's Dashboard</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {/* Card 1 */}
            <div className="bg-white p-4 border border-gray-300 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-2">Total Appointments</h2>
              <p className="text-2xl font-bold">125</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-4 border border-gray-300 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-2">
                Patients Seen This Week
              </h2>
              <p className="text-2xl font-bold">30</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-4 border border-gray-300 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-2">
                Upcoming Appointments
              </h2>
              <p className="text-2xl font-bold">8</p>
            </div>
          </div>

          {/* Chart */}
          <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">
              Appointments Over Time
            </h2>
            <Line data={data} options={options} />
          </div>

          {/* Box with additional details */}
          <div className="bg-white p-6 mt-6 border border-gray-300 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Patient Summary</h2>
            <p className="text-gray-700">
              Here you can find a summary of patient demographics, recent
              visits, and other relevant information.
            </p>
          </div>
        </main>
      </section>
    </div>
  );
}

export default Ddashboard;
