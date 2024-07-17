import { debounce } from './debounce';

export const useGeoApi = () => {
  const urlBase = 'https://geo.api.gouv.fr/communes?limit=10&fields=nom,code&';
  const fetchVilles = async rechercheUtilisateur => {
    const url = `${urlBase}&nom=${rechercheUtilisateur}`;
    const villes = await fetch(url);
    return villes.json();
  };

  return { fetchVilles: debounce(fetchVilles) };
};
