import React from "react";
import HomeSidebar from "./HomeSidebar";

const Home: React.FC = () => {
  return (
    <div className="flex">
      <div className="w-3/4 bg-green-300"></div>
      <div className="w-1/4 bg-red-300">
        <HomeSidebar />
      </div>
    </div>
  );
};

export default Home;
