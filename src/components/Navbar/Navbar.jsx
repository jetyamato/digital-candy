import React, { useContext, useEffect, useState } from "react";

import "./Navbar.css";
import Rocket from "../../assets/rocket.png";
import Star from "../../assets/glowing-star.png";
import idButton from "../../assets/id-button.png";
import Memo from "../../assets/memo.png";
import Order from "../../assets/package.png";
import Lock from "../../assets/locked.png";
import LinkWithIcon from "./LinkWithIcon";
import { Link, NavLink, useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import CartContext from "../../contexts/CartContext";
import { getSuggestionsAPI } from "../../services/productServices";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedItem, setSelectedItem] = useState(-1);

  const navigate = useNavigate();

  const user = useContext(UserContext);
  const { cart } = useContext(CartContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (search.trim() !== "") {
      navigate(`/products?search=${search.trim()}`);
    }

    setSuggestions([]);
  };

  const handleKeyDown = (e) => {
    if (selectedItem < suggestions.length) {
      if (e.key === "ArrowDown") {
        setSelectedItem((current) =>
          current === suggestions.length - 1 ? 0 : current + 1
        );
      } else if (e.key === "ArrowUp") {
        setSelectedItem((current) =>
          current === 0 ? suggestions.length - 1 : current - 1
        );
      } else if (e.key === "Enter" && selectedItem > -1) {
        const suggestion = suggestions[selectedItem];
        navigate(`/products?search=${suggestion.title}`);
        setSearch("");
        setSuggestions([]);
      }
    } else {
      setSelectedItem(-1);
    }
  };

  useEffect(() => {
    if (search.trim() !== "") {
      getSuggestionsAPI(search)
        .then((res) => setSuggestions(res.data))
        .catch((err) => console.log(err));
    } else {
      setSuggestions([]);
    }
  }, [search]);

  return (
    <nav className="align_center navbar">
      <div className="align_center">
        <h1 className="navbar_heading">Digital Candy</h1>
        <form
          action=""
          className="align_center navbar_form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="navbar_search"
            placeholder="Search Products"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button type="submit" className="search_button">
            Search
          </button>

          {suggestions.length > 0 && (
            <ul className="search_result">
              {suggestions.map((suggestion, index) => (
                <li
                  className={
                    selectedItem === index
                      ? "search_suggestion_link active"
                      : "search_suggestion_link"
                  }
                  key={suggestion._id}
                >
                  <Link
                    to={`/products?search=${suggestion.title}`}
                    onClick={() => {
                      setSearch("");
                      setSuggestions([]);
                    }}
                  >
                    {suggestion.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
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
