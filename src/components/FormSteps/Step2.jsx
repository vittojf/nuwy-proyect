import React, { useState } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import TopNambedInput from "../TopNambedInput/TopNambedInput";
import FormStep from "./FormSteps";
import "./styles/FormStep1.css";

function Step2({children,steps,setSteps}) {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "Ahorro", value: "1" },
    { name: "Corriente", value: "2" },
    { name: "Especial", value: "3" },
  ];

  /*
  label={el.label}
  LabelClassName={el.LabelClass}
  inputClassName={el.inputClass}
  id={el.id}
  spanClassName={el.textSpan}*/
  const inputGroup = [
    {
      label: "Nombre y Apellido",
      labelClass: "text-white",
      inputClass: " mt-1 form-step-1",
      id: "name",
      type: "text",
      required: true,
    },
    {
      label: "Numero de identificación",
      labelClass: "text-white",
      inputClass: "mt-1 form-step-1",
      id: "dni",
      textSpan: "DNI - CÉDULA - RUT",
      spanClass: "ms-2 spanText",
      boxClass: "my-4",
      type: "text",
      required: true,
    },
    {
      label: "Correo Electronico",
      labelClass: "text-white",
      inputClass: " mt-1 form-step-1",
      id: "email",
      type: "email",
      required: true,
    },
  ];

  return (
    <>
{children}
      <FormStep
        inputGroup={inputGroup}
        numberStep="2"
     classButton={"mt-2 mb-5"}
        steps={steps}
        setSteps={setSteps}
        textStep=" Ingresa los datos personales y bancarios de la persona que recibirá el dinero, asegurate que no hayan errores"
        titleStep="Ingresa los datos del receptor"
        ubicationChildren="inside-form"
      >
        <div className="my-4">
          <label htmlFor="select" className="text-white">
            Banco
          </label>
          <select id="select" name="select" className="mt-1">
            <option hidden selected>
              Elige un Banco
            </option>
            <option value="value">Value 1</option>
            <option value="value2">Value 2</option>
            <option value="value3">Value 3</option>
          </select>
        </div>
        <div className="d-flex justify-content-between checkbox-nuwy ">
          <label
            htmlFor="ahorro"
            className={`btn btn-nuwy-step ${radioValue === "1" && "actives"}`}
          >
            Ahorro
          </label>
          <input
            type="radio"
            id="ahorro"
            value="1"
            name="ahorro"
            checked={radioValue === "1"}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          />

          <label
            htmlFor="corriente"
            className={`btn btn-nuwy-step ${radioValue === "2" && "actives"}`}
          >
            Corriente
          </label>
          <input
            type="radio"
            id="corriente"
            value="2"
            name="corriente"
            checked={radioValue === "2"}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          />

          <label
            htmlFor="especial"
            className={`btn btn-nuwy-step ${radioValue === "3" && "actives"}`}
          >
            Especial
          </label>
          <input
            type="radio"
            id="especial"
            value="3"
            name="especial"
            checked={radioValue === "3"}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          />
        </div>
      
        <TopNambedInput
         label="Numero de Cuenta"
         labelClassName="text-white mt-4"
         inputClassName=" form-step-1"
         id="nCuenta"    
         type="number"
         required={true}
        />
<div className="mx-4 text-center span-nuwy-step float mt-4-5">

        <span className="text-white ">Asegurate que los datos sean correctos de lo
contrario puede ser rechazado tu envío</span>
</div>
      </FormStep>
    </>
  );
}

export default Step2;
