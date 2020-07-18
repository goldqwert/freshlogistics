import React from "react";
import { Tab, Card, Row, CardGroup, Col } from "react-bootstrap";
import s from "./Service.module.css";
import { Footer } from "../../components";

const Service = () => {
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
      <Footer />
    </div>
  );
};

export default Service;
