import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from "../Images/slider1.png"; // First image
import Slider2 from "../Images/slider2.png"; // Second image (background for text)

function CustomSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    adaptiveHeight: true,
  };

  return (
    <div className="container mx-auto px-4">
      <Slider {...settings}>
        <div className="flex flex-row w-full h-screen">
          {/* Image only section */}
          <div className="w-1/2 h-full">
            <img
              src={Slider1}
              alt="Fashion Image"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Text content on image section */}
          <div className="w-1/2 h-full relative">
            <img
              src={Slider2}
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 flex items-center justify-center p-8"
              style={{ background: "rgba(255, 255, 255, 0.5)" }}
            >
              <div className="text-center">
                <h2 className="text-3xl font-bold">PRADA</h2>
                <p className="text-xl mb-4">Big Fashion Festival</p>
                <p className="text-lg mb-4">50% - 80% off</p>
                <button className="px-6 py-2 border border-black rounded-md text-lg">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default CustomSlider;
