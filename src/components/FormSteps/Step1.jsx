import React from "react";
//import TopNambedInput from "../TopNambedInput/TopNambedInput";
import FormStep from "./FormSteps";
import "./styles/FormStep1.css";
import {  validate, clean, format, getCheckDigit } from 'rut.js'
function FormStep1({ children, steps, setSteps, dataBody, setDataBody }) {
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
      name: "name",
      value:dataBody.DatosUsuario.name??'',
      onChange: handleOnChange,
      required: true,

    },
    {
      label: "RUT",
      labelClass: "text-white",
      inputClass: "mt-1 form-step-1 ",
      id: "rut",

      spanClass: "ms-2 spanText",
      boxClass: "my-4",
      name: "rut",
      value: format(dataBody.DatosUsuario.rut??null),
      onChange: handleOnChange,
      required: true, 
    },
    {
      label: "Correo Electronico",
      labelClass: "text-white ",
      inputClass: " mt-1 form-step-1 ",
      id: "email",
      name: "email",
      onChange: handleOnChange,
      required: true,
      value:dataBody.DatosUsuario.email??'',
    },
  ];
  console.log(dataBody);
  function handleOnChange(e, name) {
    if(name==='rut'){
     
      setDataBody({ ...dataBody, DatosUsuario: { 
        ...dataBody.DatosUsuario,  [name]:format(e) 
        
        } 
        
        }
          
          );
    }else{

      setDataBody({ ...dataBody, DatosUsuario: { 
        ...dataBody.DatosUsuario,  [name]: e 
    
      } 
    
    }
    
    );
  }
  }

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
      ></FormStep>
    </>
  );
}

export default FormStep1;
