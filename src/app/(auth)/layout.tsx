"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen relative overflow-hidden flex justify-center items-center bg-black">

      {/* Page content */}
      <div className="relative z-10 w-full flex justify-center items-center">
        {children}
      </div>
    </div>
  );
}
