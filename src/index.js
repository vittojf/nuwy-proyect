import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter,Route,Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Home from "./pages/Home";
import FormsRemesas from "./pages/FormsRemesas";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/sendMoney"  element={<FormsRemesas/>}/>
      </Route>
    </Routes>
  </BrowserRouter>,

  document.getElementById("root")
);
