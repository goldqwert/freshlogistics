import React from "react";
import { Tab, Card, Row, CardGroup, Col } from "react-bootstrap";
import s from "./About.module.css";

const About = () => {
  return (
    <div className={s.block}>
      <Card style={{ width: "100%", alignItems: "center" }}>
        <Card.Body>
          <Card.Title className={s.title}>Услуги компании</Card.Title>
          <Card.Text className={s.text}>
            Информация про услуги компании
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default About;
