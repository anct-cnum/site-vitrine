import { useState } from 'react';

export const useGeoApi = () => {
  const urlBase = 'https://geo.api.gouv.fr/communes?limit=10&fields=nom,code,codesPostaux,centre,codeDepartement,codeRegion,codeCom&';

  const [villes, setVilles] = useState([]);

  const searchByName = async rechercheUtilisateur => {
    const url = `${urlBase}&nom=${rechercheUtilisateur}`;
    const villes = await fetch(url);
    const resultat = await villes.json();
    setVilles(resultat);
  };

  const getVilleParCode = async codePostal => {
    const url = `${urlBase}&code=${codePostal}`;
    const ville = await fetch(url);
    return await ville.json();
  };

  return { searchByName, getVilleParCode, villes };
};
