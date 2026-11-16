import Sidebar from "@/src/components/Sidebar";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[15%_70%_15%] h-[100vh] ">
      <Sidebar />
      <div className="">{children}</div>
      <div className="flex "></div>
    </div>
  );
}
