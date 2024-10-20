"use client";
import React, { useState } from "react";
import { SidebarView, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Sidebar = ({ menuGroups }: any) => {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (label: string) => {
    setOpenSections((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  const [open, setOpen] = useState(false);

  return (
    <SidebarView open={open} setOpen={setOpen}>
      <SidebarBody className="justify-between gap-10">
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {open ? <Logo /> : <LogoIcon />}
          <div className="mt-8 flex flex-col gap-6">
            {menuGroups?.map((item: any, index: number) => (
              <div key={index} className="flex flex-col gap-2">
                <motion.div
                  animate={{
                    display: open ? "block" : "none",
                    opacity: open ? 1 : 0,
                  }}
                  className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 px-2"
                >
                  {item.title}
                </motion.div>
                {item.items.map((link: any, index: number) => (
                  <React.Fragment key={index}>
                    {link.subroutes ? (
                      <div>
                        <button
                          onClick={() => toggleSection(link.label)}
                          className="flex items-center justify-between w-full p-2 text-neutral-700 dark:text-neutral-200"
                        >
                          <div className="flex items-center gap-2">
                            {link.icon}
                            <motion.span
                              animate={{
                                display: open ? "inline-block" : "none",
                                opacity: open ? 1 : 0,
                              }}
                              className="text-sm whitespace-pre"
                            >
                              {link.label}
                            </motion.span>
                          </div>
                          {open &&
                            (openSections.includes(link.label) ? (
                              <IconChevronUp className="h-4 w-4" />
                            ) : (
                              <IconChevronDown className="h-4 w-4" />
                            ))}
                        </button>
                        <AnimatePresence>
                          {open && openSections.includes(link.label) && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="ml-6 mt-2 flex flex-col gap-2"
                            >
                              {link.subroutes.map(
                                (subroute: any, subIdx: number) => (
                                  <SidebarLink
                                    key={subIdx}
                                    link={{ ...subroute, icon: null }}
                                  />
                                )
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <SidebarLink link={link} />
                    )}
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>
      </SidebarBody>
    </SidebarView>
  );
};

export default Sidebar;

const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-blue-700 dark:text-blue-600 whitespace-pre md:text-2xl"
      >
        Lonify
      </motion.span>
    </Link>
  );
};

const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};
