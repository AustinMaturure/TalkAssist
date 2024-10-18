import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Layout from "./components/Layout.jsx";
import SignUp from "./components/SignUp.jsx";
import Login from "./components/Login.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Tutorial from "./components/Tutorials.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tutorials" element={<Tutorial />} />
        <Route path="/dashboard/:username" element={<Dashboard />} />
        <Route path="/" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
