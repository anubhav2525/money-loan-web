"use client";
import React from "react";
import LiveClockDate from "../LiveClockDate/LiveClockDate";
import ThemeOption from "../ThemeOption/ThemeOption";

const ClockTheme = () => {
  return (
    <div className="flex gap-x-4 justify-center flex-wrap">
      <ThemeOption
        classname={
          "px-4 py-2 text-sm dark:bg-gray-900 shadow-xl dark:shadow-md bg-slate-950 text-white rounded-md focus:outline-none"
        }
        textsize="text-xs"
      />
      <LiveClockDate />
    </div>
  );
};

export default ClockTheme;
