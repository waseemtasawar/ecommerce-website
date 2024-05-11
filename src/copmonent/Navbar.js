// src/components/Navbar.js
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <div className="flex space-x-4">
            <div>
              <a href="#" className="text-xl font-semibold">
                Fashion Store
              </a>
            </div>
            <div className="hidden md:flex space-x-4">
              <a
                href="#"
                className="text-base font-medium hover:text-indigo-600 transition duration-150"
              >
                Men
              </a>
              <a
                href="#"
                className="text-base font-medium hover:text-indigo-600 transition duration-150"
              >
                Women
              </a>
              <a
                href="#"
                className="text-base font-medium hover:text-indigo-600 transition duration-150"
              >
                Kids
              </a>
              <a
                href="#"
                className="text-base font-medium hover:text-indigo-600 transition duration-150"
              >
                Shop
              </a>
              <a
                href="#"
                className="text-base font-medium hover:text-indigo-600 transition duration-150"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div>
              <input
                type="text"
                placeholder="Search here"
                className="px-4 py-2 border rounded-md"
              />
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 rounded-full hover:bg-gray-200">
                <span>🔍</span>
              </button>
              <button className="p-2 rounded-full hover:bg-gray-200">
                <span>❤️</span>
              </button>
              <button className="p-2 rounded-full hover:bg-gray-200">
                <span>🛒</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
