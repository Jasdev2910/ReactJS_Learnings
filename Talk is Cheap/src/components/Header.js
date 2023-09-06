import Logo from "../assets/logo.png";
import CartImg from "../assets/cart.png";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <nav className="nav-bar">
      <NavLink to="/">
        <img src={Logo} alt="logo"></img>
      </NavLink>
      <h1>Food Hub</h1>
      <ul>
        <li>
          <NavLink to="/offers">Offers</NavLink>
        </li>
        <li
          onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}
        >
          {btnName}
        </li>
        <li>
          <Link to="/help">Help</Link>
        </li>
        <img className="cart-img" alt="cart-logo" src={CartImg} />
      </ul>
    </nav>
  );
};

export default Header;
