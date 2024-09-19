import { useGeoApi } from './useGeoApi';

export const useApiAdmin = () => {
  const { getVilleParCode } = useGeoApi();

  const creerCandidatureConseiller = async conseillerData => {
    const baseUrl = import.meta.env.VITE_APP_API_URL;
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
    const baseUrl = import.meta.env.VITE_APP_API_URL;
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

  const convertValueToBoolean = (conseillerData, key) => {
    conseillerData[key] = conseillerData[key] === 'on' || conseillerData[key] === 'oui';
  };

  const getInformationsVille = async codePostal => {
    if (codePostal) {
      return await getVilleParCode(codePostal);
    }
  };

  const handleInformationsVille = async (formulaireData, codePostal) => {
    const informationsVille = (await getInformationsVille(codePostal))?.[0];
    formulaireData.nomCommune = informationsVille?.nom;
    formulaireData.codePostal = informationsVille?.code;
    formulaireData.codeCommune = informationsVille?.code;
    formulaireData.location = informationsVille?.centre;
    formulaireData.codeDepartement = informationsVille?.codeDepartement;
    formulaireData.codeRegion = informationsVille?.codeRegion;
    formulaireData.codeCom = informationsVille?.code;
  };

  const buildConseillerData = async formData => {
    const conseillerData = Object.fromEntries(formData);
    convertValueToBoolean(conseillerData, 'estDemandeurEmploi');
    convertValueToBoolean(conseillerData, 'estEnEmploi');
    convertValueToBoolean(conseillerData, 'estEnFormation');
    convertValueToBoolean(conseillerData, 'estDiplomeMedNum');
    convertValueToBoolean(conseillerData, 'aUneExperienceMedNum');
    const codePostal = conseillerData.lieuHabitation.split(' ')?.[0];
    await handleInformationsVille(conseillerData, codePostal);
    delete conseillerData.lieuHabitation;
    delete conseillerData['g-recaptcha-response'];

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

  const handleAdresse = async structureData => {
    const codePostal = structureData.adresse.match(/\d{5}/)?.[0];
    await handleInformationsVille(structureData, codePostal);
    delete structureData.adresse;
  };

  const buildStructureData = async (formData, geoLocation) => {
    const structureData = Object.fromEntries(formData);
    structureData.location = geoLocation;
    convertValueToBoolean(structureData, 'aIdentifieCandidat');
    handleContact(structureData);
    handleInformationsStructure(structureData);
    await handleAdresse(structureData);
    convertValueToBoolean(structureData, 'confirmationEngagement');
    delete structureData['g-recaptcha-response'];
    return JSON.stringify(structureData);
  };

  return {
    buildConseillerData,
    buildStructureData,
    creerCandidatureConseiller,
    creerCandidatureStructure };
};
