import React from 'react';
import Sommaire from '../../components/Sommaire';

export default function SommaireCoordinateur() {
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
      ancre: '#votre-besoin-en-coordinateur',
      libelle: 'Votre besoin en coordinateur'
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
