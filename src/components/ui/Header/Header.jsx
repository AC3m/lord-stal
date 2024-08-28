import { BurgerMenu } from "./BurgerMenu";
import "./Header.scss";

function Header({ onBurgerMenuToggle }) {
  return (
    <header>
      <BurgerMenu onBurgerMenuToggle={onBurgerMenuToggle} />
      <img className="logo" src="src/assets/logo.png" alt="" />
    </header>
  );
}
export default Header;
