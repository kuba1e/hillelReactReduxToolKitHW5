import React from "react";
import ReactDOM from "react-dom/client";
import store from "./store";
import { Provider } from "react-redux";
import App from "./components/App";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
