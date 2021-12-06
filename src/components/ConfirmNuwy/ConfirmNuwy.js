import React from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./ConfirmNuwy.css";
function MyVerticallyCenteredModal(props) {
  return (
    <>
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        contentClassName="modalNuwyConfirm"
        backdropClassName="modalNuwyBackdrop"
      >
        <Modal.Body className="text-center">
          <h1 className="fs-10 text-center my-4">Nuwy</h1>
          <div className="text-center container body-modal-text">
            <p className="text-modal">
              Al continuar estás aceptando todos nuestros términos y condiciones
            </p>
          </div>
          <button className="btn btn-modal">
            <a href="/#2" className="link-modal-terminos">
              {" "}
              Terminos & Condiciones
            </a>
            <img src="/svg/rowRigth.svg" alt="row" className="icon-modal" />
          </button>
        </Modal.Body>
        <Modal.Footer className="d-flex flex-nowrap justify-content-center">
          <Link to="/sendMoney" className="btn btn-nuwy-modal"   state={{ monedas:{clp:{cantidad:1},col:{total:1546}} }}>

            Aceptar y continuar

          </Link>
    
          <button className="btn-cancel " onClick={props.onHide}>
            Cancelar
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function ConfirmNuwy() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <button
        type="button"
        className="btn btn-send-nuwy mt-2"
        onClick={() => setModalShow(true)}
      >
        Enviar Dinero
      </button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ConfirmNuwy;
