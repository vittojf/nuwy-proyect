import React, { useState } from "react";
//import { ButtonGroup, ToggleButton } from "react-bootstrap";
import TopNambedInput from "../TopNambedInput/TopNambedInput";
import FormStep from "./FormSteps";
import "./styles/FormStep1.css";

function Step2({children,steps,setSteps,dataBody,setDataBody}) {
  //const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");
const [valRadio, setValRadio] = useState({
  val1:{value:1,checked:false},
  val2:{value:2,checked:false},
  val3:{value:3,checked:false}
});
const [selectValue, setSelectValue] = useState("default");
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
      value:dataBody.DatosReceptor.name??'',

      name: "name",
      onChange: handleOnChange,
    },
    {
      label: "Numero de identificación",
      labelClass: "text-white",
      inputClass: "mt-1 form-step-1",
      id: "dni",
      textSpan: "DNI - CÉDULA - RUT",
      spanClass: "ms-2 spanText",
      boxClass: "my-4",
      onChange: handleOnChange,
      value:dataBody.DatosReceptor.dni??'',
      name:'dni',
      type: "text",
      required: true,
    },
    {
      label: "Correo Electronico",
      labelClass: "text-white",
      inputClass: " mt-1 form-step-1",
      name:'email',
      value:dataBody.DatosReceptor.email??'',

      onChange: handleOnChange,
      id: "email",
      type: "email",
      required: true,
    },
  ];
console.log(dataBody  )
  function handleOnChange(e, name) {
    setDataBody({ ...dataBody, DatosReceptor: { 
    ...dataBody.DatosReceptor,  [name]: e 
    
    } 
    
    }
      
      );
  }

 
console.log(radioValue)
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
          <select id="select" value={selectValue}  name="select" className="mt-1" onChange={(e)=>{handleOnChange(e.target.value,'banco')
        setSelectValue(e.target.value)
        }}>
            <option value="default" hidden>
              Elige un Banco
            </option>
            <option value="value" >Value 1</option>
            <option value="value2" >Value 2</option>
            <option value="value3" >Value 3</option>
          </select>
        </div>
        <div className="d-flex justify-content-between checkbox-nuwy ">
          <label
            htmlFor="ahorro"
            className={`btn btn-nuwy-step ${dataBody.DatosReceptor.tipoCuenta==='Ahorro' && "actives"}`}
          >
            Ahorro
          </label>
          <input
            type="radio"
            id="ahorro"
            value={valRadio.val1.value}
            name="ahorro"
            checked={dataBody.DatosReceptor.tipoCuenta==='Ahorro'} 

            onChange={(e) =>{ 
              setRadioValue(e.currentTarget.value)
              handleOnChange('Ahorro','tipoCuenta')
            
            }}
            
          />

          <label
            htmlFor="corriente"
            className={`btn btn-nuwy-step ${dataBody.DatosReceptor.tipoCuenta==='Corriente' && "actives"}`}
          >
            Corriente
          </label>
          <input
            type="radio"
            id="corriente"
            value={valRadio.val2.value}

            name="corriente"
          
            checked={dataBody.DatosReceptor.tipoCuenta==='Corriente'} 

            
            onChange={(e) => {
              setRadioValue(e.currentTarget.value)
              handleOnChange('Corriente','tipoCuenta')
            }}
          />

          <label
            htmlFor="especial"
            className={`btn btn-nuwy-step ${dataBody.DatosReceptor.tipoCuenta==='Especial' && "actives"}`}
          >
            Especial
          </label>
          <input
            type="radio"
            id="especial"
            value={valRadio.val3.value}

            name="especial"
            checked={dataBody.DatosReceptor.tipoCuenta==='Especial'} 

           onChange={(e) => {setRadioValue(e.currentTarget.value)
              handleOnChange('Especial','tipoCuenta')
            
            }}
          />
        </div>
      
        <TopNambedInput
         label="Numero de Cuenta"
         labelClassName="text-white mt-4"
         inputClassName=" form-step-1"
         id="nCuenta"    
         type="number"
         required={true}
         name="nCuenta"
         onChange={ handleOnChange}
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
