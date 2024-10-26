"use client";
import React from "react";
import LastTransaction from "./@LastTransaction/page";
import TransactionCard from "@/components/secured/Dashboard/TransactionCard";
import UserProfile from "./@UserProfile/page";
import ATMCard from "@/components/secured/Dashboard/ATMCard";
import ClockTheme from "@/components/secured/ClockTheme/ClockTheme";

const DashboardPage = () => {
  const metrics = [
    {
      title: "Total Earning",
      value: "120,000",
      change: 12,
      isIncrease: true,
    },
    { title: "Invoices", value: "16,500", change: 2, isIncrease: false },
    { title: "Total Spending", value: "48,670", change: 6, isIncrease: true },
    { title: "Balance", value: "74,330", change: 1, isIncrease: true },
  ];
  const role = "USER";

  return (
    <div className="min-w-full p-4 md:p-6 dark:bg-black min-h-full flex flex-col justify-center items-center">
      <div className="w-full pb-2">
        <h1 className="text-xl text-black dark:text-slate-300 md:text-2xl lg:text-3xl font-bold">
          <div className="flex justify-between items-center">
            <div>Dashboard</div>
            <div className="hidden md:flex">
              <ClockTheme />
            </div>
          </div>
        </h1>
      </div>
      {role == "USER" ? (
        <>
          <div className="min-w-full flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:items-center gap-x-2">
            <div className="lg:w-[30%] w-full lg:order-2">
              <UserProfile />
            </div>
            <div className="w-full lg:w-[70%] py-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 lg:order-1">
              {metrics.map((metric, index) => (
                <TransactionCard
                  key={index}
                  title={metric.title}
                  value={metric.value}
                  change={metric.change}
                  isIncrease={metric.isIncrease}
                />
              ))}
            </div>
          </div>
          <div className="w-full pt-2 md:pt-0 flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:items-start gap-2">
            <div className="lg:w-[30%] w-full lg:order-2">
              <ATMCard />
              <div className="pt-3 hidden w-full md:flex">
                <div className="w-full h-full flex flex-col justify-center ">
                  <p className="text-black dark:text-white text-lg font-semibold">
                    Services
                  </p>
                  <div className="w-full pt-2 flex flex-col justify-center items-center gap-y-2">
                    <button
                      type="button"
                      className="text-white text-base w-full bg-purple-700 font-medium rounded-md px-5 py-3 text-center"
                    >
                      Upgrade to Premium
                    </button>
                    <button
                      type="button"
                      className="text-white text-base w-full bg-purple-700 font-medium rounded-md px-5 py-3 text-center"
                    >
                      Upgrade to Premium
                    </button>
                    <button
                      type="button"
                      className="text-white text-base w-full bg-purple-700 font-medium rounded-md px-5 py-3 text-center"
                    >
                      Upgrade to Premium
                    </button>
                    <button
                      type="button"
                      className="text-white text-base w-full bg-purple-700 font-medium rounded-md px-5 py-3 text-center"
                    >
                      Upgrade to Premium
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-[70%] lg:order-1 w-full">
              <LastTransaction />
            </div>
          </div>
        </>
      ) : (
        <>
          <div>
            <h1>admin</h1>
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardPage;
