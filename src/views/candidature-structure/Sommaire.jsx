export default function Sommaire() {
  const partiesSommaire = [
    {
      ancre: '#informations-de-structure',
      libelle: 'Vos informations de structure'
    },
    {
      ancre: '#informations-de-contact',
      libelle: 'Vos informations de contact'
    },
    {
      ancre: '#votre-besoin-en-conseiller-numerique',
      libelle: 'Votre besoin en conseiller numérique'
    },
    {
      ancre: '#votre-motivation',
      libelle: 'Votre motivation'
    }
  ];
  return (
    <nav aria-label="Sommaire">
      <ul>
        {
          partiesSommaire.map(partieSommaire => (
            <li key={partieSommaire.ancre}>
              <a href={partieSommaire.ancre}>
                {partieSommaire.libelle}
              </a>
            </li>
          ))
        }
      </ul>
    </nav>
  );
}
