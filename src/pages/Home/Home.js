import React from "react";
import { Slider, Block } from "../../components";
import s from "./Home.module.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className={s.container}>
      <Slider />
      <div className={s.block}>
        <Block width="23%">
          <div>
            <p style={{ textAlign: "center" }}>О компании</p>
            <p>
              Транспортная компания ЧТУП "Фрешлогистикс" занимается
              внутриреспубликанскими и международными пассажирскими перевозками.
              Основные направления работы - Россия и Украина, а также страны
              Западной Европы.
            </p>
            <NavLink exact to="/" activeClassName={s.active} className={s.link}>
              Подробнее...
            </NavLink>
          </div>
        </Block>
        <Block width="23%">
          <div>
            <p style={{ textAlign: "center" }}>Услуги</p>
            <p>
              Транспортная компания ЧТУП "Фрешлогистикс" занимается
              внутриреспубликанскими и международными пассажирскими перевозками.
              Основные направления работы - Россия и Украина, а также страны
              Западной Европы.
            </p>
            <NavLink exact to="/" activeClassName={s.active} className={s.link}>
              Подробнее...
            </NavLink>
          </div>
        </Block>
      </div>
      <div className={s.block}>
        <Block width="23%">
          <div>
            <p style={{ textAlign: "center", marginBottom: "50px" }}>Условия</p>
            <p>
              Транспортная компания ЧТУП "Фрешлогистикс" занимается
              внутриреспубликанскими и международными пассажирскими перевозками.
              Основные направления работы - Россия и Украина, а также страны
              Западной Европы.
            </p>
            <NavLink exact to="/" activeClassName={s.active} className={s.link}>
              Подробнее...
            </NavLink>
          </div>
        </Block>
        <Block width="23%">
          <div>
            <p style={{ textAlign: "center", marginBottom: "50px" }}>Условия</p>
            <p>
              Транспортная компания ЧТУП "Фрешлогистикс" занимается
              внутриреспубликанскими и международными пассажирскими перевозками.
              Основные направления работы - Россия и Украина, а также страны
              Западной Европы.
            </p>
            <NavLink exact to="/" activeClassName={s.active} className={s.link}>
              Подробнее...
            </NavLink>
          </div>
        </Block>
      </div>
    </div>
  );
};

export default Home;
