import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import logo from "../../assets/img/fresh.svg";
import s from "./Header.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home, Busses, About, Contacts } from "../../pages";

const Header = () => {
  return (
    <>
      <Navbar
        // fixed="top"
        collapseOnSelect
        expand="md"
          // bg="warning"
          // variand="warning"
        className={s.navbar}
      >
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
            <Nav className="mr-auto">
              <Nav.Link href="/">Главная</Nav.Link>
              <Nav.Link href="/busses">Автобусы</Nav.Link>
              <Nav.Link href="/about">О нас</Nav.Link>
              <Nav.Link href="/contacts">Контакты</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/busses" component={Busses} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contacts" component={Contacts} />
        </Switch>
      </Router>
    </>
  );
};

export default Header;
