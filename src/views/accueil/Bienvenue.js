import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import logoFR from '../../assets/brands/logo-france-relance-nb-min.svg';
import imageCarteUsagere from '../../assets/images/accueil-carte-et-usagere-min.svg';
import imageConseillers from '../../assets/images/accueil-usagers-et-conseillers-numeriques-min.svg';

function Bienvenue() {

  return (
    <>
      <div className="bienvenue">
        <Header />
        <div className="presentationPart">
          <div className="contentPart fr-py-3w">
            <img src={logoFR} alt="Logo France Relance" className="logoFR fr-mb-2w" />
            <h1 className="fr-h1 title">
              Les conseillers num&eacute;riques France Services m&rsquo;accompagnent dans mes d&eacute;marches et vers l&rsquo;autonomie num&eacute;rique
            </h1>
            <div className="twoParts">
              <div className="leftPart">
                <h4 className="fr-h4 title fr-mb-4w">Trouver un conseiller num&eacute;rique pr&egrave;s de chez moi</h4>
                <Link
                  to="/carte"
                  className="fr-btn btnCustom">
                  Rechercher
                </Link>
                <img src={imageCarteUsagere} alt="Carte et usag&egrave;re" />
              </div>
              <div className="rightPart">
                <h4 className="fr-h4 title fr-mb-4w">&Agrave; propos des conseillers num&eacute;riques</h4>
                <a href="#ancre-themes" className="fr-btn btnCustom">
                  En savoir plus
                </a>
                <img src={imageConseillers} alt="Conseillers" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bienvenue;
