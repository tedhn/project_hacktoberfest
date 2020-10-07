import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configureAppStore from "./store/configureStore";
import Home from "./Containers/home/home";
import "./locales/i18n";
import history from "./utils/history";
import { Route, Router } from "react-router";

import "./index.scss";

const store = configureAppStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Home} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
