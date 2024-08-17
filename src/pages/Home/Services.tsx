import React from "react";
import { ServiceData } from "./ServiceData";
import { Link } from "react-router-dom";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
const Services: React.FC = () => {
  return (
    <section className="my-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ServiceData?.map((item, index) => (
          <div
            key={index}
            data-aos={index % 2 === 1 ? "fade-up-right" : "fade-up-left"}
            data-aos-duration="1000"
            className=" rounded border-2 border-green-300 hover:border-red-500 transition-all duration-500 py-4 shadow-lg relative overflow-hidden group"
          >
            <img
              src={item.image}
              alt="icon"
              className="w-28 mx-auto group-hover:scale-125 group-hover:rotate-2 duration-500 transition-all"
            />

            <div className="z-10">
              <div className="px-4 py-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-red-500">
                  {item.title}
                </h3>
                {item.serviceItems?.map((sItem, sIndex) => (
                  <div
                    key={sIndex}
                    className="flex items-center gap-2 hover:underline hover:text-red-500  text-green-900"
                  >
                    <FaArrowRightFromBracket />

                    <Link to={sItem.path}>{sItem.name}</Link>
                  </div>
                ))}
              </div>
              <div className="w-full h-full bg-gradient-to-br from-green-200 via-green-200 to-red-200 absolute top-20 -z-10"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
