import React from "react";
import ReactDOM from "react-dom/client";
import { globalStyles } from "src/styles/global-styles";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {globalStyles}
    <App />
  </React.StrictMode>
);
