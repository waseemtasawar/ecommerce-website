import "./App.css";
import Navbar from "./copmonent/Navbar";
import Slider from "./copmonent/Slider";
import ProductSlider from "./copmonent/products";
import ProductSliderDeal from "./copmonent/ProductSliderDeal";
import TrendingOffersSlider from "./copmonent/TrendingOffersSlider";
import PromoBanner from "./copmonent/PromoBanner";
import CategoryGrid from "./copmonent/CategoryGrid";
export default function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <ProductSlider />
      <ProductSliderDeal />
      <TrendingOffersSlider />
      <PromoBanner />
      <CategoryGrid />
    </>
  );
}
