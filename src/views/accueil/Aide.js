import React from 'react';
import logoFS from '../../assets/brands/logo-france-services-min.svg';

function Aide() {

  return (
    <div className="aide fr-pt-8w">
      <div className="fr-container">
        <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
          <div className="fr-col-1"></div>
          <div className="fr-col-10">
            <h1 className="fr-h1" style={{ textAlign: 'center' }}>
              J&rsquo;ai besoin d&rsquo;aide pour mes d&eacute;marches administratives
            </h1>
          </div>
          <div className="fr-col-1"></div>
        </div>
        <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--center rowCustom" >
          <div className="fr-col-1"></div>
          <div className="fr-col-1 fr-mr-4w">
            <img src={logoFS} alt="Logo France Services" className="logoFS" />
          </div>
          <div className="fr-col-9">
            <p>
              &Agrave; moins de 30 minutes de chez vous, les agents France services vous accompagnent pour r&eacute;aliser vos d&eacute;marches aupr&eacute;s
              de 9 op&eacute;rateurs nationaux&nbsp;: les minist&egrave;res de l&rsquo;Int&eacute;rieur et de la Justice, les services des imp&ocirc;ts (DGFIP),
              P&ocirc;le Emploi, la Caisse d&rsquo;allocations familiales (CAF), l&esquo;Assurance maladie (CNAM), l&rsquo;Assurance Vieillesse (CNAV),
              la Mutualit&eacute; sociale agricole (MSA) et La Poste.
            </p>
          </div>
          <div className="fr-col-1"></div>
        </div>
      </div>
    </div>
  );
}

export default Aide;
