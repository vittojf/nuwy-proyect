import React from "react";
import Card from "../Card/Card";
import FormConvert from "../FormConvert/FormConvert";
import './CardForm.css'

function CardForm() {

  return (
    <>
      <section className="mx-16 mt-100 mb-card">

          <div className="text-white text-center mx-14 ">
              <h3 className="mb-19 roboto-bold title-size">Quidam alii sunt, et non est in nostra potestate. Quae</h3>
              <p className="text-nuwy "> et non est Quidam alii sunt, et non est in nostra potestate. Quae omnia inpotestat</p>
          </div>


        
          <Card className="bg-card-nuwy text-white">
            <FormConvert/>

        </Card>
      </section>
    </>
  );
}

export default CardForm;
