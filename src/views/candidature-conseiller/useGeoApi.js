import { useState } from 'react';

export const useGeoApi = () => {
  const urlBase = 'https://geo.api.gouv.fr/communes?limit=10&fields=nom,code&';

  const [villes, setVilles] = useState([]);

  const search = async rechercheUtilisateur => {
    const url = `${urlBase}&nom=${rechercheUtilisateur}`;
    const villes = await fetch(url);
    const resultat = await villes.json();
    setVilles(resultat);
  };

  return { search, villes };
};
