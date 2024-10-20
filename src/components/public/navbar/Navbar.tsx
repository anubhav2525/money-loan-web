"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import ThemeOption from "@/components/secured/ThemeOption/ThemeOption";

export const MenuIcon = ({ classname }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`icon icon-tabler icon-tabler-align-right ${classname}`}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 6l16 0" />
      <path d="M10 12l10 0" />
      <path d="M6 18l14 0" />
    </svg>
  );
};

export const XIcon = ({ classname }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
      strokeLinecap="round"
      className={`icon icon-tabler icon-tabler-align-right ${classname}`}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
};

const Navbar = () => {
  const [navBackground, setNavBackground] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to handle background color change on scroll
  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight) {
      setNavBackground(true); // Add background color when scroll past 1st section
    } else {
      setNavBackground(false); // Transparent on 1st section
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        navBackground
          ? "bg-white dark:bg-black dark:text-white text-black shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-base py-2">
        <div className="flex items-center">
          <Link
            href="/"
            className="text-2xl p-2 font-bold text-gray-900 dark:text-white"
          >
            Brand
          </Link>
        </div>
        <div className="hidden md:flex space-x-1">
          <NavLink
            title="Home"
            href="/"
            classname={
              "font-semibold p-2 rounded-md transition-all delay-150 dark:text-white text-black dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white"
            }
          />
          <NavLink
            title="About us"
            href="/about"
            classname={
              "font-semibold p-2 rounded-md transition-all delay-150 dark:text-white text-black dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white"
            }
          />
          <NavLink
            title="About us"
            href="/about"
            classname={
              "font-semibold p-2 rounded-md transition-all delay-150 dark:text-white text-black dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white"
            }
          />

          <ThemeOption
            classname={
              "font-semibold p-2 rounded-md transition-all delay-150 dark:text-white text-black dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white"
            }
          />
          <div className="relative group">
            <button className="font-semibold p-2 rounded-md transition-all delay-150 dark:text-white text-black dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white">
              More
            </button>
            <div className="absolute left-0 mt-2 w-48 text-xs bg-white border border-slate-100 dark:border-slate-900 dark:bg-black rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <Link
                href="/sub-link-1"
                className="block px-4 py-2 font-semibold rounded-t-md text-gray-700 dark:text-white dark:hover:text-black hover:bg-gray-100"
              >
                Sub-link 1
              </Link>
              <Link
                href="/sub-link-2"
                className="block px-4 py-2 rounded-b-md font-semibold text-gray-700 dark:text-white dark:hover:text-black hover:bg-gray-100"
              >
                Sub-link 2
              </Link>
            </div>
          </div>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <XIcon classname="h-6 w-6 text-gray-900 dark:text-white" />
            ) : (
              <MenuIcon classname="h-6 w-6 text-gray-900 dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden dark:border dark:border-slate-900 mx-4 dark:bg-slate-950">
          <div className="px-2 w-full flex flex-col pt-2 pb-3 text-xs space-y-1 sm:px-3">
            <NavLink
              title="Home"
              href="/"
              classname={
                "text-black dark:text-white font-semibold hover:bg-blue-600 p-2 rounded-md transition-all delay-150 hover:text-white"
              }
            />
            <NavLink
              title="About us"
              href="/about"
              classname={
                "text-black dark:text-white font-semibold hover:bg-blue-600 p-2 rounded-md transition-all delay-150 hover:text-white"
              }
            />
            <NavLink
              title="About us"
              href="/about"
              classname={
                "text-black dark:text-white font-semibold hover:bg-blue-600 p-2 rounded-md transition-all delay-150 hover:text-white"
              }
            />

            <ThemeOption
              classname={
                " text-black w-full text-left dark:text-white font-semibold hover:bg-blue-600 p-2 rounded-md transition-all delay-150 hover:text-white"
              }
            />

            <div className="relative group">
              <button className="text-black w-full text-left dark:text-white font-semibold hover:bg-blue-600 p-2 rounded-md transition-all delay-150 hover:text-white">
                More
              </button>
              <div className="absolute left-0 mt-2 w-48 text-xs bg-white dark:border dark:border-slate-900 dark:bg-black rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <Link
                  href="/sub-link-1"
                  className="block px-4 py-2 text-gray-700 dark:text-white dark:hover:text-black hover:bg-gray-100"
                >
                  Sub-link 1
                </Link>
                <Link
                  href="/sub-link-2"
                  className="block px-4 py-2 text-gray-700 dark:text-white dark:hover:text-black hover:bg-gray-100"
                >
                  Sub-link 2
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

export const NavLink = ({
  classname,
  href,
  title,
}: {
  href: string;
  classname: any;
  title: string;
}) => {
  return (
    <Link href={href} className={classname}>
      {title}
    </Link>
  );
};
