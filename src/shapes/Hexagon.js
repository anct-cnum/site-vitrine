import React from 'react';
import ReactTooltip from 'react-tooltip';
import InterfaceShapes from '../interfaces/interfaceShapes';
import PropTypes from 'prop-types';
import ReactDOMServer from 'react-dom/server';

function Hexagon({ pictoUrl, altImg, title, textTooltip }) {

  return (
    <>
      <div className="fr-col-sm-12 fr-col-md-2 responsiveHexagon">
        <span data-tip={ReactDOMServer.renderToString(textTooltip)}>
          <img src={pictoUrl} alt={altImg} className="picto" />
        </span>
        <div className="titlePart">
          <span className="titleHexagon">{title}</span>
        </div>
      </div>
      <ReactTooltip html={true} className="tooltip" clickable={true} />
    </>
  );
}

Hexagon.propTypes = {
  ...InterfaceShapes,
  textTooltip: PropTypes.node
};

export default Hexagon;
