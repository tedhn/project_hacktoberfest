import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configureAppStore from "./store/configureStore";
import Home from "./Containers/home/home";
import "./locales/i18n";
import { Route, BrowserRouter } from "react-router-dom";

import "./index.scss";

import Hero from "./Containers/HeroPage/hero";

import Grid from "./Components/Grid/grid";
import InputBox from "./Components/inputbox/input";
import Stats from "./Components/statsbar/stats";
import Appearance from "./Components/appearance/appearance";
import Biography from "./Components/biography/biography";
import Work from "./Components/work/work";
import Connections from "./Components/connections/connections";

const store = configureAppStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/search" component={InputBox} />
      <Route path="/search/:name" component={Grid} />
      <Route path="/heros/:heroid" component={Hero} />
      <Route path={"/heros/:heroid/status"} component={Stats} />
      <Route path={"/heros/:heroid/biography"} component={Biography} />
      <Route path={"/heros/:heorid/appearance"} component={Appearance} />
      <Route path={"/heros/:heroid/work"} component={Work} />
      <Route path={"/heros/:heroid/connections"} component={Connections} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
