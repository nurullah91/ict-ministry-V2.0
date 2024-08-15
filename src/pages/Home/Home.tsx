import React from "react";
import HomeSidebar from "./HomeSidebar";
import NoticeBoard from "./NoticeBoard";

const Home: React.FC = () => {
  return (
    <div className="flex">
      <div className="w-3/4 ">
        <NoticeBoard />
      </div>
      <div className="w-1/4 ">
        <HomeSidebar />
      </div>
    </div>
  );
};

export default Home;
