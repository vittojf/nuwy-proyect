import React from "react";
import Navbar from "./components/Navbar/Navbar";
import SectionFooter from "./components/SectionFooter/SectionFooter";
import { Outlet } from "react-router";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="bg">
        <Navbar />
        <Outlet />
        <SectionFooter />
      </div>
    </React.Fragment>
  );
}

export default App;
