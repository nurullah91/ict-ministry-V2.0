import React from "react";
import footerImg from "../../assets/footer_top_bg.png";
import developers from "../../assets/np-logo-set.png";
const Footer: React.FC = () => {
  return (
    <div>
      <img src={footerImg} alt="Footer Img" className="w-full" />
      <div className="flex flex-col md:flex-row gap-6 justify-between items-end mb-4">
        {/* first column */}
        <div className="flex gap-2 flex-wrap">
          <button className="py-1 px-2 border-r-2 hover:bg-gray-300">
            সাইটম্যাপ
          </button>
          <button className="py-1 px-2 border-r-2 hover:bg-gray-300">
            গোপনীয়তার নীতিমালা
          </button>
          <button className="py-1 px-2 border-r-2 hover:bg-gray-300">
            যোগাযোগ
          </button>
          <button className="py-1 px-2 border-r-2 hover:bg-gray-300">
            সচরাচর জিজ্ঞাসা
          </button>
          <button className="py-1 px-2 hover:bg-gray-300">
            ব্যবহারের শর্তাবলি
          </button>
        </div>
        {/* second column */}
        <div>
          <p className="text-xs mt-3">
            পরিকল্পনা ও বাস্তবায়নে: মন্ত্রিপরিষদ বিভাগ, এটুআই, বিসিসি,
            ডিওআইসিটি ও বেসিস।
          </p>

          <div className="flex gap-2 items-end mt-6">
            <span className="text-xs">কারিগরি সহায়তায়:</span>
            <img src={developers} alt="Developer Team" />
          </div>
        </div>
      </div>
      <small className="text-xs">
        সাইটটি শেষ হাল-নাগাদ করা হয়েছে: ২০২৪-০৮-১৬ ১২:৩৮:৫০
      </small>
      <p className="text-xs text-center my-4">
        Designed by~ MD Nurullah Bhuiyan(MERN stack Developer)
      </p>
    </div>
  );
};

export default Footer;
