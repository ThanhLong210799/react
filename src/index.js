import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Route} from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import store from "./redux/store";

ReactDOM.render(
  <Route>
    <Provider store={store}>
      <App/>
    </Provider>
  </Route>,
  document.getElementById("root")
);
