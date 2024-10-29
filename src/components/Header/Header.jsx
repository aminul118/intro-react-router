import { Link } from "react-router-dom";
import "./Header.css";
export default function Header() {
  return (
    <div>
      <nav className="space-x-8 text-center py-8 bg-slate-800 text-lg ">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to='users'>Users</Link>
        <Link to='/app'>App</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
    </div>
  );
}
