"use client";
import { ThemeProvider } from "next-themes";
import React from "react";

const Provider = ({ children }) => {
  return (
    <div>
      <ThemeProvider enableSystem={true} attribute="class">
        <div className="dark:bg-slate-800 dark:text-slate-200 text-slate-800 transition-colors duration-300 min-h-screen select-none">
          {children}
        </div>
      </ThemeProvider>
    </div>
  );
};

export default Provider;
