"use client";
import { CircleCheckBig, CircleX } from "lucide-react";

export interface AlertProps {
  status: string; // Status type
  message: string;
  description: string;
  notification: string;
  setNotification: (value: string) => void;
}

const Alert: React.FC<AlertProps> = ({
  status,
  message,
  description,
  notification,
  setNotification,
}) => {
  // Determine styles and icons based on the status
  const isSuccess = status === "success";
  const iconColor = isSuccess ? "bg-teal-500 md:bg-green-500" : "bg-red-500";
  const Icon = isSuccess ? CircleCheckBig : CircleX;

  // If notification is empty, do not render the alert
  if (!notification) return null;

  return (
    <div className="bg-white dark:bg-black rounded-lg shadow-md mb-4">
      <div className="flex items-center justify-between rounded-md p-3">
        <div
          className={`flex items-center justify-between rounded-full ${iconColor}`}
        >
          {/* Dynamic Icon */}
          <Icon className="md:w-6 md:h-6 w-4 h-4 rounded-full text-white" />
        </div>

        <div className="flex ml-2 flex-col w-full justify-between">
          <h3 className="mb-1 text-sm font-medium text-black/80 dark:text-white/85">
            {message}
          </h3>
          <p className="text-black  dark:text-white/55 text-xs">
            {description}
          </p>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setNotification("")}
          className="hover:text-danger text-[#ACACB0]"
        >
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.8839 5.11612C19.372 5.60427 19.372 6.39573 18.8839 6.88388L6.88388 18.8839C6.39573 19.372 5.60427 19.372 5.11612 18.8839C4.62796 18.3957 4.62796 17.6043 5.11612 17.1161L17.1161 5.11612C17.6043 4.62796 18.3957 4.62796 18.8839 5.11612Z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.11612 5.11612C5.60427 4.62796 6.39573 4.62796 6.88388 5.11612L18.8839 17.1161C19.372 17.6043 19.372 18.3957 18.8839 18.8839C18.3957 19.372 17.6043 19.372 17.1161 18.8839L5.11612 6.88388C4.62796 6.39573 4.62796 5.60427 5.11612 5.11612Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Alert;
