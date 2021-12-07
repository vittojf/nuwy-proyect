import React, { useEffect, useState, useRef } from "react";
import { Dropdown } from "react-bootstrap";
import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";
import './FormContent.css'
import ConfirmNuwy from "../ConfirmNuwy/ConfirmNuwy";

function useOutsideAlerter(ref, setDropdown) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setDropdown]);
}
function FormConvert() {
  const [dropwdown, setDropwdown] = useState(false);
  const [dataSendMoney, setDataSendMoney] = useState({
  });

  const handleClassChange = (e) => {
    console.log(e);
    return setDropwdown(!dropwdown);
  };

  const handleOnChange=(v ,input)=>{
switch (input) {
  case 'envio':
    setDataSendMoney({...dataSendMoney,emisor:v})
    break;

  default:
    break;
}
  }

  const popperConfig = {
    placement: "bottom-end",
    modifiers: [
      {
        name: "flip",
        enabled: false,
      },
    ],
  };

  const formatoNumber= (number) => {
    const exp = /(\d)(?=(\d{80})+(?!\d))/g;
    const rep = '$1,';
    return number.toString().replace(exp,rep);
  }
  
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setDropwdown);
  return (
    <>
      <section className="d-flex flex-wrap mt-2">
        <article className="mb-3">
          <label className="labelForm" htmlFor="sendMoney">
            Tú envías
          </label>
          <div className="input-group  mb-2 position-relative">
     <div className="position-absolute top-50 start-0 translate-middle-y ms-3 spanMoneyIcon">


    <span class=" icon-money">$</span>
      
       </div> 
            <input
              id="sendMoney"
              type="number"
              value={dataSendMoney["emisor"]? formatoNumber(dataSendMoney["emisor"]):''}
              className="form-control form-control-nuwy "
              aria-label="Text input with dropdown button"
              onChange={(e)=>handleOnChange(e.target.value,'envio')}
            />

            <button className=" dropdown-nuwy " disabled type="button">
              <img src="/svg/bandera-chile.svg" alt="banderaChile" />
            </button>
          </div>
          <span className="span-nuwy">
            Te damos: <b>4,66 COP</b> por <b>CLP</b>
          </span>
        </article>
        <article className="mb-3 ">
          <label className="labelForm" htmlFor="getMoney">
            El receptor recibe
          </label>
          <div className="input-group mb-2  position-relative">
          <div className="position-absolute top-50 start-0 translate-middle-y ms-3 spanMoneyIcon">


<span class=" icon-money">$</span>
  
   </div> 
            <input
              type="number"
              value="20000"
              id="getMoney"
              className="form-control form-control-nuwy   "
              aria-label="Text input with dropdown button"
              disabled
            />
            <Dropdown onClick={handleClassChange} ref={wrapperRef}>
              <Dropdown.Toggle
                className={` dropdown-nuwy  bg-btn-nuwy  ${
                  dropwdown ? "dropdown-nuwy-active" : ""
                }`}
                id="dropdown-basic"
              >
                <div className="">
                  <img
                    src={`/svg/${
                      dropwdown ? "lineVertical.svg" : "bandera-col.svg"
                    }`}
                    alt="banderaChile"
                    className={`  ${dropwdown ? "me-15" : "me-3"}`}
                  />

                  <span
                    className="position-absolute end-0 "
                    style={{ marginRight: 11 }}
                  >
                    <img
                      src={`/svg/${dropwdown ? "rowUp.svg" : "rowDown.svg"}`}
                      alt="banderaChile"
                      className="animate"
                    />
                  </span>
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu
                popperConfig={popperConfig}
                align="end"
                className=" animate slideIn dropdown-nuwy-menu  "
              >
                <SimpleBarReact
                  style={{ maxHeight: "160px" }}
                  scrollbarMaxSize="49"
                  forceVisible="y"
                  autoHide={true}
                  overflow-x="hidden"
                >
                  <Dropdown.Item href="#/action-2" className="textIconScroll">
                    <span className="spanIconScroll ">
                      <img
                        src={`/svg/colombia.svg`}
                        alt="banderaChile"
                        className="me-1"
                      />
                      COP
                    </span>
                    <span className="ms-1">Colombia</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2" className="textIconScroll">
                    <span className="spanIconScroll ">
                      <img
                        src={`/svg/colombia.svg`}
                        alt="banderaChile"
                        className="me-1"
                      />
                      COP
                    </span>
                    <span className="ms-1">Colombia</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2" className="textIconScroll">
                    <span className="spanIconScroll ">
                      <img
                        src={`/svg/colombia.svg`}
                        alt="banderaChile"
                        className="me-1"
                      />
                      COP
                    </span>
                    <span className="ms-1">Colombia</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2" className="textIconScroll">
                    <span className="spanIconScroll ">
                      <img
                        src={`/svg/colombia.svg`}
                        alt="banderaChile"
                        className="me-1"
                      />
                      COP
                    </span>
                    <span className="ms-1">Colombia</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2" className="textIconScroll">
                    <span className="spanIconScroll ">
                      <img
                        src={`/svg/colombia.svg`}
                        alt="banderaChile"
                        className="me-1"
                      />
                      COP
                    </span>
                    <span className="ms-1">Colombia</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2" className="textIconScroll">
                    <span className="spanIconScroll ">
                      <img
                        src={`/svg/colombia.svg`}
                        alt="banderaChile"
                        className="me-1"
                      />
                      COP
                    </span>
                    <span className="ms-1">Colombia</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2" className="textIconScroll">
                    <span className="spanIconScroll ">
                      <img
                        src={`/svg/colombia.svg`}
                        alt="banderaChile"
                        className="me-1"
                      />
                      COP
                    </span>
                    <span className="ms-1">Colombia</span>
                  </Dropdown.Item>{" "}
                  <Dropdown.Item href="#/action-2" className="textIconScroll">
                    <span className="spanIconScroll ">
                      <img
                        src={`/svg/colombia.svg`}
                        alt="banderaChile"
                        className="me-1"
                      />
                      COP
                    </span>
                    <span className="ms-1">Colombia</span>
                  </Dropdown.Item>
                </SimpleBarReact>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <span className="span-nuwy">
            Tu envío llegará a mas tardar en 24 horas
          </span>
        </article>

        <ConfirmNuwy />
        <div className="d-flex w-100 my-3 mt-4 justify-content-center align-items-center ">
          <span>
            <img src="/svg/lock.svg" alt="banderaChile" className="me-1" />
          </span>

          <span className="fs-8 ms-2 mt-1">Esta es una plataforma segura</span>
        </div>
      </section>
    </>
  );
}

export default FormConvert;

/*
<div class="dropdown position-relative" ref={wrapperRef}>
<button
  className={` dropdown-nuwy bg-btn-nuwy dropdown-toggle ${
    dropwdown ? "dropdown-nuwy-active show" : ""
  }`}
  data-bs-popperConfig={null}
  data-boundary="dd"
  onClick={handleClassChange}
  type="button"
  id="dropdownMenuLink"
  
  data-bs-toggle="dropdown"
  aria-expanded={dropwdown}
>
</button>
<ul
  className={`dropdown-menu animate slideIn  ${
    dropwdown && "show"
  }`}

>
  <li onClick={() => setDropwdown(false)}>
    <a className="dropdown-item" href="#">
      Another action
    </a>
  </li>
  <li onClick={() => setDropwdown(false)}>
    <a className="dropdown-item" href="#">
      Another action
    </a>
  </li>
  <li onClick={() => setDropwdown(false)}>
    <a className="dropdown-item" href="#">
      Another action
    </a>
  </li>
</ul>
</div>*/
