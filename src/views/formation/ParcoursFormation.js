import React from 'react';
import ImageParcours from '../../assets/images/schema-parcours-formation-conseiller-numerique.svg';

function ParcoursFormation() {

  return (
    <>
      <div className="fr-col-offset-2 fr-col-10">
        <h2 className="fr-h2 fr-my-5w">Parcours de formation Conseiller num&eacute;rique</h2>
      </div>
      <div className="fr-col-12">
        <img src={ImageParcours} className="fresque" loading="lazy"
          alt="Parcours de formation depuis la prise de poste, avec une phase de formation initiale, puis une phase de formation continue"/>
      </div>
      <div className="fr-col-offset-2 fr-col-8 description">
        Cette frise pr&eacute;sente le parcours de formation classique du conseiller num&eacute;rique.
        L&rsquo;ordre des &eacute;l&eacute;ments, notamment le passage du CCP1, peut &ecirc;tre modifi&eacute;
        selon les sp&eacute;cificit&eacute;s individuelles et territoriales. En outre-mer, le parcours de
        formation et le passage du CCP1 sont d&eacute;ploy&eacute;s par POP School.
      </div>
      <div className="fr-col-offset-2 fr-col-8 description">
        <b>La Fabrik</b> repr&eacute;sente le consortium La Fabrik de la m&eacute;diation num&eacute;rique port&eacute;par CEFIAC et M2i.<br/>
        <b>La Mednum</b> repr&eacute;sente le consortium port&eacute; par la Mednum, les hubs territoriaux pour un num&eacute;rique inclusif et
        organismes de formation impliqu&eacute;s dans la d&eacute;livrance de ces formations.
      </div>
    </>
  );
}

export default ParcoursFormation;
