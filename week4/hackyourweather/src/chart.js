import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function chartCity({ cityDetail }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart
        data={cityDetail}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="dt_txt" />
        <YAxis dataKey="main.temp" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="main.temp"
          name="temp"
          stroke="#96A8AC"
          fill="#82BFDB"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default chartCity;
