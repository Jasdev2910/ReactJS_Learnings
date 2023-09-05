import Logo from "../assets/logo.png";
import CartImg from "../assets/cart.png";
import { useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <nav className="nav-bar">
      <img src={Logo} alt="logo"></img>
      <h1>Food Hub</h1>
      <ul>
        <li>Offers</li>
        <li
          onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}
        >
          {btnName}
        </li>
        <li>Help</li>
        <img className="cart-img" alt="cart-logo" src={CartImg} />
      </ul>
    </nav>
  );
};

export default Header;
