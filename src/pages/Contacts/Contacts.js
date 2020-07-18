import React from "react";
import s from "./Contacts.module.css";
import { Card, CardDeck } from "react-bootstrap";

const Contacts = () => {
  return (
    <div className={s.block}>
      <h5 className={s.title}>Контакты</h5>
      <CardDeck>
        <Card style={{ width: "100%", alignItems: "center" }}>
          <Card.Body>
            <Card.Text className={s.text}>
              <div>
                <h6>🚩Адрес</h6>
                <span>г. Минск, ул. Бабушкина 29</span>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "100%", alignItems: "center" }}>
          <Card.Body>
            <Card.Text className={s.text}>
              <div>
                <h6>📞 Номер телефона</h6>
                <a href="tel:+375990000000" className={s.link} alt="phone">
                  +375990000000 MTS A1 LIFE
                </a>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "100%", alignItems: "center" }}>
          <Card.Body>
            <Card.Text className={s.text}>
              <div>
                <h6>📲 Cоциальные сети</h6>
                <span>Предлагаю добавить соц. сети на сайт</span>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "100%", alignItems: "center" }}>
          <Card.Body>
            <Card.Text className={s.text}>
              <div>
                <h6>⌚ Время работы</h6>
                <span>9:00-18:00</span>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "100%", alignItems: "center" }}>
          <Card.Body>
            <Card.Text className={s.text}>
              <div>
                <h6>✉ E-mail</h6>
                <span>test@mail.ru</span>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
};

export default Contacts;
