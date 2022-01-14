import React from 'react';
import InterfaceShapes from '../interfaces/interfaceShapes';

function Circle({ className, pictoUrl, altImg, title }) {

  return (
    <div className="fr-col-sm-12 fr-col-md-2 responsiveCircle">
      <div className={`circle ${className}`}>
        <img src={pictoUrl} alt={altImg} className="picto" />
      </div>
      <div className="titlePart">
        <span className="titleCircle">{title}</span>
      </div>
    </div>
  );
}

Circle.propTypes = InterfaceShapes;

export default Circle;
