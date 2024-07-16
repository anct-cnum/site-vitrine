import React from 'react';
import PropTypes from 'prop-types';

export default function Datepicker({ children, id, isRequired = true, onChange }) {
  return (
    <div className="fr-input-group">
      <label className="fr-label" htmlFor={id}>
        {children}
      </label>
      <input className="fr-input cc-datepicker" id={id} type="date" required={isRequired} onChange={onChange} />
    </div>
  );
}

Datepicker.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  isRequired: PropTypes.bool,
  onChange: PropTypes.func
};
