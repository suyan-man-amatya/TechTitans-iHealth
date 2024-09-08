import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
const data = [
  { name: "Sun", uv: 100, pv: 2400, amt: 2400 },
  { name: "Mon", uv: 200, pv: 2400, amt: 2400 },
  { name: "Tue", uv: 400, pv: 2400, amt: 2400 },
  { name: "Wed", uv: 50, pv: 2400, amt: 2400 },
  { name: "Thu", uv: 50, pv: 2400, amt: 2400 },
  { name: "Fri", uv: 250, pv: 2400, amt: 2400 },
  { name: "Sat", uv: 150, pv: 2400, amt: 2400 },
];

function Chart() {
  return (
    <BarChart width={550} height={350} data={data}>
      <XAxis dataKey="name" stroke="#8884d8" />
      <YAxis />
      <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc" }} />
      <Legend
        width={100}
        wrapperStyle={{
          top: 40,
          right: 20,
          backgroundColor: "#f5f5f5",
          border: "1px solid #d5d5d5",
          borderRadius: 3,
          lineHeight: "40px",
        }}
      />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Bar dataKey="uv" fill="#8884d8" barSize={30} />
    </BarChart>
  );
}

export default Chart;
