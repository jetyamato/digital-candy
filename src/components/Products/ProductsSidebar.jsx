import React from "react";

import "./ProductsSidebar.css";
import LinkWithIcon from "../Navbar/LinkWithIcon";
import Rocket from "../../assets/rocket.png";

const ProductsSidebar = () => {
  return (
    <aside className="products_sidebar">
      <h2>Category</h2>

      <div className="category_links">
        <LinkWithIcon
          title="Electronics"
          link="products?category=electronics"
          emoji={Rocket}
          sidebar={true}
        />
      </div>
    </aside>
  );
};

export default ProductsSidebar;
