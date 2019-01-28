/* global document */

import React from "react";
import { render } from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import store from "./main";

// By using <Provider />, the store will be made available for all the components in your application.

render(
  <Provider store={store}>
    <div className="container is-fluid">
      <Router>
        <App />
      </Router>
    </div>
  </Provider>, document.getElementById("root")
);