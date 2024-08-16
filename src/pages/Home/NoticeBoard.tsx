import React from "react";
import { Link } from "react-router-dom";
import { FaHandPointRight } from "react-icons/fa";
const NoticeBoard: React.FC = () => {
  return (
    <div className="notice px-4 py-2">
      <h2 className="text-2xl">নোটিশ বোর্ড</h2>
      <div className="ml-4 lg:ml-8 ">
        <div className="flex my-2 hover:underline items-center">
          <FaHandPointRight className="text-green-600 font-bold text-2xl mr-2" />
          <Link to={"/"}>
            প্রজ্ঞাপন (স্মারক-৬৮, চাকরি স্থায়ীকরণ, প্রোগ্রামার ও সহকারী
            প্রোগ্রামার, তথ্য ও যোগায...
          </Link>
        </div>
        <div className="flex my-2 hover:underline items-center">
          <FaHandPointRight className="text-green-600 font-bold text-2xl mr-2" />
          <Link to={"/"}>অফিস আদেশ (দায়িত্ব বণ্টন)</Link>
        </div>
        <div className="flex my-2 hover:underline items-center">
          <FaHandPointRight className="text-green-600 font-bold text-2xl mr-2" />
          <Link to={"/"}>২০২৪-২০২৫ অর্থবছরের বিজ্ঞপ্তি</Link>
        </div>
        <div className="flex my-2 hover:underline items-center">
          <FaHandPointRight className="text-green-600 font-bold text-2xl mr-2" />
          <Link to={"/"}>
            e-Tender For “Procurement of Food and Refreshment for Aspire to
            Innovate (a2i) Progr...
          </Link>
        </div>
        <div className="flex my-2 hover:underline items-center">
          <FaHandPointRight className="text-green-600 font-bold text-2xl mr-2" />
          <Link to={"/"}>
            অফিস আদেশ (অবমুক্তি, জনাব মির্জা মুরাদ হাসান বেগ, উপ-পরিচালক)
          </Link>
        </div>
      </div>

      <button className="btn btn-sm bg-red-500 rounded-md text-white hover:bg-green-600">
        সকল
      </button>
    </div>
  );
};

export default NoticeBoard;
