import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Footer from "./components/Footer";
import Media from "./pages/media/media";
import SettingsPage from "./pages/settings/settingsPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SettingsPage />
  </React.StrictMode>
);
