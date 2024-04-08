import React from 'react';
import ImageParcoursPossible from '../../assets/images/schema-parcours-possible.svg';
 
function FormationContinue() {
  const mednumUrl = 'https://lamednum.coop/formation/';
  const popschoolUrl = 'https://popschool.fr/inscription-pop-school/';
  const popschoolAideUrl = 'https://popschool.fr/formation-conseiller-numerique/';
  const aidantsconnectUrl = 'https://aidantsconnect.beta.gouv.fr/habilitation';
  return (
    <div className="fr-col-9 fr-mt-5w cadre">
      <div className="fr-ml-5w fr-col-11">
        <h2 className="fr-my-3w">La formation continue</h2>
      </div>
      <div className="fr-ml-5w fr-col-11">
        <h3 style={{ fontSize: '20px' }}>-&nbsp;1 module par an, au choix</h3>
        <p>
          Une fois la formation initiale termin&eacute;e, vous suivez chaque ann&eacute;e un module de formation de 7h ou 14h,
          parmi 15 th&eacute;matiques au choix.
        </p>
        <p>
          <b>Inscriptions&nbsp;:</b>&nbsp;
          <a href={mednumUrl} rel="noopener noreferrer" target="_blank">
            lamednum.coop/formation
          </a>
        </p>
        <p>
          Si vous souhaitez suivre le module Aidants Connect, le calendrier des sessions vous sera partag&eacute; une fois
          l&rsquo;habilitation de votre structure obtenue.
        </p>
        <p>Pour obtenir l&rsquo;habilitation Aidants Connect&nbsp;:&nbsp;
          <a href={aidantsconnectUrl} rel="noopener noreferrer" target="_blank">
            aidantsconnect.beta.gouv.fr/habilitation
          </a>
        </p>
        <h3 style={{ fontSize: '20px' }}>-&nbsp;Passage du CCP2 et CCP3 du titre REMN</h3>
        <p>
          Le nouveau dispositif de formation permet aux conseillers num&eacute;riques <b>ayant valid&eacute; le titre CCP1</b>,
          et en accord avec leur structure, de pr&eacute;parer et de passer les &eacute;preuves du CCP2 et CCP3 du titre
          professionnel de Responsable d&rsquo;Espace de M&eacute;diation Num&eacute;rique.
        </p>
        <p>
          Pour accro&icirc;tre vos chances d&rsquo;obtenir chaque certificat, vous recevrez une formation de 70h. R&eacute;partie
          sur environ 17 semaines, son objectif est de parfaire vos comp&eacute;tences en mati&egrave;re de d&eacute;veloppement
          et gestion d&rsquo;espaces num&eacute;riques, et de mise en &oelig;uvre de projets collaboratifs.
        </p>
        <p>
          <b>Inscriptions&nbsp;:</b>&nbsp;
          <a href={popschoolUrl} rel="noopener noreferrer" target="_blank">
            popschool.fr/inscription-pop-school
          </a>
          <img src={ImageParcoursPossible} style={{ width: '100%' }}
            alt="image pr&eacute;sentant le site de La Fabrik" className="fr-my-3w" loading="lazy"/>
        </p>
        <p>
          <b>Pour toute question relative au passage du titre REMN</b>, rendez-vous&nbsp;
          <a href={popschoolAideUrl} rel="noopener noreferrer" target="_blank">
            ici
          </a>
        </p>
      </div>
    </div>
  );
}

export default FormationContinue;
