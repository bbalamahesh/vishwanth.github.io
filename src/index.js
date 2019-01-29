/* global document */
import React from "react";
import { render } from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import store from "./main";


render(
  <Provider store={store}>
    <div className="container is-fluid">
      <Router>
        <App />
      </Router>
    </div>
  </Provider>, document.getElementById("root")
);