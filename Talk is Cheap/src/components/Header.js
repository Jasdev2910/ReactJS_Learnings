import Logo from "../assets/logo.png";
import CartImg from "../assets/cart.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <nav className="nav-bar">
      <Link to="/">
        <img src={Logo} alt="logo"></img>
      </Link>
      <h1>Food Hub</h1>
      <ul>
        <li>
          <Link to="/offers">Offers</Link>
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
