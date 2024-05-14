import Slider from "react-slick";
import ProductCardDeal from "./ProductCardDeal";
import brandLogo from "../Images/brandlogo.png";
import t1 from "../Images/t1.png";
import t2 from "../Images/t2.png";
import t3 from "../Images/t3.png";
import t4 from "../Images/t4.png";
import t5 from "../Images/t5.png";
import t6 from "../Images/t6.png";
import t7 from "../Images/t7.png";
import t8 from "../Images/t8.png";
import t9 from "../Images/t9.png";
const ProductSliderDeal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold my-4">Deals of the Day</h2>
      <Slider {...settings}>
        <ProductCardDeal
          imageSrc={t1}
          title="Best of Styles"
          price="Under Rs.799"
          logoSrc={brandLogo}
        />
        <ProductCardDeal
          imageSrc={t2}
          title="Casual Tees"
          price="Under Rs.499"
          logoSrc={brandLogo}
        />
        <ProductCardDeal
          imageSrc={t3}
          title="Formal Wear"
          price="Under Rs.999"
          logoSrc={brandLogo}
        />
        <ProductCardDeal
          imageSrc={t4}
          title="Winter Collection"
          price="Under Rs.1299"
          logoSrc={brandLogo}
        />
        <ProductCardDeal
          imageSrc={t5}
          title="Winter Collection"
          price="Under Rs.1299"
          logoSrc={brandLogo}
        />
        <ProductCardDeal
          imageSrc={t6}
          title="Winter Collection"
          price="Under Rs.1299"
          logoSrc={brandLogo}
        />
        <ProductCardDeal
          imageSrc={t7}
          title="Winter Collection"
          price="Under Rs.1299"
          logoSrc={brandLogo}
        />
        <ProductCardDeal
          imageSrc={t8}
          title="Winter Collection"
          price="Under Rs.1299"
          logoSrc={brandLogo}
        />
        <ProductCardDeal
          imageSrc={t9}
          title="Winter Collection"
          price="Under Rs.1299"
          logoSrc={brandLogo}
        />
      </Slider>
    </div>
  );
};

export default ProductSliderDeal;
