import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./App";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const element = document.createElement("div");
element.setAttribute("id", "app-container");
document.body.appendChild(element);

ReactDOM.render(<App />, document.getElementById("app-container"));
