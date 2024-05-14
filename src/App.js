import "./App.css";
import Navbar from "./copmonent/Navbar";
import Slider from "./copmonent/Slider";
import ProductSlider from "./copmonent/products";
import ProductSliderDeal from "./copmonent/ProductSliderDeal";
import TrendingOffersSlider from "./copmonent/TrendingOffersSlider";
import PromoBanner from "./copmonent/PromoBanner";
export default function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <ProductSlider />
      <ProductSliderDeal />
      <TrendingOffersSlider />
      <PromoBanner />
    </>
  );
}
