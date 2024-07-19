import React, { useState } from 'react';

export default function Sommaire() {
  const ancreInformationsDeContact = '#informationsDeContact';
  const [dernierElementClique, setDernierElementClique] = useState(ancreInformationsDeContact);

  const partiesSommaire = [
    {
      ancre: ancreInformationsDeContact,
      libelle: 'Vos informations de contact'
    },
    {
      ancre: '#situationEtExperience',
      libelle: 'Votre situation et expérience'
    },
    {
      ancre: '#votreDisponibilite',
      libelle: 'Votre disponibilité'
    },
    {
      ancre: '#votreMotivation',
      libelle: 'Votre motivation'
    },
  ];

  const getAriaCurrent = ancre => {
    return ancre === dernierElementClique ? 'page' : false;
  };

  return (
    <nav aria-label="Sommaire" className="fr-sidemenu fr-mt-15w fr-sidemenu--sticky-full-height">
      <ol className="fr-sidemenu__list">
        {partiesSommaire.map(({ ancre, libelle }, index) => (
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
