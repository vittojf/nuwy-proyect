import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbars = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <Navbar
        variant="dark"
        expand="lg"
        style={{ background: "#5163A3" }}
        fixed="top"
        expanded={expanded}
      >
        <Container>
          <Navbar.Brand href="#home">Nuwy</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{borderStyle:'unset'}}
                      onClick={() => setExpanded(expanded ? false : "expanded")}
          > <img src="/svg/bars.svg" alt="" /></Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" className="text-start">
            <Nav className="me-auto">
            <Link
                className="nav-link"
                to="/#card-section"
                onClick={() => setExpanded(false)}
              >
                {" "}
                Transferir
              </Link>
              <Link
                className="nav-link"
                to="/sobre-nosotros"
                onClick={() => setExpanded(false)}
              >
                {" "}
                Sobre Nosotros
              </Link>
              <Link
                  className="nav-link"
                  to="/preguntas-frecuentes"
                  onClick={() => setExpanded(false)}
                >
                  Ayuda
                </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbars;
/* <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top "
        style={{ background: "#5163A3" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#/action-2">
            Nuwy
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setToggle(!toggle)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link "
                  aria-current="page"
                  href="#/action-2"
                  onClick={() => setToggle(!toggle)}
                >
                  Transferir
                </a>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/sobre-nosotros"
                  onClick={() => setToggle(!toggle)}
                >
                  {" "}
                  Sobre Nosotros
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#/action-2"
                  onClick={() => setToggle(!toggle)}
                >
                  Como funciona
                </a>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/preguntas-frecuentes"
                  onClick={() => setToggle(!toggle)}
                >
                  Ayuda
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */
