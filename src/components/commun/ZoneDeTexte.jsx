import React from 'react';
import PropTypes from 'prop-types';

export default function ZoneDeTexte({ children, id, isRequired = true, maxlength = '2500', error }) {
  return (
    <div className={`fr-input-group${error ? ' fr-input-group--error' : ''}`}>
      <label className="fr-label" htmlFor={id}>
        {children}
      </label>
      <textarea className="fr-input" id={id} name={id} required={isRequired} maxLength={maxlength}></textarea>
      {error && (
        <p id="text-input-error-desc-error" className="fr-error-text">
          {error}
        </p>
      )}
    </div>
  );
}

ZoneDeTexte.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  isRequired: PropTypes.bool,
  maxlength: PropTypes.string,
  error: PropTypes.string,
};
