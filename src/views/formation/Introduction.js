import React from 'react';

function Introduction() {
  return (
    <>
      <div className="fr-col-10">
        <h1 className="fr-h1 fr-mt-10w fr-mb-5w fr-ml-n1w">Formation des conseillers numériques</h1>
      </div>
      <div className="fr-col-10">
        <p className="fr-ml-n1w introduction">
          Tout au long de leur parcours, les conseillers numériques bénéficient d’une formation initiale puis continue
          obligatoire, pour leur permettre d’approfondir un vaste champ de compétences en médiation numérique.
        </p>
        <p className="fr-ml-n1w introduction">
          Lancée en 2021 par l’Agence Nationale de la Cohésion des Territoires (ANCT) et opérée par la Banque des Territoires,
          la formation des conseillers numériques est <strong>intégralement financée par l’Etat</strong>.
        </p>
      </div>
      <div className="fr-col-8 cadre">
        <div className="fr-col-11 fr-mx-5w fr-mt-2w">
          <p className="title-h3">
            Au cœur de la formation des conseillers numériques, le titre professionnel Responsable d’Espace de Médiation Numérique (REMN)
          </p>
          <p className="introduction">
            Le premier Certificat de Compétences Professionnelles (CCP1) du REMN fournit aux conseillers numériques
            les compétences de base en médiation numérique.
            Les CCP2 et CCP3 offrent aux conseillers numériques une opportunité d’approfondir leurs compétences en gestion
            et animation d’espaces de médiation numériques et de mise en œuvre de projets collaboratifs.
          </p>
        </div>
      </div>
    </>
  );
}

export default Introduction;
