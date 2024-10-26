"use client";
import React from "react";
import Card from "./expandable-card/ExpandableCard";
import Link from "next/link";

const FAQsTable = () => {
  return (
    <section className="bg-white dark:border-slate-700/90 border-slate-100 rounded-md shadow-md dark:bg-black min-w-full border overflow-hidden">
      <div className="border-b w-full flex items-center justify-between p-4">
        <h2 className="text-lg font-semibold text-black dark:text-white">
          All Questions
        </h2>
        <div className="flex justify-between gap-x-4 items-center">
          <button
            type="button"
            className="px-4 text-xs py-2 rounded-md bg-gradient-to-b from-blue-500 to-blue-600 text-white hover:shadow-md transition duration-200"
          >
            <div className="w-full flex flex-row gap-2 items-center justify-between font-bold">
              <div>Refresh</div>
              <div>
                <svg
                  className="w-4 h-4 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"
                  />
                </svg>
              </div>
            </div>
          </button>

          <Link
            href={"/all-faqs/add"}
            className="px-4 text-xs py-2 rounded-md bg-gradient-to-b from-blue-500 to-blue-600 text-white hover:shadow-md transition duration-200"
          >
            <div className="w-full flex flex-row gap-2 items-center justify-between font-bold">
              <div>Add</div>
              <div>
                <svg
                  className="w-4 h-4 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M5 12h14m-7 7V5"
                  />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="overflow-x-auto w-full">
        <Card data={faqs} />
      </div>
    </section>
  );
};

export default FAQsTable;

const faqs = [
  {
    description: "Lana Del Rey1",
    title: "Summertime Sadnessqwe",
    viewBtn: (
      <svg
        className="md:w-6 md:h-6 h-4 w-4 text-black"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M4.998 7.78C6.729 6.345 9.198 5 12 5c2.802 0 5.27 1.345 7.002 2.78a12.713 12.713 0 0 1 2.096 2.183c.253.344.465.682.618.997.14.286.284.658.284 1.04s-.145.754-.284 1.04a6.6 6.6 0 0 1-.618.997 12.712 12.712 0 0 1-2.096 2.183C17.271 17.655 14.802 19 12 19c-2.802 0-5.27-1.345-7.002-2.78a12.712 12.712 0 0 1-2.096-2.183 6.6 6.6 0 0 1-.618-.997C2.144 12.754 2 12.382 2 12s.145-.754.284-1.04c.153-.315.365-.653.618-.997A12.714 12.714 0 0 1 4.998 7.78ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    deleteBtn: (
      <svg
        className="md:w-6 md:h-6 h-4 w-4 text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    editBtn: (
      <svg
        className="md:w-6 md:h-6 h-4 w-4 text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M11.32 6.176H5c-1.105 0-2 .949-2 2.118v10.588C3 20.052 3.895 21 5 21h11c1.105 0 2-.948 2-2.118v-7.75l-3.914 4.144A2.46 2.46 0 0 1 12.81 16l-2.681.568c-1.75.37-3.292-1.263-2.942-3.115l.536-2.839c.097-.512.335-.983.684-1.352l2.914-3.086Z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M19.846 4.318a2.148 2.148 0 0 0-.437-.692 2.014 2.014 0 0 0-.654-.463 1.92 1.92 0 0 0-1.544 0 2.014 2.014 0 0 0-.654.463l-.546.578 2.852 3.02.546-.579a2.14 2.14 0 0 0 .437-.692 2.244 2.244 0 0 0 0-1.635ZM17.45 8.721 14.597 5.7 9.82 10.76a.54.54 0 0 0-.137.27l-.536 2.84c-.07.37.239.696.588.622l2.682-.567a.492.492 0 0 0 .255-.145l4.778-5.06Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    date: "12/12/1212",
    editLink: "",
    deleteLink: "",
    ctaLink: "",
    content: () => {
      return (
        <p>
          Lana Del Rey, an iconic American singer-songwriter, is celebrated for
          her melancholic and cinematic music style. Born Elizabeth Woolridge
          Grant in New York City, she has captivated audiences worldwide with
          her haunting voice and introspective lyrics. <br /> <br /> Her songs
          often explore themes of tragic romance, glamour, and melancholia,
          drawing inspiration from both contemporary and vintage pop culture.
          With a career that has seen numerous critically acclaimed albums, Lana
          Del Rey has established herself as a unique and influential figure in
          the music industry, earning a dedicated fan base and numerous
          accolades. <br /> <br /> Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Consequatur repudiandae voluptates ex a dolores
          maxime non voluptate praesentium exercitationem. Reprehenderit quasi
          minus ipsum explicabo doloribus fugit commodi nulla deleniti unde?
        </p>
      );
    },
  },
];
