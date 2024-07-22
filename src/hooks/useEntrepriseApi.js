import { useState } from 'react';

const API_URL_NC = 'https://data.gouv.nc/api/explore/v2.1/catalog/datasets/entreprises-actives-au-ridet/records';
const API_URL_FR = 'https://entreprise.api.gouv.fr/v3/';

const TAILLE_SIRET = 14;
const TAILLE_RIDET = [6, 7];
const TAILLES_POSSIBLES = [...TAILLE_RIDET, TAILLE_SIRET];

const getUrlBySiret = siret => {
  const params = '?context=cnum&object=checkSiret&recipient=123456789';
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

export const useEntrepriseFinder = token => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [entrepriseData, setEntrepriseData] = useState(null);

  const search = (async searchValue => {
    if (!TAILLES_POSSIBLES.includes(searchValue.length)) {
      setError('Veuillez entrer un RIDET (6 ou 7 chiffres) ou un SIRET (14 chiffres) valide.');
      return;
    }
    setLoading(true);
    setError(null);
    setEntrepriseData(null);

    try {
      let data;
      if (searchValue.length === TAILLE_RIDET[0] || searchValue.length === TAILLE_RIDET[1]) {
        data = await fetchRidetData(searchValue);
        if (data) {
          setEntrepriseData({
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
        setEntrepriseData({
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

  return { search, loading, error, entrepriseData };
};