import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Form from "./form.jsx";
import Report from "./report.jsx";
import Update from "./update.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/form" element={<Form />} />
        <Route path="/report" element={<Report />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
