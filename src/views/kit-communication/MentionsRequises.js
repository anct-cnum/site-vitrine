import React from 'react';

function MentionsRequises() {

  return (
    <>
      <div className="fr-grid-row fr-grid-row--gutter">
        <div className="fr-col-1"></div>
        <div className="fr-col-10 fr-col-md-8">
          <h4 className="h4CustomKit h4CustomKit--secondary" id="titre-ancre-2.2">2.2&nbsp;&nbsp;Mentions requises pour l&rsquo;&eacute;dition de documents</h4>
          <p style={{ marginBottom: '24px' }}>
            En tant que structure d&rsquo;accueil b&eacute;n&eacute;ficiaire du soutien de l&rsquo;&Eacute;tat
            pour le recrutement de conseillers num&eacute;riques France Services, vous avez l&rsquo;obligation de faire figurer
            sur tous vos supports de communication (flyer, plaquette, site internet, affiches, vid&eacute;os, communiqu&eacute;s de presse, etc. )&nbsp;:<br/>
            – la mention&nbsp;: &laquo;&nbsp;Op&eacute;ration soutenue par l&rsquo;&Eacute;tat dans le cadre du
            dispositif Conseiller num&eacute;rique France Services&nbsp;&raquo; ;<br/>
            – le lien vers le site internet du dispositif&nbsp;:
            &laquo;&nbsp;<a href="https://www.conseiller-numerique.gouv.fr"
              title="site Conseiller num&eacute; France Services"
              style={{ boxShadow: 'none' }}>
                www.conseiller-numerique.gouv.fr
            </a>&nbsp;&raquo; ;<br/>
            – les logos du dispositif Conseiller num&eacute;rique France Services et de France Relance compl&eacute;t&eacute; du drapeau europ&eacute;en,
            qui peuvent &ecirc;tre t&eacute;l&eacute;charg&eacute;s ci-dessous.
          </p>
        </div>
      </div>
      <div className="fr-grid-row fr-grid-row--gutter">
        <div className="fr-col-1"></div>
        <div className="fr-col-10 fr-col-md-8 fr-mb-3w">
          <p style={{ marginBottom: '0' }}>
            <span className="boldText">Bloc-marque France Relance</span> (requis)&nbsp;:
            <span style={{ display: 'block', marginTop: '24px' }}>
              <a
                href="https://cdn.conseiller-numerique.gouv.fr/kit-communication/V3/logo-france-relance-gouv-ue.png"
                title="Bloc-marque France Relance au format PNG"
                className="bleu-france"
                style={{ boxShadow: 'none' }}
                target="_blank" rel="noopener noreferrer">
                  T&eacute;l&eacute;charger le bloc-marque France Relance au format PNG (taille moyenne).
              </a>
              <br/>
              <a
                href="https://cdn.conseiller-numerique.gouv.fr/kit-communication/V3/logo-france-relance-gouv-ue.eps"
                title="Bloc-marque France Relance au format EPS"
                className="bleu-france"
                style={{ boxShadow: 'none' }}
                target="_blank"
                rel="noopener noreferrer">
                  T&eacute;l&eacute;charger le bloc-marque France Relance au format EPS.
              </a>
            </span>
          </p>
        </div>
        <div className="fr-col-12 fr-col-md-2 fr-mb-7w fr-mb-md-0w preview-image">
          <img
            src="https://cdn.conseiller-numerique.gouv.fr/kit-communication/V3/previews/preview-logo-france-relance-gouv-ue.png"
            alt="preview logo rf"
            style={{ height: '26px' }}/>
        </div>
      </div>
      <div className="fr-grid-row fr-grid-row--gutter">
        <div className="fr-col-1"></div>
        <div className="fr-col-10 fr-col-md-8 fr-mb-7w">
          Acc&eacute;der au kit de communication du Plan de Relance&nbsp;:
          <br/>
          <a
            href="https://www.economie.gouv.fr/plan-de-relance/kit-de-communication"
            title="kit de communication Plan de Relance"
            className="bleu-france"
            style={{ boxShadow: 'none' }}
            target="_blank" rel="noopener noreferrer">
              economie.gouv.fr/plan-de-relance/kit-de-communication
          </a>
        </div>
      </div>
    </>
  );
}

export default MentionsRequises;
