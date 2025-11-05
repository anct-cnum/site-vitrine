import React from 'react';
import ImageParcours from '../../assets/images/schema-parcours-formation-conseiller-numerique-2025.png';

function ParcoursFormation() {
  return (
    <>
      <div className="fr-col-10">
        <h2 className="fr-my-3w">
          L’offre de formation à destination des conseillers numériques
        </h2>
      </div>
      <div className="fr-col-10">
        <p className="introduction">
          L’offre de formation du dispositif Conseiller numérique se compose
          de deux volets complémentaires : la formation initiale et la formation continue.
          Les inscriptions s’effectuent directement sur les sites internet des organismes de formation.
        </p>
      </div>
      <div className="fr-col-12">
        <img
          src={ImageParcours}
          className="fresque"
          loading="lazy"
          alt="Parcours de formation depuis la prise de poste, avec une phase de formation initiale, puis une phase de formation continue"
        />
      </div>
    </>
  );
}

export default ParcoursFormation;
