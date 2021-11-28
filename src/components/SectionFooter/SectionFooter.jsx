import React from "react";
import ListRedSocial from "./ListRedSocial";
import "./SectionFooter.css";

function SectionFooter() {

    const redes={
        item:[
            {
                url:'svg/facebook.svg',
                alt:'facebook',
                imgClassName:'',
                className:''
            },
            {
                url:'svg/instagram.svg',
                alt:'instagram',
                imgClassName:'',
                className:''
            },
            {
                url:'svg/youtube.svg',
                alt:'youtube',
                imgClassName:'',
                className:''
            },
            {
                url:'svg/twitter.svg',
                alt:'twitter',
                imgClassName:'',
                className:''
            },
            {
                url:'svg/linkedin.svg',
                alt:'linkedin',
                imgClassName:'',
                className:''
            },
        ],
        className:'d-flex justify-content-center position-absolute mb-5 bottom-0 start-50 end-50',
        type:'itemIcon'
        
    }
  return (
    <footer className="bg-footer container-footer shadow-xl pb-4-5 ">
      <section className="mt-100   py-5   pb-10 ">
          
        <h1 className="text-white mb-3">Nuwy</h1>
        <div className="row row-cols-1 row-cols-lg-4 ">
      
          <div className="col mt-3">
            <h6>Transferir dinero</h6>
            <p>Transferir</p>
            <p>Pasos para transferir</p>
          </div>

          <div className="col mt-3 ">
            <h6>Empresas y equipo</h6>
            <p>Nosotros</p>
          </div>
          <div className="col mt-3">
            <h6>Ayuda</h6>
            <p>Preguntas Frecuentes</p>
            <p>Contacto</p>
          </div>
          <div className="col mt-3">
            <h6>Legal</h6>
            <p>Terminos y Condiciones</p>
          </div>
        </div>

        
      </section>
  
      <div className=" position-relative ">

<ListRedSocial redes={redes}/>
</div>

    </footer>
  );
}

export default SectionFooter;
