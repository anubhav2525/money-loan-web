"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

// EMI Calculator Component
const EMICalculator = () => {
  // State to manage form inputs and EMI calculation
  const [loanAmount, setLoanAmount] = useState<string>("");
  const [interestRate, setInterestRate] = useState<string>("");
  const [loanTenure, setLoanTenure] = useState<string>("");
  const [emi, setEmi] = useState<string | null>(null);
  const [totalPayment, setTotalPayment] = useState<string | null>(null);

  // Function to calculate EMI
  const calculateEMI = () => {
    const principal = parseFloat(loanAmount);
    const annualInterest = parseFloat(interestRate) / 100;
    const tenureMonths = parseInt(loanTenure);

    if (isNaN(principal) || isNaN(annualInterest) || isNaN(tenureMonths)) {
      alert("Please enter valid values");
      return;
    }

    const monthlyInterest = annualInterest / 12;
    const emiCalc =
      (principal *
        monthlyInterest *
        Math.pow(1 + monthlyInterest, tenureMonths)) /
      (Math.pow(1 + monthlyInterest, tenureMonths) - 1);

    const totalPaymentCalc = emiCalc * tenureMonths;
    setEmi(emiCalc.toFixed(2));
    setTotalPayment(totalPaymentCalc.toFixed(2));
  };

  // Handling form submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    calculateEMI(); // Trigger EMI calculation
  };

  // clear the calcuation
  const ClearCalculation = () => {
    return (
      <button
        className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] p-2 dark:bg-white/80 bg-black/80 text-white dark:text-black dark:hover:bg-white/50 hover:bg-black/60 rounded-md transition duration-200 ease-linear"
        type="button"
        onClick={() => setEmi("")}
      >
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
          />
        </svg>
      </button>
    );
  };

  return (
    <div className="w-full h-auto py-10 md:py-20 bg-slate-50 dark:bg-black">
      <div className="px-4 md:px-0 antialiased relative overflow-hidden">
        <h2 className="max-w-7xl pb-10 mx-auto text-2xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
          Get to know your iSad.
        </h2>
        <div className="w-full max-w-7xl mx-auto gap-y-4 md:gap-y-0 md:gap-x-4 grid grid-cols-1 md:grid-cols-2 p-2">
          <form
            onSubmit={handleSubmit}
            className="border dark:border-slate-900 dark:shadow-md dark:border-2 p-4 py-6 shadow-md rounded-lg"
          >
            {/* Loan Amount Input */}
            <LabelInputContainer className="mb-4">
              <Label htmlFor="amount">Loan Amount (INR)</Label>
              <Input
                id="amount"
                placeholder="10000.00"
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
              />
            </LabelInputContainer>

            {/* Interest Rate Input */}
            <LabelInputContainer className="mb-4">
              <Label htmlFor="interest">Interest Rate (%)</Label>
              <Input
                id="interest"
                placeholder="5"
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
              />
            </LabelInputContainer>

            {/* Loan Tenure Input */}
            <LabelInputContainer className="mb-8">
              <Label htmlFor="tenure">Loan Tenure (months)</Label>
              <Input
                id="tenure"
                placeholder="1"
                type="number"
                value={loanTenure}
                onChange={(e) => setLoanTenure(e.target.value)}
              />
            </LabelInputContainer>

            {/* Calculate Button */}
            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Calculate
              <BottomGradient />
            </button>
          </form>

          {/* EMI Calculation Result */}
          {emi && (
            <div className="border dark:border-slate-900 dark:shadow-md dark:border-2 p-4 py-6 shadow-md rounded-lg text-black/90 dark:text-white/80">
              <h2 className="text-2xl font-bold dark:text-white/80 text-center pb-4">
                EMI Calculation
              </h2>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Amount:</span>
                <span>₹{loanAmount}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Interest Rate:</span>
                <span>{interestRate}%</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Tenure:</span>
                <span>{loanTenure} Months</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Total Payment:</span>
                <span>₹{totalPayment}</span>
              </div>
              <div className="flex justify-between mb-2 border-t pt-2">
                <span className="font-medium">EMI:</span>
                <div className="flex justify-center items-center gap-x-2">
                  <span className="p-2 dark:bg-white/80 bg-black/80 text-white dark:text-black rounded-md">
                    ₹{emi} per month
                  </span>
                  <ClearCalculation />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EMICalculator;

// Bottom Gradient Component
const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

// Label Input Container Component
const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
