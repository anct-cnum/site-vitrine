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
      <div className="fr-col-10">
        <p className="introduction">
          Depuis le 13 juillet 2025, le titre professionnel « Médiateur numérique »
          remplace officiellement le titre « Responsable d’Espace de Médiation Numérique » (REMN).
        </p>
        <p className="introduction">
          Créé en 2019, le titre REMN constituait la base de la formation des conseillers numériques dès le lancement du dispositif.
          La formation initiale préparait à l’obtention du CCP1 du titre REMN, et les conseillers pouvaient
          également suivre une formation menant à l’obtention du titre complet.
        </p>
        <p className="introduction">
          <a
            href="https://aide.conseiller-numerique.gouv.fr/fr/article/le-titre-mediateur-numerique-remplace-le-remn-ce-quil-faut-savoir-vloijd/"
          >
            En savoir plus
          </a>
        </p>
      </div>
    </>
  );
}

export default ParcoursFormation;
