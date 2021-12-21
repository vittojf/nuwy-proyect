import React, { useEffect, useState, useRef, useContext } from "react";
import { Dropdown } from "react-bootstrap";
import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";
import "./FormContent.css";
import ConfirmNuwy from "../ConfirmNuwy/ConfirmNuwy";
import axios from "axios";
import FormContext from "../../Context/dataContext";

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
  
  const [valueInput1, setValueInput1] = useState(1);
  const [valueInput2, setValueInput2] = useState();
  // const [c1, setC1] = useState();
  const [c2, setC2] = useState("COP");

  
  
  const {dataSendMoney,setDataSendMoney,res,setRes,data,setData,setRate,rate} = useContext(FormContext)


  const handleClassChange = (e) => {
    return setDropwdown(!dropwdown);
  };


  const popperConfig = {
    placement: "bottom-end",
    modifiers: [
      {
        name: "flip",
        enabled: false,
      },
    ],
  }; /*
  fetch(
    `https://v6.exchangerate-api.com/v6/53fc54f1da350fcd30a8868c/latest/${c1}`
  )
    .then(res => res.json())
    .then(data => {
      const rates = data.conversion_rates[c2];
      rate = ` 1 ${c1} = ${c2}`;
      rateNumber.innerText = `${rates}`;
      amount2.value = (amount1.value * rates).toFixed(2);
    });
*/

