import React from 'react';
import CartographieCoordinateur from '../../assets/images/cartographie-coordinateur.svg';

function Coordination() {

  return (
    <section style={{ backgroundColor: '#F6F6F6' }}>
      <div className="fr-container fr-pt-14w fr-pb-10w">
        <div className="fr-grid-row fr-grid-row--gutter">
          <div className="fr-col-xl-8 fr-col-12">
            <h1>Coordination territoriale</h1>
            <h4 className="bleu-secondaire">de l’action des conseillers numériques</h4>
            <p style={{ width: '87%' }} className="gris-paragraphe">
              Le déploiement rapide du dispositif Conseiller numérique a fait émerger un fort
              besoin de <strong>coordination</strong> et <strong>d’animation de leur réseau au sein des territoires. </strong>
              Ce constat a mené à la création de postes de <strong>Conseillers numériques coordinateurs, </strong>
              dont l’action s’est avérée très positive.
            </p>
            <p style={{ width: '80%' }} className="fr-h4 gris-paragraphe">Les missions des Conseillers numériques coordinateurs sont les suivantes :</p>
          </div>
          <div className="fr-col-xl-3 fr-col-12">
            <img src={CartographieCoordinateur} alt="Cartographie Coordinateur" className="image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Coordination;
