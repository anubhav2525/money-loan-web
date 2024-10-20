"use client";
import React, { useState } from "react";

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" bg-white min-w-full min-h-full dark:bg-black dark:border-slate-700/90 border-slate-100 rounded-lg shadow-md p-5 border">
      <div className="w-full h-full flex justify-between items-start ">
        <div className="flex justify-end ml-4 pt-2 order-2 ">
          <div className="w-full h-full flex flex-col justify-end items-end">
            <div>
              <div className="relative">
                <button
                  type="button"
                  className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"
                  onClick={handleToggle}
                >
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="3"
                      d="M12 6h.01M12 12h.01M12 18h.01"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <ul className="absolute text-xs font-bold right-0 w-32 border-slate-100 border bg-white rounded-md shadow-md py-1">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"
                      >
                        Edit Profile
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"
                      >
                        View Profile
                      </a>
                    </li>
                  </ul>
                )}
              </div>
            </div>
            <div className="pt-3">
              <span className="bg-white text-blue-700 text-xs font-bold px-2 py-1 rounded-full ml-2">
                Verified
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <img
            src="https://via.placeholder.com/50"
            alt="User  Image"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h5 className="text-lg font-bold dark:text-white text-black">
              John Doe
            </h5>
            <p className="text-gray-600 dark:text-slate-400">
              john.doe@example.com
            </p>
            <p className="text-gray-600 dark:text-slate-400">userid00199</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
