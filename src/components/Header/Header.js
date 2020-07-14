import React from "react";
import logo from "../../assets/img/fresh.svg";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.item}>
        <img
          src={logo}
          height="30"
          width="30"
          className="d-inline-block align-top"
          alt="logo"
        />
      </div>
      <div>
        <p className={s.title}>Фрешлогистикс</p>
      </div>
      <div className={s.item}>
        <NavLink exact to="/" activeClassName={s.active} className={s.link}>
          ГЛАВНАЯ
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/busses" activeClassName={s.active} className={s.link}>
          АВТОБУСЫ
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/about" activeClassName={s.active} className={s.link}>
          О НАС
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/contacts" activeClassName={s.active} className={s.link}>
          КОНТАКТЫ
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
