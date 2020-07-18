import React from "react";
import { Tab, Card, Row, CardGroup, Col } from "react-bootstrap";
import s from "./About.module.css";
import logo from "../../assets/img/logo.png";
import { Footer } from "../../components";

const About = () => {
  return (
    <div className={s.block}>
      <Card style={{ width: "100%", alignItems: "center" }}>
        <Card style={{ marginTop: "20px" }}>
          <Card.Img variant="top" src={logo} className={s.img} />
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
      <Footer />
    </div>
  );
};

export default About;
