import React from 'react';
import InterfaceShapes from '../interfaces/interfaceShapes';

function Square({ className, pictoUrl, altImg, title }) {

  return (
    <div className="responsiveSquare">
      <div className={`square ${className}`}>
        <img src={pictoUrl} alt={altImg} className="picto" />
        <div className="titlePart">
          <span className="titleSquare">{title}</span>
        </div>
      </div>
    </div>
  );
}

Square.propTypes = InterfaceShapes;

export default Square;
