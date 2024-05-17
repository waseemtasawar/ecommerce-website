// src/components/FeaturesGrid.js
import React from "react";
import FeatureCard from "./FeatureCard";
import Locally from "../Images/1st.png";
import Delivery from "../Images/2nd.png";
import Return from "../Images/3rd.png";
import Support from "../Images/4th.png";
import Offers from "../Images/5th.png";
const features = [
  {
    id: 1,
    icon: Locally,
    title: "Locally Owned",
    description: "We have local business and sell best quality clothes",
  },
  {
    id: 2,
    icon: Offers,
    title: "Fast Delivery",
    description: "We provide fast delivery to our customers",
  },
  {
    id: 3,
    icon: Delivery,
    title: "Easy Return",
    description: "We provide easy return policy.",
  },
  {
    id: 4,
    icon: Return,
    title: "Online Support",
    description: "We give 24/7 online support",
  },
  {
    id: 5,
    icon: Support,
    title: "Best Offers",
    description: "We give best offers to our customers",
  },
];

const FeaturesGrid = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="grid grid-cols-5 gap-4">
        {features.map((feature) => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default FeaturesGrid;
