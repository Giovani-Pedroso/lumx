import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "02/2023",
    LoanLinx: 4000,
    CapitalBoost: 2400,
    MoneyMettle: 2400,
  },
  {
    name: "03/2023",
    LoanLinx: 3000,
    CapitalBoost: 1398,
    MoneyMettle: 2210,
  },
  {
    name: "04/2023",
    LoanLinx: 2000,
    CapitalBoost: 9800,
    MoneyMettle: 2290,
  },
  {
    name: "05/2023",
    LoanLinx: 2780,
    CapitalBoost: 3908,
    MoneyMettle: 2000,
  },
  {
    name: "06/2023",
    LoanLinx: 1890,
    CapitalBoost: 4800,
    MoneyMettle: 2181,
  },
  {
    name: "07/2023",
    LoanLinx: 2390,
    CapitalBoost: 3800,
    MoneyMettle: 2500,
  },
  {
    name: "08/2023",
    LoanLinx: 3490,
    CapitalBoost: 4300,
    MoneyMettle: 2100,
  },
];
function Graph() {
  return (
    <div>
      <LineChart width={800} height={400} data={data}>
        <Legend />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="LoanLinx" stroke="#ff0000" />
        <Line type="monotone" dataKey="CapitalBoost" stroke="#8884d8" />
        <Line type="monotone" dataKey="MoneyMettle" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}

export default Graph;

// export default class Example extends PureComponent {
//   static demoUrl = 'https://codesandbox.io/s/tiny-line-chart-r5z0f';
//
//   render() {
//     return (
//     );
//   }
// }
