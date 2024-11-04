"use client";

import React from "react";
import Navbar from "@/components/public/navbar/Navbar";
import Footer from "@/components/public/footer/Footer";

const PublicLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PublicLayout;
