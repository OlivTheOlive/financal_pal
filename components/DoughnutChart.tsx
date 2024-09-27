"use client";
import { DoughnutChartProps } from "@/types";
import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const accountNames = accounts.map((acc) => acc.name);
  const balances = accounts.map((acc) => acc.currentBalance);

  const data = {
    datasets: [
      {
        label: "Banks",
        data: balances,
        backgroundColor: ["30747b6", "#2265d8", "#ef91fa"],
      },
    ],
    labels: accountNames,
  };

  return (
    <Doughnut
      data={data}
      options={{ cutout: "50%", plugins: { legend: { display: false } } }}
    />
  );
};

export default DoughnutChart;
