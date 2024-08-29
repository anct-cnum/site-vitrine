import React from 'react';
import Notice from '../../components/commun/Notice';
import Checkbox from '../../components/commun/Checkbox';

export default function Engagement() {
  return (
    <Notice>
      <p className="fr-h4"><strong>En tant que structure accueillante, vous vous engagez à</strong></p>
      <ul data-testid="votre-engagement">
        <li>Assurer que le conseiller réalise des activités de montée en compétences du public (ateliers numériques, initiations au numérique), gratuites.</li>
        <li>Qu’il consacre une partie de son temps aux rencontres locales et nationales organisées pour la communauté et la formation continue, etc.</li>
        <li>Qu’il revête une tenue vestimentaire dédiée fournie par l’Etat.</li>
        <li>Tout mettre en oeuvre pour sélectionner le candidat dans un délai maximum d’un mois sur la plateforme.</li>
        <li>Signer dans les 15 jours suivants un contrat avec ce candidat.</li>
        <li>Laisser partir le conseiller numérique France Services en formation initiale ou continue.</li>
        <li>Mettre à sa disposition les moyens et équipements pour réaliser sa mission (ordinateur, téléphone portable, voiture si nécessaire).</li>
      </ul>
      <Checkbox id="engagement">
        Je confirme avoir lu et pris connaissance des conditions d’engagement.<span className="cc-obligatoire">*</span>
      </Checkbox>
    </Notice>
  );
}
