import React, { useState, useEffect } from "react";
import image1 from "../Images/slider1.png";
import image2 from "../Images/slider2.png";
import image3 from "../Images/slider2.png";

const images = [
  {
    id: 1,
    src: image1,
    title: "Prada",
    subtitle: "Big Fashion Festival",
    discount: "50% - 80% off",
  },
  {
    id: 2,
    src: image2,
    title: "Prada",
    subtitle: "Summer Collection",
    discount: "Up to 70% off",
  },
  {
    id: 3,
    src: image3,
    title: "Prada",
    subtitle: "Summer Collection",
    discount: "Up to 70% off",
  },
  // Add more images as needed
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    }, 3000); // Changes slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden  h-700">
      {images.map((slide, index) => (
        <div
          className={
            index === current
              ? "slide active flex justify-center items-center"
              : "slide hidden"
          }
          key={slide.id}
          style={{ height: "80vh" }}
        >
          {index === current && (
            <div className="w-full h-500 relative">
              <img
                src={slide.src}
                alt="Fashion Banner"
                className="w-full h-500 object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
                <h2 className="text-4xl font-bold uppercase">{slide.title}</h2>
                <p className="text-xl">{slide.subtitle}</p>
                <p className="text-3xl font-semibold">{slide.discount}</p>
                <button className="mt-4 px-6 py-2 bg-white text-black uppercase text-sm tracking-widest">
                  Explore
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Slider;
