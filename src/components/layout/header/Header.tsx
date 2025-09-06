import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-container">
        <Link to="/" className="logo-link">
          <img 
            src="/logo-transparent.png" 
            alt="MyoCare" 
            className="logo"
          />
        </Link>
      </nav>
    </header>
  );
};

export default Header;