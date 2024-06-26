import "./App.css";
import Navbar from "./copmonent/Navbar";
import Slider from "./copmonent/Slider";
import ProductSlider from "./copmonent/products";
import ProductSliderDeal from "./copmonent/ProductSliderDeal";
import TrendingOffersSlider from "./copmonent/TrendingOffersSlider";
import PromoSlider from "./copmonent/PromoSlider";
import CategoryGrid from "./copmonent/CategoryGrid";
import TestimonialsGrid from "./copmonent/TestimonialsGrid";
import FeaturedBlogs from "./copmonent/FeaturedBlogs";
import FeaturesGrid from "./copmonent/FeaturesGrid";
import AboutUs from "./copmonent/AboutUs";
import Footer from "./copmonent/Footer";
export default function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <ProductSlider />
      <ProductSliderDeal />
      <TrendingOffersSlider />
      <PromoSlider />
      <CategoryGrid />
      <TestimonialsGrid />
      <FeaturedBlogs />
      <FeaturesGrid />
      <AboutUs />
      <Footer />
    </>
  );
}
