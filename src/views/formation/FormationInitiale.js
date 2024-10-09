import React from 'react';
import ImageLaFabrik from '../../assets/images/fabrik-mediation-numerique.svg';

function FormationInitiale() {
  const contactOutreMerUrl = 'https://www.francilin.fr/formation-cn-outremer/';
  const fabrikUrl = 'https://fabrikmediationnumerique.org/';
  const mednumUrl = 'https://lamednum.coop/formation/';
  const aidantsconnectUrl = 'https://aidantsconnect.beta.gouv.fr/habilitation';
  const dispenseUrl = `${import.meta.env.VITE_APP_AIDE_URL}/article/un-conseiller-numerique-peut-il-etre-dispense-de-la-formation-initiale-obligatoire-ywgzld/`;
  const articleFaq = `${import.meta.env.VITE_APP_AIDE_URL}/article/quel-est-le-parcours-de-la-formation-initiale-de-linscription-aux-examens-ipolnd/`;

  return (
    <div className="fr-col-9 cadre">
      <div className="fr-ml-5w fr-col-11">
        <h2 className="fr-my-3w">
          La formation initiale des conseillers numériques
        </h2>
      </div>
      <div className="fr-ml-5w fr-col-11">
        <p>
          Cette formation obligatoire est proposée à tout nouveau conseiller numérique entrant dans le
          dispositif, <a href={dispenseUrl} rel="noopener noreferrer" target="_blank">s’il n’en est pas dispensé</a>.
          Adaptée à votre profil et votre expérience, elle vous permet d’acquérir les compétences nécessaires à l’exercice de vos fonctions.
        </p>
      </div>
      <div className="fr-ml-5w fr-col-11">
        <h3 className="fr-mt-6w fr-mb-3w">
          Formation initiale préparant à l’obtention du CCP1, du REMN et de la certification PIX
        </h3>
      </div>
      <div className="fr-ml-5w fr-col-11">
        <p>
          Chaque conseiller numérique recruté par une structure doit, dans le cadre du dispositif Conseiller numérique,
          suivre une formation initiale qui le conduira à passer le <strong>CCP1 du titre professionnel de Responsable
          d’Espace de Médiation Numérique (REMN) et la certification PIX</strong>.
        </p>
        <p>
          Pour s’y préparer, trois parcours de formation sont proposés : 70 heures (court), 175 heures (intermédiaire) ou 315 heures (long).
          Un test de positionnement sera organisé par l’organisme de formation pour identifier le parcours le plus adéquat à leurs besoins.
        </p>
        <p>
          La formation et le passage des examens sont organisés par <strong>La Fabrik</strong> en France métropolitaine,
          et <strong>Francil’In</strong> dans les territoires ultra-marins. Les inscriptions s’effectuent directement auprès des organismes de formation.
        </p>
        <p>
          <b>Inscriptions Métropole : </b>
          <a href={fabrikUrl} rel="noopener noreferrer" target="_blank">
            https://fabrikmediationnumerique.org/
          </a>
        </p>
        <p>
          <b>Inscriptions Outre-mer : </b>
          <a href={contactOutreMerUrl} rel="noopener noreferrer" target="_blank">
            https://www.francilin.fr/formation-cn-outremer/
          </a>
        </p>
        <p>
          Pour en savoir plus sur la formation initiale,
          consultez <a href={articleFaq} rel="noopener noreferrer" target="_blank">cet article</a> de notre FAQ.
        </p>
      </div>
      <div className="fr-ml-5w fr-col-11">
        <div className="fr-container encart-bleu fr-mt-5w">
          <div className="fr-grid-row fr-grid-row--gutters">
            <div className="fr-col-xs-12 fr-col-xl-6">
              <p>
                <b>
                  Pour suivre une formation en France métropolitaine, rendez-vous sur le site de La Fabrik :
                </b>
              </p>
              <ol>
                <li>Je clique sur &laquo; Inscription &raquo; et je réponds au questionnaire ;</li>
                <li>j’effectue le test de positionnement ;</li>
                <li>j’entre en formation.</li>
              </ol>
            </div>
            <div className="fr-col-xs-12 fr-col-xl-5 fr-m-3w img-fabrik">
              <a href={fabrikUrl} rel="noopener noreferrer" target="_blank" className="lien-image-fabrik">
                <img src={ImageLaFabrik} alt="image présentant le site de La Fabrik" loading="lazy"/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="fr-ml-5w fr-col-11">
        <h3 className="fr-mt-6w fr-mb-3w">
          Les modules thématiques complémentaires
        </h3>
      </div>
      <div className="fr-ml-5w fr-col-11">
        <p>
          Les conseillers numériques peuvent personnaliser leur parcours de formation initiale,
          en choisissant <strong>deux modules de formation</strong> dans un catalogue de 15 thématiques,
          en complément de la formation préparant au CCP1 du titre REMN.
        </p>
        <p>
          Les thèmes proposés sont nombreux (parentalité numérique, accompagnement des publics en situation de handicap, numérique responsable…).
          D’une durée de 7h ou 14h, les modules thématiques ont pour objectif d’accompagner les conseillers numériques
          dans leurs missions quotidiennes, en fonction de leurs besoins.
        </p>
        <p>
          Les conseillers numériques nouvellement recrutés disposent d’un an, à partir de leur entrée en formation initiale préparant au CCP1 REMN,
          pour suivre les deux modules thématiques complémentaires.
          Cette offre de formation est organisée au niveau national par <a href="https://lamednum.coop/">La Mednum</a>,
          en lien avec des organismes de formation régionaux partenaires.
        </p>
        <p>
          <b>Présentation des modules et inscription : </b>
          <a href={mednumUrl} rel="noopener noreferrer" target="_blank">
            https://lamednum.coop/formation/
          </a>
        </p>
        <p>
          Si vous souhaitez suivre le module Aidants Connect, le calendrier des sessions vous sera partagé une fois
          l’habilitation de votre structure obtenue. <b>Vous pouvez entamer les démarches avant la réception de
          votre convocation pour la préparation au CCP1, mais devrez attendre cette convocation pour vous inscrire &agrave;
          une session de formation.</b>
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

export default FormationInitiale;
