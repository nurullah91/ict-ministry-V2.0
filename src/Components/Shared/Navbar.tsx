import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    {
      name: "আমাদের সম্পর্কিত",
      position: "1st",
      children: [
        {
          name: "ভিশন ও মিশন",
          path: "/",
        },
        {
          name: "মাননীয় উপদেষ্টা",
          path: "/",
        },
        {
          name: "প্রাক্তন মন্ত্রীগণের তালিকা",
          path: "/",
        },
        {
          name: "সচিব",
          path: "/",
        },
        {
          name: "প্রাক্তন সচিবগণের তালিকা",
          path: "/",
        },
        {
          name: "সাংগঠনিক কাঠামো",
          path: "/",
        },
        {
          name: "এলোকেশন অব বিজনেস",
          path: "/",
        },
        {
          name: "প্রধান কার্যাবলী",
          path: "/",
        },
        {
          name: "কর্মবণ্টন",
          path: "/",
        },
        {
          name: "প্রতিনিধি মনোনয়ন",
          path: "/",
        },
        {
          name: "জনবল",
          path: "/",
        },
        {
          name: "কর্মকর্তাবৃন্দ",
          path: "/",
        },
        {
          name: "কর্মবণ্টন",
          path: "/",
        },
        {
          name: "তথ্য প্রদানকারী কর্মকর্তা",
          path: "/",
        },
        {
          name: "অভিযোগ নিষ্পত্তি কর্মকর্তা (অনিক) ও আপিল কর্মকর্তা",
          path: "/",
        },
        {
          name: "ফোকাল পয়েন্ট কর্মকর্তাগণ",
          path: "/",
        },
        {
          name: "সেবা প্রদান প্রতিশ্রুতি",
          path: "/",
        },
        {
          name: "নাগরিক ই-সেবাসমূহের তালিকা",
          path: "/",
        },
        {
          name: "মাননীয় প্রধানমন্ত্রী এবং মাননীয় মন্ত্রীর সভাপতিত্বে মন্ত্রণালয়/বিভাগ সম্পর্কিত কমিটিসমূহ",
          path: "/",
        },
      ],
    },

    {
      name: "অধীনস্থ দপ্তর/অফিস/সংস্থা",
      position: "2nd",
      children: [
        {
          name: "দপ্তর/অফিস/সংস্থার তালিকা",
          path: "/",
        },
      ],
    },
    {
      name: "প্রকল্প/কর্মসূচি",
      position: "3rd",
      children: [
        {
          name: "চলমান প্রকল্প",
          path: "/",
        },
        {
          name: "ক্রয় পরিকল্পনা",
          path: "/",
        },
        {
          name: "সমাপ্ত প্রকল্পসমূহ",
          path: "/",
        },
        {
          name: "সমাপ্ত কর্মসূচিসমূহ",
          path: "/",
        },
      ],
    },
    {
      name: "গ্যালারি",
      position: "4th",
      children: [
        {
          name: "ফটো গ্যালারি",
          path: "/",
        },
        {
          name: "ভিডিও গ্যালারি",
          path: "/",
        },
      ],
    },
    {
      name: "আইন/নীতিমালা",
      position: "5th",

      children: [
        {
          name: "আইন ও বিধি",
          path: "/",
        },
        {
          name: "নীতিমালা",
          path: "/",
        },
        {
          name: "নির্দেশিকা ও কৌশলপত্র",
          path: "/",
        },
        {
          name: "খসড়া আইন, বিধি এবং নীতিমালা",
          path: "/",
        },
      ],
    },
    {
      name: "ই-সেবা",
      position: "6th",
      children: [
        {
          name: "ইনোভেশন ইনফরমেশন সিস্টেম ম্যানেজমেন্ট",
          path: "/",
        },
        {
          name: "নৈমিত্তিক ছুটি ব্যবস্থাপনা",
          path: "/",
        },
        {
          name: "স্মার্ট ড্যাশবোর্ড",
          path: "/",
        },
        {
          name: "ফ্রিল্যান্সার আইডি",
          path: "/",
        },
        {
          name: "ফেলোশিপ ও বৃত্তি এবং ইনোভেশন ফান্ড এর আবেদন",
          path: "/",
        },
        {
          name: "ই-নথি",
          path: "/",
        },
        {
          name: "ওয়েব মেইল",
          path: "/",
        },
        {
          name: "অনলাইনে বেতন দাখিল",
          path: "/",
        },
        {
          name: "ই-টেন্ডারিং(e-GP)",
          path: "/",
        },
        {
          name: "আমার সরকার",
          path: "/",
        },
        {
          name: "GRP",
          path: "/",
        },
        {
          name: "প্রকল্প মনিটরিং সিস্টেম",
          path: "/",
        },
        {
          name: "অনলাইন এসিআর দাখিল",
          path: "/",
        },
        {
          name: "অনলাইন নিয়োগ পোর্টাল",
          path: "/",
        },
        {
          name: "ইমপোরিয়া",
          path: "/",
        },
      ],
    },
    {
      name: "যোগাযোগ ও মতামত",
      position: "7th",
      children: [
        {
          name: "অফিসের ঠিকানা",
          path: "/",
        },
        {
          name: "আপনার জিজ্ঞাসা ও মতামত",
          path: "/",
        },
      ],
    },
  ];

  return (
    <div className="">
      <div
        className="lg:hidden block bg-green-200 border border-orange-400 p-2 "
        onClick={() => setOpen(!open)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>

      <div className="w-2/3 lg:w-full bg-green-200 mb-6">
        <div
          className={`px-4 py-3 lg:flex gap-3 items-start justify-between flex-col lg:flex-row ${
            open ? "block" : "hidden"
          }`}
        >
          <div>
            <Link to="/">
              <FaHome className="text-3xl text-red-500" />
            </Link>
          </div>
          {navItems.map((item, index) => (
            <ul key={index} className="group relative nav-title">
              <li>
                <li>{item.name}</li>
                <div className="title-line w-0 h-[3px] bg-red-500 transition-all duration-500 mb-1"></div>
              </li>
              <div
                className={`absolute lg:top-7 top-0 z-10 left-28 w-[250px] shadow-lg bg-red-500/20 backdrop-blur-md grid grid-cols-1  ${
                  item.children.length > 4
                    ? "lg:grid-cols-2 lg:w-[500px]"
                    : "grid-cols-1 lg:w-[250px]"
                }
                 ${item.position === "6th" ? "lg:-left-[400px]" : "lg:left-0"}
                 ${item.position === "7th" ? "lastItem" : ""}
                `}
              >
                {item.children?.map((child, index) => (
                  <ul
                    key={index}
                    className="hidden group-hover:block px-2 py-1 w-full divide-x-2"
                  >
                    <li className="px-2 py-2 rounded items">
                      <Link to={child.path}>{child.name}</Link>
                      <div className="link-line w-0 h-[3px] bg-green-600 transition-all duration-500"></div>
                    </li>
                  </ul>
                ))}
              </div>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
