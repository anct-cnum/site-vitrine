import { render, screen, within, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import CandidatureConseiller from './CandidatureConseiller';
import { textMatcher } from '../../../test/test-utils';

vi.mock('react-router-dom', () => ({
  useLocation: () => ({ hash: '' }),
}));

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
      expect(informationsDeContact).toHaveAttribute('href', '#informations-de-contact');

      const situationEtExperience = within(menuItems[1]).getByRole('link', { name: 'Votre situation et expérience' });
      expect(situationEtExperience).toHaveAttribute('href', '#situation-et-experience');

      const votreDisponibilite = within(menuItems[2]).getByRole('link', { name: 'Votre disponibilité' });
      expect(votreDisponibilite).toHaveAttribute('href', '#votre-disponibilite');

      const votreMotivation = within(menuItems[3]).getByRole('link', { name: 'Votre motivation' });
      expect(votreMotivation).toHaveAttribute('href', '#votre-motivation');
    });
  });

  it('quand j’affiche le formulaire alors l’étape "Vos informations de contact" est affiché', () => {
    // WHEN
    render(<CandidatureConseiller />);

    // THEN
    const formulaire = screen.getByRole('form', { name: 'Candidature conseiller' });
    const etapeInformationsDeContact = within(formulaire).getByRole('group', { name: 'Vos informations de contact' });
    expect(etapeInformationsDeContact).toHaveAttribute('id', 'informations-de-contact');

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
    expect(situationEtExperience).toHaveAttribute('id', 'situation-et-experience');

    const situation = within(situationEtExperience).getByText(textMatcher('Êtes-vous actuellement dans l’une des situations suivantes ? *'), { selector: 'p' });
    expect(situation).toBeInTheDocument();

    const demandeurEmploi = screen.getByRole('checkbox', { name: 'Demandeur d’emploi' });
    expect(demandeurEmploi).toBeInTheDocument();
    expect(demandeurEmploi).not.toBeRequired();

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

  it('quand je coche "diplomé", un champ pour préciser le diplôme s’affiche', () => {
    // GIVEN
    render(<CandidatureConseiller />);

    // WHEN
    const diplome = screen.getByRole('checkbox', { name: 'Diplômé dans le secteur de la médiation numérique (formation certifiante ou non)' });
    fireEvent.click(diplome);

    // THEN
    const nomDiplome = screen.getByLabelText(
      'Précisez le nom de votre diplôme, formation certifiante, modules de formation de médiation,' +
      ' numérique /accompagnement au numérique des publics.',
    );
    expect(nomDiplome).toBeInTheDocument();
  });

  it('quand j’affiche le formulaire alors l’étape "Votre disponibilité" est affiché', () => {
    // WHEN
    render(<CandidatureConseiller />);

    // THEN
    const formulaire = screen.getByRole('form', { name: 'Candidature conseiller' });
    const votreDisponibilite = within(formulaire).getByRole('group', { name: 'Votre disponibilité' });
    expect(votreDisponibilite).toHaveAttribute('id', 'votre-disponibilite');

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
    expect(votreMotivation).toHaveAttribute('id', 'votre-motivation');

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

  it('quand je modifie la date de disponibilité, alors elle s’affiche dans l’encart "En résumé"', () => {
    // GIVEN
    render(<CandidatureConseiller />);
    const dateDisponibilite = '2023-12-12';

    // WHEN
    const date = screen.getByLabelText('Choisir une date');
    fireEvent.change(date, { target: { value: dateDisponibilite } });

    // THEN
    const titreResume = screen.getByText(
      textMatcher('Vous recherchez une certification et un emploi de conseiller numérique à partir du 12/12/2023.'),
      { selector: 'p' }
    );
    expect(titreResume).toBeInTheDocument();
  });

  it('quand je renseigne un début de nom de ville qui existe alors plusieurs résultats sont affichés', async () => {
    // GIVEN
    render(<CandidatureConseiller />);
    const geoApiResponse = [
      {
        code: '75001',
        nom: 'Paris',
      },
      {
        code: '82137',
        nom: 'Parisot',
      },
    ];

    vi.spyOn(global, 'fetch').mockResolvedValue({
      json: () => Promise.resolve(geoApiResponse)
    });

    // WHEN
    const adresse = screen.getByLabelText('Votre lieu d’habitation Saississez le nom ou le code postal de votre commune.');
    fireEvent.change(adresse, { target: { value: 'par' } });

    // THEN
    const paris = await screen.findByText(textMatcher('75001 Paris'), { selector: 'option' });
    const parisot = await screen.findByText(textMatcher('82137 Parisot'), { selector: 'option' });
    expect(paris).toBeInTheDocument();
    expect(parisot).toBeInTheDocument();
  });

  it('quand je coche au moins une case de situation et que je valide le formulaire alors il n’y a pas d’erreur de validation', () => {
    // GIVEN
    render(<CandidatureConseiller />);
    const enEmploi = screen.getByRole('checkbox', { name: 'En emploi' });
    fireEvent.click(enEmploi);

    // WHEN
    const envoyer = screen.getByRole('button', { type: 'submit' });
    fireEvent.click(envoyer);

    // THEN
    const erreurCheckboxes = screen.queryByText(textMatcher('Vous devez cocher au moins une case'), { selector: 'p' });
    expect(erreurCheckboxes).not.toBeInTheDocument();
  });

  it('quand je ne coche pas de case de situation et que je valide le formulaire alors il y a une erreur de validation', () => {
    // GIVEN
    render(<CandidatureConseiller />);

    // WHEN
    const envoyer = screen.getByRole('button', { type: 'submit' });
    fireEvent.click(envoyer);

    // THEN
    const erreurCheckboxes = screen.getByText(textMatcher('Vous devez cocher au moins une case'), { selector: 'p' });
    expect(erreurCheckboxes).toBeInTheDocument();
  });
});
