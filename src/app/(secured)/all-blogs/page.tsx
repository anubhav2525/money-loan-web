"use client";
import React from "react";
import Link from "next/link";
import ExpandableCard from "./_components/expandable-card/ExpandableCard";

const AllBlogs = () => {
  return (
    <section className="bg-white dark:border-slate-700/90 border-slate-100 rounded-md shadow-md dark:bg-black min-w-full border overflow-hidden">
      <div className="border-b w-full flex items-center justify-between p-4">
        <h2 className="text-lg font-semibold text-black dark:text-white">
          All blogs and article
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
            href={"/all-blogs/add"}
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
        <ExpandableCard data={blogs} />
      </div>
    </section>
  );
};

export default AllBlogs;

const blogs = [
  {
    description: "Lana Del Rey1",
    title: "Summertime Sadnessqwe",
    date: "12/12/1212", 
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
