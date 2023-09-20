import Logo from "../assets/logo.png";
import CartImg from "../assets/cart.png";
import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const { loggedInUser } = useContext(UserContext);

  return (
    <nav className="flex justify-between items-center bg-slate-900">
      <div className="flex items-center text-2xl font-semibold">
        <Link to="/">
          <img className="w-20 mr-3" src={Logo} alt="logo"></img>
        </Link>
        <h1 className="text-white">Food Hub</h1>
      </div>
      <div className="flex mx-6 text-white text-lg">
        <ul className="flex p-6">
          <li className="px-6 m-2">
            <Link to="/offers">Offers</Link>
          </li>
          <li
            className="px-6 m-2 "
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </li>
          <li className="px-6 m-2">
            <Link to="/help">Help</Link>
          </li>
          <li className="px-6 m-2">
            <Link to="/groceries">Groceries</Link>
          </li>
          <li className="px-6 m-2">{loggedInUser}</li>
          <img className="w-8 m-2" alt="cart-logo" src={CartImg} />
        </ul>
      </div>
    </nav>
  );
};

export default Header;
