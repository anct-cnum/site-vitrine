import { useState, useCallback } from 'react';
import { debounce } from '../views/candidature-conseiller/debounce';

const API_URL_NC = 'https://data.gouv.nc/api/explore/v2.1/catalog/datasets/entreprises-actives-au-ridet/records';
const API_URL_FR = 'https://entreprise.api.gouv.fr/v3/';

const getUrlBySiret = siret => {
  const params = '?context=cnum&object=checkSiret&recipient=13002603200016';
  return `${API_URL_FR}insee/sirene/etablissements/${siret}${params}`;
};

async function fetchRidetData(ridet) {
  const params = new URLSearchParams({
    where: `rid7='${ridet.padStart(7, '0')}'`,
    select: 'denomination,libelle_commune,province,libelle_naf',
    limit: '1',
  });
  const response = await fetch(`${API_URL_NC}?${params}`);
  if (!response.ok) {
    throw new Error(`Une erreur est survenue lors du traitement de la requête pour le RIDET ${ridet}`);
  }
  const data = await response.json();
  return data.results[0] ?? null;
}

export const useCompanyFinder = token => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [companyData, setCompanyData] = useState(null);

  const search = (async searchValue => {
    if (![6, 7, 14].includes(searchValue.length)) {
      setError('Veuillez entrer un RIDET (6 ou 7 chiffres) ou un SIRET (14 chiffres) valide.');
      return;
    }
    setLoading(true);
    setError(null);
    setCompanyData(null);

    try {
      let data;
      if (searchValue.length === 6 || searchValue.length === 7) {
        data = await fetchRidetData(searchValue);
        if (data) {
          setCompanyData({
            name: data.denomination,
            address: `${data.libelle_commune}, ${data.province}`,
            activity: data.libelle_naf
          });
        } else {
          setError('Aucune entreprise trouvée pour ce RIDET.');
        }
      } else {
        const url = getUrlBySiret(searchValue);
        const response = await fetch(url, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        data = await response.json();
        setCompanyData({
          name: data.unite_legale.personne_morale_attributs?.raison_sociale || data.unite_legale.personne_physique_attributs?.nom_complet,
          address: `${data.adresse.numero_voie} ${data.adresse.type_voie} ${data.adresse.libelle_voie}, 
          ${data.adresse.code_postal} ${data.adresse.libelle_commune}`,
          activity: data.unite_legale.activite_principale_libelle
        });
      }
    } catch (err) {
      setError('Une erreur est survenue lors de la requête.');
    } finally {
      setLoading(false);
    }
  });
  const debouncedSearch = useCallback(debounce(search, 300), [search]);

  return { search: debouncedSearch, loading, error, companyData };
};
