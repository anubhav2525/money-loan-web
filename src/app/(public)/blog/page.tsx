"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { BlogCards } from "@/components/ui/blogs-card";

const BlogPage = () => {
  return <section className="min-h-screen bg-slate-100/[0.96] dark:bg-black/[0.90] antialiased  ">
  <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="blue" />
  <div className="pt-24 px-4 flex flex-col antialiased items-center justify-center relative overflow-hidden">
    <h1 className="mt-2 px-4 md:mt-0 text-3xl md:text-4xl font-bold text-black/70 dark:text-white/75">
      Blogs and Articles
    </h1>

    <div className="py-10 w-full h-full max-w-7xl">
      <BlogCards items={projects} />
    </div>
  </div>
</section>
};

export default BlogPage;
export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "/blog/1",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "/blog/2",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "/blog/3",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "/blog/4",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "/blog/5",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "/blog/6",
  },
];