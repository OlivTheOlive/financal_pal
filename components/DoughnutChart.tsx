"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: "Banks",
        data: [1233, 3211, 6546],
        backgroundColor: ["30747b6", "#2265d8", "#ef91fa"],
      },
    ],
    labels: ["Bank 1", "Bank 2", "Bank 3"],
  };

  return (
    <Doughnut
      data={data}
      options={{ cutout: "50%", plugins: { legend: { display: false } } }}
    />
  );
};

export default DoughnutChart;
