import React from "react";

import "./ProductCard.css";
import Iphone from "../../assets/iphone.jpg";
import Star from "../../assets/white-star.png";
import Basket from "../../assets/basket.png";

const ProductCard = () => {
  return (
    <article className="product_card">
      <div className="product_image">
        <a href="product/1">
          <img src={Iphone} alt="product image" />
        </a>
      </div>
      <div className="product_details">
        <h3 className="product_price">$999</h3>
        <p className="product_title">iPhone 14 Pro</p>

        <footer className="align_center product_info_footer">
          <div className="align_center">
            <p className="align_center product_rating">
              <img src={Star} alt="star" /> 5.0
            </p>
            <p className="product_review_count">120</p>
          </div>

          <button className="add_to_cart">
            <img src={Basket} alt="basket button" />
          </button>
        </footer>
      </div>
    </article>
  );
};

export default ProductCard;
