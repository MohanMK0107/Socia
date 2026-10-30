"use client";
import React, { useRef, useState, useEffect } from "react";
import { FaXmark, FaArrowLeft } from "react-icons/fa6";
import { IoAdd } from "react-icons/io5";
import { TbPhotoVideo, TbBoxMultiple } from "react-icons/tb";
import {IoIosArrowDropright,IoIosArrowDropleft,} from "react-icons/io";

import { TiArrowMaximise } from "react-icons/ti";
const CreatePost = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const fileRef = useRef<File[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const [addImage, setAddImage] = useState<boolean>(false);
  const IndexRef = useRef<number>(0);

  const handleFiles = (fileList: FileList | null) => {
    if (!fileList) return;

    const selected = Array.from(fileList).filter(
      (file) => file.type.startsWith("image/") || file.type.startsWith("video/")
    );

    if (selected.length === 0) {
      alert("Please select valid image or video files.");
      return;
    }

    fileRef.current = [...fileRef.current, ...selected];
    setFiles([...fileRef.current]);

    // reset input
    if (inputRef.current) inputRef.current.value = "";
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  const openFilePicker = () => {
    inputRef.current?.click();
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    if (IndexRef.current > 0) {
      IndexRef.current -= 1;
    }
  };
  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    if (IndexRef.current < files.length - 1) {
      IndexRef.current += 1;
    }
  };

  useEffect(() => {
    console.log("Selected files:", files);
  }, [files]);

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      className="fixed inset-0 bg-black/50 flex items-center justify-center"
    >
      <FaXmark className="absolute top-5 right-10 w-8 h-8 fill-black cursor-pointer hover:fill-red-600 transition-colors" />

      <div className=" w-[clamp(320px,50vw,550px)] h-[clamp(420px,75vmin,900px)] transition-[width,height] duration-300 ease-out bg-black rounded-xl flex flex-col">
        <header className="text-white h-10 flex items-center justify-between border-b px-4 py-2 border-gray-600">
          <FaArrowLeft className="w-5 h-5 fill-white cursor-pointer hover:fill-gray-300 transition-colors" />
          <span>Create new post</span>
          <button className="text-blue-500 font-semibold">Next</button>
        </header>

        <div className="flex-1 flex flex-col w-full h-full items-center justify-center rounded-b-xl">
          {/*image container if availabe*/}
          <div className="relative w-full h-full flex items-center justify-center ">
            <img
              src="/images/Ms_Static.png"
              alt="post preview"
              className="w-full h-full object-cover rounded-b-xl"
            />

            <button className="absolute top-1/2 left-10 z-20 cursor-pointer group" ><IoIosArrowDropleft className="size-7 fill-gray-300 group-hover:fill-white`"/></button>
            <button className="absolute top-1/2 right-10 z-20 cursor-pointer group" ><IoIosArrowDropright className="size-7 fill-gray-300 group-hover:fill-white"/></button>

            <button>
              <TiArrowMaximise className="w-7 h-7 fill-white/70 absolute bottom-4 left-4 cursor-pointer hover:fill-white transition-colors" />
            </button>

            <button onClick={()=>setAddImage(prev=>!prev)}>
              <TbBoxMultiple className="w-7 h-7 stroke-white/70 absolute bottom-4 right-4 cursor-pointer hover:stroke-white transition-colors" />
            </button>

            {/*Add multiple post image or View them*/}
            {addImage && 
            <div className="absolute right-5 bottom-15 flex bg-white/10 shadow-lg backdrop-blur-lg rounded-xl postImage-view">
              {/* Image container */}
              <div className="flex overflow-x-auto scrollbar-hiden whitespace-nowrap max-w-[28rem]">
                <div className="flex gap-2 p-2">
                  <div className="w-28 h-25 shrink-0 rounded-md" >
                    <img className="w-full h-full object-cover" src="/images/MS_Static.png" alt="" />
                  </div>
                </div>
              </div>

              {/* Add new image */}
              <div className="w-[60px] flex items-center justify-center shrink-0">
                <button onClick={openFilePicker} className="size-12 flex items-center justify-center border-2 border-white/20 rounded-full border-dotted hover:border-white cursor-pointer transition-colors">
                  <IoAdd className="size-8 stroke-white" />
                </button>
              </div>
            </div>}
            
          </div>
          {/* {files.length <= 0 ? (
            <>
              <TbPhotoVideo className="w-[clamp(48px,12vw,180px)] h-[clamp(48px,12vmin,180px)] stroke-white" />
              <p className="text-white font-semibold text-[clamp(14px,2.2vw,18px)]">Drag Photos And Videos Here</p>
              <button
                onClick={openFilePicker}
                className="bg-blue-700 text-white font-semibold px-[clamp(12px,3vw,20px)] py-[clamp(6px,1.5vw,10px)] rounded-lg text-[clamp(12px,1.8vw,14px)] hover:bg-blue-500 transition-colors">
                Select from computer
              </button>

              <input
                ref={inputRef}
                type="file"
                multiple
                accept="image/*,video/*"
                className="hidden"
                onChange={(e) => handleFiles(e.target.files)}
              />
            </>
            ):(
              <div className=" w-full ">
                <img className="h-full object-fit w-3/4" src={files[0] ? URL.createObjectURL(files[0]) : ""} alt="/post-images" />
              </div>
            )} */}
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
// i need a scroll effect small image container the scroll should be in x direction and it shoud be only be changed when button is clicked like f=left or right
