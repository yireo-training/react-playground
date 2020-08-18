import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store/store";

ReactDOM.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  document.getElementById("root")
);
