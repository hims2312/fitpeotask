import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const chartData = [
  { day: "Mon", a: 30, b: -20, c: 10 },
  { day: "Tues", a: -15, b: 35, c: 20 },
  { day: "Wed", a: 10, b: -25, c: 15 },
  { day: "Thurs", a: 20, b: -10, c: 30 },
  { day: "Fri", a: 40, b: -35, c: 25 },
  { day: "Sat", a: -10, b: 15, c: 20 },
  { day: "Sun", a: 25, b: -15, c: 10 },
];

const ActivityFeed = () => {
  return (
    <section
      style={{
        background: "#eef3fd",
        borderRadius: "16px",
        padding: "1rem 1.5rem",
        maxWidth: 720,
        margin: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <h3 style={{ margin: 0, color: "#0b0c4c", fontWeight: "700" }}>
          Activity
        </h3>
        <span style={{ fontSize: 14, color: "#888" }}>
          3 appointment on this week
        </span>
      </div>

      <ResponsiveContainer width="100%" height={180}>
        <BarChart data={chartData} barCategoryGap="40%" barGap={1}>
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#999" }}
          />
          <YAxis hide domain={[-50, 50]} />
          <Tooltip cursor={false} />
          <CartesianGrid vertical={false} horizontal={false} />

          <Bar dataKey="a" fill="#00e5ff" barSize={4} radius={[4, 4, 0, 0]} />
          <Bar dataKey="b" fill="#5e35b1" barSize={4} radius={[0, 0, 4, 4]} />
          <Bar dataKey="c" fill="#cfd8dc" barSize={4} radius={[2, 2, 2, 2]} />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
};

export default ActivityFeed;
