import React from 'react';
import PropTypes from 'prop-types';

export default function Checkbox({ children, id, name, onCheck, required = true }) {
  return (
    <div className="fr-fieldset__element">
      <div className="fr-checkbox-group">
        <input id={id} type="checkbox" name={name} onChange={onCheck} required={required} />
        <label className="fr-label" htmlFor={id}>
          {children}
        </label>
      </div>
    </div>
  );
}

Checkbox.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  name: PropTypes.string,
  onCheck: PropTypes.func,
  required: PropTypes.bool
};
