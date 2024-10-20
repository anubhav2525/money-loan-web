"use client";
import React from "react";
import BlogCard from "@/components/authenticated/blog/allblog/BlogCard";

const AllBlogs = () => {
  return (
    <div className="min-w-full min-h-screen p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 flex-wrap">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
};

export default AllBlogs;
