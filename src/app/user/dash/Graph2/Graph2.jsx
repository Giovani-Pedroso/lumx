import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

// const data = [
//   { name: "Group C", value: 300 },
//   { name: "Group D", value: 200 },
// ];

function Graph2({ title, data }) {
  return (
    <div className="flex ">
      <h2>{title}</h2>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />
      </PieChart>
    </div>
  );
}

export default Graph2;
