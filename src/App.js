import React from "react";
import s from "./App.module.css";
import { Route, Switch, withRouter } from "react-router-dom";
import { Home, Busses, About, Contacts, Service } from "./pages";
import { Header, Footer } from "./components";

const App = () => {
  return (
    <Switch>
      <div className={s.wrapper}>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/busses" component={Busses} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contacts" component={Contacts} />
      </div>
    </Switch>
  );
};

export default withRouter(App);
