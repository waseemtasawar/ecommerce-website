import React from "react";

const AdCard = ({ logo, offerText, buttonText, imageSrc, altText }) => {
  return (
    <div className="ad-card flex flex-row items-center bg-white rounded-lg shadow-md overflow-hidden my-4 mx-auto max-w-4xl">
      <div className="flex flex-col items-start p-6 text-left w-full md:w-2/5">
        <img src={logo} alt="Logo" className="mb-4 h-10" />
        <p className="text-lg font-semibold">{offerText}</p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 text-base rounded">
          {buttonText}
        </button>
      </div>
      <img
        src={imageSrc}
        alt={altText}
        className="w-full md:w-3/5 h-auto md:h-64 object-cover rounded-r-lg"
      />
    </div>
  );
};

export default AdCard;
