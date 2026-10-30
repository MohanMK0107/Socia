"use client";
import React from "react";
import { IoAdd, IoSettingsOutline, IoSearchOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { GrHomeRounded } from "react-icons/gr";
import { TbMessageCircle } from "react-icons/tb";
import { PiUsers, PiNotificationBold } from "react-icons/pi";
import { FaUser } from "react-icons/fa";

const LeftSection = () => {
  return (
    <aside className="flex gap-5 md:flex-col md:items-center lg:items-start h-full">
      <div className=" mt-5 md:flex px-2 hidden ">
        <h1 className="text-[2rem] f-inter text-white/50 font-bold hidden lg:block">
          S P A C E
        </h1>
        <img className="lg:hidden h-10 " src="/images/logo.png" alt="" />
      </div>

      <div className="w-full h-full flex items-center md:flex-col justify-between">
        <div className=" flex items-center justify-between md:flex-col gap-2 px-3 w-full">
          <div className="flex items-center justify-center md:justify-start gap-3 w-full hover:bg-white/10 px-2 py-2 rounded-lg cursor-pointer transition-all duration-300">
            <GrHomeRounded className="w-7 h-7 stroke-white" />
            <p className="text-white text-[18px] font-light f-outfit hidden lg:block">
              Home
            </p>
          </div>
          <div className="hidden md:flex items-center gap-3 w-full hover:bg-white/10 px-2 py-2 rounded-lg cursor-pointer transition-all duration-300">
            <IoSearchOutline className="w-7 h-7 stroke-white" />
            <p className="text-white text-[18px] font-light f-outfit hidden lg:block">
              Search
            </p>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-3 w-full hover:bg-white/10 px-2 py-2 rounded-lg cursor-pointer transition-all duration-300">
            <PiUsers className="w-7 h-7 fill-white" />
            <p className="text-white text-[18px] font-light f-outfit hidden lg:block">
              People
            </p>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-3 w-full hover:bg-white/10 px-2 py-2 rounded-lg cursor-pointer transition-all duration-300">
            <IoAdd className="w-7 h-7 stroke-white" />
            <p className="text-white text-[18px] font-light f-outfit hidden lg:block">
              Create
            </p>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-3 w-full hover:bg-white/10 px-2 py-2 rounded-lg cursor-pointer transition-all duration-300">
            <TbMessageCircle className="w-7 h-7 stroke-white" />
            <p className="text-white text-[18px] font-light f-outfit hidden lg:block">
              Message
            </p>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-3 w-full hover:bg-white/10 px-2 py-2 rounded-lg cursor-pointer transition-all duration-300">
            <PiNotificationBold className="w-7 h-7 fill-white" />
            <p className="text-white text-[18px] font-light f-outfit hidden lg:block">
              Notification
            </p>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-3 w-full hover:bg-white/10 px-2 py-2 rounded-lg cursor-pointer transition-all duration-300">
            <FaUser className="w-7 h-7 fill-white " />
            <p className="text-white text-[18px] font-light f-outfit hidden lg:block">
              Profile
            </p>
          </div>
        </div>

        <button className="group w-full hidden md:flex items-center md:justify-center lg:justify-end gap-3 px-3 mb-5 cursor-pointer ">
          <span className="f-outfit font-light hidden text-[18px] lg:block text-white tracking-wider transition-all duration-300 group-hover:text-red-500">
            Logout
          </span>
          <IoIosLogOut className="w-7 h-7 fill-white transition-all duration-300 group-hover:fill-red-500" />
        </button>
      </div>
    </aside>
  );
};

export default LeftSection;
