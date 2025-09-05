import { Link } from "react-router";
const logoUrl = new URL("../../public/images/logo.png", import.meta.url);

const Header = () => (
  <header className="header">
    <div className="img-container">
      <img src={logoUrl} />
      <span>FoodiePoint</span>
    </div>
    <nav className="navbar">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <Link to="/cart">
          <li>Cart</li>
        </Link>
      </ul>
    </nav>
  </header>
);
export default Header;
