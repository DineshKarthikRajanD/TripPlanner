import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Form from "./Component/form";
import Report from "../../admin/report";
import Update from "../../admin/update";
import Kodaikanal from "./Component/packages/kodaikanal/kodaikanal";
import Ooty from "./Component/packages/ooty/ooty";
import Madurai from "./Component/packages/madurai/Madurai";
import Thirunelveli from "./Component/packages/Thirunelveli/Thirunelveli";
import Coimbatore from "./Component/packages/coimbatore/Coimbatore";
import Dindigul from "./Component/packages/dindigul/dindigul";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kodaikanal" element={<Kodaikanal />} />
        <Route path="/ooty" element={<Ooty />} />
        <Route path="/madurai" element={<Madurai />} />
        <Route path="/thirunelveli" element={<Thirunelveli />} />
        <Route path="/coimbatore" element={<Coimbatore />} />
        <Route path="/dindigul" element={<Dindigul />} />
        <Route path="/form" element={<Form />} />
        <Route path="/report" element={<Report />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
