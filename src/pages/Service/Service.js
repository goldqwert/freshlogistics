import React from "react";
import { Card } from "react-bootstrap";
import s from "./Service.module.css";

const Service = () => {
  return (
    <div className={s.block}>
      <Card
        style={{
          width: "100%",
        }}
      >
        <Card.Body>
          <Card.Title className={s.title}>Услуги компании</Card.Title>
          <Card.Text className={s.text}>
            Информация про услуги компании
          </Card.Text>
          <div className={s.link}>
            <a
              href="https://docs.google.com/document/d/1SNq17ufTg9DmNwESla2l856lx_B-3YNiL1WYffMNNSo/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={s.link}
              alt="phone"
            >
              Скачать документ
            </a>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
