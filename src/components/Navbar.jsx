import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav">
    <ul className="menu">
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/profile">Profile</Link> </li>
    <li>
      <Link to="/register">Register</Link>
    </li>
    <li>
      <Link to="/login">Login</Link>
    </li>
    </ul>

    <Link to="/cart" className="cart">
     🛒 Total: $0
    </Link>
    </nav>
  );
};

export default Navbar;
