import axios from "axios";
import React from "react";
import CardForm from "../components/CardForm/CardForm";
import SectionBenefits from "../components/SectionBenefits/SectionBenefits";
import SectionStep from "../components/SectionStep/SectionStep";

import Navbars from "../components/Navbars/Navbars";
function Home() {
  const sendMail =async()=>{

        await axios
        .post("http://localhost:4000/send-mail",)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      }
  return (
    <>
      <Navbars />
    <div style={{ marginBottom: "5.5rem" }}>

      <CardForm />

      <SectionStep />
      <SectionBenefits />
    </div>
    </>
  );
}

export default Home;
/* <button onClick={sendMail}>Send prueba</button> */