import React from "react";

const BlogCard = ({ image, title, description, author }) => {
  return (
    <div className="flex bg-white shadow-md rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-48 h-full object-cover" />
      <div className="flex flex-col justify-between p-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 mb-3">{description}</p>
          <div className="text-gray-800 text-sm">{author}</div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
