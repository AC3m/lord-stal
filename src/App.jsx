import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import Navigation from "./components/Navigation/Navigation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Offer from "./pages/Offer";
import Configurator from "./pages/Configurator";
import MetalColor from "./pages/MetalColor";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const toggleBurgerMenu = () => setIsBurgerMenuOpen(!isBurgerMenuOpen);

  return (
    <div className="app">
      <Header onBurgerMenuToggle={toggleBurgerMenu} />
      <Navigation isBurgerMenuOpen={isBurgerMenuOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/configurator" element={<Configurator />} />
        <Route path="/about" element={<About />} />
        <Route path="/metal-color" element={<MetalColor />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
