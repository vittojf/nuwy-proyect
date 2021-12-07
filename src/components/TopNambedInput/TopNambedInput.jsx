import React from "react";

function TopNambedInput({ inputClassName, labelClassName, id, type,label,spanText,spanClassName,required,styleClassInputLabel,textInputLabelStyle,imageLabel }) {
  return (
    <>
      <label className={`labelForm ${labelClassName}`} htmlFor={id}>
        {label} <span className={spanClassName}>{spanText}</span>
      </label>
      
      {
        styleClassInputLabel? <label htmlFor={id} className={styleClassInputLabel}>
        <div className={styleClassInputLabel&& 'mt-2'}> 

      {imageLabel&&<img src={imageLabel} alt="imageLabel"/>}
      {textInputLabelStyle&&<p><b style={{color:'#6AA6FF'}}>Sube tu capture</b>  {textInputLabelStyle}</p>}
        </div>
        <input
        type={type}
        id={id}
        className={inputClassName}
        required={required}
        accept="image/jpeg,image/gif,image/png,application/pdf,image/x-eps"
        />
        </label>
        :
        <input
        type={type}
        id={id}
        className={inputClassName}
        required={required}
        />
      }
     
   
    </>
  );
}

export default TopNambedInput;
