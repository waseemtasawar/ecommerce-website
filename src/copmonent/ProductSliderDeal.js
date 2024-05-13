import React, { useState } from "react";
import ProductCardDeal from "./ProductCardDeal";
import brandLogo from "../Images/brandlogo.png";
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
    title: "Best of Styles",
    priceLabel: "Under",
    price: "Rs.799",
    logo: brandLogo,
  },
  {
    id: 2,
    image: t2,
    title: "Best of Styles",
    priceLabel: "Under",
    price: "Rs.799",
    logo: brandLogo,
  },
  {
    id: 3,
    image: t3,
    title: "Best of Styles",
    priceLabel: "Under",
    price: "Rs.799",
    logo: brandLogo,
  },
  {
    id: 4,
    image: t4,
    title: "Best of Styles",
    priceLabel: "Under",
    price: "Rs.799",
    logo: brandLogo,
  },
  {
    id: 5,
    image: t5,
    title: "Best of Styles",
    priceLabel: "Under",
    price: "Rs.799",
    logo: brandLogo,
  },
  {
    id: 6,
    image: t6,
    title: "Best of Styles",
    priceLabel: "Under",
    price: "Rs.799",
    logo: brandLogo,
  },
  {
    id: 7,
    image: t7,
    title: "Best of Styles",
    priceLabel: "Under",
    price: "Rs.799",
    logo: brandLogo,
  },
  {
    id: 8,
    image: t8,
    title: "Best of Styles",
    priceLabel: "Under",
    price: "Rs.799",
    logo: brandLogo,
  },
  {
    id: 9,
    image: t9,
    title: "Best of Styles",
    priceLabel: "Under",
    price: "Rs.799",
    logo: brandLogo,
  },
];

const ProductSliderDeal = () => {
  const [current, setCurrent] = useState(0);
  const visibleCount = 5;
  const totalSlides = Math.ceil(products.length / visibleCount);

  const nextSlide = () => {
    setCurrent(current === totalSlides - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? totalSlides - 1 : current - 1);
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <div className="self-start text-2xl font-semibold mb-4">
        Deals of the Day
      </div>
      <div className="relative w-full">
        <div className="flex overflow-hidden">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {Array.from({ length: totalSlides }, (_, index) => (
              <div key={index} className="flex w-full">
                {products
                  .slice(index * visibleCount, (index + 1) * visibleCount)
                  .map((product) => (
                    <ProductCardDeal key={product.id} {...product} />
                  ))}
              </div>
            ))}
          </div>
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

export default ProductSliderDeal;
