"use client";
import { Spotlight } from "@/components/ui/spotlight";
import React from "react";
import { useRouter } from "next/navigation";

const SpecificBlogPage = ({
  params,
}: {
  params: {
    blogId: string;
  };
}) => {
  // Initialize the router
  const router = useRouter();

  // api fetching code by blogId
  const blogData = {
    title: "Lorem ipsum dolor sit amet.",
    description: [
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla aut accusamus blanditiis quam vitae nisi, corporis assumenda ipsam consequatur fugiat?",
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque explicabo officia rem consequatur rerum quisquam facere dolorem quis omnis. Consequuntur autem labore distinctio odio neque voluptates error, aliquid nam ullam.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nam facilis perspiciatis exercitationem, debitis provident commodi, optio modi veritatis ipsa, officia ad vel ratione! Odit quam voluptatibus ipsa corporis tenetur nisi deserunt quos repellendus ullam sapiente officia error, voluptate veritatis!",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis eaque consequuntur nesciunt ratione ducimus eos nihil ipsa, nemo quidem! Ea nesciunt fugiat tenetur libero voluptate aperiam commodi. Ipsum, illo consequatur facere esse enim necessitatibus, laboriosam, voluptas error totam impedit voluptate ex odio nobis modi ducimus distinctio dolores deserunt illum maxime.",
    ],
    meta: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla aut accusamus blanditiis quam vitae nisi, corporis assumenda ipsam consequatur fugiat?",
    author: "Lorem, ipsum dolor.",
    date: "20/05/2024",
  };
  return (
    <main className="min-h-screen bg-slate-100/[0.96] dark:bg-black/[0.90] antialiased  ">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="blue" />
      <div className="pt-20 sm:pt-24  px-4 flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <h1 className="mt-2 px-4 md:mt-0 text-3xl md:text-4xl font-bold text-black/70 dark:text-white/75">
          Blogs and Articles
        </h1>

        {/* navigation back btn */}
        <div className="w-full mt-5 max-w-7xl flex ">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-4 py-2 rounded-lg border border-black bg-white dark:bg-white/80 text-black text-xs sm:text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200"
          >
            <div className="w-full h-full flex items-center gap-x-2">
              <div>
                <svg
                  className="w-4 h-4 text-gray-800"
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
                    d="M5 12h14M5 12l4-4m-4 4 4 4"
                  />
                </svg>
              </div>
              <div>Go Back</div>
            </div>
          </button>
        </div>

        {/* content area */}
        <div className="w-full max-w-7xl h-full flex flex-col gap-y-4 space-x-5 py-8 md:py-10 px-2 md:px-5">
          <h2 className="text-lg md:text-2xl font-bold text-black/70 dark:text-white/90">
            {blogData.title}
          </h2>

          <p className="text-xs text-black/80 dark:text-white md:text-sm text-justify tracking-tight italic">
            {blogData.meta}
          </p>

          {blogData.description.map((item, index) => (
            <p
              key={index}
              className="text-xs text-black/80 dark:text-white md:text-sm text-justify tracking-wide"
            >
              {item}
            </p>
          ))}

          <div className="text-xs text-end text-black/80 dark:text-white md:text-sm tracking-tight italic">
            <div>- {blogData.author}</div>
            <div className="not-italic mt-2">{blogData.date}</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SpecificBlogPage;
