import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configureAppStore from "./store/configureStore";
import Home from "./Containers/home/home";
import "./locales/i18n";
import { Route, BrowserRouter } from "react-router-dom";

import "./index.scss";
import Grid from "./Containers/Grid/grid";

const store = configureAppStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={Home} />
      <Route path="/:login" component={Grid} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
