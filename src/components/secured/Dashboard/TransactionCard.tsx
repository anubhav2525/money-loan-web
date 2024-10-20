import React from "react";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

interface CardProps {
  title: string;
  value: string;
  change: number;
  isIncrease: boolean;
}
const TransactionCard: React.FC<CardProps> = ({
  title,
  value,
  change,
  isIncrease,
}) => {
  return (
    <div
      className={`bg-white dark:bg-black/90 dark:border-slate-700/90 border-slate-100 rounded-lg shadow-md p-6 border`}
    >
      <h3 className={`text-sm font-medium text-gray-500 dark:text-white`}>{title}</h3>
      <p className="text-2xl font-bold mt-2 dark:text-slate-300/90">{value}</p>
      <div className="flex items-center mt-2">
        <span
          className={`text-xs 
            ${isIncrease ? "text-green-500" : "text-red-500"}`}
        >
          {Math.abs(change)}% {isIncrease ? "Increase" : "Decrease"} From Target
        </span>
        {isIncrease ? (
          <ArrowUpIcon className={`w-4 h-4 ml-1 text-green-500`} />
        ) : (
          <ArrowDownIcon className={`w-4 h-4 ml-1 text-red-500`} />
        )}
      </div>
    </div>
  );
};

export default TransactionCard;
