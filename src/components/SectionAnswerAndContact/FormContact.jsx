import React from 'react';
import TopNambedInput from '../TopNambedInput/TopNambedInput'
function FormContact() {
    const inputGroup = [
        {
          label: "Nombre y Apellido",
          labelClass: "text-white ",
          inputClass: " mt-1 form-step-1 form-none ",
          id: "name",
          required:true
        },
        {
          label: "Correo electronico",
          labelClass: "text-white",
          inputClass: "mt-1 form-step-1 form-none  ",
          id: "correo",
         type:'email',
          boxClass: "my-4",
          required:true
        },
      ];
    return ( <section className="my-5  text-start sectionContact " id="contacto">

        <h6 className="text-title-nuwy text-center mb-4">¿No encuentras tu respuesta? escríbenos</h6>
     {inputGroup.map((el) => {
              return (
                <div className={` text-start ${el.boxClass}`} key={el.id}>
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

            <label htmlFor="mensage" className="text-white label-text">Mensaje</label>
            <textarea name="mensage" id="mensage" cols="30" rows="10" className="textarea-mensaje"></textarea>
<button className="btn btn-nuwy-modal w-100 mt-4"> Enviar</button>
    </section> );
}

export default FormContact;