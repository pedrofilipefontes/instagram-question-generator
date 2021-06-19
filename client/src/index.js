import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { translationUtil } from "./utils/translationUtility";
import "./assets/css/index.css";

let query = new URLSearchParams(window.location.search);
query = query.get("lang");
let defaultLanguage =
  query === "pt" || query === "en"
    ? query
    : navigator.language.slice(0, 2) !== ("pt" || "en")
    ? "en"
    : navigator.language.slice(0, 2);
let defaultTranslation = translationUtil(defaultLanguage);

ReactDOM.render(
  <React.StrictMode>
    <App
      defaultTranslation={defaultTranslation}
      defaultLanguage={defaultLanguage}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
