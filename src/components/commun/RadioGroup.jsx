import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BoutonRadio from './BoutonRadio';

export default function RadioGroup({ nomGroupe, options, tailleColonne = options.length }) {
  const [checkedValue, setCheckedValue] = useState(options[0].id);

  return (
    <div role="radiogroup">
      <div className="fr-grid-row">
        <div className={`${tailleColonne === options.length ? 'fr-col-12' : 'fr-col-6'}`}>
          {options.slice(0, tailleColonne).map(({ id, label }) => (
            <BoutonRadio
              id={id}
              key={id}
              nomGroupe={nomGroupe}
              onChange={() => setCheckedValue(id)}
              checked={checkedValue === id}
            >
              {label}
            </BoutonRadio>
          ))}
        </div>
        {options.length > tailleColonne && <div className="fr-col-6">
          {options.slice(tailleColonne).map(({ id, label }) => (
            <BoutonRadio
              id={id}
              key={id}
              nomGroupe={nomGroupe}
              onChange={() => setCheckedValue(id)}
              checked={checkedValue === id}
            >
              {label}
            </BoutonRadio>
          ))}
        </div>}
      </div>
    </div>
  );
}

RadioGroup.propTypes = {
  nomGroupe: PropTypes.string,
  options: PropTypes.array,
  tailleColonne: PropTypes.number
};
