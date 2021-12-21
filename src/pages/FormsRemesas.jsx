import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Card from "../components/Card/Card";
//import CardDataSend from "../components/CardDataSend/CardDataSend";
import Step1 from "../components/FormSteps/Step1";
import Step2 from "../components/FormSteps/Step2";
import Step3 from "../components/FormSteps/Step3";
import FormContext from "../Context/dataContext";
import '../styles/FormsRemesas.css'
function FormsRemesas() {
  const [steps, setSteps] = useState(1);
  const location = useLocation();
  const from = location.state;

  const {dataBody,setDataBody} = useContext(FormContext)
  function selectIcon(v){
    const peru='peruFlag.svg',ven='venezuelaFlag.svg',arg='argentinaFlag.svg'
    
    switch (v) {
      case 'COL':
        return 'colombia.svg';
      case 'PEN':
        return peru;
      case 'VES':
        return ven;
        case 'ARS':
          return arg;
      
    
      default:
      
      return 'colombia.svg'
    }
    
    }
  return (
    <section className="container mt-80">
   
   {
     steps===1&& <Step1 setSteps={setSteps } setDataBody={setDataBody} dataBody={dataBody} steps={steps}>
<div className="d-flex justify-content-between  justify-content-lg-start   align-items-center mb-5">
    <Link to="/" className="text-white ms-4 fs-5  d-flex align-items-center">
     <img src="/svg/rowLeft.svg" alt="rowLeft" className="me-2"/> Volver
    </Link>
    <Card
      className="card  card-remesas text-white w-50 ms-5 me-3"
      classNameBody=" d-flex justify-content-center flex-wrap text-center align-content-center"
      >
      <div className="mb-2">
      <p className="m-0 mx-5 ">Enviarás:</p>
        <span >
          <img src="/svg/chile.svg" alt="" /> $ {from.emisor.value} CLP{" "}
        </span>
      </div>
      <div>
      <p className="m-0  mx-5 ">Recibirás:</p>
        <span> 
          <img src={`/svg/${selectIcon(from.receptor.country)}`} alt="" /> $ {from.receptor.value} {from.receptor.country}  {" "}
        </span>
      </div>
    </Card>
  </div>
     </Step1>
    }
    {
      steps===2&&<Step2 setSteps={setSteps} steps={steps} setDataBody={setDataBody} dataBody={dataBody} >
        <div className="d-flex justify-content-between  justify-content-lg-start   align-items-center mb-5">
    <button className=" text-white ms-4 fs-5 btnReset d-flex align-items-center  " onClick={()=>setSteps(1)} >
     <img src="/svg/rowLeft.svg" alt="rowLeft" className="me-2"/>
    Volver
    </button>
    <Card
      className="card  card-remesas text-white w-50 ms-5 me-3"
      classNameBody=" d-flex justify-content-center flex-wrap text-center align-content-center"
      >
      <div className="mb-2">
      <p className="m-0 mx-5 ">Enviarás:</p>
        <span >
          <img src="/svg/chile.svg" alt="" /> $ {from.emisor.value} CLP{" "}
        </span>
      </div>
      <div>
      <p className="m-0  mx-5 ">Recibirás:</p>
        <span>
          <img src="/svg/colombia.svg" alt="" /> $ {from.receptor.value} {from.receptor.country}{" "}
        </span>
      </div>
    </Card>
  </div>
      </Step2>
    }
    {
      steps===3&&<Step3 setSteps={setSteps} steps={steps} setDataBody={setDataBody} dataBody={dataBody} />
    }
   
    
    </section>
  );
}

export default FormsRemesas;
