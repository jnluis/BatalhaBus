import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Footer from "./components/Footer";
import Media from "./pages/media/media";
import SettingsPage from "./pages/settings/settingsPage";
import Clock from "./components/Date";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* 
      Maybe only call App
      Giving App a grid layout.
      App calls rest of components
    */}
    <App className="isto talvez seja sempre necessário, porque senão a pagina fica scrollable" />
    <Clock/>
    <Media />
    <Footer />
  </React.StrictMode>
);
