import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

import Badge from "./components/Babde";

const app = document.getElementById("app");
ReactDOM.render(
  <Badge 
    firstName="José Luis"
    lastName ="García"
    jobTitle="Software Engieneer"
    twitter="Solej77"
    avatar="https://s.gravatar.com/avatar/6371f4360f3fd7260fce4b90deebbe73?s=80"
  />, app);