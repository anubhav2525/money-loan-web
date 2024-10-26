"use client";
import React from "react";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Spotlight } from "@/components/ui/spotlight";
import Link from "next/link";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "@/components/ui/animated-modal";

const HeroSection = () => {
  const words = [
    {
      text: "Get",
    },
    {
      text: "quick",
    },
    {
      text: "and",
    },
    {
      text: "easy",
    },
    {
      text: "loans",
    },
    {
      text: "with",
    },
    {
      text: "Loanify.",
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
      <div className="">
        <CallToAction />
      </div>
    </section>
  );
};

export default HeroSection;

const CallToAction = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4 md:flex-row ">
      <Modal>
        <ModalTrigger className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Check Eligibility
          </span>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg w-full flex-col md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              <div>Check your eligibility to Approve your </div>
              <div className="px-3 py-0.5 inline-block mt-3 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                Loan Faster
              </div>
            </h4>
            <div className="py-6 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex">
                <CheckIcon className="mr-1 text-green-600 dark:text-green-500 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  5 connecting flights
                </span>
              </div>
              <div className="flex">
                <CheckIcon className="mr-1 text-green-600 dark:text-green-500 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  5 connecting flights
                </span>
              </div>
              <div className="flex">
                <CheckIcon className="mr-1 text-green-600 dark:text-green-500 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  5 connecting flights
                </span>
              </div>
              <div className="flex">
                <CheckIcon className="mr-1 text-green-600 dark:text-green-500 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  5 connecting flights
                </span>
              </div>
              <div className="flex">
                <CheckIcon className="mr-1 text-green-600 dark:text-green-500 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  5 connecting flights
                </span>
              </div>
              <div className="flex">
                <CheckIcon className="mr-1 text-green-600 dark:text-green-500 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  5 connecting flights
                </span>
              </div>
            </div>
          </ModalContent>
        </ModalBody>
      </Modal>
      <Link href={"/sign-up"}>
        <button
          className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm"
          type="button"
        >
          Apply Now
        </button>
      </Link>
    </div>
  );
};

const CheckIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
