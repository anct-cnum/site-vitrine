export const useGeoApi = () => {
  const urlBase = 'https://geo.api.gouv.fr/communes?limit=10&fields=nom,code&';
  const fetchVilles = async rechercheUtilisateur => {
    const url = `${urlBase}&nom=${rechercheUtilisateur}`;
    const villes = await fetch(url);
    return await villes.json();
  };

  return { fetchVilles };
};
