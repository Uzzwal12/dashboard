import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./chart.css";

const data = [
  {
    name: "Jan",
    "Active User": 4000,
  },
  {
    name: "Feb",
    "Active User": 3000,
  },
  {
    name: "Mar",
    "Active User": 2000,
  },
  {
    name: "Apr",
    "Active User": 1800,
  },
  {
    name: "May",
    "Active User": 1600,
  },
  {
    name: "Jun",
    "Active User": 1300,
  },
  {
    name: "Jul",
    "Active User": 1100,
  },
  {
    name: "Aug",
    "Active User": 1000,
  },
  {
    name: "Sep",
    "Active User": 2800,
  },
  {
    name: "Oct",
    "Active User": 3200,
  },
  {
    name: "Nov",
    "Active User": 2400,
  },
  {
    name: "Dec",
    "Active User": 3000,
  },
];

const Chart = () => {
  return (
    <div className="chart">
      <h3 className="chartTitle">User Analytics</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey="Active User" stroke="#5550bd" />
          <Tooltip />
          <CartesianGrid stroke="#e0dfdf" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
