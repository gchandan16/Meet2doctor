import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import {Provider} from "react-redux";
import {store} from "./redux/store";

import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/css/menu.css";
import "./assets/css/vendors.css";
import "./assets/css/icon_fonts/css/all_icons_min.css";
import "./assets/css/date_picker.css";
import "./assets/css/custom.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
