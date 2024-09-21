"use client";
import React from "react";
import CountUp from "react-countup";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
Chart.register(ArcElement, Tooltip, Legend);

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp decimal="," prefix="$" end={amount} duration={2} decimals={2} />
    </div>
  );
};

export default AnimatedCounter;
