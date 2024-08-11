import React from 'react';
import PropTypes from 'prop-types';

export default function Checkbox({ children, id, name, onCheck, checked }) {
  return (
    <div className="fr-fieldset__element">
      <div className="fr-checkbox-group">
        <input id={id} type="checkbox" name={name} onChange={onCheck} checked={checked} />
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
  checked: PropTypes.bool,
};
