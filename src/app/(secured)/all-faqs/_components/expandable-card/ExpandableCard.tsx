"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Link from "next/link";
import {
  DeleteModal,
  DeleteModalTrigger,
} from "@/components/ui/animated-delete-modal";
import AnimatedDeleteCard from "../animated-card/AnimatedDeleteCard";

const Card = ({ data }: any) => {
  const [active, setActive] = useState<(typeof data)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 p-4 md:p-0 w-full grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-7xl h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-2xl overflow-hidden"
            >
              <div>
                <div className="flex justify-between items-start p-4">
                  <div>
                    {/* heading */}
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    {/* description */}
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                    {/* date */}
                    <motion.p
                      layoutId={`description-${active.date}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-xs"
                    >
                      {active.date}
                    </motion.p>
                  </div>
                  <div className="flex gap-x-4">
                    <Link
                      href={active.editLink}
                      className="px-4 py-3 text-sm rounded-xl font-bold bg-green-500 text-white hover:opacity-90"
                    >
                      {active.editBtn}
                    </Link>
                    <DeleteModal>
                      <DeleteModalTrigger className="px-4 py-3 text-sm rounded-xl font-bold bg-red-500 text-white hover:opacity-90">
                        {active.deleteBtn}
                      </DeleteModalTrigger>
                      <AnimatedDeleteCard />
                    </DeleteModal>
                  </div>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <ul className="w-full gap-4">
        {data.map((item: any) => (
          <motion.div
            layoutId={`card-${item.title}-${id}`}
            key={`card-${item.title}-${id}`}
            onClick={() => setActive(item)}
            className="p-4 flex flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 cursor-pointer"
          >
            <div className="flex gap-4 flex-row  justify-between">
              <div className="flex flex-col ">
                <motion.h3
                  layoutId={`title-${item.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200"
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${item.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400"
                >
                  {item.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${item.title}-${id}`}
              className="px-4 py-2 text-sm rounded-xl font-bold dark:bg-slate-200 bg-slate-100 hover:bg-white text-black dark:hover:bg-white dark:text-black mt-4 md:mt-0"
            >
              {item.viewBtn}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
};

export default Card;

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
