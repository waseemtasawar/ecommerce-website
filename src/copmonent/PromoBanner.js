// src/PromoBanner.js
import React from "react";
import background from "../Images/t10.png";
import forever21Logo from "../Images/forever21.png";
const PromoBanner = () => {
  return (
    <div className="relative text-white">
      <img
        src={background}
        alt="Promo Banner"
        className="w-full h-auto object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <img
          src={forever21Logo}
          alt="Forever 21"
          className="w-48 h-auto mb-4 "
        />
        <p className="text-xl">Big Fashion Festival</p>
        <p className="text-lg">70% - 80% Off</p>
        <button className="mt-4 px-6 py-2 bg-purple-700 hover:bg-purple-800 rounded-lg transition duration-300">
          Explore
        </button>
      </div>
    </div>
  );
};

export default PromoBanner;
