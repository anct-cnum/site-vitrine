import React from 'react';
import ImageLaFabrik from '../../assets/images/fabrik-mediation-numerique.svg';

function FormationInitiale() {
  const contactOutreMerUrl = 'https://framaforms.org/formulaire-de-contact-structure-accueillant-un-cnfs-1699450618';
  const fabrikUrl = 'https://fabrikmediationnumerique.org/';
  const aideUrl = `${process.env.REACT_APP_AIDE_URL}/category/la-formation-des-conseillers-numeriques-objectifs-et-modalite-dorganisation-1dj9ogr/`;
  
  return (
    <div className="fr-col-9 fr-mt-3w cadre">
      <div className="fr-ml-6w fr-col-10" >
        <h2 className="fr-my-5w">Formation initiale</h2>
      </div>
      <div className="fr-ml-6w fr-col-10">
        <p>
          Cette formation obligatoire dans le cadre du dispositif est propos&eacute;e &agrave; tout nouveau conseiller num&eacute;rique entrant dans le
          dispositif. Adapt&eacute;e &agrave; votre profil et votre exp&eacute;rience, elle vous permet d&rsquo;acqu&eacute;rir les comp&eacute;tences
          n&eacute;cessaires &agrave; l&rsquo;exercice de vos fonctions.
        </p>
      </div>
      <div className="fr-ml-6w fr-col-10">
        <h2 className="fr-my-5w">Passage CCP1</h2>
      </div>
      <div className="fr-ml-6w fr-col-10">
        <p>
          Le passage du CCP1 du titre professionnel de Responsable d&rsquo;espace de m&eacute;diation num&eacute;rique est la premi&egrave;re
          &eacute;tape de votre formation initiale. Pour cela, un parcours de formation en 70, 135 ou 315 h vous est propos&eacute; selon votre
          profil et votre exp&eacute;rience. Les inscriptions ont lieu directement aupr&egrave;s de votre organisme de formation, qui vous
          recontactera pour d&eacute;finir avec vous le parcours le plus adapt&eacute; et vous proposer un calendrier de formation.
        </p>
        <p>
          <b>Inscriptions m&eacute;tropole&nbsp;:</b>
          <a href={fabrikUrl} rel="noopener noreferrer" target="_blank">
            fabrikmediationnumerique.org
          </a>
        </p>
        <p>
          <b>Inscriptions Outre-mer&nbsp;:</b>
          <a href={contactOutreMerUrl} rel="noopener noreferrer" target="_blank">
            acc&eacute;der au formulaire
          </a>
        </p>
      </div>
      <div className="fr-container encart-bleu fr-mt-5w">
        <div className="fr-grid-row fr-grid-row--gutters">
          <div className="fr-col-xs-12 fr-col-xl-6 fr-ml-3w ">
            <p>
              <b>
                Les inscriptions s&rsquo;effectuent directement sur la plateforme des organismes de formation &laquo;&nbsp;La Fabrik de la
                m&eacute;diation num&eacute;rique&nbsp;&raquo;&nbsp;:
              </b>
              <ol>
                <li>Je clique sur &laquo;&nbsp;Inscription&nbsp;&raquo; et je r&eacute;ponds au questionnaire&nbsp;;</li>
                <li>j&rsquo;effectue le test de positionnement&nbsp;;</li>
                <li>j&rsquo;entre en formation.</li>
              </ol>
            </p>
          </div>
          <div className="fr-col-xs-12 fr-col-xl-5 fr-m-3w img-fabrik">
            <img src={ImageLaFabrik} alt="image pr&eacute;sentant le site de La Fabrik" loading="lazy"/>
          </div>
        </div>
      </div>
      <div className="fr-ml-6w fr-col-10">
        <h2 className="fr-my-5w">Les modules compl&eacute;mentaires</h2>
      </div>
      <div className="fr-ml-6w fr-col-10">
        <p>
          Afin de vous permettre de personnaliser votre parcours, deux modules compl&eacute;mentaires de 7h ou 14h sont propos&eacute;s
          au choix parmi 15 th&eacute;matiques.
        </p>
        <p><b>Les modalit&eacute;s d&rsquo;inscription vous seront prochainement communiqu&eacute;es.</b></p>
        <p>
          <b>Pour toute question sur les modules compl&eacute;mentaires&nbsp;:&nbsp;</b>
          <a href={aideUrl} rel="noopener noreferrer" target="_blank">
            je consulte la FAQ Formation
          </a>
        </p>
      </div>
    </div>
  );
}

export default FormationInitiale;
