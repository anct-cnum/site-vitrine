import { useState } from 'react';

export const useGeoApi = () => {
  const baseUrlSearch = new URL('https://api-adresse.data.gouv.fr/search');
  baseUrlSearch.searchParams.set('type', 'municipality');

  const baseUrl = new URL('https://geo.api.gouv.fr/communes');
  baseUrl.searchParams.set('limit', '10');
  baseUrl.searchParams.set('fields', 'nom,code,codesPostaux,centre,codeDepartement,codeRegion');

  const [villes, setVilles] = useState([]);

  const distinctVilles = villes => [...new Map(villes.map(item => [item.code, item])).values()];

  const searchByName = async rechercheUtilisateur => {
    const url = `${baseUrlSearch.toString()}&q=${rechercheUtilisateur}`;
    const villes = await fetch(url);
    const listCommune = await villes.json();

    const resultat = listCommune?.features.map(result => ({
      'nom': result.properties.municipality,
      'code': result.properties.citycode,
      'codesPostaux': [
        result.properties.postcode
      ]
    }));
    const propositionVilles = await distinctVilles(resultat);
    setVilles(propositionVilles);
  };

  const getVilleParCode = async (codePostal, codeCommune) => {
    const url = `${baseUrl.toString()}&codePostal=${codePostal}&code=${codeCommune}`;
    const ville = await fetch(url);
    return await ville.json();
  };

  return { searchByName, getVilleParCode, villes };
};
