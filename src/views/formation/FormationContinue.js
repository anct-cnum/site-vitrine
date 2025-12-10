import React from 'react';

function FormationContinue() {
  const mednumUrl = 'https://lamednum.coop/formation/';
  const aidantsconnectUrl = 'https://aidantsconnect.beta.gouv.fr/habilitation';
  // eslint-disable-next-line max-len
  const regleDeSuiviFormationContinueUrl = `${import.meta.env.VITE_APP_AIDE_URL}/fr/article/formation-continue-obligatoire-combien-de-modules-thematiques-doit-suivre-un-conseiller-numerique-1e3zehu`;
  return (
    <div className="fr-col-9 fr-mt-5w cadre">
      <div className="fr-ml-5w fr-col-11">
        <h2 className="fr-my-3w">
          La formation continue des conseillers numériques
        </h2>
      </div>
      <div className="fr-ml-5w fr-col-11">
        <p>
          Depuis 2024, les conseillers numériques ont accès à un catalogue de <strong>17 modules
          de formation thématiques</strong> courts, leur permettant de renforcer leurs compétences{' '}
          selon leurs missions et besoins. Ces modules abordent des sujets variés tels que
          la parentalité numérique, la cybersécurité, l’intelligence artificielle,
          l’accompagnement des publics en situation de handicap ou encore le numérique responsable.
        </p>
        <p>
          L’État prend en charge <strong>un module obligatoire par conseiller et par année civile.</strong>{' '}
          Les conseillers admis en formation initiale après 2024 doivent suivre
          <strong>deux modules thématiques</strong> au cours de l’année suivant leur entrée dans le dispositif.
        </p>
        <p>
          NB: Cette offre est également accessible aux professionnels de la médiation numérique hors dispositif, mais{' '}
          <strong>sans prise en charge financière</strong>.
        </p>
        <p>
          Pour en savoir plus sur les règles de suivi de la formation continue, consulter{' '}
          <a href={regleDeSuiviFormationContinueUrl} rel="noopener noreferrer" target="_blank">cet article</a> de notre FAQ
        </p>
        <p>
          L’organisation de cette offre est assurée au niveau national par{' '}
          <a href="https://lamednum.coop/" rel="noopener noreferrer" target="_blank">
          La Mednum</a>, en collaboration avec des organismes de formation régionaux partenaires.
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
      </div>
    </div>
  );
}

export default FormationContinue;
