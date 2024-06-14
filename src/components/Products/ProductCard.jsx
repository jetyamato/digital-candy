import React from "react";

import "./ProductCard.css";
import Star from "../../assets/white-star.png";
import Basket from "../../assets/basket.png";
import { NavLink } from "react-router-dom";

const ProductCard = ({
  id,
  image,
  images,
  price,
  title,
  description,
  rating,
  ratingCounts,
  stock,
}) => {
  return (
    <article className="product_card">
      <div className="product_image">
        <NavLink
          to={`/product/${id}`}
          id={id}
          images={images}
          price={price}
          title={title}
          description={description}
          stock={stock}
        >
          <img
            src={`http://localhost:5000/products/${image}`}
            alt="product image"
          />
        </NavLink>
      </div>
      <div className="product_details">
        <h3 className="product_price">${price}</h3>
        <p className="product_title">{title}</p>

        <footer className="align_center product_info_footer">
          <div className="align_center">
            <p className="align_center product_rating">
              <img src={Star} alt="star" /> {rating}
            </p>
            <p className="product_review_count">{ratingCounts}</p>
          </div>

          {stock > 0 && (
            <button className="add_to_cart">
              <img src={Basket} alt="basket button" />
            </button>
          )}
        </footer>
      </div>
    </article>
  );
};

export default ProductCard;
