import React from 'react';
import ImageParcours from '../../assets/images/schema-parcours-formation-conseiller-numerique-2024.svg';

function ParcoursFormation() {
  return (
    <>
      <div className="fr-col-10">
        <h2 className="fr-my-3w">
          L’offre de formation à destination des conseillers numériques
        </h2>
      </div>
      <div className="fr-col-12">
        <img
          src={ImageParcours}
          className="fresque"
          loading="lazy"
          alt="Parcours de formation depuis la prise de poste, avec une phase de formation initiale, puis une phase de formation continue"
        />
      </div>
      <div className="fr-col-8">
        <p className="fr-ml-n1w description">
          A la suite de l’arrêt des activités de Pop School fin septembre 2024, la coordination de la formation initiale
          préparant au CCP1 du titre REMN en Outre-mer est reprise par l’organisme de formation Francil’In.
          La coordination nationale de la formation préparant à l’obtention du titre REMN complet (CCP2 et CCP3)
          est reprise par l’organisme de formation Histya.
        </p>
      </div>
    </>
  );
}

export default ParcoursFormation;
