"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import Sidebar from "@/components/secured/Sidebar/Sidebar";
import {
  IconUserBolt,
  IconFileText,
  IconPencil,
  IconMapPin,
  IconStar,
  IconHelp,
  IconMessage,
  IconUsers,
  IconCoin,
} from "@tabler/icons-react";
import { ChartPie } from "lucide-react";

const SecuredLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [role, setRole] = useState("admin");

  const getMenuGroups = () => {
    switch (role) {
      case "admin":
        return adminGroupLinks;
      case "user":
        return userGroupLinks;
      case "employee":
        return employeeGroupLinks;
      default:
        return [];
    }
  };
  
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row bg-gray-100 dark:bg-black w-full flex-1 overflow-hidden",
        "min-h-screen min-w-full"
      )}
    >
      <Sidebar menuGroups={getMenuGroups()} />
      <div className="bg-white dark:bg-black w-full min-h-screen h-full flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default SecuredLayout;

const adminGroupLinks = [
  {
    title: "OVERVIEW",
    items: [
      {
        label: "Dashboard",
        href: "/dashboard",
        icon: <ChartPie className="h-5 w-5 flex-shrink-0" />,
      },
    ],
  },
  {
    title: "OTHERS",
    items: [
      {
        label: "Chat",
        href: "/chat",
        icon: <IconMessage className="h-5 w-5 flex-shrink-0" />,
      },
    ],
  },
  {
    title: "CONTENT",
    items: [
      {
        label: "Pages",
        href: "/page",
        icon: <IconFileText className=" h-5 w-5 flex-shrink-0" />,
      },
      {
        label: "Blog",
        href: "/maintain-blog",
        icon: <IconPencil className="h-5 w-5 flex-shrink-0" />,
        subroutes: [
          { label: "All Blog", href: "" },
          { label: "Add Blog", href: "/add" },
          { label: "Categories", href: "/categories" },
          { label: "Blog Comments", href: "/blog-comment" },
        ],
      },
      {
        label: "Location",
        href: "/location",
        icon: <IconMapPin className="h-5 w-5 flex-shrink-0" />,
      },
      {
        label: "Testimonials",
        href: "/testinomials",
        icon: (
          <IconStar className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
      },
      {
        label: "FAQ",
        href: "/faq",
        icon: (
          <IconHelp className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
      },
    ],
  },
  {
    title: "MEMBERSHIP",
    items: [
      {
        label: "Membership",
        href: "#/membership",
        icon: (
          <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
      },
      {
        label: "Membership Addons",
        href: "#",
        icon: (
          <IconUsers className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
      },
    ],
  },
  {
    title: "REPORTS",
    items: [
      {
        label: "Admin Earnings",
        href: "#",
        icon: (
          <IconCoin className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
      },
    ],
  },
];

const userGroupLinks = [
  {
    title: "OVERVIEW",
    items: [
      {
        label: "Dashboard",
        href: "/dashboard",
        icon: <ChartPie className="h-5 w-5 flex-shrink-0" />,
      },
    ],
  },
  {
    title: "OTHERS",
    items: [
      {
        label: "Chat",
        href: "/chat",
        icon: <IconMessage className="h-5 w-5 flex-shrink-0" />,
      },
    ],
  },
  {
    title: "CONTENT",
    items: [
      {
        label: "Pages",
        href: "/page",
        icon: <IconFileText className=" h-5 w-5 flex-shrink-0" />,
      },
      {
        label: "Blog",
        href: "/maintain-blog",
        icon: <IconPencil className="h-5 w-5 flex-shrink-0" />,
        subroutes: [
          { label: "All Blog", href: "" },
          { label: "Add Blog", href: "/add" },
          { label: "Categories", href: "/categories" },
          { label: "Blog Comments", href: "/blog-comment" },
        ],
      },
      {
        label: "Location",
        href: "/location",
        icon: <IconMapPin className="h-5 w-5 flex-shrink-0" />,
      },
      {
        label: "Testimonials",
        href: "/testinomials",
        icon: (
          <IconStar className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
      },
      {
        label: "FAQ",
        href: "/faq",
        icon: (
          <IconHelp className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
      },
    ],
  },
  {
    title: "MEMBERSHIP",
    items: [
      {
        label: "Membership",
        href: "#/membership",
        icon: (
          <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
      },
      {
        label: "Membership Addons",
        href: "#",
        icon: (
          <IconUsers className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
      },
    ],
  },
  {
    title: "REPORTS",
    items: [
      {
        label: "Admin Earnings",
        href: "#",
        icon: (
          <IconCoin className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
      },
    ],
  },
];

const employeeGroupLinks = [
  {
    title: "OVERVIEW",
    items: [
      {
        label: "Dashboard",
        href: "/dashboard",
        icon: <ChartPie className="h-5 w-5 flex-shrink-0" />,
      },
    ],
  },
  {
    title: "OTHERS",
    items: [
      {
        label: "Chat",
        href: "/chat",
        icon: <IconMessage className="h-5 w-5 flex-shrink-0" />,
      },
    ],
  },
  {
    title: "CONTENT",
    items: [
      {
        label: "Pages",
        href: "/page",
        icon: <IconFileText className=" h-5 w-5 flex-shrink-0" />,
      },
      {
        label: "Blog",
        href: "/maintain-blog",
        icon: <IconPencil className="h-5 w-5 flex-shrink-0" />,
        subroutes: [
          { label: "All Blog", href: "" },
          { label: "Add Blog", href: "/add" },
          { label: "Categories", href: "/categories" },
          { label: "Blog Comments", href: "/blog-comment" },
        ],
      },
      {
        label: "Location",
        href: "/location",
        icon: <IconMapPin className="h-5 w-5 flex-shrink-0" />,
      },
      {
        label: "Testimonials",
        href: "/testinomials",
        icon: (
          <IconStar className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
      },
      {
        label: "FAQ",
        href: "/faq",
        icon: (
          <IconHelp className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
      },
    ],
  },
  {
    title: "MEMBERSHIP",
    items: [
      {
        label: "Membership",
        href: "#/membership",
        icon: (
          <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
      },
      {
        label: "Membership Addons",
        href: "#",
        icon: (
          <IconUsers className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
      },
    ],
  },
  {
    title: "REPORTS",
    items: [
      {
        label: "Admin Earnings",
        href: "#",
        icon: (
          <IconCoin className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
      },
    ],
  },
];
