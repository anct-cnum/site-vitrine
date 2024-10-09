import React from 'react';

function FormationContinue() {
  const mednumUrl = 'https://lamednum.coop/formation/';
  const histyaUrl = 'https://histya.fr/conseiller·e·s-numerique·s/';
  const aidantsconnectUrl = 'https://aidantsconnect.beta.gouv.fr/habilitation';

  return (
    <div className="fr-col-9 fr-mt-5w cadre">
      <div className="fr-ml-5w fr-col-11">
        <h2 className="fr-my-3w">
          La formation continue des conseillers numériques
        </h2>
      </div>
      <div className="fr-ml-5w fr-col-11">
        <p>
          La formation continue des conseillers numériques est constituée de deux volets : l’un obligatoire, l’autre facultatif.
        </p>
        <h3 className="fr-mt-6w fr-mb-3w">
          Les modules thématiques
        </h3>
        <p>
          Les conseillers numériques se voient proposer un catalogue de quinze modules thématiques courts,
          conçus spécifiquement pour eux par des experts de l’inclusion numérique.
        </p>
        <p>
          Les thèmes proposés sont nombreux (parentalité numérique, accompagnement des publics en situation de handicap, numérique responsable…).
          D’une durée de 7 heures ou 14 heures, les modules thématiques ont pour objectif d’accompagner les conseillers numériques
          dans leurs missions quotidiennes, en fonction de leurs besoins.
        </p>
        <p>
          Le dispositif finance la formation continue des conseillers numériques à hauteur d’un module thématique obligatoire chaque année.
        </p>
        <p>
          Cette offre de formation est organisée au niveau national par <a href="https://lamednum.coop/">La Mednum</a>,
          en lien avec des organismes de formation régionaux partenaires.
        </p>
        <p>
          <b>Inscriptions : </b>
          <a href={mednumUrl} rel="noopener noreferrer" target="_blank">
            https://lamednum.coop/formation/
          </a>
        </p>
        <p>
          Si vous souhaitez suivre le module Aidants Connect, le calendrier des sessions vous sera partagé une fois l’habilitation
          de votre structure obtenue. <strong>Vous pouvez entamer les démarches avant la réception de votre convocation pour
            la préparation au CCP1, mais devrez attendre cette convocation pour vous inscrire à une session de formation.</strong>
        </p>
        <p>
          <b>Pour obtenir l’habilitation Aidants Connect : </b>
          <a href={aidantsconnectUrl} rel="noopener noreferrer" target="_blank">
            https://aidantsconnect.beta.gouv.fr/habilitation
          </a>
        </p>
        <h3 className="fr-mt-6w fr-mb-3w">
          Préparation en vue de l’obtention du titre REMN complet
        </h3>
        <p>
          Les conseillers numériques ayant validé le titre CCP1 peuvent, en accord avec leur structure,
          préparer et passer les examens des deux autres certificats de compétences, les CCP2 et CCP3,
          en vue d’obtenir le titre professionnel de Responsable d’Espace de Médiation Numérique complet.
        </p>
        <p>
          L’objectif de cette formation diplômante est de parfaire leurs compétences en matière de développement
          et gestion d’espaces numériques, ou encore de mise en œuvre de projets collaboratifs, et de valoriser leur expertise en médiation numérique.
        </p>
        <p>
          La formation préparant à l’obtention des CCP2 et CCP3 se déploie sur 17 semaines dans un format hybride,
          selon un rythme moyen d’un jour de formation par semaine.
        </p>
        <p>
          La coordination nationale de la formation est organisée au niveau national par <a href="https://histya.fr/">Histya</a>.
          Pour s’inscrire, les conseillers numériques doivent contacter leur organisme de formation régional,
          dont la liste est disponible sur le site internet d’Histya.
        </p>
        <p>
          <b>Site internet d’Histya : </b>
          <a href={histyaUrl} rel="noopener noreferrer" target="_blank">
            https://histya.fr/conseiller·e·s-numerique·s/
          </a>
        </p>
      </div>
    </div>
  );
}

export default FormationContinue;
