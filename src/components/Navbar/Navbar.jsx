import React, { useContext } from "react";

import "./Navbar.css";
import Rocket from "../../assets/rocket.png";
import Star from "../../assets/glowing-star.png";
import idButton from "../../assets/id-button.png";
import Memo from "../../assets/memo.png";
import Order from "../../assets/package.png";
import Lock from "../../assets/locked.png";
import LinkWithIcon from "./LinkWithIcon";
import { NavLink } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import CartContext from "../../contexts/CartContext";

const Navbar = () => {
  const user = useContext(UserContext);
  const { cart } = useContext(CartContext);

  return (
    <nav className="align_center navbar">
      <div className="align_center">
        <h1 className="navbar_heading">Digital Candy</h1>
        <form action="" className="align_center navbar_form">
          <input
            type="text"
            className="navbar_search"
            placeholder="Search Products"
          />
          <button type="submit" className="search_button">
            Search
          </button>
        </form>
      </div>
      <div className="align_center navbar_links">
        <LinkWithIcon title="Home" link="/" emoji={Rocket} />
        <LinkWithIcon title="Products" link="/products" emoji={Star} />
        {!user && (
          <>
            <LinkWithIcon title="Login" link="/login" emoji={idButton} />
            <LinkWithIcon title="Sign Up" link="/signup" emoji={Memo} />
          </>
        )}
        {user && (
          <>
            <LinkWithIcon title="My Orders" link="/myorders" emoji={Order} />
            <LinkWithIcon title="Logout" link="/logout" emoji={Lock} />
            <NavLink to="/cart" className="align_center">
              Cart <p className="align_center cart_counts">{cart.length}</p>
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
