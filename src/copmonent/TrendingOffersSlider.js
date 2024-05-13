import React, { useState } from "react";
import ProductOfferCard from "./ProductOfferCard";
import levisLogo from "../Images/brandlogo.png";
import forever21Logo from "../Images/forever21.png";
import t1 from "../Images/t1.png";
import t2 from "../Images/t2.png";
import t3 from "../Images/t3.png";
import t4 from "../Images/t4.png";
import t5 from "../Images/t5.png";
import t6 from "../Images/t6.png";
import t7 from "../Images/t7.png";
import t8 from "../Images/t8.png";

const offers = [
  {
    id: 1,
    image: t1,
    logo: levisLogo,
    discountText: "Min 60% off",
    link: "Explore",
  },
  {
    id: 2,
    image: t2,
    logo: forever21Logo,
    discountText: "Min 50% off",
    link: "Explore",
  },
  {
    id: 3,
    image: t3,
    logo: forever21Logo,
    discountText: "Min 50% off",
    link: "Explore",
  },
  {
    id: 4,
    image: t4,
    logo: forever21Logo,
    discountText: "Min 50% off",
    link: "Explore",
  },
  {
    id: 5,
    image: t5,
    logo: forever21Logo,
    discountText: "Min 50% off",
    link: "Explore",
  },
  {
    id: 6,
    image: t6,
    logo: forever21Logo,
    discountText: "Min 50% off",
    link: "Explore",
  },
  {
    id: 7,
    image: t7,
    logo: forever21Logo,
    discountText: "Min 50% off",
    link: "Explore",
  },
  {
    id: 8,
    image: t8,
    logo: forever21Logo,
    discountText: "Min 50% off",
    link: "Explore",
  },
];

const TrendingOffersSlider = () => {
  const [current, setCurrent] = useState(0);
  const totalOffers = offers.length;

  const nextSlide = () => {
    setCurrent(current === totalOffers - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? totalOffers - 1 : current - 1);
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-2xl font-semibold mb-4">Trending Offers</h2>
      <div className="relative w-full">
        <button
          onClick={prevSlide}
          className="absolute left-0 z-20 p-4 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg"
        >
          ‹
        </button>
        <div className="flex overflow-hidden relative">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {offers.map((offer) => (
              <div key={offer.id} className="w-full flex-shrink-0">
                <ProductOfferCard {...offer} />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={nextSlide}
          className="absolute right-0 z-20 p-4 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default TrendingOffersSlider;
