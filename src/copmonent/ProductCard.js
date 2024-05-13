import React from "react";

const ProductCard = ({
  image,
  title,
  brand,
  price,
  originalPrice,
  discount,
}) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-md m-2">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="px-4 py-2 bg-white">
        <div className="font-bold text-sm mb-1">{title}</div>
        <p className="text-gray-800 text-xs">{brand}</p>
        <div className="flex justify-between items-center">
          <span className="text-blue-500 font-bold">{price}</span>
          <span className="text-gray-500 text-xs line-through">
            {originalPrice}
          </span>
        </div>
        <div className="text-xs text-green-600 font-bold">{discount}</div>
      </div>
    </div>
  );
};

export default ProductCard;
