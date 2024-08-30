export const useApiAdmin = () => {
  const creerCandidatureConseiller = async () => {
    const baseUrl = import.meta.env.VITE_APP_API_URL;
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    };

    try {
      const result = fetch(`${baseUrl}/candidature-conseiller`, requestOptions);
      console.log('===================', result);
    } catch (error) {
      console.error(error);
    }
  };

  return { creerCandidatureConseiller };
};
