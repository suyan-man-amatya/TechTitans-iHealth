import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const dummyData = [
  { name: "2014", value: 30 },
  { name: "2015", value: 28 },
  { name: "2016", value: 37 },
  { name: "2017", value: 54 },
  { name: "2018", value: 57 },
  { name: "2019", value: 43 },
  { name: "2020", value: 28 },
  { name: "2021", value: 84 },
  { name: "2022", value: 76 },
  { name: "2023", value: 28 },
];

const pieData = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const DummyCharts = () => {
  return (
    <div className="flex gap-36">
      <div className="linechart">
        <LineChart width={400} height={300} data={dummyData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </div>

      {/* <div className="barchart">
        <BarChart width={400} height={300} data={dummyData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </div> */}

      {/* <div className="piechart">
        <PieChart width={400} height={400}>
          <Pie
            data={pieData}
            cx={200}
            cy={200}
            labelLine={false}
            label={({ name }) => name}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div> */}
    </div>
  );
};

export default DummyCharts;
