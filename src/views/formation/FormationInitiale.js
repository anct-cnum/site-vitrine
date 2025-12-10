import React from 'react';
import ImageLaFabrik from '../../assets/images/fabrik-mediation-numerique.svg';

function FormationInitiale() {
  const contactOutreMerUrl = 'https://www.francilin.fr/formation-cn-outremer/';
  const fabrikUrl = 'https://fabrikmediationnumerique.org/';
  const dispenseUrl = `${import.meta.env.VITE_APP_AIDE_URL}/fr/article/qui-peut-etre-dispense-de-la-formation-initiale-obligatoire-1vv3bqf/`;
  const articleFaq = `${import.meta.env.VITE_APP_AIDE_URL}/article/formation-initiale-le-parcours-de-formation-14ryxwt/`;
  const competencesUrl = 'https://www.francecompetences.fr/recherche/rncp/40695/';

  return (
    <div className="fr-col-9 cadre">
      <div className="fr-ml-5w fr-col-11">
        <h2 className="fr-my-3w">
          La formation initiale des conseillers numériques
        </h2>
      </div>
      <div className="fr-ml-5w fr-col-11">
        <p>
          La formation initiale est obligatoire pour tout nouveau conseiller numérique entrant
          dans le dispositif, <a href={dispenseUrl} rel="noopener noreferrer" target="_blank">s’il n’en est pas dispensé</a>,
          et entièrement financée par le dispositif.
          Elle permet aux conseillers numériques d’acquérir les fondamentaux de la médiation numérique,
          et prépare à l’obtention du 1er bloc de compétence (CCP1) du titre professionnel{' '}
          <a href={competencesUrl} rel="noopener noreferrer" target="_blank">Médiateur numérique</a> et au passage de la certification PIX.
        </p>
      </div>
      <div className="fr-ml-5w fr-col-11">
        <h4 className="fr-mt-6w fr-mb-3w">
          Les compétences développées au cours de la formation sont les suivantes :
        </h4>
        <ul>
          <li>Accueillir les personnes et présenter les missions de la médiation numérique</li>
          <li>Recueillir les besoins, poser un diagnostic partagé et proposer des accompagnements adaptés</li>
          <li>Concevoir et programmer des accompagnements aux usages numériques</li>
          <li>Préparer et animer des accompagnements aux usages numériques dans différents lieux et environnements</li>
          <li>Évaluer ses actions et sa pratique professionnelle</li>
        </ul>
      </div>
      <div className="fr-ml-5w fr-col-11">
        <p>
          En Outre-mer comme en Hexagone, la préparation aux examens du CCP1 du titre
          « Médiateur numérique » et PIX comprend 175h de cours, et un stage d’une durée
          de 210h, effectué en alternance avec les sessions de formation.
          Le stage peut être réalisé au sein même de la structure d’accueil.
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
          Pour en savoir plus sur la formation initiale, consultez <a href={articleFaq} rel="noopener noreferrer" target="_blank">cet article</a> de notre FAQ.
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
                <img src={ImageLaFabrik} alt="image présentant le site de La Fabrik" loading="lazy" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="fr-ml-5w fr-mt-5w fr-col-11">
        <p>
          Les conseillers numériques engagés dans la formation initiale doivent suivre deux modules thématiques complémentaires dans{' '}
          l’année suivant leur entrée en formation.
        </p>
        <p>
          <b>Pour plus d’informations, consultez la présentation de la formation continue ci-dessous.</b>
        </p>
      </div>
    </div>
  );
}

export default FormationInitiale;
