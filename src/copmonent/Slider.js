// src/components/Slider.js
import React, { useState } from "react";
import slideImage1 from "../Images/slider1.png";
import slideImage2 from "../Images/slider2.png"; // Assuming you have more images

const slides = [[slideImage1, slideImage2]];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length); // Cycle through the slides
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length); // Cycle backwards
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="flex w-full h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="flex w-full h-full">
            {slide.map((image, idx) => (
              <img
                key={idx}
                src={image}
                alt={`Fashion Slide ${index} Image ${idx}`}
                className="w-1/2 h-full object-cover"
              />
            ))}
          </div>
        ))}
      </div>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-3 cursor-pointer z-20"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-3 cursor-pointer z-20"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Slider;
