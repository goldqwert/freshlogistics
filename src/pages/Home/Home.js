import React, { useState } from "react";
import { Slider, Footer } from "../../components";
import s from "./Home.module.css";
import { NavLink } from "react-router-dom";
import { Card, Button, CardDeck } from "react-bootstrap";
import testbus from "../../assets/img/test-bus.png";
import { ModalImg } from "../../components";

const Home = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className={s.container}>
      <Slider />
      <Card style={{ width: "100%", alignItems: "center" }}>
        <Card.Body>
          <h1 className={s.title}>Заголовок</h1>
          <Card.Text className={s.text}>
            Тут будет текст обобщаюший работу компании
          </Card.Text>
          <Card.Text className={s.text}>
            Сюда предлагаю вставить какие-нибудь картинки - якобы показывающие
            почему клиенты должны выбрать именно Фрешлогистикс
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "100%", alignItems: "center" }}>
        <Card.Body>
          <Card.Title className={s.title}>Наши автобусы</Card.Title>
        </Card.Body>
      </Card>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src={testbus} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <button className={s.btn} onClick={() => setModalShow(true)}>
              Просмотреть
            </button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={testbus} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <button className={s.btn} onClick={() => setModalShow(true)}>
              Просмотреть
            </button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={testbus} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <button className={s.btn} onClick={() => setModalShow(true)}>
              Просмотреть
            </button>
          </Card.Footer>
        </Card>
      </CardDeck>
      <NavLink to="/busses" activeClassName={s.active} className={s.link}>
        Просмотреть весь автотранспорт
      </NavLink>
      <Card style={{ width: "100%", alignItems: "center" }}>
        <Card.Body>
          <Card.Text className={s.text}>
            Можно добавить еще информацию на главную страницу - которую нужно
          </Card.Text>
        </Card.Body>
      </Card>
      <ModalImg showModal={modalShow} onHide={() => setModalShow(false)} />
      <Footer />
    </div>
  );
};

export default Home;
