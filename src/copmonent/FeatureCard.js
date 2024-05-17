import React from "react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow">
      <img src={icon} alt={title} className="mb-2 w-10 h-10" />
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-center">{description}</p>
    </div>
  );
};

export default FeatureCard;
