import React, { useState } from "react";
import ProductCard from "./ProductCard";
import t1 from "../Images/t1.png";
import t2 from "../Images/t2.png";
import t3 from "../Images/t3.png";
import t4 from "../Images/t4.png";
import t5 from "../Images/t5.png";
import t6 from "../Images/t6.png";
import t7 from "../Images/t7.png";
import t8 from "../Images/t8.png";
import t9 from "../Images/t9.png";

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
  {
    id: 5,
    image: t5,
    title: "Womens Denim Jacket",
    brand: "Brand Name",
    price: "Rs. 700",
    originalPrice: "Rs. 1000",
    discount: "30% off",
  },
  {
    id: 6,
    image: t6,
    title: "Womens Denim Jacket",
    brand: "Brand Name",
    price: "Rs. 700",
    originalPrice: "Rs. 1000",
    discount: "30% off",
  },
  {
    id: 7,
    image: t7,
    title: "Womens Denim Jacket",
    brand: "Brand Name",
    price: "Rs. 700",
    originalPrice: "Rs. 1000",
    discount: "30% off",
  },
  {
    id: 8,
    image: t8,
    title: "Womens Denim Jacket",
    brand: "Brand Name",
    price: "Rs. 700",
    originalPrice: "Rs. 1000",
    discount: "30% off",
  },
  {
    id: 9,
    image: t9,
    title: "Womens Denim Jacket",
    brand: "Brand Name",
    price: "Rs. 700",
    originalPrice: "Rs. 1000",
    discount: "30% off",
  },
];

const ProductSlider = () => {
  const [current, setCurrent] = useState(0);
  const visibleCount = 5; // Show five products per slide
  const totalSlides = Math.ceil(products.length / visibleCount);

  const nextSlide = () => {
    setCurrent(current === totalSlides - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? totalSlides - 1 : current - 1);
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <div className="self-start text-2xl font-semibold mb-4">Trending Now</div>
      <div className="relative w-full">
        <div className="flex overflow-hidden">
          <div
            className="flex transition-transform duration-300"
            style={{
              transform: `translateX(-${(current * 100) / totalSlides}%)`,
              width: `${totalSlides * 100}%`,
            }}
          >
            {products.map((product, index) => (
              <div
                key={product.id}
                style={{ width: `calc(100% / ${visibleCount})` }}
                className="inline-block"
              >
                <ProductCard {...product} />
              </div>
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
    </div>
  );
};

export default ProductSlider;
