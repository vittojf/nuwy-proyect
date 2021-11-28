import React from 'react';

function Card({children,className,routeImg,altImg,animation}) {
    return ( 
        
  <div className={`card border-radius-16 shadow-card-nuwy ${className}`} style={{width: "100%",height:"auto"}} data-aos={animation?animation:''}>
      {routeImg?<div className="mb-5 " ><img src={routeImg} alt={altImg} className="position-absolute top-0 start-50 translate-middle "/></div>:''}
    <div className="card-body ">
      {children}
      
    </div>
  </div>
 );
}

export default Card;