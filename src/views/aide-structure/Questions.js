import React from 'react';

function Questions() {

  const urlFormStructure = process.env.REACT_APP_FORMS_URL + '/structure/new';

  return (
    <div className="fr-container fr-mb-5w">
      <div className="fr-grid-row fr-grid-row--gutter">
        <h3 className="bleu-secondaire">Questions fr&eacute;quentes</h3>
      </div>
      <h4 className="fr-mt-2w">Suis-je &eacute;ligible ?</h4>
      <p>
        Ce dispositif est notamment ouvert &agrave; l&rsquo;ensemble des collectivit&eacute;s territoriales.* S&rsquo;agissant des acteurs priv&eacute;s,
        un AMI sera publi&eacute; dans un second temps mais vous pouvez d&rsquo;ores et d&eacute;j&agrave; vous inscrire sur la plate-forme.
      </p>
      <h4 className="fr-mt-2w">&Agrave; combien s&rsquo;&eacute;l&egrave;ve l&rsquo;aide de l&rsquo;Etat ?</h4>
      <p>
        Vous b&eacute;n&eacute;ficiez d&rsquo;un financement &agrave; hauteur du SMIC du conseiller sur deux ans,
        que vous soyez une structure publique ou priv&eacute;e.
        Les structures publiques ont la possibilit&eacute; d&rsquo;&eacute;taler ce montant de subventionnement sur une dur&eacute;e de 3 ans.
      </p>
      <h4 className="fr-mt-2w">Quels sont mes engagements ?</h4>
      <p>
        En &eacute;change, vous vous engagez &agrave; le s&eacute;lectionner rapidement, le laisser partir en formation avant sa prise de fonction,
        mettre &agrave; sa disposition les moyens n&eacute;cessaires pour la r&eacute;alisation de sa mission
        et le laisser rev&ecirc;tir la tenue vestimentaire d&eacute;di&eacute;e.
      </p>
      <p>
        Retrouvez l&rsquo;ensemble des conditions dans le guide de l&rsquo;employeur ci-dessous.
      </p>
      <p>
        *<em>Acc&eacute;dez &agrave; la liste des structures &eacute;ligibles&nbsp;
          <a
            href="https://www.data.gouv.fr/fr/datasets/conseiller-numerique-france-services-liste-des-structures-validees-par-le-comite-de-selection/"
            target="_blank" rel="noopener noreferrer"
            className="bleu-secondaire"
            title="liste des structures">
            ici
          </a>.
        </em>
      </p>
      <div className="fr-container fr-col-lg-5 fr-col-xs-12 fr-mb-10w" style={{ textAlign: 'center' }}>
        <a href={urlFormStructure} target="_blank" rel="noopener noreferrer"
          className="buttonCustom redButtonCustom fr-text--xx-bold"
          title="Recruter des conseillers num&eacute;riques">
            Recruter des conseillers num&eacute;riques
        </a>
      </div>
    </div>
  );
}

export default Questions;
