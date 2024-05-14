// src/AdCard.js
import React from "react";

const AdCard = ({ logo, offerText, buttonText, imageSrc, altText }) => {
  return (
    <div className="ad-card flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden m-2">
      <img src={imageSrc} alt={altText} className="w-full h-44 object-cover" />
      <div className="p-4 text-center">
        <img src={logo} alt="Logo" className="mx-auto mb-2 h-8" />
        <p className="text-sm font-semibold">{offerText}</p>
        <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 text-sm rounded">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default AdCard;
