import axios from 'axios';
import React,{useState} from 'react';
import { Spinner } from 'react-bootstrap';
import TopNambedInput from '../TopNambedInput/TopNambedInput'
function FormContact() {

  const [data, setData] = useState({
    name:'',
    email:'',
    message:''
  });
  const [res, setRes] = useState(false);
    const inputGroup = [
        {
          label: "Nombre y Apellido",
          labelClass: "text-white ",
          inputClass: " mt-1 form-step-1 form-none ",
          id: "name",
          name:"name",
          value:data.name,
          onChange: handleOnChange,
          required:true
        },
        {
          label: "Correo electronico",
          labelClass: "text-white",
          inputClass: "mt-1 form-step-1 form-none  ",
          id: "correo",
         type:'email',
         name:"email",
         value:data.email,
          boxClass: "my-4",
          onChange: handleOnChange,
          required:true
        },
      ];

function  handleOnChange(e,name){
  setData({ ...data,  [name]: e}) 
        }


async function sendMessageContact(){
setRes(true)
  axios
        .post("https://nuwy-api-app.herokuapp.com/send-mail-contact", data)
        .then((res) => {
          setRes(false) 
            alert("Mensaje Enviado");
          
          
        }).catch(res=>{
         
          setRes(false)
          alert('Mensaje Fallido')

        })
}        
     
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

            <label htmlFor="message" className="text-white label-text">Mensaje</label>
            <textarea name="message" id="message" cols="30" rows="10" className="textarea-mensaje"  onChange={(e)=>handleOnChange(e.target.value,e.target.name)}></textarea>
          
<button className="btn btn-nuwy-modal w-100 mt-4" onClick={sendMessageContact} disabled={data.email===''||data.name===''||data.message===''}>

{res?<Spinner animation="border" variant="dark" />:'Enviar'}


</button>
    </section> );
}

export default FormContact;