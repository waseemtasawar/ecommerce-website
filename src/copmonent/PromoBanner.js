import React from "react";

const PromoBanner = ({ logo, background, title, subtitle }) => {
  return (
    <div className="relative text-white">
      <img
        src={background}
        alt="Promo Banner"
        className="w-full h-auto object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <img src={logo} alt="Brand Logo" className="w-48 h-auto mb-4" />
        <p className="text-xl">{title}</p>
        <p className="text-lg">{subtitle}</p>
        <button className="mt-4 px-6 py-2 bg-purple-700 hover:bg-purple-800 rounded-lg transition duration-300">
          Explore
        </button>
      </div>
    </div>
  );
};

export default PromoBanner;
