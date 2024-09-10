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

  const handleSituations = (conseillerData, key) => {
    conseillerData[key] = conseillerData[key] === 'on';
  };

  const getInformationsVille = async lieuHabitation => {
    const codePostal = lieuHabitation.split(' ')?.[0];
    if (codePostal) {
      return await getVilleParCode(codePostal);
    }
  };

  const handleExperienceMedNum = conseillerData => {
    conseillerData.aUneExperienceMedNum = conseillerData.aUneExperienceMedNum === 'oui';
  };

  const buildConseillerData = async formData => {
    const conseillerData = Object.fromEntries(formData);
    handleSituations(conseillerData, 'estDemandeurEmploi');
    handleSituations(conseillerData, 'estEnEmploi');
    handleSituations(conseillerData, 'estEnFormation');
    handleSituations(conseillerData, 'estDiplomeMedNum');
    handleExperienceMedNum(conseillerData);
    const informationsVille = (await getInformationsVille(formData.get('lieuHabitation')))?.[0];
    conseillerData.nomCommune = informationsVille?.nom;
    conseillerData.codePostal = informationsVille?.code;
    conseillerData.codeCommune = informationsVille?.code;
    conseillerData.location = informationsVille?.centre;
    conseillerData.codeDepartement = informationsVille?.codeDepartement;
    conseillerData.codeRegion = informationsVille?.codeRegion;
    conseillerData.codeCom = informationsVille?.code;
    delete conseillerData.lieuHabitation;
    delete conseillerData['g-recaptcha-response'];

    return JSON.stringify(conseillerData);
  };

  return { buildConseillerData, creerCandidatureConseiller };
};
