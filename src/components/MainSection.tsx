import React from "react";
import Stories from "./Stories";
import Postst from "./Postst";

const MainSection = () => {
  return (
     <div className="flex flex-col items-center w-full h-screen p-2 gap-3 overflow-y-auto no-scrollbar">
      
      <Stories />

      <div className="w-full flex-1 flex flex-col items-center gap-10  py-5 ">
        <Postst />
        <Postst />
        <Postst />
      </div>
    </div>
  );
};

export default MainSection;
