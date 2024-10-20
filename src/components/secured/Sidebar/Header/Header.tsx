"use client";
import { useState, useEffect } from "react";
import { Bell, ChevronDown, Globe, Maximize, Moon } from "lucide-react";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import Link from "next/link";

export default function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 500); // Blink for 500ms
    }, 3000); // Blink every 3 seconds

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <header className="flex w-full items-center justify-end px-4 py-3 bg-white border-b border-gray-200">
      <div className="flex items-center space-x-4">
        <button className="p-1 rounded-full hover:bg-gray-100">
          <Globe className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-1 rounded-full hover:bg-gray-100">
          <Moon className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-1 rounded-full hover:bg-gray-100">
          <Bell className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-1 rounded-full hover:bg-gray-100">
          <Maximize className="w-5 h-5 text-gray-600" />
        </button>
        <div className="relative">
          <button
            className="flex items-center space-x-2"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          >
            <img
              src="https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80"
              alt="Profile"
              className={`w-8 h-8 rounded-full ${
                isBlinking ? "animate-pulse" : ""
              }`}
            />
            <span className="text-sm font-medium">John Smith</span>
            <ChevronDown className="w-4 h-4 text-gray-600" />
          </button>
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              <div className="py-1">
                <Link
                  href="/dashboard"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Dashboard
                </Link>
                <Link
                  href="/settings"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Settings
                </Link>
                <button
                  type="button"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

const SearchBox = () => {
  return (
    <div className="flex items-center ">
      <SearchInput />
    </div>
  );
};

const SearchInput = () => {
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <PlaceholdersAndVanishInput
      placeholders={placeholders}
      onChange={handleChange}
      onSubmit={onSubmit}
    />
  );
};
