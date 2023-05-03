import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Footer from "./components/Footer";
import Media from "./pages/media/media";
import Clock from "./components/Date";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* 
      Maybe only call App
      Giving App a grid layout.
      App calls rest of components
    */}
    <App />
    {/* <h1 className="bg-gradient"> HELLO FRIENDS </h1> */}
    <h1 className="meter aqui a hora. Isto talvez tenha de ser um componente para reutilizar"> HELLO FRIENDS </h1>
    <Clock/>
    <div>Bacalhau à Braá/ IF </div>
    <Media />
    <Footer />
  </React.StrictMode>
);