function selectIcon(){
const peru='peruSelect.svg',ven='veneSelect.svg',arg='argSelect.svg'

switch (c2) {
  case 'COL':
    return 'bandera-col.svg';
  case 'PEN':
    return peru;
  case 'VES':
    return ven;
    case 'ARS':
      return arg;
  

  default:
  
  return 'bandera-col.svg'
}

}

  function handleChangeCountry(v) {
    let amount=  parseFloat((valueInput1 * data.conversion_rates[v].toFixed(3)).toFixed(3))
    setC2(v);
    setRate(parseFloat(data.conversion_rates[v].toFixed(3)));
if(amount===0){
  setValueInput2("");
}else{

  setValueInput2(
    parseFloat((valueInput1 * data.conversion_rates[v].toFixed(3)).toFixed(3))
    );
    setDataSendMoney({...dataSendMoney,receptor:{value:amount,country:v}})
  }
 
  }

  function handleChangeVal(event, input) {
    let amount
    if (input === "receptor") {
      let { value, max } = event.target;
      if (value === 0 || value === "") {
        setValueInput2("");
        setValueInput1("");
        
        setDataSendMoney({...dataSendMoney,  emisor:{
  
          value:''
        },
        receptor:{
  
          value:''
        }})
      } else {
        value = Math.max(Math.min(Number(max), Number(value)));
        setValueInput2(value);
        setValueInput1(
          parseFloat((value / data.conversion_rates[c2].toFixed(3)).toFixed(3))
        );
      amount= parseFloat((value / data.conversion_rates[c2].toFixed(3)).toFixed(3))

    setDataSendMoney({...dataSendMoney,emisor:{value:amount,country:"CLP"},receptor:{value:value}})

      }
    } else if (input === "emisor") {
      let { value, max } = event.target;
      if (value === 0 || value === "") {
        setValueInput1("");
        setValueInput2("");
        setDataSendMoney({...dataSendMoney,  emisor:{
     
          value:''
        },
        receptor:{
    
          value:''
        }})
        
      } else {
        value = Math.max(Math.min(Number(max), Number(value)));
        setValueInput1(value);
        setValueInput2(
          parseFloat((value * data.conversion_rates[c2].toFixed(3)).toFixed(3))
        );
        amount= parseFloat((value * data.conversion_rates[c2].toFixed(3)).toFixed(3))
        setDataSendMoney({...dataSendMoney,emisor:{value:value,country:"CLP"},receptor:{value:amount}})
      }
    }
  }

  

  useEffect(() => {

if(res){
return
}else{

  
  axios
  .get(
    `https://v6.exchangerate-api.com/v6/53fc54f1da350fcd30a8868c/latest/clp`
    )
    .then((res) => {
      console.log(res.data);
      setData(res.data);
      setRate(parseFloat((res.data.conversion_rates['COP']).toFixed(3)));
      setRes(true);
      setValueInput2(
        parseFloat(
          (1* res.data.conversion_rates['COP'].toFixed(3)).toFixed(3)
          )
          );
          setDataSendMoney({  emisor:{
            country:'CLP',
            value:1
          },
          receptor:{
            country:'COP',
            value: parseFloat(
              (1 * res.data.conversion_rates['COP'].toFixed(3)).toFixed(3)
              )
            }})
            setRes(true)
          })
          
          
        }
          
        }, [res]);
        /*
  const formatoNumber = (number) => {
    const exp = /(\d)(?=(\d{80})+(?!\d))/g;
    const rep = "$1,";
    return number.toString().replace(exp, rep);
  };
*/
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
              <span className=" icon-money">$</span>
            </div>
            <input
              id="sendMoney"
              type="number"
              value={dataSendMoney.emisor.value?? ''}
              className="form-control form-control-nuwy "
              max={20000}
              aria-label="Text input with dropdown button"
              onChange={(e) => handleChangeVal(e, "emisor")}
            />

            <button className=" dropdown-nuwy " disabled type="button">
              <img src="/svg/bandera-chile.svg" alt="banderaChile" />
            </button>
          </div>
          <div className="d-flex flex-wrap">

          <span className="span-nuwy">
            Te damos:{" "}
            <b>
              {" "}
              {rate} {c2}
            </b>{" "}
            por <b>CLP</b>
          </span>
          <span className="span-nuwy">
          Monto máximo a transferir:{" "}
            <b>
            $20.000 CLP
            </b>{" "}
            
          </span>
          </div>
        
        </article>
 
        <article className="mb-3  w-100">
          <label className="labelForm" htmlFor="getMoney">
            El receptor recibe
          </label>
          <div className="input-group mb-2  position-relative">
            <div className="position-absolute top-50 start-0 translate-middle-y ms-3 spanMoneyIcon">
              <span className=" icon-money">$</span>
            </div>
            <input
              type="number"
              id="getMoney"
              className="form-control form-control-nuwy-number   "
              aria-label="Text input with dropdown button"
              value={dataSendMoney.receptor.value?? ''}

              max={
                res? 
                (

                  parseFloat(
                    (20000 * data.conversion_rates[c2].toFixed(3)).toFixed(3)
                    )
                    
                    )
                  : 2000000
              }
              onChange={(e) => handleChangeVal(e, "receptor")}
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
                      dropwdown ? "lineVertical.svg" : (
                        selectIcon()
                        )
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
                  <Dropdown.Item
                    href="#/action-2"
                    className="textIconScroll"
                    onClick={() => handleChangeCountry("COP")}
                  >
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
                  <Dropdown.Item
                    href="#/action-2"
                    className="textIconScroll"
                    onClick={() => handleChangeCountry("ARS")}
                  >
                    <span className="spanIconScroll ">
                      <img
                        src={`/svg/argentina.svg`}
                        width={16}
                        height={16}
                        alt="banderaChile"
                        className="me-1"
                      />
                      ARS
                    </span>
                    <span className="ms-1">Argentina</span>
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-2"
                    className="textIconScroll"
                    onClick={() => handleChangeCountry("PEN")}
                  >
                    <span className="spanIconScroll ">
                      <img
                        src={`/svg/peru.svg`}
                        alt="banderaPeru"
                        className="me-1"
                        width={16}
                        height={16}
                      />
                      PEN
                    </span>
                    <span className="ms-1">Peru</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2" className="textIconScroll"
                  onClick={() => handleChangeCountry("VES")}>
                    <span className="spanIconScroll ">
                      <img
                        src={`/svg/venezuela.svg`}
                        alt="banderaChile"
                        className="me-1"
                      />
                      VES
                    </span>
                    <span className="ms-1">Venezuela</span>
                  </Dropdown.Item>
                 
                </SimpleBarReact>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <span className="span-nuwy">
            Tu envío llegará a mas tardar en 24 horas
          </span>
        </article>

        <ConfirmNuwy datasend={dataSendMoney} />
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
