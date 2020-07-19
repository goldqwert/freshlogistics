import React from "react";
import { Card } from "react-bootstrap";
import s from "./About.module.css";
import logo from "../../assets/img/logo.png";

const About = () => {
  return (
    <>
      <div className={s.block}>
        <Card style={{ width: "100%", alignItems: "center" }}>
          <Card style={{ marginTop: "20px" }}>
            <Card.Img variant="top" src={logo} />
          </Card>
          <Card.Body>
            <Card.Title className={s.title}>О нас</Card.Title>
            <Card.Text className={s.text}>
              Транспортная компания ЧТУП "Фрешлогистикс" занимается
              внутриреспубликанскими и международными пассажирскими перевозками.
              Основные направления работы - Россия и Украина, а также страны
              Западной Европы.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default About;
