"use client";
import React from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur aliquam quasi soluta suscipit? Corporis culpa vel odio a aut sunt explicabo ratione repudiandae dicta accusamus, voluptate, expedita consequatur? Repellat, consequatur!`;

const Motivational = () => {
  return (
    <div className="w-full py-6 p-4 md:py-10 bg-white dark:bg-black">
      <div className="w-full max-w-6xl mx-auto">
        <TextGenerateEffect words={words} />
      </div>
    </div>
  );
};

export default Motivational;
