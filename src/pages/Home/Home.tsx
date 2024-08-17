import React from "react";
import HomeSidebar from "./HomeSidebar";
import NoticeBoard from "./NoticeBoard";
import Services from "./Services";
import Tips from "./Tips";
import poll from "../../assets/poll-icon.gif";
import comment from "../../assets/comment.gif";

import { FaUniversalAccess } from "react-icons/fa";

const Home: React.FC = () => {
  return (
    <div>
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
      <div className="fixed top-[calc(100vh/2)] right-3 flex flex-col gap-4">
        <img src={poll} alt="Poll" className="w-10 cursor-pointer" />
        <img src={comment} alt="comment" className="w-10 cursor-pointer" />
        <div className="relative group">
          <FaUniversalAccess className="text-4xl text-green-700 cursor-pointer" />
          <span className="hidden group-hover:block mySecondaryBtn absolute top-0 right-10 py-1 px-2">
            Accessibility
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
