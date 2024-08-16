import React from "react";
import HomeSidebar from "./HomeSidebar";
import NoticeBoard from "./NoticeBoard";
import Services from "./Services";
import Tips from "./Tips";

const Home: React.FC = () => {
  return (
    <div className="flex lg:flex-row flex-col gap-4">
      <div className="lg:w-3/4 ">
        <NoticeBoard />
        <Services />
        <Tips />
      </div>
      <div className="lg:w-1/4 ">
        <HomeSidebar />
      </div>
    </div>
  );
};

export default Home;
