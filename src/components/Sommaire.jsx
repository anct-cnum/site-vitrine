import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Sommaire({ parties }) {
  const [dernierElementClique, setDernierElementClique] = useState(parties[0].ancre);

  const getAriaCurrent = ancre => {
    return ancre === dernierElementClique ? 'page' : false;
  };

  return (
    <nav aria-label="Sommaire" className="fr-sidemenu fr-mt-15w fr-sidemenu--sticky-full-height">
      <ol className="fr-sidemenu__list">
        {parties.map(({ ancre, libelle }, index) => (
          <li className="fr-sidemenu__item" key={index} onClick={() => setDernierElementClique(ancre)}>
            <a href={ancre} className="fr-sidemenu__link" target="_self" aria-current={getAriaCurrent(ancre)}>
              {libelle}
            </a>
          </li>
        ))}
      </ol>
    </nav >
  );
}

Sommaire.propTypes = {
  parties: PropTypes.array,
};
