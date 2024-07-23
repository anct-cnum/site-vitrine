import React from 'react';
import Header from '../../components/Header';

export default function DonneesPersonnelles() {
  return (
    <div>
      <Header />
      <div className="fr-container fr-mt-15w fr-mb-15w">
        <h1 className="text-center fr-mb-5w">
          Utilisation des données personnelles dans le cadre du dispositif
        </h1>
        <p>
          Cette notice d’information concerne la protection accordée aux données personnelles des conseillers numériques et des référents au sein des{' '}
          structures bénéficiaires de subvention dans le cadre du dispositif « Conseiller numérique », piloté et financé par l’Etat et mis en œuvre{' '}
          par la Banque des Territoires (article 248 de la loi n° 2020-1721 du 29 décembre 2020 de finances pour 2021).
        </p>
        <p>
          Vos données à caractère personnel relatives à la vie professionnelle, d’ordre économique et financier et d’identification, collectées ou traitées{' '}
          via les sites{' '}
          <a href="https://demarches-simplifiees.fr">
            demarches-simplifiees.fr
          </a> et{' '}
          <a href="https://conseiller-numerique.gouv.fr">
            conseiller-numerique.gouv.fr
          </a>, par email ou par téléphone par l’équipe de la Banque des Territoires en charge de l’instruction et du pilotage du dispositif Conseiller{' '}
          numérique, font l’objet d’un traitement de données personnelles par la Caisse des dépôts, sise au 56 rue de Lille 75007 PARIS, en qualité de{' '}
          responsable de traitement.
        </p>
        <p>
          Vos données sont utilisées dans le cadre de la mise en œuvre du dispositif Conseiller numérique pour :
        </p>
        <ul>
          <li>
            le pilotage global du dispositif (gestion des dossiers de demandes de subventions, versement des subventions aux bénéficiaires, etc.);
          </li>
          <li>
            l’organisation de la formation des conseillers numériques; et
          </li>
          <li>
            l’animation du dispositif (envoi de mails d’information, convocations, etc.).
          </li>
        </ul>
        <p>
          Elles sont traitées sur le fondement de l’exécution d’une mission d’intérêt public ou relevant de l’exercice de l’autorité publique dont est{' '}
          investi le responsable du traitement au sens de l’article 6 e) du Règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016{' '}
          dit « règlement général sur la protection des données », plus particulièrement ici aux fins de l’application de l’article 248 de la loi{' '}
          n°2020-1721 du 29 décembre 2020 de finances pour 2021.
        </p>
        <p>
          Vos données sont destinées à être utilisées par la Caisse des dépôts et ses partenaires institutionnels ou parties prenantes du dispositif{' '}
          « Conseiller numérique ». Vos données sont rendues accessibles, pour le strict besoin de leurs missions, aux :
        </p>
        <ul>
          <li>
            services internes de la Caisse des dépôts en charge de l’instruction, de la vérification des documents pour réaliser l’étude de conformité et{' '}
            du versement des subventions;
          </li>
          <li>
            services de l’Etat en charge du pilotage et du suivi du dispositif (Agence nationale de la cohésion des territoires, Direction{' '}
            interministérielle de la Transformation publique, Direction générale des collectivités locales, Direction générale des Entreprises) pour{' '}
            vérifier la bonne gestion du dispositif par la Caisse des dépôts;
          </li>
          <li>
            organismes de formation sélectionnés par la Caisse des Dépôts pour délivrer les prestations de formation et communiquer avec les structures et{' '}
            les conseillers numériques concernés;
          </li>
          <li>
            prestataire(s) sélectionné(s) par l’ANCT en charge de l’animation du dispositif pour communiquer auprès des structures et des conseillers{' '}
            numériques.
          </li>
        </ul>
        <p>
          Vos données seront conservées pendant toute la durée du conventionnement entre la Banque des Territoires et les structures bénéficiaires, puis{' '}
          pour une durée maximale d’un an à compter de la date de votre sortie du dispositif, aux fins de contrôle (audit interne à la Caisse des dépôts{' '}
          et contrôle par l’Etat de la gestion des missions qu’il confie à la Caisse des dépôts).
        </p>
        <p>
          Vous disposez d’un droit d’accès et de rectification des données vous concernant, et, dans les cas prévus par la règlementation, d’opposition au{' '}
          traitement de vos données, du droit d’en faire limiter l’usage et de définir le sort de vos données après votre mort.
        </p>
        <p>
          Pour exercer vos droits, il vous suffit d’écrire à l’adresse : Caisse des Dépôts et consignations – Données Personnelles - Établissement de{' '}
          Bordeaux – 6, place des citernes – 33059 BORDEAUX CEDEX; ou par email à{' '}
          <a href="mailto:mesdonneespersonnelles@caissedesdepots.fr">
            mesdonneespersonnelles@caissedesdepots.fr
          </a>, et d’y joindre, le cas échéant, toute pièce permettant de justifier votre identité et votre demande.
        </p>
        <p>
          Pour toute information complémentaire ou difficulté relative à l’utilisation de vos données, vous pouvez contacter notre délégué à la protection{' '}
          des données (DPO) à l’adresse suivante : <a href="mailto:dpo@caissedesdepots.fr">dpo@caissedesdepots.fr</a> cas de difficulté non résolue à{' '}
          l’amiable, vous pouvez saisir la CNIL.
        </p>
      </div>
    </div>
  );
}
