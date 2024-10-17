import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Form from "./Component/form";
import Report from "../../admin/report";
import Update from "../../admin/update";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/report" element={<Report />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
