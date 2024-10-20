"use client";
import React from "react";

const WaitList = () => {
  return (
    <div className="py-10 md:py-20 h-[50vh] px-4 md:px-0 flex flex-col antialiased items-center justify-center relative overflow-hidden dark:bg-black bg-white">
      <h1 className="mt-2 px-4 md:mt-0 text-3xl md:text-4xl mb-6 font-bold text-black/70 dark:text-white/75">
        Join Us
      </h1>

      <p className="text-neutral-500 max-6xl mx-auto my-2 text-xs md:text-sm text-center relative z-10">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
        cupiditate quae non aperiam eaque natus! Neque animi quasi mollitia
        quia.
      </p>
      <form className="w-full max-w-xl mt-5">
        <div className="flex items-center justify-center gap-x-1">
          <input
            type="text"
            placeholder="email@xyz.com"
            className="rounded-lg border p-2 px-4 dark:text-white border-neutral-800/10 focus:ring-2 focus:ring-teal-500  w-full  dark:bg-neutral-950 bg-slate-200 placeholder:text-neutral-700 dark:placeholder:text-slate-600"
          />
          <button
            type="submit"
            className="rounded-lg border py-2.5 px-4 dark:text-white/50 md:dark:text-white/90 border-neutral-800/10 dark:bg-neutral-950 bg-slate-200 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200"
          >
            <svg
              className="w-5 h-5 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.133 12.632v-1.8a5.407 5.407 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V3.1a1 1 0 0 0-2 0v2.364a.933.933 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C6.867 15.018 5 15.614 5 16.807 5 17.4 5 18 5.538 18h12.924C19 18 19 17.4 19 16.807c0-1.193-1.867-1.789-1.867-4.175Zm-13.267-.8a1 1 0 0 1-1-1 9.424 9.424 0 0 1 2.517-6.391A1.001 1.001 0 1 1 6.854 5.8a7.43 7.43 0 0 0-1.988 5.037 1 1 0 0 1-1 .995Zm16.268 0a1 1 0 0 1-1-1A7.431 7.431 0 0 0 17.146 5.8a1 1 0 0 1 1.471-1.354 9.424 9.424 0 0 1 2.517 6.391 1 1 0 0 1-1 .995ZM8.823 19a3.453 3.453 0 0 0 6.354 0H8.823Z" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default WaitList;
