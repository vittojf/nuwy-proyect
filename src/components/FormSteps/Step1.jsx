import React from "react";
import TopNambedInput from "../TopNambedInput/TopNambedInput";
import FormStep from "./FormSteps";
import "./styles/FormStep1.css";
function FormStep1({children,steps,setSteps}) {
  /*
  label={el.label}
  LabelClassName={el.LabelClass}
  inputClassName={el.inputClass}
  id={el.id}
  spanClassName={el.textSpan}*/
  const inputGroup = [
    {
      label: "Nombre y Apellido",
      labelClass: "text-white ",
      inputClass: " mt-1 form-step-1 ",
      id: "name",
      required:true
    },
    {
      label: "RUT",
      labelClass: "text-white",
      inputClass: "mt-1 form-step-1 ",
      id: "rut",
      textSpan: "Con punto y guión",
      spanClass: "ms-2 spanText",
      boxClass: "my-4",
      required:true
    },
    {
      label: "Correo Electronico",
      labelClass: "text-white ",
      inputClass: " mt-1 form-step-1 ",
      id: "email",
      required:true
    },
  ];

  return (
    <>
    {children}
      <FormStep
             steps={steps}
             setSteps={setSteps}
        inputGroup={inputGroup}
        numberStep="1"
        classButton="mt-4-5 mb-5"
        textStep=" Por seguridad te pediremos algunos datos para continuar con tu
                envío"
        titleStep="Ingresa tus datos"
      >
      
      </FormStep>
    </>
  );
}

export default FormStep1;
