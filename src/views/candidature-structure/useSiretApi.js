import { useState } from 'react';

const getUrlEntrepriseApiV3 = (sirenOuSiret, type) => {
  const params = '?context=cnum&object=checkSiret&recipient=13002603200016';
  const url = 'https://entreprise.api.gouv.fr/v3/';
  let service = '';
  if (type === 'siret') {
    service = `insee/sirene/etablissements/'${sirenOuSiret}`;
  } else if (type === 'siren') {
    service = `insee/sirene/unites_legales/${sirenOuSiret}/siege_social/`;
  }
  return `${url}${service}${params}`;
};

export const useSiretApi = () => {
  const [entreprise, setEntreprise] = useState(null);
  const [error, setError] = useState(null);

  const search = async (sirenOuSiret, type) => {
    try {
      const url = getUrlEntrepriseApiV3(sirenOuSiret, type);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
      }
      const result = await response.json();
      setEntreprise(result);
      setError(null);
    } catch (err) {
      setError(err.message);
      setEntreprise(null);
    }
  };

  return { search, entreprise, error };
};
