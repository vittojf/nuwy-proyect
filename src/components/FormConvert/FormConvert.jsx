import React from "react";

function FormConvert() {
  return (
    <>
      <section className="d-flex flex-wrap mt-2">
        <article className="mb-3">
          <label className="labelForm" htmlFor="sendMoney">Tú envías</label>
          <div className="input-group  mb-2">
            <input
              id="sendMoney"
              type="text"
              className="form-control form-control-nuwy  "
              aria-label="Text input with dropdown button"
              value="$20.000"
              disabled
            />

            <button className=" dropdown-nuwy " disabled type="button">
              <img src="/svg/bandera-chile.svg" alt="banderaChile" />
            </button>
          </div>
          <span className="span-nuwy">
            Te damos: <b>4,66 COP</b> por <b>CLP</b>
          </span>
        </article>
        <article className="mb-3">
        <label className="labelForm" htmlFor="getMoney">El receptor recibe</label>
          <div className="input-group mb-2 ">
            <input
              type="text"
              id="getMoney"
              className="form-control form-control-nuwy  "
              aria-label="Text input with dropdown button"
             
            
            />

            <button className=" dropdown-nuwy bg-btn-nuwy" disabled type="button">
              <img src="/svg/bandera-col.svg" alt="banderaChile" />
            </button>
          </div>
          <span className="span-nuwy">
          Tu envío llegará a mas tardar en 24 horas

          </span>
        </article>


        <button type="button" class="btn btn-send-nuwy">Enviar Dinero</button>




      </section>
    </>
  );
}

export default FormConvert;
