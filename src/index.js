import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import "./index.css";
import appReducer from "./reducers";
import App from "./App";
import Results from "./components/Results";
import * as serviceWorker from "./serviceWorker";

let storeData = createStore(appReducer);

function appRender() {
  ReactDOM.render(
    <div className="container">
      <App store={storeData} />
      <hr />
      <Results store={storeData} />
    </div>,
    document.getElementById("root")
  );
}

storeData.subscribe(appRender);
appRender();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
