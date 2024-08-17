import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useState } from "react";
import { navItems } from "./NavItem";
const Navbar = () => {
  const [open, setOpen] = useState(false);

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
              <li className="cursor-context-menu">
                <li>{item.name}</li>
                <div className="title-line w-0 h-[3px] bg-red-500 transition-all duration-500 mb-1"></div>
              </li>
              <div className="hidden group-hover:block">
                <div
                  className={`absolute lg:top-7 top-0 z-20 left-28 w-[250px] shadow-lg bg-red-500/20 backdrop-blur-md grid grid-cols-1 opacity-0 group-hover:opacity-100 transition-all delay-700 duration-1000 
                  ${
                    item.children.length > 4
                      ? "lg:grid-cols-2 lg:w-[500px]"
                      : "grid-cols-1 lg:w-[250px]"
                  }
                 ${item.position === "6th" ? "lg:-left-[400px]" : "lg:left-0"}
                 ${item.position === "7th" ? "lastItem" : ""}
                `}
                >
                  {item.children?.map((child, index) => (
                    <ul key={index} className="px-2 py-1 w-full ">
                      <li className="px-2 py-2 rounded items">
                        <Link to={child.path}>{child.name}</Link>
                        <div className="link-line w-0 h-[3px] bg-green-600 transition-all duration-500"></div>
                      </li>
                    </ul>
                  ))}
                </div>
              </div>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
