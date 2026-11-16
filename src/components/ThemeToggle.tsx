"use client";

import { LuSun } from "react-icons/lu";
import { IoMoonOutline } from "react-icons/io5";
import { useTheme } from "@/src/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-[var(--surface)] 
      text-[var(--foreground)] hover:opacity-80 transition"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <IoMoonOutline size={20} />
      ) : (
        <LuSun size={20} />
      )}
    </button>
  );
}