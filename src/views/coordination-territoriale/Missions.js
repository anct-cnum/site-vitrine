import React, { useState } from 'react';
import PictoMission1 from '../../assets/pictos/mission-1-min.svg';
import PictoMission2 from '../../assets/pictos/mission-2-min.svg';
import PictoMission3 from '../../assets/pictos/mission-3-min.svg';
import PictoMission4 from '../../assets/pictos/mission-4-min.svg';
import MissionDetails1 from './MissionDetails1';
import MissionDetails2 from './MissionDetails2';
import MissionDetails3 from './MissionDetails3';
import MissionDetails4 from './MissionDetails4';
import Mission from './Mission';
import MissionButton from './MissionButton';

function Missions() {

  const [mission, setMission] = useState(0);

  const changeMission = stepRef => {
    if (mission === stepRef) {
      setMission(0);
    } else {
      setMission(stepRef);
    }
  };

  return (
    <>
      <section className="section-steps fr-container">
        <div className="fr-grid-row fr-grid-row--gutters fr-pt-14w">
          <Mission
            image={PictoMission1}
            imageAlt="Picto mission 1"
            marge="fr-mr-1w"
            stepRef={1}
            step={mission}
            changeStep={changeMission}
            titre={<>Renforcer le maillage et les synergies territoriales</>} />
          <Mission
            image={PictoMission2}
            imageAlt="Picto mission 2"
            marge="fr-mx-1w"
            stepRef={2}
            step={mission}
            changeStep={changeMission}
            titre={<>&Ecirc;tre le relais principal des employeurs, des Conseillers num&eacute;riques
              et de l&rsquo;&eacute;quipe d&rsquo;animation nationale</>} />
          <Mission
            image={PictoMission3}
            imageAlt="Picto mission 3"
            marge="fr-mx-1w"
            stepRef={3}
            step={mission}
            changeStep={changeMission}
            titre={<>Imaginer et mettre en place des collaborations sur la base des besoins de la communaut&eacute; des Conseillers num&eacute;riques</>} />
          <Mission
            image={PictoMission4}
            imageAlt="Picto mission 4"
            marge="fr-ml-1w"
            stepRef={4}
            step={mission}
            changeStep={changeMission}
            titre={<>Les Conseillers num&eacute;riques coordinateurs pourront s&rsquo;ils le souhaitent exercer
              les missions suivantes &agrave; titre facultatif (liste non-exhaustive)</>} />
        </div>
        <div className="fr-grid-row fr-grid-row--gutters display-desktop">
          <MissionButton
            marge="fr-mr-1w"
            stepRef={1}
            step={mission}
            changeStep={changeMission} />
          <MissionButton
            marge="fr-mx-1w"
            stepRef={2}
            step={mission}
            changeStep={changeMission} />
          <MissionButton
            marge="fr-mx-1w"
            stepRef={3}
            step={mission}
            changeStep={changeMission} />
          <MissionButton
            marge="fr-ml-1w"
            stepRef={4}
            step={mission}
            changeStep={changeMission} />
        </div>
      </section>
      <section className="display-desktop">
        <MissionDetails1 isDisplayed={mission === 1} />
        <MissionDetails2 isDisplayed={mission === 2} />
        <MissionDetails3 isDisplayed={mission === 3} />
        <MissionDetails4 isDisplayed={mission === 4} />
      </section>
    </>
  );
}

export default Missions;
