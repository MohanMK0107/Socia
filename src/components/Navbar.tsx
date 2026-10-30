import React from "react";
import { IoAdd, IoSettingsOutline } from "react-icons/io5";
import { GrHomeRounded } from "react-icons/gr";
import { TfiMenuAlt } from "react-icons/tfi";
import { PiUsers } from "react-icons/pi";
import { FaRegUserCircle } from "react-icons/fa";
export const Navbar = () => {
  return (
    <div className=" flex w-full h-full justify-around items-center ">
      <div className="flex items-center gap-4 cursor-pointer hover:bg-white/10 py-2 px-3 rounded-lg transition-all duration-300 ease-in">
        <GrHomeRounded className="w-7 h-7 stroke-white" />
      </div>

      <div className="flex items-center gap-4 cursor-pointer hover:bg-white/10 py-2 px-3 rounded-lg transition-all duration-300 ease-in">
        <TfiMenuAlt className="w-7 h-7 fill-white" />
      </div>

      <div className="flex items-center gap-4 cursor-pointer hover:bg-white/10 py-2 px-3 rounded-lg transition-all duration-300 ease-in">
        <PiUsers className="w-7 h-7 fill-white" />
      </div>

      <div className="flex items-center gap-4 cursor-pointer hover:bg-white/10 py-2 px-3 rounded-lg transition-all duration-300 ease-in">
        <IoAdd className="w-7 h-7 stroke-white" />
      </div>

      <div className="flex items-center gap-4 cursor-pointer hover:bg-white/10 py-2 px-3 rounded-lg transition-all duration-300 ease-in">
        <IoSettingsOutline className="w-7 h-7 stroke-white" />
      </div>

      <div className="flex items-center gap-4 cursor-pointer hover:bg-white/10 py-2 px-3 rounded-lg transition-all duration-300 ease-in">
        <FaRegUserCircle className="w-7 h-7 fill-white" />
      </div>

    </div>
  );
};
