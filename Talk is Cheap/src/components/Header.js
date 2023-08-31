import Logo from "../assets/logo.png";
import CartImg from "../assets/cart.png";


const Header = () => {
    return(
        <nav className="nav-bar">
            <img src= {Logo} alt="logo"></img>
            <h1>Food Hub</h1>
            <ul>
                <li>Offers</li>
                <li>Sign In</li>
                <li>Help</li>
                <img className="cart-img" alt="cart-logo" src={CartImg} />
            </ul>
        </nav>
    )
}

export default Header;