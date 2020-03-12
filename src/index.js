import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

import BadgeNew from "./pages/BadgeNew";

const app = document.getElementById("app");
ReactDOM.render(
  <BadgeNew />, app);