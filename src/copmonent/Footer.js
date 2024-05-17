import React from "react";
import logoImage from "../Images/footer-logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-6 grid grid-cols-6 gap-4">
        {/* Logo */}
        <div className="col-span-1 flex items-center">
          <img src={logoImage} alt="Globex" className="h-12 w-auto" />
        </div>

        {/* Columns for Links */}
        <div className="col-span-1">
          <h5 className="font-bold mb-2">Women</h5>
          <ul>
            <li>All Women</li>
            <li>Skirts</li>
            <li>T-Shirts</li>
            <li>Tops</li>
            <li>Jackets</li>
          </ul>
        </div>

        <div className="col-span-1">
          <h5 className="font-bold mb-2">Men</h5>
          <ul>
            <li>All Men</li>
            <li>Shirts</li>
            <li>T-Shirts</li>
            <li>Shorts</li>
            <li>Jackets</li>
          </ul>
        </div>

        <div className="col-span-1">
          <h5 className="font-bold mb-2">Kids</h5>
          <ul>
            <li>All Kids</li>
            <li>Shirts</li>
            <li>T-Shirts</li>
            <li>Shorts</li>
            <li>Jackets</li>
          </ul>
        </div>

        <div className="col-span-1">
          <h5 className="font-bold mb-2">Shopping</h5>
          <ul>
            <li>Your cart</li>
            <li>Your orders</li>
            <li>Compared items</li>
            <li>Wishlist</li>
            <li>Shipping Details</li>
          </ul>
        </div>

        <div className="col-span-1">
          <h5 className="font-bold mb-2">More Links</h5>
          <ul>
            <li>Blogs</li>
            <li>Gift center</li>
            <li>Buying guides</li>
            <li>New arrivals</li>
            <li>Clearance</li>
          </ul>
        </div>

        {/* Stay In Touch Section */}
        <div className="col-span-6 mt-4">
          <h5 className="font-bold mb-2">Stay In Touch</h5>
          <p>
            Stay in touch to get special offers, free giveaways, and once in a
            lifetime deals.
          </p>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 mr-2 flex-grow"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-4 border-t border-gray-700 pt-4">
        <div className="flex justify-between items-center">
          <span>© 2023 Globex Corporation. All rights reserved.</span>
          <div>
            <a href="#">Terms & Conditions</a>
            <a href="#" className="ml-4">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
