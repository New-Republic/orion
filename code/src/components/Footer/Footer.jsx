import "./footer.scss";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <NavLink to="/">Home</NavLink>
      <h3>© Copyright 2021–2022, name name</h3>
    </div>
  );
}

export default Footer;
