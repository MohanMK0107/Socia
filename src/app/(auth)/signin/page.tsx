"use client";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const SigninPage = () => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="bg-white/80 dark:bg-black/70 backdrop-blur-md w-[90%] sm:w-[380px] shadow-2xl rounded-2xl p-8 transition-all duration-300">
      <h2 className="text-2xl font-semibold mb-6 text-center text-black dark:text-white">
        Sign In
      </h2>

      {/* Google Sign In */}
      <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 shadow-sm hover:shadow-md transition-all py-2 rounded-xl mb-5">
        <FcGoogle className="w-6 h-6" />
        <span className="font-medium">Sign In with Google</span>
      </button>

      {/* Divider */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-full h-[1px] bg-gray-300 dark:bg-gray-600"></div>
        <span className="text-gray-500 text-sm dark:text-gray-400">or</span>
        <div className="w-full h-[1px] bg-gray-300 dark:bg-gray-600"></div>
      </div>

      {/* Form */}
      <form className="flex flex-col gap-4">
        {/* Email */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm text-gray-700 dark:text-gray-300">Email</label>
          <input
            type="email"
            placeholder="Enter email"
            className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-[#0a192f] text-black dark:text-white"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm text-gray-700 dark:text-gray-300">Password</label>
          <div className="relative w-full">
            <input
              type={showPass ? "text" : "password"}
              placeholder="Enter password"
              className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-[#0a192f] text-black dark:text-white"
            />
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 dark:text-gray-300"
              onClick={(e) => {
                e.preventDefault();
                setShowPass((prev) => !prev);
              }}
            >
              {showPass ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="bg-gradient-to-br from-blue-500 to-purple-700 text-white py-2 rounded-lg hover:opacity-90 transition-all mt-2"
        >
          Sign In
        </button>
      </form>

      <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-4">
        Don't have an account?{" "}
        <span className="text-black dark:text-white font-medium cursor-pointer hover:underline hover:text-blue-700 dark:hover:text-blue-400">
          Sign Up
        </span>
      </p>
    </div>
  );
};

export default SigninPage;
