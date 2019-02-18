import React from "react";
import ReactDOM from "react-dom";
import App, { Card } from "./App.jsx"; // Import the `export default`


ReactDOM.render(
  <App />, // Render the component App
  document.getElementById("root") // Inject our React application in the element with the id "root"
);

