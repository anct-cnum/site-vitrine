import React from 'react';

function Actions() {

  const urlFormConseiller = '/candidature-conseiller';

  return (
    <div className="fr-container fr-col-lg-5 fr-col-xs-12 fr-mb-10w" style={{ textAlign: 'center' }}>
      <a
        href={urlFormConseiller}
        target="_self" rel="noopener noreferrer"
        className="buttonCustom blueButtonCustom fr-text--xx-bold"
        title="Devenir conseiller num&eacute;rique">Devenir conseiller num&eacute;rique</a>
    </div>
  );
}

export default Actions;
