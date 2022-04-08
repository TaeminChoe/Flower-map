import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";
import logger from "redux-logger";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const store = createStore(reducers, applyMiddleware(logger));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
