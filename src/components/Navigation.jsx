import React from "react";
import { Link } from "react-router-dom";
import "../App.scss"

function Navbar() {
    return (
    <div className="navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/offer">Oferta</Link></li>
          <li><Link to="/configurator">Konfigurator</Link></li>
          <li><Link to="/about">Podloze pod garaz</Link></li>
          <li><Link to="/metal-color">Kolory blachy</Link></li>
          <li><Link to="/contact">Kontakt</Link></li>
        </ul>
      </div>
    );
  }

  export default Navbar;