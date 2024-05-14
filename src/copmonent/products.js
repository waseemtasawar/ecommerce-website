import React from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import t1 from "../Images/t1.png";
import t2 from "../Images/t2.png";
import t3 from "../Images/t3.png";
import t4 from "../Images/t4.png";
import t5 from "../Images/t5.png";
import t6 from "../Images/t6.png";
import t7 from "../Images/t7.png";

const ProductSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 my-8">
      <h2 className="text-2xl font-bold mb-4">Trending Now</h2>
      <Slider {...settings}>
        <ProductCard
          imageUrl={t1}
          productName="Womens Denim Jacket"
          brandName="Brand Name"
          rating="4.4"
          originalPrice="1090"
          discountedPrice="700"
        />
        <ProductCard
          imageUrl={t2}
          productName="Womens Denim Jacket"
          brandName="Brand Name"
          rating="4.4"
          originalPrice="1090"
          discountedPrice="700"
        />
        <ProductCard
          imageUrl={t3}
          productName="Womens Denim Jacket"
          brandName="Brand Name"
          rating="4.4"
          originalPrice="1090"
          discountedPrice="700"
        />
        <ProductCard
          imageUrl={t4}
          productName="Womens Denim Jacket"
          brandName="Brand Name"
          rating="4.4"
          originalPrice="1090"
          discountedPrice="700"
        />
        <ProductCard
          imageUrl={t5}
          productName="Womens Denim Jacket"
          brandName="Brand Name"
          rating="4.4"
          originalPrice="1090"
          discountedPrice="700"
        />
        <ProductCard
          imageUrl={t6}
          productName="Womens Denim Jacket"
          brandName="Brand Name"
          rating="4.4"
          originalPrice="1090"
          discountedPrice="700"
        />
        <ProductCard
          imageUrl={t7}
          productName="Womens Denim Jacket"
          brandName="Brand Name"
          rating="4.4"
          originalPrice="1090"
          discountedPrice="700"
        />
      </Slider>
    </div>
  );
};

export default ProductSlider;
