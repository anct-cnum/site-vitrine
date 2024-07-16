import React from 'react';
import PropTypes from 'prop-types';

export default function Input({ children, id, isRequired = true, type = 'text', pattern }) {
  return (
    <div className="fr-fieldset__element">
      <div className="fr-input-group">
        <label className="fr-label" htmlFor={id}>{children}</label>
        <input className="fr-input" type={type} id={id} required={isRequired} pattern={pattern} />
      </div>
    </div>
  );
}

Input.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  isRequired: PropTypes.bool,
  type: PropTypes.string,
  pattern: PropTypes.string,
};
