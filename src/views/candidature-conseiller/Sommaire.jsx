import React from 'react';

export default function Sommaire() {
  const partiesSommaire = [
    {
      ancre: '#informationsDeContact',
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

  return (
    <nav aria-label="Sommaire" className="fr-sidemenu fr-mt-15w">
      <ol className="fr-sidemenu__list">
        {partiesSommaire.map(({ ancre, libelle }, index) => (
          <li className="fr-sidemenu__item fr-sidemenu__item--active" key={index}>
            <a href={ancre} className="fr-sidemenu__link">
              {libelle}
            </a>
          </li>
        ))}
      </ol>
    </nav >
  );
}
