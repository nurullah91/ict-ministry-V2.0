import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";

import "./Hero.css";
import banner1 from "../assets/Banner-1.jpg";
import banner2 from "../assets/Banner-2.jpg";

const Hero: React.FC = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <img src={banner1} />
            <div className="w-full h-full absolute top-0 left-0 flex flex-col items-center justify-center hero-section">
              <h1 className="text-3xl font-bold text-white heroTitle ">
                তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ
              </h1>
              <h1 className="text-2xl font-semibold text-red-500 heroTitle">
                গণপ্রজাতন্ত্রী বাংলাদেশ সরকার
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={banner2} />
            <div className="w-full h-full absolute top-0 left-0 flex flex-col items-center justify-center hero-section">
              <h1 className="text-3xl font-bold text-white heroTitle ">
                তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ
              </h1>
              <h1 className="text-2xl font-semibold text-red-500 heroTitle">
                গণপ্রজাতন্ত্রী বাংলাদেশ সরকার
              </h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    // <div>
    //   <div className="hero-section h-[250px] py-5 text-red-500 text-center flex flex-col items-center justify-center">
    //     <h1 className="text-3xl font-bold">তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ</h1>
    //     <h1 className="text-2xl font-semibold">
    //       গণপ্রজাতন্ত্রী বাংলাদেশ সরকার
    //     </h1>
    //   </div>
    // </div>
  );
};

export default Hero;
