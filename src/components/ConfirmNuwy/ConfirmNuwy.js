import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";
import Navbars from "../Navbars/Navbars";
import "./ConfirmNuwy.css";
import TerminosCondiciones from "./TerminosCondiciones";
function MyVerticallyCenteredModal(props) {
  const [fullScreen, setFullScreen] = useState(false);


  function handleScreen(){
setFullScreen(true)

  }

  return (
    <>
      <Modal
        {...props}
        
        aria-labelledby="contained-modal-title-vcenter"
        centered
        fullscreen={fullScreen}
        contentClassName={fullScreen?'':"modalNuwyConfirm"}
        backdropClassName="modalNuwyBackdrop"
      >
        <Modal.Body className="text-center overflow-hidden">
          {
            fullScreen?<>
            <Navbars/>
        <div className="d-flex justify-content-between  justify-content-lg-start align-items-end mt-2 mb-3" style={{height:'15%'}}>
    <button className=" text-white ms-4 fs-5 btnReset btn-terminos d-flex align-items-center  " onClick={()=>setFullScreen(false)} >
     <img src="/svg/rowColor.svg" alt="rowLeft" className="me-2"/>
    Volver
    </button>
    </div>
            <SimpleBarReact
                  style={{ maxHeight: "80%" }}
                  scrollbarMaxSize="87"
                  forceVisible="y"
                  autoHide={true}
                  overflow-x="hidden"
                  
                >
            <div className="text-condition mx-3 me-4">
            <h5 className="fs-10 text-center my-4 text-condition-title">Términos y condiciones de uso de sitio web</h5>
      
            <TerminosCondiciones></TerminosCondiciones>
            </div>
            </SimpleBarReact>
            </>
            
            :<>
              <h1 className="fs-10 text-center my-4">Nuwy</h1>
          <div className="text-center container body-modal-text">
            <p className="text-modal">
              Al continuar estás aceptando todos nuestros términos y condiciones
            </p>
          </div>
            <button className="btn btn-modal" onClick={handleScreen}>
            <a href="/#2" className="link-modal-terminos">
              {" "}
              Terminos & Condiciones
            </a>
            <img src="/svg/rowRigth.svg" alt="row" className="icon-modal" />
          </button>
            </>
          }
          
        </Modal.Body>
        <Modal.Footer className="d-flex flex-nowrap justify-content-center">
          <Link to="/sendMoney" className="btn btn-nuwy-modal"   state={ props.datasend}>

            Aceptar y continuar

          </Link>
    
          <button className="btn-cancel " onClick={()=>{
            props.onHide()
          setFullScreen(false)
          }}>
            Cancelar
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function ConfirmNuwy(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <button
        type="button"
        className="btn btn-send-nuwy "
        onClick={() => setModalShow(true)}
      >
        Enviar Dinero
      </button>

      <MyVerticallyCenteredModal
      datasend={props.datasend}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ConfirmNuwy;
