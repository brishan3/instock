import "./Header.scss";
import logo from "../../assets/logos/InStock-Logo_1x.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav__logo">
          <img src={logo} alt="company logo" />
        </Link>
        <div className="nav__list">
          <Link
            to="/warehouses"
            className="nav__link
         nav__link--highlight"
          >
            Warehouses
          </Link>

          <Link to="/inventory" className="nav__link">
            Inventory
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
