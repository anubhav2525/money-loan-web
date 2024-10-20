"use client";
import React from "react";
import Navbar from "@/components/public/navbar/Navbar";

const PublicLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default PublicLayout;
