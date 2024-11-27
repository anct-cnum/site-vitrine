import { useGeoApi } from './useGeoApi';

export const useApiAdmin = () => {
  const { getVilleParCode } = useGeoApi();

  const creerCandidatureConseiller = async conseillerData => {
    const baseUrl = import.meta.env.VITE_APP_API_PILOTAGE_URL;
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: conseillerData
    };

    try {
      return await fetch(`${baseUrl}/candidature-conseiller`, requestOptions);
    } catch (error) {
      return error;
    }
  };

  const creerCandidatureStructure = async structureData => {
    const baseUrl = import.meta.env.VITE_APP_API_PILOTAGE_URL;
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: structureData
    };

    try {
      return await fetch(`${baseUrl}/candidature-structure`, requestOptions);
    } catch (error) {
      return error;
    }
  };

  const creerCandidatureCoordinateur = async structureData => {
    const baseUrl = import.meta.env.VITE_APP_API_PILOTAGE_URL;
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: structureData
    };

    try {
      return await fetch(`${baseUrl}/candidature-structure-coordinateur`, requestOptions);
    } catch (error) {
      return error;
    }
  };

  const convertValueToBoolean = (conseillerData, key) => {
    conseillerData[key] = conseillerData[key] === 'on' || conseillerData[key] === 'oui';
  };

  const getInformationsVille = async codeCommune => {
    if (codeCommune) {
      return await getVilleParCode(codeCommune);
    }
  };

  const handleInformationsVille = async (formulaireData, codeCommune) => {
    const informationsVille = (await getInformationsVille(codeCommune));
    formulaireData.nomCommune = informationsVille?.nom;
    formulaireData.codePostal = informationsVille?.codesPostaux[0];
    formulaireData.codeCommune = informationsVille?.code;
    formulaireData.location = informationsVille?.centre;
    formulaireData.codeDepartement = informationsVille?.codeDepartement;
    formulaireData.codeRegion = informationsVille?.codeRegion;
    formulaireData.codeCom = informationsVille?.codeDepartement === '00' ? informationsVille?.code.substring(0, 3) : null;
    return formulaireData;
  };

  const buildConseillerData = async formData => {
    const conseillerData = Object.fromEntries(formData);
    convertValueToBoolean(conseillerData, 'estDemandeurEmploi');
    convertValueToBoolean(conseillerData, 'estEnEmploi');
    convertValueToBoolean(conseillerData, 'estEnFormation');
    convertValueToBoolean(conseillerData, 'estDiplomeMedNum');
    convertValueToBoolean(conseillerData, 'aUneExperienceMedNum');
    const codeCommune = conseillerData.lieuHabitationCodeCommune;
    await handleInformationsVille(conseillerData, codeCommune);
    delete conseillerData.lieuHabitation;
    delete conseillerData['g-recaptcha-response'];
    delete conseillerData['lieuHabitationCodeCommune'];

    return JSON.stringify(conseillerData);
  };

  const handleContact = structureData => {
    structureData.contact = {
      prenom: structureData.prenom,
      nom: structureData.nom,
      fonction: structureData.fonction,
      email: structureData.email,
      telephone: structureData.telephone,
    };
    delete structureData.prenom;
    delete structureData.nom;
    delete structureData.fonction;
    delete structureData.email;
    delete structureData.telephone;
  };

  const handleInformationsStructure = structureData => {
    structureData.nom = structureData.denomination;
    delete structureData.denomination;
  };

  const handleAdresse = async (structureData, codeCommune) => {
    await handleInformationsVille(structureData, codeCommune);
    delete structureData.adresse;
    return structureData;
  };

  const handleRidetSiret = structureData => {
    structureData.ridet = null;
    if (structureData.siret.length < 14) {
      structureData.ridet = structureData.siret;
      structureData.siret = null;
    }
  };

  const buildStructureData = async (formData, geoLocation, codeCommune) => {
    const structureData = Object.fromEntries(formData);
    structureData.location = geoLocation;
    convertValueToBoolean(structureData, 'aIdentifieCandidat');
    handleContact(structureData);
    handleInformationsStructure(structureData);
    handleRidetSiret(structureData);
    await handleAdresse(structureData, codeCommune);
    convertValueToBoolean(structureData, 'confirmationEngagement');
    delete structureData['g-recaptcha-response'];
    return JSON.stringify(structureData);
  };

  const buildCoordinateurData = async (formData, geoLocation, codeCommune) => {
    const coordinateurData = Object.fromEntries(formData);
    handleContact(coordinateurData);
    handleInformationsStructure(coordinateurData);
    handleRidetSiret(coordinateurData);
    await handleAdresse(coordinateurData, codeCommune);
    convertValueToBoolean(coordinateurData, 'aIdentifieCoordinateur');
    convertValueToBoolean(coordinateurData, 'confirmationEngagement');
    delete coordinateurData['g-recaptcha-response'];
    return JSON.stringify(coordinateurData);
  };

  return {
    buildConseillerData,
    buildStructureData,
    buildCoordinateurData,
    creerCandidatureConseiller,
    creerCandidatureStructure,
    creerCandidatureCoordinateur,
  };
};
