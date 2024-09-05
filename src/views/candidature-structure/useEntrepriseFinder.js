import { useState } from 'react';
import axios from 'axios';

const TAILLE_SIRET = 14;
const TAILLE_RIDET = [6, 7];
const TAILLES_POSSIBLES = [...TAILLE_RIDET, TAILLE_SIRET];

export const useEntrepriseFinder = () => {
  const [entreprise, setEntreprise] = useState(null);
  const [error, setError] = useState(null);
  const [addressSuggestions, setAddressSuggestions] = useState([]);

  const isValidSiretOrRidet = value => {
    const numericValue = value.replace(/\D/g, '');
    return TAILLES_POSSIBLES.includes(numericValue.length);
  };

  const search = async siretOrRidet => {
    setEntreprise(null);
    setError(null);
    setAddressSuggestions([]);
    if (!isValidSiretOrRidet(siretOrRidet)) {
      setError('Veuillez entrer un RIDET (6 ou 7 chiffres) ou un SIRET (14 chiffres) valide.');
      return;
    }
    try {
      const response = await fetch(`${process.env.VITE_APP_API_URL}/structure/verify-siret-or-ridet/${siretOrRidet}`);
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

  const getAddressSuggestions = async adressePostale => {
    if (!adressePostale) {
      setAddressSuggestions([]);
      return;
    }

    try {
      const urlAPI = `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(adressePostale)}`;
      const response = await axios.get(urlAPI);
      const suggestions = response.data.features.map(feature => ({
        label: feature.properties.label,
        score: feature.properties.score
      }));
      setAddressSuggestions(suggestions);
    } catch (error) {
      setAddressSuggestions([]);
    }
  };

  return { search, entreprise, error, getAddressSuggestions, addressSuggestions };
};
