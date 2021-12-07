import React from "react";

function SectionsNuwy({ children, className,title,titleColor,titleClassName,titleClassNameText }) {
  return <section className={className}>
     <div className={titleClassName}> <h5 className={`title-section ${titleClassNameText}`} style={{color:titleColor}}>{title}</h5></div>
      {children}
      </section>;
}

export default SectionsNuwy;
