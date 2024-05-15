import React from "react";

const TestimonialCard = ({ image, name, rating, text }) => {
  return (
    <div className="testimonial-card max-w-md mx-auto rounded overflow-hidden shadow-lg bg-white p-6">
      <div className="flex items-center space-x-4">
        <img className="w-16 h-16 rounded-full" src={image} alt={name} />
        <div>
          <div className="text-lg font-semibold text-gray-900">{name}</div>
          <div className="text-yellow-500 text-xl">
            {Array(rating).fill("★").join("")}
          </div>
        </div>
      </div>
      <p className="mt-6 text-gray-600 text-md">{text}</p>
    </div>
  );
};

export default TestimonialCard;
