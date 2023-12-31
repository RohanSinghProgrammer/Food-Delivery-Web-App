"use client";

import React from "react";
import Countdown from "react-countdown";

const endingDate = new Date("2023-10-20");

const CountDown = () => {
  return (
    <Countdown
      date={endingDate}
      className="text-5xl font-bold text-yellow-400"
    />
  );
};

export default CountDown;
