import React from "react";
import LeftSection from "../../components/Sidebar";
import MainSection from "../../components/MainSection";
import RightSection from "../../components/RightSection";
import CreatePost from "../../components/CreatePost";

export default function Home() {
  return (
    <div className="">
      {/* Main Content */}
      <main className="h-full overflow-y-auto hidescrollbar">
        <MainSection />
      </main>

      {/* Right Sidebar */}

      {/* <CreatePost/> */}
    </div>
  );
}
