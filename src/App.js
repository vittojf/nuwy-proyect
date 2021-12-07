import React from "react";
import Navbars from "./components/Navbars/Navbars";
import SectionFooter from "./components/SectionFooter/SectionFooter";
import { Outlet } from "react-router";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="bg">
        <Navbars />
        <Outlet />
        <SectionFooter />
      </div>
    </React.Fragment>
  );
}

export default App;
