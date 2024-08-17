import React from "react";
import advisorImg from "../../assets/advisor.jpg";
import secretaryImg from "../../assets/secretary.jpg";
import { Link } from "react-router-dom";
import result from "../../assets/result.png";
import internalService from "../../assets/internal_eservice_bn.jpg";
import myGOv from "../../assets/mygov_logo_bn.jpg";
import eDirectory from "../../assets/e-directory.jpg";
import visitorCount from "../../assets/visitor-counter.png";
import discount from "../../assets/discount_bn.jpg";
import hotline from "../../assets/hotline_v.2_bn.png";
import dengue from "../../assets/dengu.jpg";
import nationalAnthem from "../../assets/bd_national_anthem.mp3";

import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const HomeSidebar: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
        <div className="relative group overflow-hidden">
          <img src={advisorImg} alt="image" className="w-full" />
          <div className="absolute top-10 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-green-400 flex flex-col justify-end items-center py-3 px-2 gap-1 transition-all duration-500 group-hover:top-0">
            <p>জনাব মোঃ নাহিদ ইসলাম</p>
            <p className="font-bold">মাননীয় উপদেষ্টা</p>
            <Link to="">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
        <div className="md:col-span-2 lg:col-span-1">
          <h4 className="sidebarTitle my-4">অফিস সংযুক্তির আবেদন ফরম</h4>
          <p className="sidebarTitle">
            বার্ষিক কর্মসম্পাদন চুক্তি (এপিএ) ২০২০-২০২১ এর চূড়ান্ত মূল্যায়নে
            তথ্য ও যোগাযোগ প্রযুক্তি বিভাগের প্রথম স্থান অর্জন
          </p>
          <img
            src={result}
            alt="ICT Division result"
            className="w-full md:w-1/2 lg:w-full mx-auto"
          />
        </div>
        <img src={internalService} alt="Internal Service" className="w-full" />
        <img src={myGOv} alt="My Gov" className="w-full" />
        <img src={eDirectory} alt="e-directory" className="w-full" />
        <img src={discount} alt="Discount" className="w-full" />
        {/* links */}
        <h5 className="sidebarTitle md:col-span-2 lg:col-span-1">
          কেন্দ্রীয় ই-সেবা
        </h5>
        <div className="mb-4">
          <h5 className="sidebarTitle">অভ্যন্তরীণ ই-সেবাসমূহ</h5>

          <p className="flex items-center gap-2 hover:underline hover:text-red-500 my-2">
            <RiVerifiedBadgeFill className="text-green-600" />
            <Link to={""}>ওয়েব মেইল</Link>
          </p>
          <p className="flex items-center gap-2 hover:underline hover:text-red-500 my-2">
            <RiVerifiedBadgeFill className="text-green-600" />
            <Link to={""}>বৃত্তি ও আইসিটি উদ্ভাবনী অনুদান</Link>
          </p>
          <p className="flex items-center gap-2 hover:underline hover:text-red-500 my-2">
            <RiVerifiedBadgeFill className="text-green-600" />
            <Link to={""}>ন্যাশনাল এন্টারপ্রাইজ আর্কিটেকচার</Link>
          </p>
          <p className="flex items-center gap-2 hover:underline hover:text-red-500 my-2">
            <RiVerifiedBadgeFill className="text-green-600" />
            <Link to={""}>সিআইআরটি</Link>
          </p>
          <p className="flex items-center gap-2 hover:underline hover:text-red-500 my-2">
            <RiVerifiedBadgeFill className="text-green-600" />
            <Link to={""}>অনলাইন নিয়োগ সিস্টেম</Link>
          </p>
          <p className="flex items-center gap-2 hover:underline hover:text-red-500 my-2">
            <RiVerifiedBadgeFill className="text-green-600" />
            <Link to={""}>
              ওয়ান স্টপ সার্ভিস (বাংলাদেশ হাইটেক পার্ক কর্তৃপক্ষ)
            </Link>
          </p>
          <button className="w-full border-2 border-red-500 py-1 rounded hover:bg-green-400 font-bold hover:text-white transition-all duration-300">
            সকল
          </button>
        </div>
        <div className="mb-4">
          <h5 className="sidebarTitle">গুরুত্বপূর্ণ লিংক</h5>

          <p className="flex items-center gap-2 hover:underline hover:text-red-500 my-2">
            <RiVerifiedBadgeFill className="text-green-600" />
            <Link to={""}>রাষ্ট্রপতির কার্যালয়</Link>
          </p>
          <p className="flex items-center gap-2 hover:underline hover:text-red-500 my-2">
            <RiVerifiedBadgeFill className="text-green-600" />
            <Link to={""}>প্রধানমন্ত্রীর কার্যালয়</Link>
          </p>
          <p className="flex items-center gap-2 hover:underline hover:text-red-500 my-2">
            <RiVerifiedBadgeFill className="text-green-600" />
            <Link to={""}>মন্ত্রিপরিষদ বিভাগ</Link>
          </p>
          <p className="flex items-center gap-2 hover:underline hover:text-red-500 my-2">
            <RiVerifiedBadgeFill className="text-green-600" />
            <Link to={""}>বাংলাদেশ কর্মচারী কল্যাণ বোর্ড</Link>
          </p>
          <p className="flex items-center gap-2 hover:underline hover:text-red-500 my-2">
            <RiVerifiedBadgeFill className="text-green-600" />
            <Link to={""}>জাতীয় দক্ষতা উন্নয়ন কর্তৃপক্ষ</Link>
          </p>
          <p className="flex items-center gap-2 hover:underline hover:text-red-500 my-2">
            <RiVerifiedBadgeFill className="text-green-600" />
            <Link to={""}>প্রাথমিক ডিজিটাল কন্টেন্ট</Link>
          </p>
          <p className="flex items-center gap-2 hover:underline hover:text-red-500 my-2">
            <RiVerifiedBadgeFill className="text-green-600" />
            <Link to={""}>জাতীয় পোর্টাল</Link>
          </p>
          <button className="w-full border-2 border-red-500 py-1 rounded hover:bg-green-400 font-bold hover:text-white transition-all duration-300">
            সকল লিংক
          </button>
        </div>
        <div className="my-4">
          <h5 className="sidebarTitle">
            ওয়েবসাইট দর্শনার্থী [০৬.১১.২০১৯ তারিখ থেকে কার্যকর]
          </h5>
          <small className="text-xs">Free-Hit-Counters.net</small>
          <img src={visitorCount} alt="visitor count" />
          <h4 className="sidebarTitle my-4">ডেঙ্গু প্রতিরোধে করণীয়</h4>
          <img src={dengue} alt="Dengue" className="w-full" />
        </div>
        <div className="my-4">
          <h4 className="sidebarTitle">জরুরি হটলাইন</h4>
          <img src={hotline} alt="Hotline numbers" className="w-full" />
        </div>

        <div className="my-4">
          <h4 className="sidebarTitle mb-4">জাতীয় সংগীত</h4>
          <audio controls>
            <source src={nationalAnthem} />
          </audio>
        </div>
        <div className="my-4">
          <h4 className="sidebarTitle">সামাজিক যোগাযোগ</h4>
          <div className="flex gap-2 my-4 items-center">
            <a href="https://www.facebook.com/ictdivisionbd" target="_blank">
              <FaFacebook className="text-3xl text-green-900" />
            </a>
            <a href="https://twitter.com/ictdivision" target="_blank">
              <FaSquareXTwitter className="text-3xl text-green-900" />
            </a>
            <a
              href="https://www.youtube.com/user/ictdivision/videos"
              target="_blank"
            >
              <FaYoutube className="text-3xl text-green-900" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSidebar;
