import { NavLink } from "react-router-dom";

import "./footer.scss";

import Contacts from "./Contacts/Contacts";
import Links from "./Links/Links";

function Footer() {
  return (
    <div className="footer">
      <NavLink to="/">Home</NavLink>
      <h3>© Copyright 2021–2022, OcOO Orion</h3>
      <Contacts />
      <Links />
    </div>
  );
}

export default Footer;
