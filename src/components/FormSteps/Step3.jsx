import React, { useEffect, useState } from "react";
import { ButtonGroup, Card, ToggleButton } from "react-bootstrap";
import TopNambedInput from "../TopNambedInput/TopNambedInput";
import FormStep from "./FormSteps";
import "./styles/FormStep1.css";
import "./styles/FormStep3.css";

function Step3({ children, steps, setSteps }) {
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
      label: "Sube tu Captura",
      labelClass: "text-white ",
      inputClass: "text-white mt-1 mb-4 input-file",
      id: "name",
      type: "file",
      required: true,
      styleClassInputLabel:
        "label-file d-flex justify-content-center  flex-wrap text-center px-5 mb-4 mt-1",
      textInputLabelStyle: "debe ser JPG, PNG o PDF y no pesar mas de 10MB",
      imageLabel: "/svg/captureScreen.svg",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {children}
      <FormStep
        inputGroup={inputGroup}
        numberStep="3"
        steps={steps}
        setSteps={setSteps}
        stepClass={"my-4"}
        titleStep="¡Ve y transfiere!"
        ubicationChildren="outside-form"
        bodyFormClass="mx-3 "
      >
        <Card className="card-resume-step3 mx-auto text-center ">
          <div className="mx-3">
            <h6 className="mt-3">Datos cuenta bancaria Nuwy</h6>
          </div>
          <div className="d-flex bd-highligh  text-start body-list-data ">
            <ul className="flex-grow-1 bd-highlight">
              <li>
                <b>Nombre</b>
              </li>
              <li>
                <b>Rut</b>
              </li>
              <li>
                <b>Email</b>
              </li>
              <li>
                <b>Banco</b>
              </li>
              <li>
                <b>Tipo de Cuenta</b>
              </li>
              <li>
                <b>N° de cuenta</b>
              </li>
            </ul>
            <ul className=" bd-highlight">
              <li>nuwy</li>
              <li>00-000-000-N</li>
              <li>correo@gmail.com</li>
              <li>Banco</li>
              <li>Corriente</li>
              <li>00112354684</li>
            </ul>
          </div>
        </Card>

        <div className="d-flex justify-content-center mt-3 text-white mx-3">
          <div className="   list-circle rounded-circle position-relative  flex-shrink-0 bg-step-3-form ">
            <span className="position-absolute  start-50  translate-middle step-3-span">
              ¡
            </span>
          </div>
          <div className="body flex-grow-1 ms-2 ">
            <p className="text-body-form text-height text-step-3">
              Luego de que transfieras sube el capture de la transferencia para
              que nuestros ejecutivos validen la información{" "}
            </p>
          </div>
        </div>
      </FormStep>
    </>
  );
}

export default Step3;
