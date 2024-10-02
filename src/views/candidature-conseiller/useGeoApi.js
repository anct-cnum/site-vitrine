import { useState } from 'react';

export const useGeoApi = () => {
  const [villes, setVilles] = useState([]);

  const distinctVilles = villes => [...new Map(villes.map(item => [item.code, item])).values()];

  const searchByName = async rechercheUtilisateur => {
    const baseUrlSearch = new URL('https://api-adresse.data.gouv.fr/search');
    baseUrlSearch.searchParams.set('type', 'municipality');
    const url = `${baseUrlSearch.toString()}&q=${encodeURIComponent(rechercheUtilisateur)}`;
    const villes = await fetch(url);
    const communes = await villes.json();

    const resultat = communes?.features.map(result => ({
      'nom': result.properties.municipality,
      'code': result.properties.citycode,
      'codesPostaux': [
        result.properties.postcode
      ]
    }));
    const propositionVilles = await distinctVilles(resultat);
    setVilles(propositionVilles);
  };

  const getVilleParCode = async codeCommune => {
    const baseUrl = new URL(`https://geo.api.gouv.fr/communes/${codeCommune}`);
    baseUrl.searchParams.set('fields', 'nom,code,codesPostaux,centre,codeDepartement,codeRegion');
    const ville = await fetch(baseUrl.toString());
    return await ville.json();
  };

  return { searchByName, getVilleParCode, villes };
};
