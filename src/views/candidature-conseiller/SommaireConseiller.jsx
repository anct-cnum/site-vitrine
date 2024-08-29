import React from 'react';
import Sommaire from '../../components/Sommaire';

export default function SommaireConseiller() {
  const parties = [
    {
      ancre: '#informations-de-contact',
      libelle: 'Vos informations de contact'
    },
    {
      ancre: '#situation-et-experience',
      libelle: 'Votre situation et expérience'
    },
    {
      ancre: '#votre-disponibilite',
      libelle: 'Votre disponibilité'
    },
    {
      ancre: '#votre-motivation',
      libelle: 'Votre motivation'
    },
  ];

  return (
    <Sommaire parties={parties} />
  );
}
