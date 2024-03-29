import React from 'react';

function Orthographe() {

  return (
    <div className="fr-grid-row fr-grid-row--gutter">
      <div className="fr-col-1"></div>
      <div className="fr-col-10 fr-col-md-8 fr-mb-7w">
        <h4 className="h4CustomKit h4CustomKit--secondary" id="titre-ancre-2.1">2.1&nbsp;&nbsp;Orthographe</h4>
        <p style={{ marginBottom: '0' }}>
          On &eacute;crit&nbsp;: &laquo;&nbsp;<b>C</b>onseiller <b>n</b>um&eacute;rique&nbsp;&raquo;,
          majuscule au terme &laquo;&nbsp;Conseiller&nbsp;&raquo; uniquement
          pour d&eacute;signer le dispositif&nbsp;; on utilise l&rsquo;acronyme &laquo;&nbsp;<b>Conum</b>&nbsp;&raquo;.
          On &eacute;crit &laquo;&nbsp;les conseillers num&eacute;riques&nbsp;&raquo; en minuscule pour d&eacute;signer les personnes.
        </p>
      </div>
    </div>
  );
}

export default Orthographe;
