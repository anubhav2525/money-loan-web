"use client";
import React from "react";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Spotlight } from "@/components/ui/spotlight";
import Link from "next/link";
const HeroSection = () => {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <section className="w-full min-h-screen bg-white dark:bg-black flex flex-col justify-center items-center">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="blue" />
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <Link href={"/sign-up"}>
          <button
            className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm"
            type="button"
          >
            Signup
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
