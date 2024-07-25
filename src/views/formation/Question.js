import React from 'react';

function Question() {
  const aideUrl = `${import.meta.env.VITE_APP_AIDE_URL}/category/la-formation-des-conseillers-numeriques-objectifs-et-modalite-dorganisation-1dj9ogr/`;
  return (
    <div className="fr-col-9 fr-mt-5w cadre-bleu">
      <b>Pour toute question compl&eacute;mentaire, consultez la&nbsp;</b>
      <a href={aideUrl} rel="noopener noreferrer" target="_blank">FAQ Formation</a>
    </div>

  );
}

export default Question;
