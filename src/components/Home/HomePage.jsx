import React from "react";

import Iphone from "../../assets/iphone-14-pro.webp";
import Mac from "../../assets/mac-system-cut.jfif";

import HeroSection from "./HeroSection";
import FeaturedProducts from "./FeaturedProducts";

const HomePage = () => {
  return (
    <div>
      <HeroSection
        title="Buy iPhone 14 Pro"
        subtitle="Experience the power of the latest iPhone 14 with our most Pro camera ever."
        link="/product/66bff2ad9622ae44a1331052"
        image={Iphone}
      />
      <FeaturedProducts />
      <HeroSection
        title="Build the Ultimate Setup"
        subtitle="You can add Studio Display and color-matched Magic Accessories to your bag after you configure your Mac Mini."
        link="/product/66bff2ad9622ae44a133105a"
        image={Mac}
      />
    </div>
  );
};

export default HomePage;
