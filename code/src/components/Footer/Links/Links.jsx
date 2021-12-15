//TODO: Поменять ссылки на NavLink
//TODO: Применить метод map

// import "../../../scss/fonts";
import "./links.scss";

import React from "react";
import { NavLink } from "react-router-dom";
import NavList from "../../NavList/NavList";

function Links() {
  return (
    <div className="links">
      <h3 className="links__logo">Ссылки</h3>
      <ul className="links__list">
        <NavList />
      </ul>

      <ul className="links__list-2">
        <li>
          <NavLink to="#" className="links__list-link">
            Проекты
          </NavLink>
        </li>
        <li>
          <NavLink to="#" className="links__list-link">
            Эксперты
          </NavLink>
        </li>
        <li>
          <NavLink to="#" className="links__list-link">
            Отзывы
          </NavLink>
        </li>
        <li>
          <NavLink to="#" className="links__list-link">
            Партнеры
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Links;
