import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
const Navbar = () => {
  const navItems = [
    {
      name: "আমাদের সম্পর্কিত",
      path: "/",
    },

    {
      name: "অধীনস্থ দপ্তর/অফিস/সংস্থা",
      path: "/",
    },
    {
      name: "প্রকল্প/কর্মসূচি",
      path: "/",
    },
    {
      name: "গ্যালারি",
      path: "/",
    },
    {
      name: "আইন/নীতিমালা",
      path: "/",
      children: [
        {
          name: "গ্যালারি",
          path: "/",
        },
        {
          name: "গ্যালারি",
          path: "/",
        },
      ],
    },
    {
      name: "ই-সেবা",
      path: "/",
    },
    {
      name: "যোগাযোগ ও মতামত",
      path: "/",
    },
  ];

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navItems.map((item, index) => (
              <ul key={index}>
                <li>
                  <Link to={item.path}>{item.name}</Link>
                </li>
                {item.children?.map((child, index) => (
                  <ul key={index}>
                    <li>
                      <Link to={child.path}>{child.name}</Link>
                    </li>
                  </ul>
                ))}
              </ul>
            ))}
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
            <Link to={"/"} className="btn btn-ghost text-xl">
              <FaHome className="text-3xl" />
            </Link>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems.map((item, index) => (
            <ul key={index} className="group">
              <li>
                <Link to={item.path}>{item.name}</Link>
              </li>
              {item.children?.map((child, index) => (
                <ul key={index}>
                  <li className="hidden group-hover:block">
                    <Link to={child.path}>{child.name}</Link>
                  </li>
                </ul>
              ))}
            </ul>
          ))}
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
