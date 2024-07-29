import React from 'react';
import Sommaire from '../../components/Sommaire';

export default function SommaireStructure() {
  const parties = [
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
    <Sommaire parties={parties} />
  );
}
