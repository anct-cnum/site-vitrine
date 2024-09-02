export const useApiAdmin = () => {
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

  const convertStringToBoolean = (conseillerData, key) => {
    if (conseillerData[key] === 'on') {
      conseillerData[key] = true;
    }
  };

  const buildConseillerData = formData => {
    const conseillerData = JSON.stringify(Object.fromEntries(formData));
    convertStringToBoolean(conseillerData, 'demandeurEmploi');
    convertStringToBoolean(conseillerData, 'enEmploi');
    convertStringToBoolean(conseillerData, 'enFormation');
    convertStringToBoolean(conseillerData, 'diplome');

    return conseillerData;
  };

  return { buildConseillerData, creerCandidatureConseiller };
};
