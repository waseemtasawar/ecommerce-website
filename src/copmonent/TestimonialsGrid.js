import Slider from "react-slick";
import React from "react";
import TestimonialCard from "./TestimonialCard";
import User from "../Images/user.png";
const testimonials = [
  {
    id: 1,
    image: User,
    name: "User 1",
    rating: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel...",
  },
  {
    id: 2,
    image: User,
    name: "User 2",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel...",
  },
  {
    id: 3,
    image: User,
    name: "User 3",
    rating: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel...",
  },
];

const TestimonialsGrid = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: true,
    centerPadding: "0px", // Adjust padding as needed
    responsive: [
      {
        breakpoint: 1024, // Adjust these breakpoints as needed
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          What Our Customer Says
        </h2>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialsGrid;
