import React, { useState } from "react";
import logo from "../../assets/img/fresh.svg";
import s from "./Header.module.css";
import { Container, Navbar, Nav } from "react-bootstrap";

const Header = () => {
  const [links, setLink] = useState("/");
  return (
    <Navbar fixed="top" collapseOnSelect expand="md" className={s.header}>
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            height="30"
            width="30"
            className="d-inline-block align-top"
            alt="logo"
          />{" "}
          Freshlogistics
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            justify
            variant="tabs"
            activeKey={links}
            onSelect={(key) => setLink(key)}
          >
            <Nav.Link href="/" className={s.link}>
              Главная
            </Nav.Link>
            <Nav.Link href="/busses" className={s.link}>
              Автобусы
            </Nav.Link>
            <Nav.Link href="/about" className={s.link}>
              О нас
            </Nav.Link>
            <Nav.Link href="/contacts" className={s.link}>
              Контакты
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
