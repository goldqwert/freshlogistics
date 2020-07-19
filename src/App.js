import React from "react";
import s from "./App.module.css";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { Home, Busses, About, Contacts, Service } from "./pages";
import { Header, Footer } from "./components";

const App = () => {
  return (
    <Switch>
      <div className={s.wrapper}>
        <Header />
        <Redirect from="/" to="/main" />
        <Route path="/main" component={Home} />
        <Route path="/busses" component={Busses} />
        <Route path="/about" component={About} />
        <Route path="/service" component={Service} />
        <Route path="/contacts" component={Contacts} />
        <Footer />
      </div>
    </Switch>
  );
};

export default withRouter(App);
