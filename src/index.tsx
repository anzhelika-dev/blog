import { render } from "react-dom";

import App from "../src/App";
import { BrowserRouter } from "react-router-dom";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, 
  document.getElementById("root")
);