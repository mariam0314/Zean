import "./Header.css";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1 className="text-white text-5xl font-bold">Zean</h1>
      <nav>
        <ul className="flex justify-end space-x-8 p-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/fascilites">Services</Link></li>
          <li><Link to="/contact">Contacts</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
