import React from 'react';

function Actions() {

  const urlFormConseiller = process.env.REACT_APP_FORMS_URL + '/conseiller/new';

  return (
    <div className="fr-container fr-col-lg-5 fr-col-xs-12 fr-mb-10w" style={{ textAlign: 'center' }}>
      <a
        href={urlFormConseiller}
        target="_blank" rel="noopener noreferrer"
        className="buttonCustom blueButtonCustom fr-text--xx-bold fr-mb-8w"
        title="Devenir conseiller num&eacute;rique">Devenir conseiller num&eacute;rique</a>

      <a
        href="http://cdn.conseiller-numerique.gouv.fr/presentation-conseiller-numerique.pdf"
        target="_blank" rel="noopener noreferrer"
        className="buttonCustom greyButtonCustom fr-text--xx-bold"
        title="T&eacute;l&eacute;charger la fiche conseiller num&eacute;rique">
          T&eacute;l&eacute;charger la fiche conseiller num&eacute;rique
      </a>
    </div>
  );
}

export default Actions;
