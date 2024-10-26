"use client";
import React from "react";
import ClockTheme from "@/components/secured/ClockTheme/ClockTheme";

const FAQSLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="min-w-full p-4 md:p-6 min-h-full flex flex-col justify-center items-center">
      <div className="w-full pb-2">
        <h1 className="text-xl text-black dark:text-slate-300 md:text-2xl lg:text-3xl font-bold">
          <div className="flex justify-between items-center">
            <div>Frequently Asked Questions</div>
            <div className="hidden md:flex">
              <ClockTheme />
            </div>
          </div>
        </h1>
      </div>

      <div className="w-full py-10">{children}</div>
    </div>
  );
};

export default FAQSLayout;
