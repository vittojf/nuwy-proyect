import React, { createContext, useState,useEffect } from "react";
import { validate } from "rut.js";
const FormContext = createContext();
function DataContext({ children }) {
  const [dataBody, setDataBody] = useState({
    DatosUsuario: {
      email: "",
      rut: "",
      name: "",
    },
    DatosReceptor: {
      tipoCuenta: "Ahorro",
      name: "",
      dni: "",
      email: "",
      banco: "",
      nCuenta: "",
    },
    DatosCaptura: {},
  });
  const [dataSendMoney, setDataSendMoney] = useState({
    emisor: {
      country: "CLP",
      value: 1,
      countryName: "",

    },
    receptor: {
      country: "COP",
      countryName:'Colombia',

      value: "",
    },
  
  });

  const [data, setData] = useState([]);
  const [rate, setRate] = useState();
  const [res, setRes] = useState(false);
const [buttonDisabled, setButtonDisabled] = useState(false);
  const [value, setValue] = useState(new Date());
 

  function formatData(){
    setDataBody({
      DatosUsuario: {
        email: "",
        rut: "",
        name: "",
      },
      DatosReceptor: {
        tipoCuenta: "Ahorro",
        name: "",
        dni: "",
        email: "",
        banco: "",
        nCuenta: "",
      },
      DatosCaptura: {},
    })
    setRate(null)

    setRes(false)
  }



  useEffect(() => {
    const interval = setInterval(
      () => setValue(new Date()),
      1000
    );
 
    return () => {
      clearInterval(interval);
    }
  }, []);

useEffect(() => {
  if(value.toLocaleTimeString("es-CL",{
    timeZone: "America/Santiago",
    hour12: true, // false
    hour: "numeric", // 2-digit
    minute: "2-digit", // numeric
    second: "2-digit" // numeric
  })>='9:00:00 a. m.')
  {
    
    setButtonDisabled(false)
  }
  if(value.toLocaleTimeString("es-CL",{
    timeZone: "America/Santiago",
    hour12: true, // false
    hour: "numeric", // 2-digit
    minute: "2-digit", // numeric
    second: "2-digit" // numeric
  })>='6:00:00 p. m.'){
    
    setButtonDisabled(true)

  }

}, [value]);




  const validateRut = () => {
    return validate(dataBody["DatosUsuario"]["rut"]);
  };
  const datas = {
    dataBody,
    setDataBody,
    dataSendMoney,
    setDataSendMoney,
    setRes,
    res,
    data,
    setData,

    rate,
    setRate,
    validateRut,
    buttonDisabled,
    formatData
  };
  return <FormContext.Provider value={datas}>{children}</FormContext.Provider>;
}

export { DataContext };

export default FormContext;
