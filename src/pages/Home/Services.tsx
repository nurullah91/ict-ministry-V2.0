import React from "react";
import { ServiceData } from "./ServiceData";
import { Link } from "react-router-dom";
import { FaArrowRightFromBracket } from "react-icons/fa6";

const Services: React.FC = () => {
  return (
    <section className="my-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ServiceData?.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-green-200 via-green-200 to-red-200 px-4 py-6 rounded shadow-lg"
          >
            <img src={item.image} alt="icon" className="w-28" />
            <h3 className="text-xl font-semibold">{item.title}</h3>

            <div className="mt-2">
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
