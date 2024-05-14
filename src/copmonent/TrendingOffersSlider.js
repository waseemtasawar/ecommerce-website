import React from "react";
import Slider from "react-slick";
import AdCard from "./AdCard";
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

const TrendingOffersSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed in milliseconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
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
    <div className="px-4 py-8">
      <h2 className="text-2xl font-bold my-4">Trending Offers</h2>
      <Slider {...settings}>
        <AdCard
          logo={forever21Logo}
          offerText="Min 50% off"
          buttonText="Explore"
          imageSrc={t1}
          altText="FOREVER 21 Ad"
        />
        <AdCard
          logo={levisLogo}
          offerText="Min 60% off"
          buttonText="Explore"
          imageSrc={t2}
          altText="Levi's Ad"
        />
        <AdCard
          logo={forever21Logo}
          offerText="Min 50% off"
          buttonText="Explore"
          imageSrc={t3}
          altText="FOREVER 21 Ad"
        />
        <AdCard
          logo={forever21Logo}
          offerText="Min 50% off"
          buttonText="Explore"
          imageSrc={t4}
          altText="FOREVER 21 Ad"
        />
        <AdCard
          logo={forever21Logo}
          offerText="Min 50% off"
          buttonText="Explore"
          imageSrc={t5}
          altText="FOREVER 21 Ad"
        />
        <AdCard
          logo={forever21Logo}
          offerText="Min 50% off"
          buttonText="Explore"
          imageSrc={t6}
          altText="FOREVER 21 Ad"
        />
        <AdCard
          logo={forever21Logo}
          offerText="Min 50% off"
          buttonText="Explore"
          imageSrc={t7}
          altText="FOREVER 21 Ad"
        />
        <AdCard
          logo={forever21Logo}
          offerText="Min 50% off"
          buttonText="Explore"
          imageSrc={t8}
          altText="FOREVER 21 Ad"
        />
      </Slider>
    </div>
  );
};

export default TrendingOffersSlider;
