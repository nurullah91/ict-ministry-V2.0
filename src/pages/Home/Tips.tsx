import React from "react";

const Tips: React.FC = () => {
  return (
    <div>
      <iframe
        width="100%"
        height="500"
        src="https://www.youtube.com/embed/GT9ShGE_qjg?si=h22EpPGnZ2gaAzb0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div className="my-6">
        <h2 className="sidebarTitle mb-2 rounded">লাইভ লোকেশন</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29219.966539753015!2d90.3707564743164!3d23.72969230000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8f721852eb5%3A0x63e828b6cf2eff1e!2sMinistry%20of%20Information!5e0!3m2!1sen!2sbd!4v1723771440827!5m2!1sen!2sbd"
          width="100%"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Tips;
