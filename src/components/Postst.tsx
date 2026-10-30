"use client";
import React, { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import {
  FaHeart,
  FaRegHeart,
  FaBookmark,
  FaRegBookmark,
  FaRegArrowAltCircleRight,
  FaRegArrowAltCircleLeft,
} from "react-icons/fa";
import { PiChatCircle } from "react-icons/pi";
import { IoIosSend } from "react-icons/io";
import EmojiPicker from "emoji-picker-react";
import { BsEmojiSmile } from "react-icons/bs";
const Postst = () => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  return (
    <div className="w-full max-w-[550px] max-h-[100vh] grid grid-rows-[60px_auto_auto] bg-black/30 rounded-2xl  ">
      {/*header*/}
      <div className="flex items-center w-full px-2 ">
        <div className="flex items-center justify-between w-full p-2">
          <div className="flex items-center gap-5">
            <img
              className="w-10 h-10 rounded-full"
              src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
              alt=""
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <h4 className="f-poppins text-sm text-white">profile name</h4>
                <p className="flex items-center gap-1 f-outfit text-[13px] text-gray-400">
                  <span className="w-1 h-1 rounded-full bg-gray-500" />4 days
                  ago
                </p>
              </div>
              <p className="f-outfit text-sm text-gray-500">title of post</p>
            </div>
          </div>
          <div className="">
            <CiMenuKebab className="w-5 h-5 fill-gray-500" />
          </div>
        </div>
      </div>
      {/*post*/}
      <div className="w-full min-h-[35vh] max-h-[80vh] h-auto mx-auto mt-2 ">
        <img
          className="w-full h-full object-contain "
          src="https://i.pinimg.com/736x/c4/f0/f2/c4f0f2797ed642ba379e9a0c0b2dc7e9.jpg"
          alt=""
        />
      </div>

      {/*footer*/}
      <div className="px-4 mt-2 flex flex-col gap-3 min-h-[30px] py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              className="hover:scale-110 transition-all duration-300 cursor-pointer"
              onClick={() => setLiked((prev) => !prev)}
            >
              {liked ? (
                <FaHeart className="animate-[bounce_1_ease-in-out_1s] w-6 h-6 fill-red-500" />
              ) : (
                <FaRegHeart className="w-6 h-6 fill-white" />
              )}
            </button>
            <button>
              <PiChatCircle className="w-6 h-6 fill-white" />
            </button>
            <button>
              <IoIosSend className="w-6 h-6 fill-white" />
            </button>
          </div>
          <div>
            <button
              className="hover:scale-110 transition-all duration-300 cursor-pointer"
              onClick={() => setSaved((prev) => !prev)}
            >
              {saved ? (
                <FaBookmark className="w-5 h-5 fill-white" />
              ) : (
                <FaRegBookmark className="w-5 h-5 fill-white" />
              )}
            </button>
          </div>
        </div>

        <div>
          <p className="f-outfit text-sm text-white">
            <span className="font-semibold mr-2">
              {liked ? "1 like" : "0 likes"}
            </span>
          </p>
          <p className="f-outfit text-sm text-white">
            This is a sample post description.
          </p>
        </div>

        {/* FIXED COMMENT BOX */}
        <div className="w-full flex items-center gap-2 mb-1">
          <input className="w-full px-2 py-1 f-outfit text-gray-500 focus:outline-none" type="text" placeholder="Enter comment here" />
          <button><BsEmojiSmile className="w-5 h-5 fill-white" /></button>
        </div>
      </div>
    </div>
  );
};

export default Postst;
