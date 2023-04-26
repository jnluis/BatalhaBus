import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Footer from "./components/Footer";
import Media from "./pages/media/media";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <h1 className="bg-gradient"> HELLO FRIENDS </h1>
    <div>Bacalhau à Braá/ IF</div>
    <Media />
    <Footer />
  </React.StrictMode>
);
