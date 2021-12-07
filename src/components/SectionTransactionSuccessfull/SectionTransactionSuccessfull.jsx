import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import SectionFooter from "../SectionFooter/SectionFooter";
import SectionsNuwy from "../Sections/Sections";
import "./sectionSuccessfull.css";
function SectionTransactionSuccessfull() {
  return (
    <>
      <SectionsNuwy
        className="mt-4-5 mx-auto"
        title="Nuwy"
        titleClassName="mt-3 text-white text-center mb-4 "
        titleClassNameText="fs-1"
      >
        <div className="d-flex justify-content-center ">
          <div className="list-circle rounded-circle position-relative flex-shrink-0 checkSection">
            <span className="position-absolute top-50 start-50 translate-middle ">
              <img src="/svg/check.svg" alt="" />
            </span>
          </div>
        </div>
        <h4 className="text-center text-white my-4">Transacción exitosa</h4>
        <div className="d-flex justify-content-center text-white ">
          <div className="text-center mount-nuwy">
            <p className="mx-5 m-0">Monto transferido</p>
            <h3>$20.000 CLP</h3>
          </div>
          <img src="/svg/rowRightCheck.svg" alt="" />
          <div className="text-center mount-nuwy">
            <p className="mx-5 m-0">Receptor recibirá</p>
            <h3>$91.456 COP</h3>
          </div>
        </div>
        <div className="d-flex justify-content-center my-4 text-white mx-4">
          <div className="   list-circle rounded-circle position-relative  flex-shrink-0 bg-step-3-form ">
            <span className="position-absolute  start-50  translate-middle step-3-span">
              ¡
            </span>
          </div>
          <div className="body flex-grow-1 ms-2 ">
            <p className="text-body-contact-alert text-height text-step-3">
              <b>Luego de verificar la información</b> nos tomará un tiempo realizar la
              transferencia, al momento de realizarla te notificaremos a tu
              correo
            </p>
          </div>
        </div>

        <Card className="card-resume-step3 mx-auto text-center ">
          <div className="mx-3">
            <h6 className="mt-3">Datos cuenta bancaria Nuwy</h6>
          </div>
          <div className="d-flex bd-highligh  text-start body-list-data ">
            <ul className="flex-grow-1 bd-highlight">
              <li>
                <b>Nombre</b>
              </li>
              <li>
                <b>Rut</b>
              </li>
              <li>
                <b>Email</b>
              </li>
              <li>
                <b>Banco</b>
              </li>
              <li>
                <b>Tipo de Cuenta</b>
              </li>
              <li>
                <b>N° de cuenta</b>
              </li>
            </ul>
            <ul className=" bd-highlight">
              <li>nuwy</li>
              <li>00-000-000-N</li>
              <li>correo@gmail.com</li>
              <li>Banco</li>
              <li>Corriente</li>
              <li>00112354684</li>
            </ul>
          </div>
        </Card>
        <div className="mb-5" style={{margin:'0 2rem'}}>
        <Link
                  to={{
                      pathname: "/",
                    }}
                    className="text-white btn btn btn-nuwy-steps mt-3 "
                    
                    >
                 volver a inicio
                </Link>
        <button
        
                    className="text-white btn btn-cancel-step mt-3 "
                    
                    >
                  Descargar Comprobante
                </button>
                    </div>
      </SectionsNuwy>
      <SectionFooter />
    </>
  );
}

export default SectionTransactionSuccessfull;
