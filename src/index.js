import React from "react";
import ReactDOM from "react-dom/client"; // Importar desde 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom"; // Importar BrowserRouter
import App from "./App";

// Crear el contenedor de la raíz
const root = ReactDOM.createRoot(document.getElementById("root"));

// Renderizar la aplicación
root.render(
  <Router>
    <App />
  </Router>
);
