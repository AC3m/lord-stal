import "./Header.scss";

export function BurgerMenu({ onBurgerMenuToggle }) {
  return (
    <button
      className="burger-menu"
      onClick={onBurgerMenuToggle}
      aria-label="Toggle navigation"
    >
      &#9776;
    </button>
  );
}
