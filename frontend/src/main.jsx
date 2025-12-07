import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {AuthProvider} from "./context/AuthContext.jsx";

import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/css/menu.css";
import "./assets/css/vendors.css";
import "./assets/css/icon_fonts/css/all_icons_min.css";
import "./assets/css/date_picker.css";
import "./assets/css/custom.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
