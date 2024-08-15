import React from "react";
import advisorImg from "../../assets/advisor.jpg";
import secretaryImg from "../../assets/secretary.jpg";
import { Link } from "react-router-dom";
const HomeSidebar: React.FC = () => {
  return (
    <div>
      <div className="relative group overflow-hidden mb-4">
        <img src={advisorImg} alt="image" className="w-full" />
        <div className="absolute top-10 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-green-400 flex flex-col justify-end items-center py-3 px-2 gap-1 transition-all duration-500 group-hover:top-0">
          <p>জনাব মোঃ নাহিদ ইসলাম</p>
          <p className="font-bold">মাননীয় উপদেষ্টা</p>
          <Link to={"/"}>
            <button className="btn opacity-0 group-hover:opacity-100">
              বিস্তারিত দেখুন
            </button>
          </Link>
        </div>
      </div>

      <div className="relative group overflow-hidden">
        <img src={secretaryImg} alt="image" className="w-full" />
        <div className="absolute top-10 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-green-400 flex flex-col justify-end items-center py-3 px-2 gap-1 transition-all duration-500 group-hover:top-0">
          <p>জনাব মোঃ সামসুল আরেফিন</p>
          <p className="font-bold">সচিব</p>
          <Link to={"/"}>
            <button className="btn opacity-0 group-hover:opacity-100">
              বিস্তারিত দেখুন
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeSidebar;
