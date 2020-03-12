/*const element = document.createElement('h1');
element.innerText = "Hi, Iḿ an element!!!";

const container = document.getElementById("app");

container.appendChild(element);
*/

import React from "react";
import ReactDOM  from "react-dom";

const element = <h1>Hi, sigo siendo un elemento!</h1>;
const app = document.getElementById("app");

ReactDOM.render(element, app);