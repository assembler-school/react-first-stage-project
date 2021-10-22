import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { GamesContextProvider } from "./context/GamesContext";
import { AuthContextProvider } from "./context/AuthContext";
import "./main.css";

ReactDOM.render(
  <React.StrictMode>
    <GamesContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </GamesContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
