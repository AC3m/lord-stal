import "./App.scss";
import Home from "./pages/Home";
import Navigation from "./components/Navigation"
import { Routes, Route } from 'react-router-dom';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Offer from "./pages/Offer";
import Configurator from "./pages/Configurator";
import MetalColor from "./pages/MetalColor";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Navigation />
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
