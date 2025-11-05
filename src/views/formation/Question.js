import React from 'react';

function Question() {
  const aideUrl = `${import.meta.env.VITE_APP_AIDE_URL}/fr/article/comment-acceder-a-la-formation-de-conseiller-numerique-tqszfy/`;

  return (
    <div className="fr-col-9 fr-mt-5w fr-py-2w cadre-bleu">
      <b>Pour toute information complémentaire, consultez la </b>
      <a href={aideUrl} rel="noopener noreferrer" target="_blank">FAQ</a>
    </div>
  );
}

export default Question;
