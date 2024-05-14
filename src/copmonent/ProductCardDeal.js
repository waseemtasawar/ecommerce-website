import React from "react";

const ProductCardDeal = ({ imageSrc, title, price, logoSrc }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={imageSrc} alt={title} className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{price}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <img src={logoSrc} alt="Brand Logo" className="mx-auto h-10" />
      </div>
    </div>
  );
};

export default ProductCardDeal;
