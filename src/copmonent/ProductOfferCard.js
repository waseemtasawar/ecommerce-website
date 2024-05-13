import React from "react";

const ProductOfferCard = ({ image, logo, discountText, link }) => {
  return (
    <div className="flex w-full mb-4 rounded-lg overflow-hidden shadow-lg">
      <div className="flex flex-col justify-center bg-white p-4">
        <img src={logo} alt="Brand Logo" className="mb-2 h-10 md:h-12" />
        <p className="text-gray-800 text-md md:text-lg font-bold mb-2">
          {discountText}
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md font-semibold">
          {link}
        </button>
      </div>
      <img
        src={image}
        alt="Offer background"
        className="w-48 h-full object-cover"
      />
    </div>
  );
};

export default ProductOfferCard;
