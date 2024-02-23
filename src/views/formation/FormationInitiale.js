import React from 'react';
import ImageLaFabrik from '../../assets/images/fabrik-mediation-numerique.svg';

function FormationInitiale() {

  return (
    <>
      <div className="fr-col-12" style={{ textAlign: 'center' }}>
        <h2 className="fr-h1 fr-mt-10w fr-mb-5w">Formation initiale</h2>
      </div>
      <div>
        <p>
        Cette formation obligatoire dans le cadre du dispositif est propos&eacute;e &agrave; tout nouveau conseiller num&eacute;rique entrant dans le
        dispositif. Adapt&eacute;e &agrave; votre profil et votre exp&eacute;rience, elle vous permet d&rsquo;acqu&eacute;rir les comp&eacute;tences
        n&eacute;cessaires &agrve; l&rsquo;exercice de vos fonctions.
        </p>
      </div>
      <div className="fr-col-12" style={{ textAlign: 'center' }}>
        <h2 className="fr-h1 fr-mt-10w fr-mb-5w">Passage CCP1</h2>
      </div>
      <div>
        <p>
          Le passage du CCP1 du titre professionnel de Responsable d&rsquo;espace de m&eacute;diation num&eacute;rique est la premi&egrave;re
          &eacute;tape de votre formation initiale. Pour cela, un parcours de formation en 70, 135 ou 315 h vous est propos&eacute; selon votre
          profil et votre exp&eacute;rience. Les inscriptions ont lieu directement aupr&egrave;s de votre organisme de formation, qui vous
          recontactera pour d&eacute;finir avec vous le parcours le plus adapt&eacute; et vous proposer un calendrier de formation.
        </p>
        <p>
        Inscriptions métropole : <a href="https://fabrikmediationnumerique.org/">fabrikmediationnumerique.org</a>
        </p>
        <p>
        Inscriptions Outre-mer : <a href="https://framaforms.org/formulaire-de-contact-structure-accueillant-un-cnfs-1699450618">
          acc&eacute;der au formulaire</a>
        </p>
      </div>
      <div>
        <div>
          <p>Les inscriptions s&rsquo;effectuent directement sur la plateforme des organismes de formation &laquo;&nbsp;La Fabrik de la
              m&eacute;diation num&eacute;rique&nbsp;&raquo;&nbsp;:
          <ol>
            <li>Je clique sur &laquo;&nbsp;Inscription&nbsp;&raquo; et je r&eacute;ponds au questionnaire ;</li>
            <li> j&rsquo;effectue le test de positionnement ;</li>
            <li>j&rsquo;entre en formation.</li>
          </ol>
          </p>
        </div>
        <div>
          <img src={ImageLaFabrik}/>
        </div>
      </div>
      <div className="fr-col-12" style={{ textAlign: 'center' }}>
        <h2 className="fr-h1 fr-mt-10w fr-mb-5w">Les modules compl&eacute;mentaires</h2>
      </div>
      <div>
        <p>
          Afin de vous permettre de personnaliser votre parcours, deux modules compl&eacute;mentaires de 7h ou 14h sont propos&eacute;s
          au choix parmi 15 th&eacute;matiques.
        </p>
        <p>Les modalit&eacute;s d&rsquo;inscription vous seront prochainement communiqu&eacute;es.</p>
      </div>
    </>
  );
}

export default FormationInitiale;
