import React from "react";
import { CreditCard } from "lucide-react";

const ATMCard = () => {
  return (
    <div className="w-full h-40 md:h-52 flex justify-center items-center">
      <div className="w-full h-full border border-slate-100 bg-white dark:bg-black dark:border-slate-700 rounded-lg shadow-lg overflow-hidden relative">
        {/* Purple geometric shape */}
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-700 transform rotate-45 translate-x-24 translate-y-24"></div>

        {/* Card content */}
        <div className="p-6 flex flex-col h-full justify-between relative z-10">
          {/* VISA logo */}
          <div className="w-full flex justify-between items-start">
            <div className="text-black dark:text-white text-xl font-extrabold">
              VISA
            </div>
            <div>{/* image */}</div>
          </div>

          {/* Card information */}
          <div>
            <p className="text-gray-400 text-xs lg:text-sm mb-1">Card Number</p>
            <p className="dark:text-white text-black text-sm lg:text-base font-medium tracking-wider">
              5783 4160 8526 3149
            </p>
          </div>
        </div>

        {/* Chip */}
        <div className="absolute bottom-6 right-6 text-white">
          <CreditCard className="w-10 h-10" />
        </div>
      </div>
    </div>
  );
};

export default ATMCard;
