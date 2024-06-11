import React from "react";

import Iphone from "../../assets/iphone-14-pro.webp";
import Mac from "../../assets/mac-system-cut.jfif";

import HeroSection from "./HeroSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection
        title="Buy iPhone 14 Pro"
        subtitle="Experience the power of the latest iPhone 14 with our most Pro camera ever."
        link="/"
        image={Iphone}
      />
      {/* Featured Section */}
      <HeroSection
        title="Build the Ultimate Setup"
        subtitle="You can add Studio Display and color-matched Magic Accessories to your bag after you configure your Mac Mini."
        link="/"
        image={Mac}
      />
    </div>
  );
};

export default HomePage;
