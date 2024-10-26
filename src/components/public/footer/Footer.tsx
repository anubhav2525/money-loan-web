"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-slate-50 dark:bg-black text-gray-600 dark:text-gray-400 py-10 md:py-20">
      <div className="max-w-5xl mx-auto font-bold text-xl pb-10 px-4">
        <h2 className="text-gray-900 dark:text-white text-lg font-semibold ">
          Lorem, ipsum.
        </h2>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 px-4 text-xs">
        <div>
          <h2 className="text-gray-900 dark:text-white text-lg font-semibold mb-4">
            About Us
          </h2>
          <p className="mb-4">
            Loanify is a trusted financial partner, offering easy and affordable
            loan options to help you meet your financial needs. Whether you're
            looking to buy a home, start a business, or consolidate debt, we're
            here to provide quick approvals and flexible terms to get you where
            you want to be.
          </p>
        </div>
        <div className="lg:col-span-2">
          <div className="w-full grid grid-cols-2 gap-x-2">
            <div>
              <h2 className="text-gray-900 dark:text-white text-lg font-semibold mb-4">
                Quick Links
              </h2>
              <ul className="flex flex-col gap-y-2">
                <li>
                  <Link
                    href={"/"}
                    className="hover:text-black dark:hover:text-white transition-colors duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/loan-types"}
                    className="hover:text-black dark:hover:text-white transition-colors duration-300"
                  >
                    Loan Types
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/how-it-works"}
                    className="hover:text-black dark:hover:text-white transition-colors duration-300"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/faqs"}
                    className="hover:text-black dark:hover:text-white transition-colors duration-300"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/contact-us"}
                    className="hover:text-black dark:hover:text-white transition-colors duration-300"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/blogs"}
                    className="hover:text-black dark:hover:text-white transition-colors duration-300"
                  >
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-gray-900 dark:text-white text-lg font-semibold mb-4">
                Follow Us
              </h2>
              <div className="flex gap-y-2 flex-col">
                <a
                  href="#"
                  className="hover:text-black dark:hover:text-white transition-colors duration-300"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="hover:text-black dark:hover:text-white transition-colors duration-300"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="hover:text-black dark:hover:text-white transition-colors duration-300"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-gray-900 dark:text-white text-lg font-semibold mb-4">
            Contact Us
          </h2>
          <p>Loanify Financial Solutions</p>
          <p>123 Finance Street</p>
          <p>New York, NY 10001, USA</p>
          <p>Email: support@loanify.com</p>
          <p>Phone: (800) 123-4567</p>
        </div>
      </div>
      <p className="text-center text-xs pt-8 text-gray-500 dark:text-gray-400">
        © 2024 Loanify Financial Solutions. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
