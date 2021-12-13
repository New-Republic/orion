//TODO: Поменять ссылки на NavLink
//TODO: Применить метод map

// import "../../../scss/fonts";
import "./links.scss";

import React from "react";
import { NavLink } from "react-router-dom";

function Links() {
  return (
    <div className="links">
      <h3 className="links__logo">Ссылки</h3>
      <ul className="links__list">
        <li>
          <NavLink to="/" className="links__list-links">
            Главный
          </NavLink>
        </li>
        <li>
          <NavLink to="about" className="links__list-links">
            О компании
          </NavLink>
        </li>
        <li>
          <a href="" className="links__list-links">
            Услуги
          </a>
        </li>
        <li>
          <a href="" className="links__list-links">
            Прайс-лист
          </a>
        </li>
        <li>
          <a href="" className="links__list-links">
            Новости
          </a>
        </li>
        <li>
          <a href="" className="links__list-links">
            Контакты
          </a>
        </li>
      </ul>

      <ul className="links__list-2">
        <li>
          <a href="#" className="links__list-link">
            Проекты
          </a>
        </li>
        <li>
          <a href="#" className="links__list-link">
            Эксперты
          </a>
        </li>
        <li>
          <a href="#" className="links__list-link">
            Отзывы
          </a>
        </li>
        <li>
          <a href="#" className="links__list-link">
            Партнеры
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Links;
