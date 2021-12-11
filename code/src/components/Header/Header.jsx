import "./header.scss";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <NavLink to="/">
          <div className="header__logo">
            {/* <NavLink to="/">B</NavLink> */}
          </div>
        </NavLink>
        <nav className="header__nav">
          <ul className="header__menu">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            {/* <li>
              <NavLink to="/journal">Journal</NavLink>
            </li> */}
            <li>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
