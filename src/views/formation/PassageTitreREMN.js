import React from 'react';

function PassageTitreREMN() {
  const aideUrl = `${process.env.REACT_APP_AIDE_URL}/article/quelles-sont-les-conditions-de-validite-du-ccp1-ctsqjp/`;
  const fabrikUrl = 'https://fabrikmediationnumerique.org/';

  return (
    <div className="fr-col-9 fr-mt-5w cadre">
      <div className="fr-ml-6w fr-col-10">
        <h2 className="fr-my-5w">Passage du titre REMN</h2>
      </div>
      <div className="fr-ml-6w fr-col-10">
        <p>
          Le nouveau dispositif de formation permet aux conseillers num&eacute;riques <b>ayant valid&eacute; le titre CCP1</b>, et
          en accord avec leur structure, de pr&eacute;parer et de passer les CCP2 et CCP3 du titre professionnel de Responsable
          d&rsquo;Espace de M&eacute;diation Num&eacute;rique.
        </p>
        <p>
          <b>Inscriptions : </b><a href={fabrikUrl} rel="noopener noreferrer" target="_blank">fabrikmediationnumerique.org</a>
        </p>
        <p>
          Une fois inscrit, vous serez ensuite contact&eacute; directement par l&rsquo;organisme de formation pour les parcours
          de positionnement. Le test dure moins d&rsquo;1h et permet d&rsquo;identifier le parcours le plus adapt&eacute; pour vous.
        </p>
        <p>
          <b>Pour toute question, consultez la&nbsp;</b>
          <a href={aideUrl} rel="noopener noreferrer" target="_blank">
            FAQ Conditions de validit&eacute; CCP1.
          </a>
        </p>
      </div>
    </div>
  );
}

export default PassageTitreREMN;
