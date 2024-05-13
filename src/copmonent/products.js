import React, { useState } from "react";
import ProductCard from "./ProductCard";
import t1 from "../Images/t1.png";
import t2 from "../Images/t2.png";
import t3 from "../Images/t3.png";
import t4 from "../Images/t4.png";

const products = [
  {
    id: 1,
    image: t1,
    title: "Womens Denim Jacket",
    brand: "Brand Name",
    price: "Rs. 700",
    originalPrice: "Rs. 1000",
    discount: "30% off",
  },
  {
    id: 2,
    image: t2,
    title: "Womens Denim Jacket",
    brand: "Brand Name",
    price: "Rs. 700",
    originalPrice: "Rs. 1000",
    discount: "30% off",
  },
  {
    id: 3,
    image: t3,
    title: "Womens Denim Jacket",
    brand: "Brand Name",
    price: "Rs. 700",
    originalPrice: "Rs. 1000",
    discount: "30% off",
  },
  {
    id: 4,
    image: t4,
    title: "Womens Denim Jacket",
    brand: "Brand Name",
    price: "Rs. 700",
    originalPrice: "Rs. 1000",
    discount: "30% off",
  },
];

const ProductSlider = () => {
  const [current, setCurrent] = useState(0);
  const visibleCount = 4; // Number of cards to show
  const totalSlides = Math.ceil(products.length / visibleCount);

  const nextSlide = () => {
    setCurrent(current === totalSlides - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? totalSlides - 1 : current - 1);
  };

  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {products.map((product, index) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
      <div className="flex justify-center p-4">
        {Array.from({ length: totalSlides }, (_, i) => (
          <button
            key={i}
            className={`h-2 w-2 mx-1 rounded-full ${
              i === current ? "bg-blue-600" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-4"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-4"
      >
        ›
      </button>
    </div>
  );
};

export default ProductSlider;
