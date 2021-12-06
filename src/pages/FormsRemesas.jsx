import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Card from "../components/Card/Card";
import CardDataSend from "../components/CardDataSend/CardDataSend";
import Step1 from "../components/FormSteps/Step1";
import Step2 from "../components/FormSteps/Step2";
import Step3 from "../components/FormSteps/Step3";
import '../styles/FormsRemesas.css'
function FormsRemesas() {
  const [steps, setSteps] = useState(1);
  const location = useLocation();
  const from = location.state;
  console.log(from);
  return (
    <section className="container mt-80">
   
   {
     steps===1&& <Step1 setSteps={setSteps } steps={steps}>
<div className="d-flex justify-content-between  justify-content-lg-start   align-items-center mb-5">
    <Link to="/" className="text-white ms-4 fs-5  ">
     <img src="/svg/rowLeft.svg" alt="rowLeft" className="me-2"/> Volver
    </Link>
    <Card
      className="card  card-remesas text-white w-50 ms-5 me-3"
      classNameBody=" d-flex justify-content-center flex-wrap text-center align-content-center"
      >
      <div className="mb-2">
      <p className="m-0 mx-5 ">Enviarás:</p>
        <span >
          <img src="/svg/chile.svg" alt="" /> $ 20.000 CLP{" "}
        </span>
      </div>
      <div>
      <p className="m-0  mx-5 ">Recibirás:</p>
        <span>
          <img src="/svg/colombia.svg" alt="" /> $ 91.456 CLP{" "}
        </span>
      </div>
    </Card>
  </div>
     </Step1>
    }
    {
      steps===2&&<Step2 setSteps={setSteps} steps={steps}>
        <div className="d-flex justify-content-between  justify-content-lg-start   align-items-center mb-5">
    <Link to="/" className="text-white ms-4 fs-5  ">
     <img src="/svg/rowLeft.svg" alt="rowLeft" className="me-2"/> Volver
    </Link>
    <Card
      className="card  card-remesas text-white w-50 ms-5 me-3"
      classNameBody=" d-flex justify-content-center flex-wrap text-center align-content-center"
      >
      <div className="mb-2">
      <p className="m-0 mx-5 ">Enviarás:</p>
        <span >
          <img src="/svg/chile.svg" alt="" /> $ 20.000 CLP{" "}
        </span>
      </div>
      <div>
      <p className="m-0  mx-5 ">Recibirás:</p>
        <span>
          <img src="/svg/colombia.svg" alt="" /> $ 91.456 CLP{" "}
        </span>
      </div>
    </Card>
  </div>
      </Step2>
    }
    {
      steps===3&&<Step3 setSteps={setSteps} steps={steps}/>
    }
   
    
    </section>
  );
}

export default FormsRemesas;
