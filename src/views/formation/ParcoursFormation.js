import React from 'react';
import ImageParcours from '../../assets/images/schema-parcours-formation-Conseiller-numerique.svg';

function ParcoursFormation() {

  return (
    <>
      <div className="fr-col-12" style={{ textAlign: 'center' }}>
        <h2 className="fr-h1 fr-mt-10w fr-mb-5w">Parcours de formation Conseiller num&eacute;rique</h2>
      </div>
      <div>
        <img src={ImageParcours}/>
      </div>
      <div>
        <p>
          Cette frise pr&eacute;sente le parcours de formation classique du conseiller num&eacute;rique.
          L&rsquo;ordre des &eacute;l&eacute;ments, notamment le passage du CCP1, peut &ecirc;tre modifi&eacute;
          selon les sp&eacute;cificit&eacute;s individuelles et territoriales. En outre-mer, le parcours de
          formation et le passage du CCP1 sont d&eacute;ploy&eacute;s par POP School. La Fabrik repr&eacute;sente
          le consortium La Fabrik de la m&eacute;diation num&eacute;rique port&eacute; par CEFIAC et M2i.
          La Mednum repr&eacute;sente le consortium port&eacute; par la Mednum, les hubs territoriaux pour
          un num&eacute;rique inclusif et organismes de formation impliqu&eacute;s dans la d&eacute;livrance de ces formations.
        </p>
      </div>
    </>
  );
}

export default ParcoursFormation;
