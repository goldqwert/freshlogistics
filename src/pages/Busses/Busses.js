import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Card, CardDeck, Button } from "react-bootstrap";
import testbus from "../../assets/img/test-bus.png";
import s from "./Busses.module.css";
import { ModalImg } from "../../components";

const Busses = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className={s.block}>
      <Card>
        <Card.Body>
          <Card.Title className={s.title}>Наш автотранспорт</Card.Title>
        </Card.Body>
      </Card>
      <CardDeck className={s.imgBlock}>
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
      <ModalImg showModal={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default Busses;
