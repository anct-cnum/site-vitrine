import React from 'react';
import logoFS from '../../assets/brands/logo-france-services-min.svg';

function Aide() {

  return (
    <div className="aide fr-pt-7w fr-pb-9w">
      <div className="rowCustom" >
        <div className="partLogo">
          <img src={logoFS} alt="Logo France Services" className="logoFS" />
        </div>
        <div className="partText">
          <h1 className="fr-h1 title fr-mb-4w">
            J&rsquo;ai besoin d&rsquo;aide pour mes d&eacute;marches administratives
          </h1>
          <p>
            &Agrave; moins de 30 minutes de chez vous, les agents France services vous accompagnent pour r&eacute;aliser vos d&eacute;marches aupr&egrave;s
            de 9 op&eacute;rateurs nationaux&nbsp;: les minist&egrave;res de l&rsquo;Int&eacute;rieur et de la Justice, les services des imp&ocirc;ts (DGFIP),
            P&ocirc;le Emploi, la Caisse d&rsquo;allocations familiales (CAF), l&rsquo;Assurance maladie (CNAM), l&rsquo;Assurance Vieillesse (CNAV),
            la Mutualit&eacute; sociale agricole (MSA) et La Poste.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aide;
