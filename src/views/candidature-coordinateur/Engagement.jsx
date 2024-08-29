import React from 'react';
import Notice from '../../components/commun/Notice';
import Checkbox from '../../components/commun/Checkbox';

export default function Engagement() {
  return (
    <Notice>
      <p className="fr-h4">
        <strong>En tant que structure accueillante, vous vous engagez à</strong>
      </p>
      <p>
        Assurer que le conseiller réalise des activités visant à:
      </p>
      <ul data-testid="votre-engagement">
        <li>Renforcer le maillage et les synergies territoriales</li>
        <li>Être le relais principal des employeurs, des Conseillers numériques et de l’équipe d’animation nationale</li>
        <li>Imaginer et mettre en place des collaborations sur la base des besoins de la communauté des Conseillers numériques</li>
        <li>Signer dans les 15 jours suivants un contrat avec ce candidat</li>
        <li>Laisser partir le conseiller numérique en formation initiale ou continue</li>
        <li>Mettre à sa disposition les moyens et équipements pour réaliser sa mission (ordinateur, téléphone portable, voiture si nécessaire)</li>
      </ul>
      <Checkbox id="engagement">
        Je confirme avoir lu et pris connaissance des conditions d’engagement.<span className="cc-obligatoire">*</span>
      </Checkbox>
    </Notice>
  );
}
