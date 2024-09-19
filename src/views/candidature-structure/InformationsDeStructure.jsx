import React from 'react';
import Input from '../../components/commun/Input';
import CompanyFinder from './CompanyFinder';
import BoutonRadio from '../../components/commun/BoutonRadio';
import { useEntrepriseFinder } from './useEntrepriseFinder';
import PropTypes from 'prop-types';
import './CandidatureStructure.css';

const TAILLE_SIRET = 14;
const TAILLE_RIDET = [6, 7];
const TAILLES_POSSIBLES = [...TAILLE_RIDET, TAILLE_SIRET];

export default function InformationsDeContact({ setGeoLocation }) {
  const {
    entreprise,
    search,
    getAddressSuggestions,
    addressSuggestions,
    loading,
    addressLoading,
    clearEntrepriseData,
    denomination,
    setDenomination,
    adresse,
    setAdresse
  } = useEntrepriseFinder(setGeoLocation);

  const handleSearch = value => {
    const numericValue = value.replace(/\D/g, '');
    if (TAILLES_POSSIBLES.includes(numericValue.length)) {
      search(numericValue);
    } else {
      clearEntrepriseData();
    }
  };

  const handleAdresseChange = event => {
    setAdresse(event.target.value);
    if (entreprise?.isRidet) {
      getAddressSuggestions(event.target.value);
    }
  };

  const handleSuggestionClick = suggestion => {
    setAdresse(suggestion.label);
    setGeoLocation(suggestion.geometry);
    getAddressSuggestions('');
  };

  return (
    <fieldset
      className="fr-border cc-section fr-p-3w fr-mb-3w"
      id="informations-de-structure"
    >
      <legend className="fr-h5">Vos informations de structure</legend>
      <hr />
      <CompanyFinder onSearch={handleSearch} />
      <Input
        id="denomination"
        value={denomination}
        isLoading={loading}
        ariaBusy={loading}
        onChange={e => setDenomination(e.target.value)}
      >
        Dénomination <span className="cc-obligatoire">*</span>
      </Input>
      <div className="adresse-container">
        <Input
          id="adresse"
          name="adresse"
          value={adresse}
          onChange={handleAdresseChange}
          readOnly={!entreprise?.isRidet}
          list="adresseSuggestions"
          isLoading={(entreprise && loading && !entreprise?.isRidet) || addressLoading}
          ariaBusy={(entreprise && loading && !entreprise?.isRidet) || addressLoading}
        >
          Adresse <span className="cc-obligatoire">*</span>
        </Input>
        <div className="liste-adresses">
          <div className="adresses-trouvees">
            {addressSuggestions.map((suggestion, index) => (
              <div key={index} className="adresse" value={suggestion.label} onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion.label}
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="fr-mb-3w cc-bold">
        Votre structure est <span className="cc-obligatoire">*</span>
      </p>
      <div className="fr-grid-row">
        <BoutonRadio id="COMMUNE" nomGroupe="type">
          Une commune
        </BoutonRadio>
        <BoutonRadio id="DEPARTEMENT" nomGroupe="type">
          Un département
        </BoutonRadio>
        <BoutonRadio id="REGION" nomGroupe="type">
          Une région
        </BoutonRadio>
        <BoutonRadio id="EPCI" nomGroupe="type">
          Un établissement public de coopération intercommunale
        </BoutonRadio>
        <BoutonRadio id="COLLECTIVITE" nomGroupe="type">
          Une collectivité à statut particulier
        </BoutonRadio>
        <BoutonRadio id="GIP" nomGroupe="type">
          Un GIP
        </BoutonRadio>
        <BoutonRadio id="PRIVATE" nomGroupe="type">
          Une structure privée (association, entreprise de l’ESS, fondations)
        </BoutonRadio>
      </div>
    </fieldset>
  );
}

InformationsDeContact.propTypes = {
  setGeoLocation: PropTypes.func.isRequired,
  geoLocation: PropTypes.object,
};
