import React from "react";
import s from "./App.module.css";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import { Home, Busses, About, Contacts } from "./pages";
import { Header } from "./components";

const App = () => {
  return (
    <Switch>
      <div className={s.wrapper}>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/busses" component={Busses} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contacts" component={Contacts} />
      </div>
    </Switch>
  );
};

export default App;
