"use client";
import React, { useState } from "react";

const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
const currentYear = new Date().getFullYear();
const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

const AgeComp = () => {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const [openDay, setOpenDay] = useState(false);
  const [openMonth, setOpenMonth] = useState(false);
  const [openYear, setOpenYear] = useState(false);

  const dropdownClass =
    "absolute mt-1 max-h-40 overflow-y-auto w-full bg-white dark:bg-[#112240] border border-gray-300 dark:border-gray-600 rounded shadow-lg z-20 scrollbar-hide";

  const itemClass =
    "px-3 py-2 hover:bg-blue-500 hover:text-white cursor-pointer";

  return (
    <div className="flex gap-4">
      {/* Day */}
      <div className="relative w-20">
        <button
          className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 text-left"
          onClick={() => setOpenDay((prev) => !prev)}
        >
          {selectedDay || "Day"}
        </button>
        {openDay && (
          <div className={dropdownClass}>
            {days.map((day) => (
              <div
                key={day}
                className={itemClass}
                onClick={() => {
                  setSelectedDay(day);
                  setOpenDay(false);
                }}
              >
                {day}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Month */}
      <div className="relative w-24">
        <button
          className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 text-left"
          onClick={() => setOpenMonth((prev) => !prev)}
        >
          {selectedMonth || "Month"}
        </button>
        {openMonth && (
          <div className={dropdownClass}>
            {months.map((month) => (
              <div
                key={month}
                className={itemClass}
                onClick={() => {
                  setSelectedMonth(month);
                  setOpenMonth(false);
                }}
              >
                {month}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Year */}
      <div className="relative w-24">
        <button
          className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 text-left"
          onClick={() => setOpenYear((prev) => !prev)}
        >
          {selectedYear || "Year"}
        </button>
        {openYear && (
          <div className={dropdownClass}>
            {years.map((year) => (
              <div
                key={year}
                className={itemClass}
                onClick={() => {
                  setSelectedYear(year);
                  setOpenYear(false);
                }}
              >
                {year}
              </div>
            ))}
          </div>
        )}
      </div>

      
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
};

export default AgeComp;
