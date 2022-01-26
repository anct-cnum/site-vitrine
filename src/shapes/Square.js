import React from 'react';
import InterfaceShapes from '../interfaces/interfaceShapes';

function Square({ pictoUrl, altImg, title }) {

  return (
    <div className="responsiveSquare">
      <img src={pictoUrl} alt={altImg} className="picto" />
      <div className="titlePart">
        <span className="titleSquare">{title}</span>
      </div>
    </div>
  );
}

Square.propTypes = InterfaceShapes;

export default Square;
