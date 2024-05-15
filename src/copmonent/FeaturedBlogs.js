import React from "react";
import Slider from "react-slick";
import BlogCard from "./BlogCard";
import BlogPick from "../Images/blogpic.png";
// Dummy data for blogs, replace with actual data or fetch from an API
const blogs = [
  {
    id: 1,
    image: BlogPick,
    title: "Discover new ways to decorate your home.",
    description: "Lorem ipsum dolor sit amet...",
    author: "By Souha H.",
  },
  {
    id: 2,
    image: BlogPick,
    title: "Discover new ways to decorate your home.",
    description: "Lorem ipsum dolor sit amet...",
    author: "By Souha H.",
  },
  {
    id: 3,
    image: BlogPick,
    title: "Discover new ways to decorate your home.",
    description: "Lorem ipsum dolor sit amet...",
    author: "By Souha H.",
  },
];

const FeaturedBlogs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true,
    cssEase: "linear",
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Featured Blogs</h2>
      <Slider {...settings}>
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedBlogs;
