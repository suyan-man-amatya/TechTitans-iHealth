import React from "react";
import { Doughnut } from "react-chartjs-2";
function Charts() {
  const data = {
    labels: ["Patients", "Available Slots", "Appointments", "Other"], // Labels for the chart
    datasets: [
      {
        data: [300, 50, 100, 150], // Data points
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#E7E9ED"], // Colors for each section
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#E7E9ED"],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // Hide the legend if you don't want it on each card
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
  return (
    <div className="mt-10">
      <div className="flex flex-wrap justify-center gap-4 w-full px-4 mt-4">
        {/* Card 1 */}
        <div className=" p-4 rounded-lg  w-64 h-64 flex flex-col items-center">
          <Doughnut data={data} options={options} />
          <div className="mt-4 text-center text-lg font-semibold">
            Patients 2000+
          </div>
        </div>

        {/* Card 2 */}
        <div className=" p-4 rounded-lg w-64 h-64 flex flex-col items-center">
          <Doughnut data={data} options={options} />
          <div className="mt-4 text-center text-lg font-semibold">
            Happy Customers 1000+
          </div>
        </div>
        <div className=" p-4 rounded-lg w-64 h-64 flex flex-col items-center">
          <Doughnut data={data} options={options} />
          <div className="mt-4 text-center text-lg font-semibold">
            Doctors 300+
          </div>
        </div>

        {/* Card 3 */}
        <div className=" p-4 rounded-lg  w-64 h-64 flex flex-col items-center">
          <Doughnut data={data} options={options} />
          <div className="mt-4 text-center text-lg font-semibold">
            Available Beds 2500+
          </div>
        </div>
      </div>
    </div>
  );
}

export default Charts;
