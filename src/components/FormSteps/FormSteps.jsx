import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FormContext from "../../Context/dataContext";
import TopNambedInput from "../TopNambedInput/TopNambedInput";
import {toast,Toaster} from 'react-hot-toast'
import "./styles/FormStep1.css";
function FormStep({
  children,
  inputGroup,
  numberStep,
  titleStep,
  textStep,
  setSteps,
  steps,
  format,
  classButton,
  stepClass,
  ubicationChildren,
  bodyFormClass,
  resImage
}) {
  const { dataBody, rate, dataSendMoney, setRes,validateRut } = useContext(FormContext);

  return (
    <>
      <section className="container">
        <div className="d-flex justify-content-center justify-content-sm-start">
          <div
            className={`d-flex align-items-center  text-white ${stepClass} `}
          >
            <div className="   list-circle rounded-circle position-relative flex-shrink-0 bg-step-form ">
              <span className="position-absolute top-50 start-50 translate-middle title-size-form">
                {numberStep}
              </span>
            </div>
            <div className="body flex-grow-1 ms-12px ">
              <h6 className=" roboto-bold">{titleStep}</h6>
              {textStep ? (
                <div className="">
                  <p className="text-body-form text-height">{textStep}</p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        {ubicationChildren === "outside-form" && children}

        <div className={`formStep1 ${bodyFormClass}`}>
          {inputGroup.map((el) => {
            return (
              <div className={` ${el.boxClass}`} key={el.id}>
                <TopNambedInput
                  label={el.label}
                  labelClassName={el.labelClass}
                  inputClassName={el.inputClass}
                  id={el.id}
                  spanClassName={el.spanClass}
                  spanText={el.textSpan}
                  type={el.type}
                  name={el.name}
                  value={el.value}
                  preview={el.preview}
                  onChange={el.onChange}
                  required={el.required}
                  fileName={el.fileName}
                  styleClassInputLabel={el.styleClassInputLabel}
                  textInputLabelStyle={el.textInputLabelStyle}
                  imageLabel={el.imageLabel}
                />
              </div>
            );
          })}
          {ubicationChildren === "inside-form" && children}

          {(() => {
            switch (steps) {
              case 1:
                return (
                  <button
                    className={`btn btn-nuwy-steps  ${classButton}`}
                    type="submit"
                    disabled={
                      !(
                        dataBody["DatosUsuario"]["name"] !== "" &&
                        dataBody["DatosUsuario"]["rut"] !== "" &&
                        dataBody["DatosUsuario"]["email"] !== ""
                      )
                    }
                    onClick={() => {
                      let res =validateRut()

                      if(res){

                        setSteps(steps + 1)
                      }else{
                        toast.error("RUT Incorrecto",{
                          position:"top-right",
                          reverseOrder:true,
                          style:{
                            marginTop:'10px'
                          }
                        
                        })
                      }
                    
                    }}
                  >
                    Continuar
                  </button>
                );
              case 2:
                return (
                  <button
                    className={`btn btn-nuwy-steps  ${classButton}`}
                    type="submit"
                    disabled={
                      !(
                        dataBody["DatosReceptor"]["tipoCuenta"] !== "" &&
                        dataBody["DatosReceptor"]["dni"] !== "" &&
                        dataBody["DatosReceptor"]["name"] !== "" &&
                        dataBody["DatosReceptor"]["email"] !== "" &&
                        dataBody["DatosReceptor"]["banco"] !== "" &&
                        dataBody["DatosReceptor"]["nCuenta"] !== "" 
                     
                        
                      )
                    }
                    onClick={() => setSteps(steps + 1)}
                  >
                    Continuar
                  </button>
                );
              case 3:
                return (<>
                  {resImage?
                  <Link
                    className={`btn btn-nuwy-steps  ${classButton}`}
                    to="/successfullTransacction"
                    disabled={true}
                    onClick={() => setRes(false)}
                    state={{
                      rate: rate,
                      dataBody: dataBody,
                      dataSendMoney: dataSendMoney,
                    }}
                  >
                    Continuar
                  </Link>:
                <button  className={`btn btn-nuwy-steps  ${classButton}`}
                type="submit"
               disabled={true}
                >Continuar</button>}</>
                );
              default:
                return <></>;
            }
          })()}

         

          {steps === 3 && (
            <>
              <Link
                to={{
                  pathname: "/",
                }}
                className="text-white btn btn-cancel-step mt-3 "
                onClick={() => {
                  format();
                  setRes(false);
                }}
              >
                Cancelar y volver
              </Link>
              <div className="d-flex w-100  mt-4 justify-content-center align-items-center mb-5 ">
                <span>
                  <img
                    src="/svg/lock.svg"
                    alt="banderaChile"
                    className="me-1"
                  />
                </span>

                <span className="fs-8 ms-2  text-white">
                  Esta es una plataforma segura
                </span>
              </div>
            </>
          )}
        </div>
      <Toaster   gutter={2}
      containerClassName="mt-5"
        toastOptions={{
          // Define default options
          className: '',

          duration: 1200,}}/>
      </section>
    </>
  );
}

export default FormStep;
