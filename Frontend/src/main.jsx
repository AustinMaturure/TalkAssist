import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";
import Tutorial from "./components/Tutorials.jsx";
import Footer from "./components/Footer.jsx";
import "./index.css";

import Home from "./components/Home.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Home />
    <App />
    <Tutorial />
    <Footer />
  </StrictMode>
);
