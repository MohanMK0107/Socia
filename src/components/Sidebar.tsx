"use client";
import React from "react";
import { IoAdd, IoSettingsOutline, IoSearchOutline } from "react-icons/io5";
import type { IconType } from "react-icons";
import { IoIosLogOut } from "react-icons/io";
import { GrHomeRounded } from "react-icons/gr";
import { TbMessageCircle } from "react-icons/tb";
import { PiUsers, PiNotificationBold } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import { useRouter } from "next/navigation";

type sideBarDataType = {
  label: string;
  icon: IconType;
  link: string;
};

const Sidebar = () => {
  const sidebarData: sideBarDataType[] = [
    { label: "Home", icon: GrHomeRounded, link: "/" },
    { label: "Search", icon: IoSearchOutline, link: "/search" },
    { label: "People", icon: PiUsers, link: "/people" },
    { label: "Create", icon: IoAdd, link: "/create" },
    { label: "Message", icon: TbMessageCircle, link: "/messages" },
    {
      label: "Notification",
      icon: PiNotificationBold,
      link: "/notifications",
    },
    { label: "Profile", icon: FaUser, link: "/profile" },
  ];
  const router = useRouter()
  return (
    <aside className="flex  gap-5 md:flex-col md:items-center lg:items-start h-full bg-[var(--background)] text-[var(--foreground)]">
      <div className=" mt-5 md:flex px-2 hidden ">
        <h1 className="text-[2rem] f-inter /50 font-bold hidden lg:block">
          S P A C E
        </h1>
        <img className="lg:hidden h-10 " src="/images/logo.png" alt="" />
      </div>

      <div className="w-full h-full flex items-center md:flex-col justify-between">
        <div className=" flex items-center justify-between md:flex-col gap-2 px-3 w-full">
          {sidebarData.map((item, index) => (
            <div
              key={index}
              onClick={()=>router.push(item.link)}
              className="flex items-center justify-center md:justify-start gap-3 w-full hover:bg-white/10 px-2 py-2 rounded-lg cursor-pointer transition-all duration-300"
            >
              <item.icon className="w-7 h-7 " />
              <p className=" text-[18px] font-light f-outfit hidden lg:block">
                {item.label}
              </p>
            </div>
          ))}
          <ThemeToggle />
        </div>

        <button className="group w-full hidden md:flex items-center md:justify-center lg:justify-end gap-3 px-3 mb-5 cursor-pointer ">
          <span className="f-outfit font-light hidden text-[18px] lg:block  tracking-wider transition-all duration-300 group-hover:text-red-500">
            Logout
          </span>
          <IoIosLogOut className="w-7 h-7  transition-all duration-300 group-hover:fill-red-500" />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
