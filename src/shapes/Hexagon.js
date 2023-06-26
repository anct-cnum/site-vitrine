import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Tooltip } from 'react-tooltip';
import InterfaceShapes from '../interfaces/interfaceShapes';
import PropTypes from 'prop-types';

function Hexagon({ pictoUrl, altImg, title, textTooltip }) {

  return (
    <>
      <div className="fr-col-sm-12 fr-col-md-2 responsiveHexagon">
        <span
          data-tooltip-id={title}
          data-tooltip-float={true}
          data-tooltip-html={ReactDOMServer.renderToString(textTooltip)}>
          <img src={pictoUrl} alt={altImg} className="picto" />
        </span>
        <div className="titlePart">
          <span className="titleHexagon">{title}</span>
        </div>
      </div>
      <Tooltip id={title} className="tooltip" clickable={true} />
    </>
  );
}

Hexagon.propTypes = {
  ...InterfaceShapes,
  textTooltip: PropTypes.node
};

export default Hexagon;
