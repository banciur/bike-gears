import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";

const element = document.createElement("div");
element.setAttribute("id", "app-container");
document.body.appendChild(element);

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById("app-container")
);
