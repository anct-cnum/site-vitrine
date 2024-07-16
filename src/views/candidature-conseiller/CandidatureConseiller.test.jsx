import { render, screen, within, fireEvent } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import CandidatureConseiller from './CandidatureConseiller';

export const textMatcher = wording => (_, element) => {
  return element?.textContent === wording;
};

describe('candidature conseiller', () => {
  describe('étant un candidat', () => {
    it('quand j’affiche le formulaire alors le titre et le menu s’affichent', () => {
      // WHEN
      render(<CandidatureConseiller />);

      // THEN
      const titre = screen.getByRole('heading', { level: 1, name: 'Je veux devenir conseiller numérique' });
      expect(titre).toBeInTheDocument();

      const champsObligatoires = screen.getByText(textMatcher('Les champs avec * sont obligatoires.'), { selector: 'p' });
      expect(champsObligatoires).toBeInTheDocument();

      const navigation = screen.getByRole('navigation', { name: 'Sommaire' });
      const menu = within(navigation).getByRole('list');
      const menuItems = within(menu).getAllByRole('listitem');

      const informationsDeContact = within(menuItems[0]).getByRole('link', { name: 'Vos informations de contact' });
      expect(informationsDeContact).toHaveAttribute('href', '#informationsDeContact');

      const situationEtExperience = within(menuItems[1]).getByRole('link', { name: 'Votre situation et expérience' });
      expect(situationEtExperience).toHaveAttribute('href', '#situationEtExperience');

      const votreDisponibilite = within(menuItems[2]).getByRole('link', { name: 'Votre disponibilité' });
      expect(votreDisponibilite).toHaveAttribute('href', '#votreDisponibilite');

      const votreMotivation = within(menuItems[3]).getByRole('link', { name: 'Votre motivation' });
      expect(votreMotivation).toHaveAttribute('href', '#votreMotivation');
    });
  });

  it('quand j’affiche le formulaire alors l’étape "Vos informations de contact" est affiché', () => {
    // WHEN
    render(<CandidatureConseiller />);

    // THEN
    const formulaire = screen.getByRole('form', { name: 'Candidature conseiller' });
    const etapeInformationsDeContact = within(formulaire).getByRole('group', { name: 'Vos informations de contact' });
    expect(etapeInformationsDeContact).toHaveAttribute('id', 'informationsDeContact');

    const prenom = within(etapeInformationsDeContact).getByLabelText('Prénom *');
    expect(prenom).toHaveAttribute('type', 'text');
    expect(prenom).toBeRequired();

    const nom = within(etapeInformationsDeContact).getByLabelText('Nom *');
    expect(nom).toHaveAttribute('type', 'text');
    expect(nom).toBeRequired();

    const email = within(etapeInformationsDeContact).getByLabelText('Adresse e-mail * Format attendu : nom@domaine.fr');
    expect(email).toHaveAttribute('type', 'email');
    expect(email).toBeRequired();

    const telephone = within(etapeInformationsDeContact).getByLabelText('Téléphone Format attendu : 0122334455');
    expect(telephone).toHaveAttribute('type', 'tel');
    expect(telephone).toHaveAttribute('pattern', '0[1-9]{9}');

    const habitation = within(etapeInformationsDeContact).getByLabelText('Votre lieu d’habitation Saississez le nom ou le code postal de votre commune.');
    expect(habitation).toHaveAttribute('type', 'text');
  });

  it('quand j’affiche le formulaire alors l’étape "Votre situation et expérience" est affiché', () => {
    // WHEN
    render(<CandidatureConseiller />);

    // THEN
    const formulaire = screen.getByRole('form', { name: 'Candidature conseiller' });
    const situationEtExperience = within(formulaire).getByRole('group', { name: 'Votre situation et expérience' });
    expect(situationEtExperience).toHaveAttribute('id', 'situationEtExperience');

    const situation = within(situationEtExperience).getByText(textMatcher('Êtes-vous actuellement dans l’une des situations suivantes ? *'), { selector: 'p' });
    expect(situation).toBeInTheDocument();

    const demandeurEmploi = screen.getByRole('checkbox', { name: 'Demandeur d’emploi' });
    expect(demandeurEmploi).toBeInTheDocument();

    const enEmploi = screen.getByRole('checkbox', { name: 'En emploi' });
    expect(enEmploi).toBeInTheDocument();

    const enFormation = screen.getByRole('checkbox', { name: 'En formation' });
    expect(enFormation).toBeInTheDocument();

    const diplome = screen.getByRole('checkbox', { name: 'Diplômé dans le secteur de la médiation numérique (formation certifiante ou non)' });
    expect(diplome).toBeInTheDocument();

    const experienceProfessionnelle = within(situationEtExperience).getByText(
      textMatcher('Avez-vous une expérience professionnelle de médiation numérique ? *'),
      { selector: 'p' }
    );
    expect(experienceProfessionnelle).toBeInTheDocument();

    const sousTitreExperienceProfessionnelle = within(situationEtExperience).getByText(
      textMatcher('Accompagnement de personnes vers l’autonomie dans leurs usages de technologies, services et médias numériques.'),
      { selector: 'p' }
    );
    expect(sousTitreExperienceProfessionnelle).toBeInTheDocument();

    const oui = screen.getByRole('radio', { name: 'Oui' });
    expect(oui).toBeRequired();
    expect(oui).toHaveAttribute('name', 'experienceProfessionnelle');

    const non = screen.getByRole('radio', { name: 'Non' });
    expect(non).toBeRequired();
    expect(non).toHaveAttribute('name', 'experienceProfessionnelle');
  });

  it('quand j’affiche le formulaire alors l’étape "Votre disponibilité" est affiché', () => {
    // WHEN
    render(<CandidatureConseiller />);

    // THEN
    const formulaire = screen.getByRole('form', { name: 'Candidature conseiller' });
    const votreDisponibilite = within(formulaire).getByRole('group', { name: 'Votre disponibilité' });
    expect(votreDisponibilite).toHaveAttribute('id', 'votreDisponibilite');

    const questionDisponibilite = within(votreDisponibilite).getByText(
      textMatcher('À quel moment êtes-vous prêt(e) à démarrer votre mission et la formation de conseiller numérique ? *'),
      { selector: 'p' }
    );
    expect(questionDisponibilite).toBeInTheDocument();

    const accompagnement = within(votreDisponibilite).getByText(
      textMatcher('Accompagnement de personnes vers l’autonomie dans leurs usages de technologies, services et médias numériques.'),
      { selector: 'p' }
    );
    expect(accompagnement).toBeInTheDocument();

    const date = within(votreDisponibilite).getByLabelText('Choisir une date');
    expect(date).toHaveAttribute('type', 'date');
    expect(date).toBeRequired();

    const questionDeplacement = within(votreDisponibilite).getByText(
      textMatcher('À quel moment êtes-vous prêt(e) à démarrer votre mission et la formation de conseiller numérique ? *'),
      { selector: 'p' }
    );
    expect(questionDeplacement).toBeInTheDocument();

    const distance = within(votreDisponibilite).getByText(
      textMatcher('Distance à partir de votre lieu d’habitation'),
      { selector: 'p' }
    );
    expect(distance).toBeInTheDocument();

    const _5km = screen.getByRole('radio', { name: '5 km' });
    expect(_5km).toBeRequired();
    expect(_5km).toHaveAttribute('name', 'distanceDomicile');

    const _10km = screen.getByRole('radio', { name: '10 km' });
    expect(_10km).toBeRequired();
    expect(_10km).toHaveAttribute('name', 'distanceDomicile');

    const _15km = screen.getByRole('radio', { name: '15 km' });
    expect(_15km).toBeRequired();
    expect(_15km).toHaveAttribute('name', 'distanceDomicile');

    const _20km = screen.getByRole('radio', { name: '20 km' });
    expect(_20km).toBeRequired();
    expect(_20km).toHaveAttribute('name', 'distanceDomicile');

    const _40km = screen.getByRole('radio', { name: '40 km' });
    expect(_40km).toBeRequired();
    expect(_40km).toHaveAttribute('name', 'distanceDomicile');

    const _100km = screen.getByRole('radio', { name: '100 km' });
    expect(_100km).toBeRequired();
    expect(_100km).toHaveAttribute('name', 'distanceDomicile');

    const franceEntiere = screen.getByRole('radio', { name: 'France entière' });
    expect(franceEntiere).toBeRequired();
    expect(franceEntiere).toHaveAttribute('name', 'distanceDomicile');
  });

  it('quand j’affiche le formulaire alors l’étape "Votre motivation" est affiché', () => {
    // WHEN
    render(<CandidatureConseiller />);

    // THEN
    const formulaire = screen.getByRole('form', { name: 'Candidature conseiller' });
    const votreMotivation = within(formulaire).getByRole('group', { name: 'Votre motivation' });
    expect(votreMotivation).toHaveAttribute('id', 'votreMotivation');

    const aideMotivation = within(votreMotivation).getByText(
      textMatcher('En quelques lignes, décrivez votre motivation personnelle pour devenir conseiller numérique ' +
        'et aider les personnes à devenir autonomes dans l’utilisation des outils numériques.'),
      { selector: 'p' }
    );
    expect(aideMotivation).toBeInTheDocument();

    const descriptionMotivation = within(votreMotivation).getByLabelText('Votre message *');
    expect(descriptionMotivation).toHaveAttribute('name', 'descriptionMotivation');
    expect(descriptionMotivation).toBeRequired();
  });

  it('quand j’affiche le formulaire alors l’encart "En résumé" est affiché', () => {
    // WHEN
    render(<CandidatureConseiller />);

    // THEN
    const enResume = screen.getByText(textMatcher('En résumé'), { selector: 'p' });
    expect(enResume).toBeInTheDocument();

    const titreResume = screen.getByText(
      textMatcher('Vous recherchez une certification et un emploi de conseiller numérique à partir du [Renseignez votre date de disponibilité].'),
      { selector: 'p' }
    );
    expect(titreResume).toBeInTheDocument();

    const descriptionResume = screen.getByText(
      textMatcher('Votre choix vous engage à transmettre vos coordonnées, répondre aux sollicitations des ' +
        'structures accueillantes, vous présenter aux entretiens, et accepter de fournir des ' +
        'éléments administratifs pour finaliser votre dossier de candidature.'),
      { selector: 'p' }
    );
    expect(descriptionResume).toBeInTheDocument();
  });
  it('quand je modifie la date de disponibilité, elle s’affiche dans l’encart "En résumé" est affiché', () => {
    // GIVEN
    const dateDisponibilite = '2024-02-01';

    // WHEN
    render(<CandidatureConseiller />);
    const date = screen.getByLabelText('Choisir une date');
    fireEvent.change(date, { target: { value: dateDisponibilite } });

    // THEN
    const titreResume = screen.getByText(
      textMatcher('Vous recherchez une certification et un emploi de conseiller numérique à partir du 01/02/2024.'),
      { selector: 'p' }
    );
    expect(titreResume).toBeInTheDocument();
  });
});
