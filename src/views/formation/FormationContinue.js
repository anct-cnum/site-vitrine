import React from 'react';

function FormationContinue() {
  const aideUrl = `${process.env.REACT_APP_AIDE_URL}/article/quelles-sont-les-conditions-de-validite-du-ccp1-ctsqjp/`;
  const fabrikUrl = 'https://fabrikmediationnumerique.org/';

  return (
    <>
      <div className="fr-col-12" style={{ textAlign: 'center' }}>
        <h2 className="fr-h1 fr-mt-10w fr-mb-5w">La Formation continue</h2>
      </div>
      <div>
        <p>
          Le nouveau dispositif de formation permet aux conseillers num&eacute;riques ayant valid&eacute; le titre CCP1, et
          en accord avec leur structure, de pr&eacute;parer et de passer les CCP2 et CCP3 du titre professionnel de Responsable
          d&rsquo;Espace de M&eacute;diation Num&eacute;rique.
        </p>
        <p>
          Inscriptions : <a href={fabrikUrl}>fabrikmediationnumerique.org/</a>
        </p>
        <p>
          Une fois inscrit, vous serez ensuite contact&eacute; directement par l&rsquo;organisme de formation pour les parcours
          de positionnement. Le test dure moins d&rsquo;1h et permet d&rsquo;identifier le parcours le plus adapt&eacute; pour vous.
        </p>
        <p>
          Pour toute question, consultez la&nbsp;
          <a href={aideUrl}>
            FAQ Conditions de validit&eacute; CCP1.
          </a>
        </p>
      </div>
    </>
  );
}

export default FormationContinue;
