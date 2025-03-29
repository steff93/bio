import { NavLink } from "react-router";
import "./Menu.scss";

const Menu = () => {
  return (
    <nav className="nav-menu">
      <NavLink to="/" end>
        Home
      </NavLink>

      <NavLink to="/useful-links" end>
        Useful Links
      </NavLink>
    </nav>
  );
};

export default Menu;
