import React from 'react';
import { Link } from 'react-router-dom';

function Actions() {

  const urlFormConseiller = process.env.REACT_APP_FORMS_URL + '/formulaire-indisponible';

  return (
    <div className="fr-container fr-col-lg-5 fr-col-xs-12 fr-mb-10w" style={{ textAlign: 'center' }}>
      <Link
        to={`${urlFormConseiller}/formulaire-indisponible`}
        target="_blank" rel="noopener noreferrer"
        className="buttonCustom blueButtonCustom fr-text--xx-bold"
        title="Devenir conseiller num&eacute;rique">Devenir conseiller num&eacute;rique</Link>
    </div>
  );
}

export default Actions;
