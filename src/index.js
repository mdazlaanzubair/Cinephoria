import React from "react";
import ReactDOM from "react-dom/client";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

// import { Provider } from "react-redux";
// import store from "./redux/store"

// custom component
import App from "./app/App";

// checking if bootstrap js is loaded or otherwise
console.log(bootstrap ? "Bootstrap JS Loaded" : "Bootstrap JS isn't Loaded");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>
);
