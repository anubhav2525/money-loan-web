import React from "react";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section className="min-h-screen h-full md:overflow-hidden min-w-full flex items-center justify-center bg-white dark:bg-slate-950 p-4 md:p-0">
      {children}
    </section>
  );
};

export default AuthLayout;
