import { Link } from "react-router-dom";
import "./Header.css";
export default function Header() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to='users'>Users</Link>
        <Link to='/app'>App</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
    </div>
  );
}
