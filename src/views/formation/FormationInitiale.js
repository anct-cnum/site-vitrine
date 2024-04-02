import React from 'react';
import ImageLaFabrik from '../../assets/images/fabrik-mediation-numerique.svg';

function FormationInitiale() {
  const contactOutreMerUrl = 'https://framaforms.org/formulaire-de-contact-structure-accueillant-un-cnfs-1699450618';
  const fabrikUrl = 'https://fabrikmediationnumerique.org/';
  const mednumUrl = 'https://lamednum.coop/formation/';
  
  return (
    <div className="fr-col-9 fr-mt-3w cadre">
      <div className="fr-ml-5w fr-col-11" >
        <h2 className="fr-my-3w">Formation initiale</h2>
      </div>
      <div className="fr-ml-5w fr-col-11">
        <p>
          Cette formation obligatoire dans le cadre du dispositif est propos&eacute;e &agrave; tout nouveau conseiller num&eacute;rique entrant dans le
          dispositif. Adapt&eacute;e &agrave; votre profil et votre exp&eacute;rience, elle vous permet d&rsquo;acqu&eacute;rir les comp&eacute;tences
          n&eacute;cessaires &agrave; l&rsquo;exercice de vos fonctions.
        </p>
      </div>
      <div className="fr-ml-5w fr-col-11">
        <h2 className="fr-mt-6w fr-mb-3w">Passage du CCP1</h2>
      </div>
      <div className="fr-ml-5w fr-col-11">
        <p>
          Le passage du CCP1 du titre professionnel de Responsable d&rsquo;espace de m&eacute;diation num&eacute;rique, qui atteste
          la capacit&eacute; &agrave; accompagner des publics divers vers l&rsquo;autonomie num&eacute;rique, est le point final de
          votre formation initiale.
        </p>
        <p>
          Pour vous y pr&eacute;parer, trois parcours de formation vous sont propos&eacute;s : 70h (court), 175h (interm&eacute;diaire) ou
          315h (long). Un test de positionnement, en deux temps, sera organis&eacute; pour identifier le parcours le plus ad&eacute;quat
          &agrave; vos besoins&nbsp;:
        </p>
        <ul>
          <li>
            Un test en ligne et en autonomie (d&rsquo;1h30 maximum) permettra une premi&egrave;re &eacute;valuation de votre culture
            citoyenne et num&eacute;rique, et de vos comp&eacute;tences informatiques et p&eacute;dagogiques
          </li>
          <li>
            Vous passerez ensuite un entretien avec une &eacute;quipe de l&rsquo;organisme de formation, o&ugrave; vous aurez l&rsquo;occasion
            de discuter ensemble des r&eacute;sultats du test en ligne, et de revenir sur votre exp&eacute;rience professionnelle et vos
            motivations. A la fin de l&rsquo;entretien, un petit temps d&rsquo;&eacute;change pourra &ecirc;tre pr&eacute;vu avec votre
            structure d&rsquo;accueil pour pr&eacute;senter le d&eacute;roul&eacute; de la formation, en fonction du parcours choisi.
          </li>
        </ul>
        <p>
          Les inscriptions ont lieu directement aupr&egrave;s de votre organisme de formation, qui vous contactera pour d&eacute;finir avec
          vous le parcours le plus adapt&eacute; et vous proposer un calendrier de formation.
        </p>
        <p>
          <b>Inscriptions M&eacute;tropole&nbsp;:&nbsp;</b>
          <a href={fabrikUrl} rel="noopener noreferrer" target="_blank">
            fabrikmediationnumerique.org
          </a>
        </p>
        <p>
          <b>Inscriptions Outre-mer&nbsp;:&nbsp;</b>
          <a href={contactOutreMerUrl} rel="noopener noreferrer" target="_blank">
            acc&eacute;der au formulaire
          </a>
        </p>
      </div>
      <div className="fr-ml-5w fr-col-11">
        <div className="fr-container encart-bleu fr-mt-5w">
          <div className="fr-grid-row fr-grid-row--gutters">
            <div className="fr-col-xs-12 fr-col-xl-6">
              <p>
                <b>
                  Pour suivre une formation en France m&eacute;tropolitaine, rendez-vous sur le site de La Fabrik&nbsp;:
                </b>
                <ol>
                  <li>Je clique sur &laquo;&nbsp;Inscription&nbsp;&raquo; et je r&eacute;ponds au questionnaire&nbsp;;</li>
                  <li>j&rsquo;effectue le test de positionnement&nbsp;;</li>
                  <li>j&rsquo;entre en formation.</li>
                </ol>
              </p>
            </div>
            <div className="fr-col-xs-12 fr-col-xl-5 fr-m-3w img-fabrik">
              <a href={fabrikUrl} rel="noopener noreferrer" target="_blank" className="lien-image-fabrik">
                <img src={ImageLaFabrik} alt="image pr&eacute;sentant le site de La Fabrik" loading="lazy"/>
              </a>
            </div>
          </div>
        </div>
      </div>
     
      <div className="fr-ml-5w fr-col-11">
        <h2 className="fr-mt-6w fr-mb-3w">Les modules compl&eacute;mentaires</h2>
      </div>
      <div className="fr-ml-5w fr-col-11">
        <p>
          Afin de vous permettre de personnaliser votre parcours, deux modules compl&eacute;mentaires de 7h ou 14h sont propos&eacute;s
          au choix parmi 15 th&eacute;matiques.
        </p>
        <p>
          <b>Inscriptions&nbsp;:&nbsp;</b>
          <a href={mednumUrl} rel="noopener noreferrer" target="_blank">
           lamednum.coop/formation
          </a>
        </p>
      </div>
    </div>
  );
}

export default FormationInitiale;
