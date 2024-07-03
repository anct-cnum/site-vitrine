import React from 'react';
import PropTypes from 'prop-types';

export default function ZoneDeTexte({ children, id, isRequired = false }) {
  return (
    <div className="fr-input-group">
      <label className="fr-label" htmlFor={id}>
        {children}
      </label>
      <textarea className="fr-input" id={id} name={id} required={isRequired}></textarea>
    </div>
  );
}

ZoneDeTexte.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  isRequired: PropTypes.bool,
};
