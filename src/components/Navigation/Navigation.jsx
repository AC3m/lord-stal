import { Link } from "react-router-dom";
import "./Navigation.scss";

export default function Navigation({ isBurgerMenuOpen }) {
  return (
    <div className={`navigation ${isBurgerMenuOpen ? "open" : ""}`}>
      <ul className={`nav-links ${isBurgerMenuOpen ? "open" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/offer">Oferta</Link>
        </li>
        <li>
          <Link to="/configurator">Konfigurator</Link>
        </li>
        <li>
          <Link to="/about">Podloze pod garaz</Link>
        </li>
        <li>
          <Link to="/metal-color">Kolory blachy</Link>
        </li>
        <li>
          <Link to="/contact">Kontakt</Link>
        </li>
      </ul>
    </div>
  );
}
