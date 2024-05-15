// src/CategoryGrid.js
import React from "react";
import t1 from "../Images/t1.png";
import t5 from "../Images/t5.png";
import t11 from "../Images/t11.png";
import t12 from "../Images/t12.png";
import t13 from "../Images/t13.png";
import t14 from "../Images/t14.png";

const CategoryGrid = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-6">
        Shop by Categories
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {/* Column 1 */}
        <img
          src={t14}
          alt="Large Category"
          className="col-span-1 w-full h-auto object-cover rounded-lg shadow-md"
        />

        {/* Column 2 */}
        <div className="col-span-1 flex flex-col gap-4">
          <img
            src={t5}
            alt="Mid Category 1"
            className="w-full h-53 object-cover rounded-lg"
          />
          <img
            src={t11}
            alt="Mid Category 2"
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>

        {/* Column 3 */}
        <div className="col-span-1 flex flex-col gap-4">
          <img
            src={t13}
            alt="Small Category 1"
            className="w-full h-55 object-cover rounded-lg"
          />
          <div className="grid grid-cols-2 gap-4">
            <img
              src={t12}
              alt="Small Category 2"
              className="w-full h-65 object-cover rounded-lg"
            />
            <img
              src={t1}
              alt="Small Category 3"
              className="w-full h-85 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryGrid;
