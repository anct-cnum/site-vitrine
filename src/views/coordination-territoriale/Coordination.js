import React from 'react';
import CartographieCoordinateur from '../../assets/images/cartographie-coordinateur-min.svg';

function Coordination() {

  return (
    <section style={{ backgroundColor: '#F6F6F6' }}>
      <div className="fr-container fr-pt-14w fr-pb-xl-10w fr-pb-6w">
        <div className="fr-grid-row fr-grid-row--gutter">
          <div className="fr-col-xl-8 fr-col-12">
            <h1 style={{ marginBottom: 0 }}>Coordination territoriale</h1>
            <h4 className="bleu-active">de l&rsquo;action des conseillers num&eacute;riques</h4>
            <p style={{ width: '87%' }} className="gris-light">
              Le d&eacute;ploiement rapide du dispositif Conseiller num&eacute;rique a fait &eacute;merger un fort
              besoin de<strong>&nbsp;coordination&nbsp;</strong>et<strong>&nbsp;d&rsquo;animation de leur r&eacute;seau au sein des territoires.&nbsp;</strong>
              Ce constat a men&eacute; &agrave; la cr&eacute;ation de postes de <strong>Conseillers num&eacute;riques coordinateurs,&nbsp;</strong>
              dont l&rsquo;action s&rsquo;est av&eacute;r&eacute;e tr&egrave;s positive.
            </p>
            <p style={{ width: '80%' }} className="fr-h4 gris-light display-desktop">
              Les missions des Conseillers num&eacute;riques coordinateurs sont les suivantes&nbsp;:
            </p>
          </div>
          <div className="fr-col-xl-3 fr-col-12">
            <img src={CartographieCoordinateur} alt="Cartographie Coordinateur" className="image-cartographie-coordinateur" />
            <p style={{ width: '80%' }} className="fr-h4 fr-mt-5w gris-light display-mobile">
              Les missions des Conseillers num&eacute;riques coordinateurs sont les suivantes&nbsp;:
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Coordination;
