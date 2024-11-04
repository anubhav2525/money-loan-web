"use client";
import React from "react";
import {
  DeleteModalBody,
  DeleteModalContent,
  DeleteModalFooter,
} from "@/components/ui/animated-delete-modal";

const AnimatedDeleteCard = () => {
  return (
    <DeleteModalBody>
      <DeleteModalContent>
        <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
          Are you sure you want to delete this?
        </h4>

        <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-100 font-semibold text-center">
          Lorem ipsum dolor sit amet.
        </p>
      </DeleteModalContent>
      <DeleteModalFooter className="gap-4">
        <button
          type="button"
          className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28"
        >
          Cancel
        </button>
        <button
          type="button"
          className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28"
        >
          Yes
        </button>
      </DeleteModalFooter>
    </DeleteModalBody>
  );
};

export default AnimatedDeleteCard;
