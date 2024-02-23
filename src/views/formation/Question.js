import React from 'react';

function Question() {
  const aideUrl = `${process.env.REACT_APP_AIDE_URL}/category/la-formation-des-conseillers-numeriques-objectifs-et-modalite-dorganisation-1dj9ogr/`;
  return (
    <div>
      <p className="bold">
        Pour toute question complémentaire, consultez la <a href={aideUrl}>FAQ Formation</a>
      </p>
    </div>
    
  );
}

export default Question;
