"use client";
import { useTheme } from "@/context/ThemeContext"; // Import your custom useTheme
import { useState } from "react";

// Define types for the theme options
type ThemeOptionType = "light" | "dark" | "system";

const ThemeOption = ({
  classname,
  textsize,
}: {
  classname: any;
  textsize?: string;
}) => {
  const { theme, toggleTheme } = useTheme(); // Use your custom hook here
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleThemeChange = (selectedTheme: ThemeOptionType) => {
    toggleTheme(selectedTheme);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${textsize}`}>
      <button onClick={toggleDropdown} className={`${classname}`}>
        Theme
      </button>
      {isOpen && (
        <div className="absolute w-40 py-1 font-semibold text-xs right-0 mt-2 bg-white dark:bg-black/90 border border-gray-200 dark:border-slate-800 rounded-md shadow-lg text-gray-800 dark:text-white">
          <button
            onClick={() => handleThemeChange("light")}
            className="text-left w-full px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-900 flex items-center gap-x-3"
            type="button"
          >
            <div>
              <SunSvg />
            </div>
            <div>Light Mode</div>
          </button>
          <button
            onClick={() => handleThemeChange("dark")}
            className="text-left w-full px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-900 flex items-center gap-x-3"
            type="button"
          >
            <div>
              <MoonSvg />
            </div>
            <div>Dark Mode</div>
          </button>
          <button
            onClick={() => handleThemeChange("system")}
            className="text-left w-full px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-900 flex items-center gap-x-3"
            type="button"
          >
            <div>
              <DesktopSvg />
            </div>
            <div>System Default</div>
          </button>
        </div>
      )}
    </div>
  );
};

export default ThemeOption;

export const SunSvg = () => {
  return (
    <svg
      className="w-4 h-4 text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
      />
    </svg>
  );
};

export const MoonSvg = () => {
  return (
    <svg
      className="w-4 h-4 text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z"
      />
    </svg>
  );
};

export const DesktopSvg = () => {
  return (
    <svg
      className="w-4 h-4 text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"
      />
    </svg>
  );
};
