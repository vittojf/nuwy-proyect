import React, { useEffect, useState, useRef, useContext } from "react";

import "./FormContent.css";
import ConfirmNuwy from "../ConfirmNuwy/ConfirmNuwy";
import axios from "axios";
import FormContext from "../../Context/dataContext";
import ListCountry from "./ListCountry/ListCountry";
import { useOutsideAlerter } from "../../hooks/useOutsideAlerter";


function FormConvert() {
  const [dropwdown, setDropwdown] = useState(false);

  const [valueInput1, setValueInput1] = useState(1);

  // const [c1, setC1] = useState();
  const [c2, setC2] = useState("COP");

  const {
    dataSendMoney,
    setDataSendMoney,
    res,
    setRes,
    data,
    setData,
    setRate,
    rate,
  } = useContext(FormContext);

  const handleClassChange = (e) => {
    return setDropwdown(!dropwdown);
  };


  function selectIcon() {
    const peru = "peruSelect.svg",
      ven = "veneSelect.svg",
      arg = "argSelect.svg";

    switch (c2) {
      case "COL":
        return "bandera-col.svg";
      case "PEN":
        return peru;
      case "VES":
        return ven;
      case "ARS":
        return arg;

      default:
        return "bandera-col.svg";
    }
  }

  function handleChangeCountry(v) {
    let amount = parseFloat(
      (valueInput1 * data.conversion_rates[v].toFixed(3)).toFixed(3)
    );
    setC2(v);
    setRate(parseFloat(data.conversion_rates[v].toFixed(3)));
    if (amount === 0) {
    } else {
      setDataSendMoney({
        ...dataSendMoney,
        receptor: { value: amount, country: v },
      });
    }
  }

  function handleChangeVal(event, input) {
    let amount;
    if (input === "receptor") {
      let { value, max } = event.target;
      if (value === 0 || value === "") {
        setValueInput1("");

        setDataSendMoney({
          ...dataSendMoney,
          emisor: {
            value: "",
          },
          receptor: {
            value: "",
          },
        });
      } else {
        value = Math.max(Math.min(Number(max), Number(value)));

        setValueInput1(
          parseFloat((value / data.conversion_rates[c2].toFixed(3)).toFixed(3))
        );
        amount = parseFloat(
          (value / data.conversion_rates[c2].toFixed(3)).toFixed(3)
        );

        setDataSendMoney({
          ...dataSendMoney,
          emisor: { value: amount, country: "CLP" },
          receptor: { value: value },
        });
      }
    } else if (input === "emisor") {
      let { value, max } = event.target;
      if (value === 0 || value === "") {
        setValueInput1("");

        setDataSendMoney({
          ...dataSendMoney,
          emisor: {
            value: "",
          },
          receptor: {
            value: "",
          },
        });
      } else {
        value = Math.max(Math.min(Number(max), Number(value)));
        setValueInput1(value);

        amount = parseFloat(
          (value * data.conversion_rates[c2].toFixed(3)).toFixed(3)
        );
        setDataSendMoney({
          ...dataSendMoney,
          emisor: { value: value, country: "CLP" },
          receptor: { value: amount },
        });
      }
    }
  }

  useEffect(() => {
    if (res) {
      return;
    } else {
      axios
        .get(
          `https://v6.exchangerate-api.com/v6/53fc54f1da350fcd30a8868c/latest/clp`
        )
        .then((res) => {
          console.log(res.data);
          setData(res.data);
          setRate(parseFloat(res.data.conversion_rates["COP"].toFixed(3)));
          setRes(true);

          setDataSendMoney({
            emisor: {
              country: "CLP",
              value: 1,
            },
            receptor: {
              country: "COP",
              value: parseFloat(
                (1 * res.data.conversion_rates["COP"].toFixed(3)).toFixed(3)
              ),
            },
          });
          setRes(true);
        });
    }
  }, [res, setData, setDataSendMoney, setRate, setRes]);
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
    <div className="mt-2 formConvert">

        <div className="row  row-cols-1 row-cols-lg-3 row-cols-xl-3 row-cols-md-1 justify-content-center ">


        <article className="mb-3 col">
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
              value={dataSendMoney.emisor.value ?? ""}
              className="form-control form-control-nuwy-number  "
              max={20000}
              min={0}
              aria-label="Text input with dropdown button"
              onChange={(e) => handleChangeVal(e, "emisor")}
            />

            <button className=" dropdown-nuwy " disabled type="button">
              <img src="/svg/bandera-chile.svg" alt="banderaChile" />
            </button>
          </div>
          <div className="row row-cols-1">
            <span className="span-nuwy">
              Te damos:{" "}
              <b>
                {" "}
                {rate} {c2}
              </b>{" "}
              por <b>CLP</b>
            </span>
            <span className="span-nuwy">
              Monto máximo a transferir: <b>$20.000 CLP</b>{" "}
            </span>
          </div>
        </article>

        <article className="mb-3 col ">
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
              value={dataSendMoney.receptor.value ?? ""}
              min={0}
              
              max={
                res
                ? parseFloat(
                  (20000 * data.conversion_rates[c2].toFixed(3)).toFixed(3)
                  )
                  : 2000000
                }
              onChange={(e) => handleChangeVal(e, "receptor")}
            />

            <ListCountry
              handleClassChange={handleClassChange}
              wrapperRef={wrapperRef}
              selectIcon={selectIcon}
              dropwdown={dropwdown}
              handleChangeCountry={handleChangeCountry}
            />
          </div>
          <span className="span-nuwy">
            Tu envío llegará a mas tardar en 24 horas
          </span>
        </article>
        <article className="col ">
    
          <div className="mt-4">

        <ConfirmNuwy datasend={dataSendMoney} />
          </div>
        <div className="d-flex w-100 justify-content-center align-items-center spanSegurity ">
          <span>
            <img src="/svg/lock.svg" alt="banderaChile" className="me-1" />
          </span>

          <span className="fs-8 ms-2 mt-1">Esta es una plataforma segura</span>
        </div>
        </article>
              </div>
<section className="d-flex flex-wrap ">

      </section>
    </div>
  );
}

export default FormConvert;
