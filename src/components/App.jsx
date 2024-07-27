// import { useState } from "react";
import "./App.scss";
import HomePage from "./HomePage";

function App() {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <MainContent>
        <HomePage />
      </MainContent>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      {/* TODO: change for image logo */}
      <h1>LORD-STAL</h1>
    </header>
  );
}

function Navigation() {
  return (
    <div className="navigation">
      <ul>
        <NavItem>Home</NavItem>
        <NavItem>Oferta</NavItem>
        <NavItem>Konfigurator</NavItem>
        <NavItem>Podloze pod garaz</NavItem>
        <NavItem>Kolory blachy</NavItem>
        <NavItem>Kontakt</NavItem>
      </ul>
    </div>
  );
}

function NavItem({ children }) {
  return (
    <li>
      <a href="#">{children}</a>
    </li>
  );
}

function MainContent({ children }) {
  return <div>{children}</div>;
}

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 Lord-Stal</p>
    </footer>
  );
}
export default App;
