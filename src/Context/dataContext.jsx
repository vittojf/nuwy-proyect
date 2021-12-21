import React, { createContext,useState  } from "react";
import {  validate, clean, format, getCheckDigit } from 'rut.js'
const FormContext = createContext()
function DataContext({children}) {
    const [dataBody, setDataBody] = useState({
        
        DatosUsuario:{
            "email": "",
            "rut": "",
            "name": ""
        },
        DatosReceptor:{
            "tipoCuenta":'Ahorro',
            "name": "",
            "dni": "",
            "email": "",
            "banco": "",
            "nCuenta": ""
        
    
    },
        DatosCaptura:{}
    });
    const [dataSendMoney, setDataSendMoney] = useState({
        emisor:{
          country:'',
          value:''
        },
        receptor:{
          country:'',
          value:''
        },
      });

      const [data, setData] = useState({});
      const [rate, setRate] = useState();
      const [res, setRes] = useState(false);
      //console.log(dataSendMoney)

      const validateRut=()=>{
       return validate(dataBody["DatosUsuario"]["rut"])
      }
const datas={dataBody,setDataBody,dataSendMoney,setDataSendMoney,setRes,res,data,setData,rate,setRate,validateRut}
    return <FormContext.Provider value={datas}>{children}</FormContext.Provider> 
}

export {DataContext}

export default FormContext;