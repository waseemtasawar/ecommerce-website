import React from "react";

const ProductCardDeal = ({ image, title, priceLabel, price, logo }) => {
  return (
    <div className="p-4 rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4 text-center">
        <img src={logo} alt="Brand Logo" className="mx-auto h-6 mb-2" />
        <div className="text-lg font-bold">{title}</div>
        <div className="text-sm">
          {priceLabel} {price}
        </div>
      </div>
    </div>
  );
};

export default ProductCardDeal;
