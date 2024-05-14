// src/ProductCard.js
import React from "react";

const ProductCard = ({
  imageUrl,
  productName,
  brandName,
  rating,
  originalPrice,
  discountedPrice,
}) => {
  const calculateDiscount = (originalPrice, discountedPrice) => {
    return Math.round((1 - discountedPrice / originalPrice) * 100);
  };

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <img src={imageUrl} alt={productName} className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{productName}</div>
        <p className="text-gray-700 text-base mb-1">{brandName}</p>
        <p className="text-gray-600 text-sm">{rating} ★</p>
        <div className="text-lg">
          <span className="text-green-600">Rs.{discountedPrice}</span>
          <span className="text-red-500 line-through ml-2">
            Rs.{originalPrice}
          </span>
        </div>
        <p className="text-green-500 text-sm">
          ({calculateDiscount(originalPrice, discountedPrice)}% off)
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
