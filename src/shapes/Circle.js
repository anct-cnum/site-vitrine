import React from 'react';
import ReactTooltip from 'react-tooltip';
import InterfaceShapes from '../interfaces/interfaceShapes';
import PropTypes from 'prop-types';
import ReactDOMServer from 'react-dom/server';

function Circle({ className, pictoUrl, altImg, title, textTooltip }) {

  return (
    <>
      <div className="fr-col-sm-12 fr-col-md-2 responsiveCircle">
        <span data-tip={ReactDOMServer.renderToString(textTooltip)}>
          <div className={`circle ${className}`}>
            <img src={pictoUrl} alt={altImg} className="picto" />
          </div>
        </span>
        <div className="titlePart">
          <span className="titleCircle">{title}</span>
        </div>
      </div>
      <ReactTooltip html={true} className="tooltip" clickable={true} />
    </>
  );
}

Circle.propTypes = {
  ...InterfaceShapes,
  textTooltip: PropTypes.node
};

export default Circle;
