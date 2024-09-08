import React from "react";
import Sidebar from "./Sidebar";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const billingData = [
  { invoiceNo: "INV001", amount: "$500", date: "2024-09-01", status: "Paid" },
  {
    invoiceNo: "INV002",
    amount: "$750",
    date: "2024-09-05",
    status: "Pending",
  },
  { invoiceNo: "INV003", amount: "$300", date: "2024-09-10", status: "Paid" },
  {
    invoiceNo: "INV004",
    amount: "$450",
    date: "2024-09-15",
    status: "Pending",
  },
  { invoiceNo: "INV005", amount: "$600", date: "2024-09-20", status: "Paid" },
  {
    invoiceNo: "INV006",
    amount: "$350",
    date: "2024-09-22",
    status: "Pending",
  },
  { invoiceNo: "INV007", amount: "$800", date: "2024-09-25", status: "Paid" },
  { invoiceNo: "INV008", amount: "$700", date: "2024-09-28", status: "Paid" },
  {
    invoiceNo: "INV009",
    amount: "$500",
    date: "2024-10-01",
    status: "Pending",
  },
  { invoiceNo: "INV010", amount: "$600", date: "2024-10-05", status: "Paid" },
  {
    invoiceNo: "INV011",
    amount: "$400",
    date: "2024-10-10",
    status: "Pending",
  },
  { invoiceNo: "INV012", amount: "$900", date: "2024-10-15", status: "Paid" },
];

const recentPayments = [{ id: 1, amount: "$500", date: "2024-09-01" }];

const chartData = {
  labels: ["Paid", "Pending"],
  datasets: [
    {
      label: "Total Billing",
      data: [3, 2],
      backgroundColor: ["#4CAF50", "#FFC107"],
    },
  ],
};

const exportToExcel = () => {
  const ws = XLSX.utils.json_to_sheet(billingData);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "BillingData");
  XLSX.writeFile(wb, "BillingData.xlsx");
};

const exportToPDF = () => {
  const input = document.getElementById("billing-table");
  html2canvas(input).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    pdf.addImage(imgData, "PNG", 0, 0);
    pdf.save("BillingData.pdf");
  });
};

const Billing = () => {
  return (
    <div>
      <section className="billing flex">
        <aside className="sidebar w-24 h-screen fixed top-0 left-0 flex flex-col">
          <Sidebar />
        </aside>
        <main className="flex-1 ml-24 mt-5 p-4 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            {/* Export Buttons */}
            <button
              onClick={exportToExcel}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Export to Excel
            </button>
            <button
              onClick={exportToPDF}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Export to PDF
            </button>
          </div>

          <div className="flex">
            {/* Billing Table */}
            <div className="w-1/2 p-4">
              <h2 className="text-xl font-bold mb-4">Billing Details</h2>
              <div className="overflow-x-auto">
                <table
                  id="billing-table"
                  className="min-w-full bg-white border border-gray-200"
                >
                  <thead>
                    <tr className="bg-gray-100 border-b">
                      <th className="py-2 px-4 text-left">Invoice No</th>
                      <th className="py-2 px-4 text-left">Amount</th>
                      <th className="py-2 px-4 text-left">Date</th>
                      <th className="py-2 px-4 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {billingData.map((item, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-2 px-4">{item.invoiceNo}</td>
                        <td className="py-2 px-4">{item.amount}</td>
                        <td className="py-2 px-4">{item.date}</td>
                        <td
                          className={`py-2 px-4 ${
                            item.status === "Paid"
                              ? "text-green-600"
                              : "text-yellow-600"
                          }`}
                        >
                          {item.status}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recent Payments and Bar Chart */}
            <div className="w-1/2 p-4 flex flex-col space-y-4">
              {/* Recent Payments */}
              <div className="bg-white p-4 rounded shadow">
                <h2 className="text-xl font-bold mb-4">Recent Payments</h2>
                <div className="space-y-4">
                  {recentPayments.map((payment) => (
                    <div key={payment.id} className="bg-gray-100 p-4 rounded">
                      <p>
                        <strong>Amount:</strong> {payment.amount}
                      </p>
                      <p>
                        <strong>Date:</strong> {payment.date}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bar Chart */}
              <div className="bg-white p-4 rounded shadow">
                <h2 className="text-xl font-bold mb-4">Billing Overview</h2>
                <Bar data={chartData} options={{ responsive: true }} />
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Billing;
