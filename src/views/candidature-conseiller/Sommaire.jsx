import React from 'react';

export default function Sommaire() {
  return (
    <nav aria-label="Sommaire" className="fr-sidemenu fr-mt-15w">
      <ol className="fr-sidemenu__list">
        <li className="fr-sidemenu__item fr-sidemenu__item--active">
          <a href="#informationsDeContact" className="fr-sidemenu__link">
            Vos informations de contact
          </a>
        </li>
        <li className="fr-sidemenu__item fr-sidemenu__item--active">
          <a href="#situtationEtExperience" className="fr-sidemenu__link">
            Votre situation et expérience
          </a>
        </li>
        <li className="fr-sidemenu__item fr-sidemenu__item--active">
          <a href="#votreDisponibilite" className="fr-sidemenu__link">
            Votre disponibilité
          </a>
        </li>
        <li className="fr-sidemenu__item fr-sidemenu__item--active">
          <a href="#votreDisponibilite" className="fr-sidemenu__link">
            Votre motivation
          </a>
        </li>
      </ol>
    </nav>
  );
}
