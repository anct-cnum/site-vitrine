import { useState } from 'react';

export const useGeoApi = () => {
  const baseUrl = new URL('https://geo.api.gouv.fr/communes');
  baseUrl.searchParams.set('limit', '10');
  baseUrl.searchParams.set('fields', 'nom,code,codesPostaux,centre,codeDepartement,codeRegion,codeCom');

  const [villes, setVilles] = useState([]);

  const searchByName = async rechercheUtilisateur => {
    const url = `${baseUrl.toString()}&nom=${rechercheUtilisateur}`;
    const villes = await fetch(url);
    const resultat = await villes.json();
    setVilles(resultat);
  };

  const getVilleParCode = async codePostal => {
    const url = `${baseUrl.toString()}&codePostal=${codePostal}`;
    const ville = await fetch(url);
    return await ville.json();
  };

  return { searchByName, getVilleParCode, villes };
};
