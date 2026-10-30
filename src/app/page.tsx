import React from "react";
import LeftSection from "../components/LeftSection";
import MainSection from "../components/MainSection";
import RightSection from "../components/RightSection";
import CreatePost from "../components/CreatePost";

export default function Home() {
  return (
    <div className="relative grid w-screen h-screen grid-row- md:grid-cols-[8vw_1fr] lg:grid-cols-[18vw_1fr] xl:grid-cols-[18vw_1fr_22vw]  bg-[#121212] overflow-hidden">
      {/* Left Sidebar */}
      <div className=" w-full h-[8vh] md:h-full bg-black/50 order-1 md:order-0">
        <LeftSection />
      </div>

      {/* Main Content */}
      <main className="h-full overflow-y-auto hidescrollbar">
        <MainSection />
      </main>

      {/* Right Sidebar */}
      <aside className="h-full hidden xl:block bg-white">
        {/* <RightSection /> */}
      </aside>
      <CreatePost/>
    </div>
  );
}
