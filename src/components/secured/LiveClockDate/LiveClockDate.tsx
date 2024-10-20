"use client";
import React, { useState, useEffect } from "react";

const LiveClockDate = () => {
  const [time, setTime] = useState(new Date());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures this runs on the client only

    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update time every second

    return () => clearInterval(intervalId); // Cleanup the interval
  }, []);

  if (!isClient) {
    // Don't render anything until hydration completes
    return null;
  }

  const formattedTime = time.toLocaleTimeString();
  const formattedDate = time.toLocaleDateString();

  return (
    <div className="flex flex-col text-xs items-center justify-center">
      <div>{formattedTime}</div>
      <div>{formattedDate}</div>
    </div>
  );
};

export default LiveClockDate;
