import React from "react";
import storeImage from "../Images/about.png";
const AboutUs = () => {
  return (
    <div className="container mx-auto px-6 py-8 flex flex-wrap md:flex-nowrap">
      <div className="md:w-1/2 w-full md:pr-10">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <h3 className="text-xl mb-3">Business Name</h3>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel
          morbi cursus sed sodales molestie proin dictum gravida. Porttitor
          maecenas tincidunt ipsum semper malesuada. In sem fermentum ligula
          looaret convallis eu sed. Sapien et montes, duis tempor euismod augue
          cras eu eget.
        </p>
        <p className="mb-4">
          Risus suspendisse mauris ullamcorper felis a, quam. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Duis vel morbi cursus sed
          sodales molestie proin dictum gravida. Porttitor maecenas tincidunt
          ipsum semper malesuada.
        </p>
        <div className="mb-6">
          <h4 className="font-semibold mb-2">Contact Information</h4>
          <p>+91 1256837409</p>
          <p>Something@random.com</p>
        </div>
        <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition duration-300">
          Directions
        </button>
      </div>
      <div className="md:w-1/2 w-full">
        <img
          src={storeImage}
          alt="Store Interior"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default AboutUs;
