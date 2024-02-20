import React from 'react';

function Etapes() {

  return (
    <div className="fr-container fr-mb-5w" style={{ lineHeight: '2.5rem' }}>
      <div className="fr-grid-row fr-grid-row--gutter">
        <h3 className="bleu-secondaire">Comment ça marche ?</h3>
        <span>
          Pour accueillir un conseiller num&eacute;rique, plusieurs &eacute;tapes vous attendent.
          Des outils sont disponibles sur notre site pour vous aider &agrave; chaque &eacute;tape.
        </span>
      </div>
      <p>
        1. Inscription sur la plateforme&nbsp;
        <a href="https://www.conseiller-numerique.gouv.fr" title="site conseiller num&eacute;rique" className="bleu-secondaire">
          https://www.conseiller-numerique.gouv.fr
        </a>
        <br/>
        <em>Nous vous invitons &agrave; publier en parall&egrave;le votre fiche de poste sur&nbsp;
          <a
            href="https://www.emploi-territorial.fr"
            className="bleu-secondaire"
            title="site emploi territorial"
            target="_blank" rel="noopener noreferrer">
              www.emploi-territorial.fr
          </a>
        </em>
      </p>
      <p>2. Concertation territoriale&nbsp;: analyse des demandes des structures par vague</p>
      <p>3. En cas d&rsquo;entr&eacute;e dans le dispositif, acc&egrave;s &agrave; la candidath&egrave;que&nbsp;
        <em>(vivier de conseillers num&eacute;riques)</em>.
        Acc&egrave;s &agrave; un espace d&eacute;di&eacute;. Vous gardez la maîtrise du recrutement,
        &agrave; vous de choisir le candidat qui convient le mieux au poste,
        &agrave; condition qu&rsquo;il soit signal&eacute; sur la plateforme.</p>
      <p>4. Recrutement de votre conseiller num&eacute;rique</p>
      <p>5. Analyse de conformit&eacute; <em>(montage du dossier de subvention)</em></p>
      <p>6. Une fois votre candidat s&eacute;lectionn&eacute;, mise en relation avec l&rsquo;organisme de formation&nbsp;
        <em>(&eacute;valuation du besoin en formation)</em></p>
      <p>7. Signature du contrat de travail et de la convention de subvention</p>
      <p>8. Prise de poste du conseiller num&eacute;rique</p>
      <p>9. Soutien financier de l&rsquo;Etat pendant 24 mois</p>
      <p>10. Suivis mensuels, trimestriels et semestriels</p>
    </div>
  );
}

export default Etapes;
