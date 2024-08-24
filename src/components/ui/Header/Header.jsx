import { BurgerMenu } from "./BurgerMenu";
import "./Header.scss";

function Header({ onBurgerMenuToggle }) {
  return (
    <header>
      <BurgerMenu onBurgerMenuToggle={onBurgerMenuToggle} />
      {/* TODO: change for image logo */}
      <h1>LORD-STAL</h1>
    </header>
  );
}
export default Header;
