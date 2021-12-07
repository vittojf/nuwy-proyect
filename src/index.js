import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter,Route,Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Home from "./pages/Home";
import FormsRemesas from "./pages/FormsRemesas";
import AboutUs from "./pages/AboutUs";
import AnswerAndContact from './pages/AnswerAndContact'
import ScrollToTop from "./components/ScrollTop/ScrollToTop";
import SectionTransactionSuccessfull from "./components/SectionTransactionSuccessfull/SectionTransactionSuccessfull";
ReactDOM.render(
  <BrowserRouter>
      <ScrollToTop>
    <Routes>

      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/sendMoney"  element={<FormsRemesas/>}/>
        <Route path="/sobre-nosotros" element={<AboutUs/>} />
        <Route path="/preguntas-frecuentes" element={<AnswerAndContact/>} />
      </Route>
     
     <Route path="/successfullTransacction" element={<SectionTransactionSuccessfull/>}/>
    </Routes>
      </ScrollToTop>
  </BrowserRouter>,

  document.getElementById("root")
);
