import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Badge from "./components/Badge";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

ReactDOM.render(
  <React.StrictMode>
    <Badge
      firstName="Carlos Alberto"
      lastName="Angel Angel"
      avatar="https://www.gravatar.com/avatar?d=identicon"
      jobTitle="Backend Engineer"
      twitter="Charly_Angel_x2"
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
