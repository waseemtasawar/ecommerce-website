// src/PromoSlider.js
import React from "react";
import Slider from "react-slick";
import PromoBanner from "./PromoBanner";
import brandLogo from "../Images/brandlogo.png";
import forever21 from "../Images/forever21.png";
import backgroun1 from "../Images/t10.png";
const promoData = [
  {
    id: 1,
    logo: forever21,
    background: backgroun1,
    title: "Big Fashion Festival",
    subtitle: "70% - 80% Off",
  },
  {
    id: 2,
    logo: brandLogo,
    background: backgroun1,
    title: "Summer Collection",
    subtitle: "Up to 50% Off",
  },
];

const PromoSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {promoData.map((promo) => (
        <PromoBanner
          key={promo.id}
          logo={promo.logo}
          background={promo.background}
          title={promo.title}
          subtitle={promo.subtitle}
        />
      ))}
    </Slider>
  );
};

export default PromoSlider;
