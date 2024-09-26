import { useState } from 'react';

const TAILLE_SIRET = 14;
const TAILLE_RIDET = [6, 7];
const TAILLES_POSSIBLES = [...TAILLE_RIDET, TAILLE_SIRET];

export const useEntrepriseFinder = setGeoLocation => {
  const [entreprise, setEntreprise] = useState(null);
  const [error, setError] = useState(null);
  const [addressSuggestions, setAddressSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [addressLoading, setAddressLoading] = useState(false);
  const [denomination, setDenomination] = useState('');
  const [adresse, setAdresse] = useState('');

  const isValidSiretOrRidet = value => {
    const numericValue = value.replace(/\D/g, '');
    return TAILLES_POSSIBLES.includes(numericValue.length);
  };

  const clearEntrepriseData = () => {
    setEntreprise(null);
    setError(null);
    setGeoLocation(null);
    setDenomination('');
    setAdresse('');
  };

  const getGeoLocationFromAddress = async address => {
    try {
      const urlAPI = `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(address)}`;
      const response = await fetch(urlAPI);
      const result = await response.json();
      if (result.features && result.features.length > 0) {
        return result.features[0].geometry;
      }
    } catch (error) {
      setError('Impossible de trouver la localisation de l\'adresse.');
    }
    return null;
  };

  const search = async siretOrRidet => {
    clearEntrepriseData();
    setEntreprise(null);
    setError(null);
    setAddressSuggestions([]);
    if (!isValidSiretOrRidet(siretOrRidet)) {
      setError('Veuillez entrer un RIDET (6 ou 7 chiffres) ou un SIRET (14 chiffres) valide.');
      return;
    }
    setLoading(true);
    try {
      const baseUrl = import.meta.env.VITE_APP_API_PILOTAGE_URL;
      const response = await fetch(`${baseUrl}/structure/verify-siret-or-ridet/${siretOrRidet}`);
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
      }
      const result = await response.json();
      setEntreprise(result);
      setDenomination(result.nomStructure || '');
      if (siretOrRidet.length === TAILLE_SIRET && result.adresseStructure) {
        setAdresse(result.adresseStructure);
        const geoLocation = await getGeoLocationFromAddress(result.adresseStructure);
        if (geoLocation) {
          setGeoLocation(geoLocation);
        }
      }
      setError(null);
    } catch (err) {
      setError(err.message);
      setEntreprise(null);
    } finally {
      setLoading(false);
    }
  };

  const getAddressSuggestions = async adressePostale => {
    if (!adressePostale) {
      setAddressSuggestions([]);
      return;
    }
    try {
      setAddressLoading(true);
      const urlAPI = `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(adressePostale)}`;
      const response = await fetch(urlAPI);
      const result = await response.json();
      const suggestions = result.features.map(feature => ({
        label: `${feature.properties.postcode} ${feature.properties.city}`,
        codeCommune: feature.properties.citycode,
        geometry: feature.geometry,
      }));
      setAddressSuggestions(suggestions);
    } catch (error) {
      setAddressSuggestions([]);
    } finally {
      setAddressLoading(false);
    }
  };

  return {
    search,
    entreprise,
    error,
    getAddressSuggestions,
    addressSuggestions,
    loading,
    addressLoading,
    clearEntrepriseData,
    setDenomination,
    setAdresse,
    denomination,
    adresse
  };
};
