import React from "react";
import { Link } from "react-router-dom";
import TopNambedInput from "../TopNambedInput/TopNambedInput";
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
}) {
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
          <form>
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
                    required={el.required}
                    styleClassInputLabel={el.styleClassInputLabel}
                    textInputLabelStyle={el.textInputLabelStyle}
                    imageLabel={el.imageLabel}
                  />
                </div>
              );
            })}
            {ubicationChildren === "inside-form" && children}

            {steps===3 ?
            <Link
            className={`btn btn-nuwy-steps  ${classButton}`}
              to="/successfullTransacction"
     
          >
            Continuar
          </Link> : 
              <button
              className={`btn btn-nuwy-steps  ${classButton}`}
              type="submit"
              onClick={() => setSteps(steps + 1)}
            >
              Continuar
            </button>
          }
        


            {steps === 3 && (
              <>
                <Link
                  to={{
                   pathname: "/",
                  }}
                  className="text-white btn btn-cancel-step mt-3 "
                  onClick={format}
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
          </form>
        </div>
      </section>
    </>
  );
}

export default FormStep;
