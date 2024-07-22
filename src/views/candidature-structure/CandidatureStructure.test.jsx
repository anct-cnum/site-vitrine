import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import CandidatureStructure from './CandidatureStructure';
import { textMatcher } from '../../../test/test-utils';
describe('candidature structure', () => {
  describe('étant une structure', () => {
    it('quand j’affiche le formulaire alors le titre et le menu s’affichent', () => {
      // WHEN
      render(<CandidatureStructure />);

      // THEN
      const titre = screen.getByRole('heading', {
        level: 1,
        name: textMatcher('Je souhaite engager un conseiller numérique'),
      });
      expect(titre).toBeInTheDocument();

      const champsObligatoires = screen.getByText(textMatcher('Les champs avec * sont obligatoires.'), { selector: 'p' });
      expect(champsObligatoires).toBeInTheDocument();

      const navigation = screen.getByRole('navigation', { name: 'Sommaire' });
      const menu = within(navigation).getByRole('list');
      const menuItems = within(menu).getAllByRole('listitem');

      const informationsDeStructure = within(menuItems[0]).getByRole('link', { name: 'Vos informations de structure' });
      expect(informationsDeStructure).toHaveAttribute('href', '#informations-de-structure');

      const informationsDeContact = within(menuItems[1]).getByRole('link', { name: 'Vos informations de contact' });
      expect(informationsDeContact).toHaveAttribute('href', '#informations-de-contact');

      const votreBesoinEnConseillerNumerique = within(menuItems[2]).getByRole('link', { name: 'Votre besoin en conseiller numérique' });
      expect(votreBesoinEnConseillerNumerique).toHaveAttribute('href', '#votre-besoin-en-conseiller-numerique');
      const votreMotivation = within(menuItems[3]).getByRole('link', { name: 'Votre motivation' });
      expect(votreMotivation).toHaveAttribute('href', '#votre-motivation');
    });
  });

  it('quand j’affiche le formulaire alors l’étape "Vos informations de structure" est affiché', () => {
    // WHEN
    render(<CandidatureStructure />);

    // THEN
    const formulaire = screen.getByRole('form', { name: 'Candidature structure' });
    const etapeInformationsDeStructure = within(formulaire).getByRole('group', { name: 'Vos informations de structure' });
    expect(etapeInformationsDeStructure).toHaveAttribute('id', 'informations-de-structure');

    // const siretOuRidet = within(etapeInformationsDeStructure).getByPlaceholderText('N° SIRET / RIDET');
    // expect(siretOuRidet).toHaveAttribute('id', 'siretEntreprise');
    // expect(siretOuRidet).toBeRequired();

    const denomination = within(etapeInformationsDeStructure).getByLabelText('Dénomination *');
    expect(denomination).toHaveAttribute('type', 'text');
    expect(denomination).toBeRequired();

    const adresse = within(etapeInformationsDeStructure).getByLabelText('Adresse *');
    expect(adresse).toHaveAttribute('type', 'text');
    expect(adresse).toBeRequired();

    const questionTypeDeStructure = within(etapeInformationsDeStructure).getByText(textMatcher('Votre structure est *'), { selector: 'p' });
    expect(etapeInformationsDeStructure).toHaveAttribute('id', 'informations-de-structure');
    expect(questionTypeDeStructure).toBeInTheDocument();

    const uneCommune = screen.getByRole('radio', { name: 'Une commune' });
    expect(uneCommune).toBeRequired();
    expect(uneCommune).toHaveAttribute('name', 'typeStructure');

    const unDepartement = screen.getByRole('radio', { name: 'Un département' });
    expect(unDepartement).toBeRequired();
    expect(unDepartement).toHaveAttribute('name', 'typeStructure');

    const uneRegion = screen.getByRole('radio', { name: 'Une région' });
    expect(uneRegion).toBeRequired();
    expect(uneRegion).toHaveAttribute('name', 'typeStructure');

    const unEtablissemntPublic = screen.getByRole('radio', { name: 'Un établissement public de coopération intercommunale' });
    expect(unEtablissemntPublic).toBeRequired();
    expect(unEtablissemntPublic).toHaveAttribute('name', 'typeStructure');

    const uneCollectivite = screen.getByRole('radio', { name: 'Une collectivité à statut particulier' });
    expect(uneCollectivite).toBeRequired();
    expect(uneCollectivite).toHaveAttribute('name', 'typeStructure');

    const unGIP = screen.getByRole('radio', { name: 'Un GIP' });
    expect(unGIP).toBeRequired();
    expect(unGIP).toHaveAttribute('name', 'typeStructure');

    const uneStructurePrivee = screen.getByRole('radio', { name: 'Une structure privée (association, entreprise de l’ESS, fondations)' });
    expect(uneStructurePrivee).toBeRequired();
    expect(uneStructurePrivee).toHaveAttribute('name', 'typeStructure');
  });

  it('quand j’affiche le formulaire alors l’étape "Vos informations de contact" est affiché', () => {
    // WHEN
    render(<CandidatureStructure />);

    // THEN
    const formulaire = screen.getByRole('form', { name: 'Candidature structure' });
    const etapeInformationsDeContact = within(formulaire).getByRole('group', { name: 'Vos informations de contact' });
    expect(etapeInformationsDeContact).toHaveAttribute('id', 'informations-de-contact');

    const prenom = within(etapeInformationsDeContact).getByLabelText('Prénom *');
    expect(prenom).toHaveAttribute('type', 'text');
    expect(prenom).toBeRequired();

    const nom = within(etapeInformationsDeContact).getByLabelText('Nom *');
    expect(nom).toHaveAttribute('type', 'text');
    expect(nom).toBeRequired();

    const fonction = within(etapeInformationsDeContact).getByLabelText('Fonction *');
    expect(fonction).toHaveAttribute('type', 'text');
    expect(fonction).toBeRequired();

    const email = within(etapeInformationsDeContact).getByLabelText('Adresse e-mail *');
    expect(email).toHaveAttribute('type', 'email');
    expect(email).toBeRequired();

    const telephone = within(etapeInformationsDeContact).getByLabelText('Téléphone *');
    expect(telephone).toHaveAttribute('type', 'tel');
    expect(telephone).toHaveAttribute('pattern', '0[1-9]{9}');
    expect(telephone).toBeRequired();
  });

  it('quand j’affiche le formulaire alors l’étape "Votre besoin en conseiller(s) numérique(s)" est affiché', () => {
    // WHEN
    render(<CandidatureStructure />);

    // THEN
    const formulaire = screen.getByRole('form', { name: 'Candidature structure' });
    const etapeBesoinConseillerNumerique = within(formulaire).getByRole('group', { name: 'Votre besoin en conseiller(s) numérique(s)' });
    expect(etapeBesoinConseillerNumerique).toHaveAttribute('id', 'votre-besoin-en-conseiller-numerique');

    const combienConseillerNumerique = within(etapeBesoinConseillerNumerique).getByLabelText('Combien de conseillers numériques souhaitez-vous accueillir ?*');
    expect(combienConseillerNumerique).toHaveAttribute('type', 'number');
    expect(combienConseillerNumerique).toHaveAttribute('min', '1');
    expect(combienConseillerNumerique).toBeRequired();

    const identificationCandidat = within(etapeBesoinConseillerNumerique).getByText(
      textMatcher('Avez-vous déjà identifié un candidat pour le poste de conseiller numérique ?*'),
      { selector: 'p' }
    );
    expect(identificationCandidat).toBeInTheDocument();

    const sousTitreIdentificationCandidat =
      within(etapeBesoinConseillerNumerique).getByText(
        textMatcher('Si oui, merci d’inviter ce candidat à s’inscrire sur la plateforme Conseiller numérique.'),
        { selector: 'p' }
      );
    expect(sousTitreIdentificationCandidat).toBeInTheDocument();

    const oui = screen.getByRole('radio', { name: 'Oui' });
    expect(oui).toBeRequired();
    expect(oui).toHaveAttribute('name', 'identificationCandidat');

    const non = screen.getByRole('radio', { name: 'Non' });
    expect(non).toBeRequired();
    expect(non).toHaveAttribute('name', 'identificationCandidat');

    const dateAccueilConseillerNumerique = within(etapeBesoinConseillerNumerique).getByText(
      textMatcher('À partir de quand êtes vous prêt à accueillir votre conseiller numerique ?*'),
      { selector: 'p' }
    );
    expect(dateAccueilConseillerNumerique).toBeInTheDocument();

    const date = within(etapeBesoinConseillerNumerique).getByLabelText('Choisir une date');
    expect(date).toHaveAttribute('type', 'date');
    expect(date).toBeRequired();
  });

  it('quand j’affiche le formulaire alors l’étape "Votre motivation" est affiché', () => {
    // WHEN
    render(<CandidatureStructure />);

    // THEN
    const formulaire = screen.getByRole('form', { name: 'Candidature structure' });
    const etapeMotivation = within(formulaire).getByRole('group', { name: 'Votre motivation' });
    expect(etapeMotivation).toHaveAttribute('id', 'votre-motivation');

    const sousTitreVotreMotvation =
      within(etapeMotivation).getByText(
        'En quelques lignes, décrivez le motif de votre besoin en recrutement. Indiquez les actions prévues, la justification du poste, ainsi que le ' +
        'public ciblé.',
        { selector: 'p' }
      );
    expect(sousTitreVotreMotvation).toBeInTheDocument();

    const votreMessage = within(etapeMotivation).getByLabelText('Votre message *');
    expect(votreMessage).toHaveAttribute('id', 'votreMessage');
    expect(votreMessage).toBeRequired();
  });

  it('quand j’affiche le formulaire alors l’encart des engagements est affiché', () => {
    // WHEN
    render(<CandidatureStructure />);

    // THEN
    const formulaire = screen.getByRole('form', { name: 'Candidature structure' });
    const titreEngagement = within(formulaire).getByText(textMatcher('En tant que structure accueillante, vous vous engagez à'), { selector: 'p' });
    expect(titreEngagement).toBeInTheDocument();
    const engagements = screen.getByTestId('votre-engagement');

    const listDetail = within(engagements).getAllByRole('listitem');
    within(listDetail[0]).getByText('Assurer que le conseiller réalise des activités de ' +
      'montée en compétences du public (ateliers numériques, initiations au numérique), gratuites.');
    within(listDetail[1]).getByText('Qu’il consacre une partie de son temps aux rencontres locales et ' +
      'nationales organisées pour la communauté et la formation continue, etc.');
    within(listDetail[2]).getByText('Qu’il revête une tenue vestimentaire dédiée fournie par l’Etat.');
    within(listDetail[3]).getByText('Tout mettre en oeuvre pour sélectionner le candidat dans un délai maximum d’un mois sur la plateforme.');
    within(listDetail[4]).getByText('Signer dans les 15 jours suivants un contrat avec ce candidat.');
    within(listDetail[5]).getByText('Laisser partir le conseiller numérique France Services en formation initiale ou continue.');
    within(listDetail[6]).getByText('Mettre à sa disposition les moyens et ' +
      'équipements pour réaliser sa mission (ordinateur, téléphone portable, voiture si nécessaire).');

    const confirmationEngagement = screen.getByLabelText('Je confirme avoir lu et pris connaissance des conditions d’engagement.*');
    expect(confirmationEngagement).toBeInTheDocument();
    expect(confirmationEngagement).toBeRequired();

  });

  it('quand j’affiche le formulaire alors le bouton "Envoyer votre candidature" est affiché', () => {
    // WHEN
    render(<CandidatureStructure />);

    //THEN
    const formulaire = screen.getByRole('form', { name: 'Candidature structure' });
    within(formulaire).getByRole('button', { name: 'Envoyer votre candidature' });
  });
});

