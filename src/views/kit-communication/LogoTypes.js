import React from 'react';

function LogoTypes() {

  return (
    <>
      <div className="fr-grid-row fr-grid-row--gutter">
        <div className="fr-col-1"></div>
        <div className="fr-col-10 fr-col-md-8">
          <h4 className="h4CustomKit h4CustomKit--secondary" id="titre-ancre-2.4">2.4&nbsp;&nbsp;Logotypes</h4>
          <p style={{ marginBottom: '24px' }}>
            <span className="boldText">Logo Conseiller num&eacute;rique France Services&nbsp;:</span>
            <span style={{ display: 'block', marginTop: '24px' }}>
              <a
                href="https://cdn.conseiller-numerique.gouv.fr/kit-communication/V3/logos-cnfs.zip"
                title="Logo Conseiller num&eacute;rique France Services PNG"
                className="bleu-france"
                style={{ boxShadow: 'none' }}
                target="_blank"
                rel="noopener noreferrer">
                  T&eacute;l&eacute;charger le logo Conseiller num&eacute;rique France Services aux formats PNG (petit, moyen, grand).
              </a>
              <br/>
              <a
                href="https://cdn.conseiller-numerique.gouv.fr/kit-communication/V3/logo-cnfs.eps"
                title="Logo Conseiller num&eacute;rique France Services EPS"
                className="bleu-france"
                style={{ boxShadow: 'none' }}
                target="_blank"
                rel="noopener noreferrer">
                  T&eacute;l&eacute;charger le logo Conseiller num&eacute;rique France Services au format EPS (vectoriel).
              </a>
            </span>
          </p>
        </div>
        <div className="fr-col-12 fr-col-md-2 fr-mb-7w fr-mb-md-0w preview-image">
          <img
            src="https://cdn.conseiller-numerique.gouv.fr/kit-communication/V3/previews/preview-logo-cnfs.png"
            alt="preview logo cnfs"
            style={{ height: '93px', border: '1px solid #9C9C9C' }}/>
        </div>
      </div>
      <div className="fr-grid-row fr-grid-row--gutter">
        <div className="fr-col-1"></div>
        <div className="fr-col-10 fr-col-md-8">
          <p style={{ marginBottom: '24px' }}>
            <span className="boldText">Version incluant le bloc Marianne (r&eacute;serv&eacute;e aux communications institutionnelles)&nbsp;:</span>
            <span style={{ display: 'block', marginTop: '24px' }}>
              <a
                href="https://cdn.conseiller-numerique.gouv.fr/kit-communication/V3/logo-rf-conseiller-numerique-1280px.png"
                title="Logo Conseiller num&eacute;rique France Services PNG avec bloc Marianne"
                className="bleu-france"
                style={{ boxShadow: 'none' }}
                target="_blank" rel="noopener noreferrer">
                  T&eacute;l&eacute;charger le logo Conseiller num&eacute;rique France Services incluant le bloc Marianne, format PNG.
              </a>
              <br/>
              <a
                href="https://cdn.conseiller-numerique.gouv.fr/kit-communication/V3/logo-rf-conseiller-numerique.eps"
                title="Logo Conseiller num&eacute;rique France Services EPS avec bloc Marianne"
                className="bleu-france"
                style={{ boxShadow: 'none' }}
                target="_blank"
                rel="noopener noreferrer">
                  T&eacute;l&eacute;charger le logo Conseiller num&eacute;rique France Services incluant le bloc Marianne, format EPS.
              </a>
            </span>
          </p>
        </div>
        <div className="fr-col-12 fr-col-md-2 fr-mb-7w fr-mb-md-0w preview-image">
          <img
            src="https://cdn.conseiller-numerique.gouv.fr/kit-communication/V3/previews/preview-logo-rf-conseiller-numerique.png"
            alt="preview logo rf"
            style={{ height: '69px', border: '1px solid #9C9C9C' }}/>
        </div>
      </div>
      <div className="fr-grid-row fr-grid-row--gutter">
        <div className="fr-col-1"></div>
        <div className="fr-col-10 fr-col-md-8">
          <p style={{ marginBottom: '24px' }}>
            <span className="boldText">Version alternative avec texte blanc pour fond de couleur&nbsp;:</span>
            <span style={{ display: 'block', marginTop: '24px' }}>
              <a
                href="https://cdn.conseiller-numerique.gouv.fr/kit-communication/V3/logo-cnfs-blanc-1080px.png"
                title="Logo Conseiller num&eacute;rique France Services blanc au format PNG"
                className="bleu-france"
                style={{ boxShadow: 'none' }}
                target="_blank"
                rel="noopener noreferrer">
                  T&eacute;l&eacute;charger le logo Conseiller num&eacute;rique France Services blanc au format PNG.
              </a>
            </span>
          </p>
        </div>
        <div className="fr-col-12 fr-col-md-2 fr-mb-7w fr-mb-md-0w preview-image">
          <img
            src="https://cdn.conseiller-numerique.gouv.fr/kit-communication/V3/previews/preview-logo-cnfs-nb.png"
            alt="preview logo cnfs nb"
            style={{ height: '92px' }}/>
        </div>
      </div>
    </>
  );
}

export default LogoTypes;
