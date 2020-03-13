import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

import BadgeNew from "./pages/BadgeNew";
import Badges from "./pages/Badges";

const app = document.getElementById("app");
ReactDOM.render(
<Badges />, app);