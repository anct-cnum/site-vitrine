import React, { useEffect } from 'react';
import Input from '../../components/commun/Input';
import CompanyFinder from './CompanyFinder';
import { useEntrepriseFinder } from './useEntrepriseFinder';
import PropTypes from 'prop-types';
import './CandidatureStructure.css';
import RadioGroup from '../../components/commun/RadioGroup';
import { checkValidity } from '../../shared/checkValidity';

const TAILLE_SIRET = 14;
const TAILLE_RIDET = [6, 7];
const TAILLES_POSSIBLES = [...TAILLE_RIDET, TAILLE_SIRET];

const options = [
  {
    id: 'COMMUNE',
    label: 'Une commune'
  },
  {
    id: 'DEPARTEMENT',
    label: 'Un département'
  },
  {
    id: 'REGION',
    label: 'Une région'
  },
  {
    id: 'EPCI',
    label: 'Un établissement public de coopération intercommunale'
  },
  {
    id: 'COLLECTIVITE',
    label: 'Une collectivité à statut particulier'
  },
  {
    id: 'GIP',
    label: 'Un GIP'
  },
  {
    id: 'PRIVATE',
    label: 'Une structure privée (association, entreprise de l’ESS, fondations)'
  },
];

export default function InformationsDeStructure({ setGeoLocation, setCodeCommune, errors, setErrors, formRef }) {
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
    setAdresse,
  } = useEntrepriseFinder(setGeoLocation, setCodeCommune);

  useEffect(() => {
    if (denomination) {
      checkValidity(formRef, setErrors);
    }
  }, [denomination]);

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
    setCodeCommune(suggestion.codeCommune);
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
      <CompanyFinder onSearch={handleSearch} errors={errors} />
      <Input
        id="denomination"
        value={denomination}
        isLoading={loading}
        ariaBusy={loading}
        onChange={event => {
          setDenomination(event.target.value);
        }}
        error={errors.denomination}
      >
        Dénomination <span className="cc-obligatoire">*</span>
      </Input>
      <div className="adresse-container">
        <Input
          id="adresse"
          value={adresse}
          onChange={handleAdresseChange}
          disabled={!entreprise?.isRidet}
          list="adresseSuggestions"
          isLoading={(entreprise && loading && !entreprise?.isRidet) || addressLoading}
          ariaBusy={(entreprise && loading && !entreprise?.isRidet) || addressLoading}
          error={errors.adresse}
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
        <RadioGroup nomGroupe="type" options={options} />
      </div>
    </fieldset>
  );
}

InformationsDeStructure.propTypes = {
  setGeoLocation: PropTypes.func.isRequired,
  setCodeCommune: PropTypes.func.isRequired,
  geoLocation: PropTypes.object,
  errors: PropTypes.object,
  setErrors: PropTypes.func,
  formRef: PropTypes.object
};
