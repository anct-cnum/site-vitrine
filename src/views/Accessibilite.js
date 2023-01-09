import React from 'react';
import Header from '../components/Header';

function Accessibilite() {

  return (
    <div className="accessibilite">
      <Header/>
      <div className="fr-container fr-mb-10w">
        <div className="fr-grid-row fr-grid-row--gutters">
          <div className="fr-col-12" style={{ textAlign: 'center' }}>
            <h2 className="fr-h1 fr-mt-10w fr-mb-5w">&Agrave; propos</h2>
          </div>
          <div className="fr-col-offset-lg-1"></div>
          <p>
            Le handicap est d&eacute;fini comme&nbsp;: toute limitation d&rsquo;activit&eacute; ou restriction de participation &agrave;
            la vie en soci&eacute;t&eacute; subie dans son environnement par une personne en raison d&rsquo;une alt&eacute;ration substantielle,
            durable ou d&eacute;finitive d&rsquo;une ou plusieurs fonctions physiques, sensorielles, mentales, cognitives ou psychiques,
            d&rsquo;un polyhandicap ou d&rsquo;un trouble de sant&eacute; invalidant (article L. 114 du code de l&rsquo;action sociale et des familles).
          </p>
          <br />
          <div>
            L&rsquo;accessibilit&eacute; num&eacute;rique consiste &agrave; rendre les services de communication au public en ligne accessibles
            aux personnes handicap&eacute;es, c&rsquo;est-&agrave;-dire&nbsp;:
            <br /><br />
            <ul>
              <li>perceptibles&nbsp;: par exemple, faciliter la perception visuelle et auditive du contenu par l&rsquo;utilisateur ;&nbsp;
                proposer des &eacute;quivalents textuels &agrave; tout contenu non textuel ;&nbsp;
                cr&eacute;er un contenu qui puisse être pr&eacute;sent&eacute; de diff&eacute;rentes mani&egrave;res
                sans perte d&rsquo;information ni de structure (par exemple avec une mise en page simplifi&eacute;e) ;
              </li>
              <li>utilisables&nbsp;: par exemple, fournir &agrave; l&rsquo;utilisateur des &eacute;l&eacute;ments d&rsquo;orientation pour naviguer,
                trouver le contenu ; rendre toutes les fonctionnalit&eacute;s accessibles au clavier ;&nbsp;
                laisser &agrave; l&rsquo;utilisateur suffisamment de temps pour lire et utiliser le contenu ;&nbsp;
                ne pas concevoir de contenu susceptible de provoquer des crises d&rsquo;&eacute;pilepsie ;
              </li>
              <li>compr&eacute;hensibles&nbsp;: par exemple, faire en sorte que les pages fonctionnent de mani&egrave;re pr&eacute;visible ;&nbsp;
                aider l&rsquo;utilisateur &agrave; corriger les erreurs de saisie.
              </li>
              <li>et robustes&nbsp;: par exemple, optimiser la compatibilit&eacute; avec les utilisations actuelles et futures,
                y compris avec les technologies d&rsquo;assistance.
              </li>
            </ul>
          </div>
        </div>
        <div className="fr-grid-row fr-grid-row--gutters">
          <div className="fr-col-12" style={{ textAlign: 'center' }}>
            <h2 className="fr-h1 fr-mt-10w fr-mb-5w">Nos engagements</h2>
          </div>
          <div className="fr-col-offset-lg-1"></div>
          <div>
            L&rsquo;&eacute;quipe de Conseiller Num&eacute;rique France Services s&rsquo;engage et travaille &agrave; am&eacute;liorer
            le niveau d&rsquo;accessibilit&eacute; du site et sa conformit&eacute; avec les normes en la mati&egrave;re&nbsp;:
            <br /><br />
            <ul className="list-dash">
              <li>Audit de mise en conformit&eacute; (en cours) pour nous aider &agrave; am&eacute;liorer l&rsquo;accessibilit&eacute;.</li>
              <li>Mise &agrave; jour de cette page pour vous tenir inform&eacute;s de notre progression.</li>
            </ul>
          </div>
          <p>
            Notre &eacute;quipe a ainsi travaill&eacute; sur les contrastes de couleur, la pr&eacute;sentation
            et la structure de l&rsquo;information ou encore la clart&eacute; des formulaires.
          </p>
          <p>
            D&rsquo;autres am&eacute;liorations vont être apport&eacute;es.
          </p>
        </div>
        <div className="fr-grid-row fr-grid-row--gutters">
          <div className="fr-col-12" style={{ textAlign: 'center' }}>
            <h2 className="fr-h1 fr-mt-10w fr-mb-5w">Am&eacute;liorations et contact</h2>
          </div>
          <div className="fr-col-offset-lg-1"></div>
          <p>
            L&rsquo;&eacute;quipe de Conseiller Num&eacute;rique France Services reste &agrave; votre &eacute;coute et enti&egrave;re disposition,
            si vous souhaitez nous signaler un d&eacute;faut de conception. Vous pouvez nous aider &agrave; am&eacute;liorer l&rsquo;accessibilit&eacute;
            du site en nous signalant les probl&egrave;mes &eacute;ventuels que vous rencontrez&nbsp;:&nbsp;
            <a href={process.env.REACT_APP_AIDE_URL}>Contactez-nous</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Accessibilite;
