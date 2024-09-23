export const useApiConfirmationEmailCandidatureStructure = () => {

  const actionConfirmationEmailCandidatureStructure = async token => {
    const baseUrl = import.meta.env.VITE_APP_API_PILOTAGE_URL;
    const requestOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
    };
    try {
      return await fetch(`${baseUrl}/confirmation-email-inscription-structure/${token}`, requestOptions);
    } catch (error) {
      return error;
    }
  };

  return { actionConfirmationEmailCandidatureStructure };
};
