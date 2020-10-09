import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configureAppStore from "./store/configureStore";
import Home from "./Containers/home/home";
import "./locales/i18n";
import { Route, BrowserRouter } from "react-router-dom";

import "./index.scss";

import InputBox from "./Components/inputbox/input";

import Grid from "./Containers/Grid/grid";
import Hero from "./Containers/HeroPage/hero";

const store = configureAppStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/search" component={InputBox} />
      <Route path="/search/:name" component={Grid} />
      <Route path="/heros/:heroname" component={Hero} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
