"use client";
import React from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur aliquam`;

const Motivational = () => {
  return (
    <div className="w-full py-6 p-4 md:py-10">
      <div className="w-full max-w-6xl mx-auto">
        <TextGenerateEffect words={words} />
      </div>
    </div>
  );
};

export default Motivational;
