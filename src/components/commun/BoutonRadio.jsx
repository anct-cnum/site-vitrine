import React from 'react';
import PropTypes from 'prop-types';

export default function BoutonRadio({ children, id, nomGroupe, onChange, checked }) {
  return (
    <div className="fr-fieldset__element">
      <div className="fr-radio-group">
        <input type="radio" id={id} name={nomGroupe} value={id} required onChange={onChange} checked={checked} />
        <label className="fr-label" htmlFor={id}>
          {children}
        </label>
      </div>
    </div>
  );
}

BoutonRadio.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  nomGroupe: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
};
