import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../Images/logo.png";
import {
  faSearch,
  faHeart,
  faShoppingCart,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className=" flex items-center  space-x-20">
          {/* Logo Image */}
          <a href="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 mr-3" />
          </a>
          <button onClick={() => setIsOpen(!isOpen)} className=" md:hidden">
            <FontAwesomeIcon icon={faBars} />
          </button>
          <a href="#" className=" text-lg hidden md:block">
            Men
          </a>
          <a href="#" className=" text-lg hidden md:block">
            Women
          </a>
          <a href="#" className=" text-lg hidden md:block">
            Kids
          </a>
          <a href="#" className=" text-lg hidden md:block">
            Shop
          </a>
          <a href="#" className=" text-lg hidden md:block">
            contact us
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search here"
            className="px-4 py-2 hidden md:block"
          />
          <button className="">
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <button className="">
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <button className="">
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
          <span className="text-white text-lg">Anne Doe</span>
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col md:hidden">
          <a href="#" className=" text-lg">
            Men
          </a>
          <a href="#" className=" text-lg">
            Women
          </a>
          <a href="#" className=" text-lg">
            Kids
          </a>
          <a href="#" className=" text-lg">
            Shop
          </a>
          <a href="#" className=" text-lg">
            contact us
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
