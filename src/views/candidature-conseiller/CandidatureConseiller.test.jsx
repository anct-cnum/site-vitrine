import { render, screen, within, fireEvent, act, renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import CandidatureConseiller from './CandidatureConseiller';
import { textMatcher, dateDujour } from '../../../test/test-utils';
import * as ReactRouterDom from 'react-router-dom';
import * as useApiAdmin from './useApiAdmin';

vi.mock('react-router-dom', () => ({
  useLocation: () => ({ hash: '' }),
  useNavigate: vi.fn()
}));

describe('candidature conseiller', () => {
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

    const telephone = within(etapeInformationsDeContact).getByLabelText('Téléphone Format attendu : +33122334455');
    expect(telephone).toHaveAttribute('type', 'tel');
    expect(telephone).toHaveAttribute('pattern', '[+](33|590|596|594|262|269|687)[0-9]{9}');

    const habitation = within(etapeInformationsDeContact).getByLabelText(('Votre lieu d’habitation * Saississez le nom ou le code postal de votre commune.'));
    expect(habitation).toHaveAttribute('type', 'text');

    const habitationCodeCommune = within(etapeInformationsDeContact).getByTestId('lieuHabitationCodeCommune-hidden');
    expect(habitationCodeCommune).toHaveAttribute('id', 'lieuHabitationCodeCommune');
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
    expect(oui).toHaveAttribute('name', 'aUneExperienceMedNum');
    expect(oui).toHaveAttribute('value', 'oui');

    const non = screen.getByRole('radio', { name: 'Non' });
    expect(non).toBeRequired();
    expect(non).toHaveAttribute('name', 'aUneExperienceMedNum');
    expect(non).toHaveAttribute('value', 'non');
  });

  it('quand je coche "diplomé" alors un champ pour préciser le diplôme s’affiche', () => {
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
    expect(date).toHaveAttribute('id', 'dateDisponibilite');
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
    expect(_5km).toHaveAttribute('name', 'distanceMax');
    expect(_5km).toHaveAttribute('id', '5');

    const _10km = screen.getByRole('radio', { name: '10 km' });
    expect(_10km).toBeRequired();
    expect(_10km).toHaveAttribute('name', 'distanceMax');
    expect(_10km).toHaveAttribute('id', '10');

    const _15km = screen.getByRole('radio', { name: '15 km' });
    expect(_15km).toBeRequired();
    expect(_15km).toHaveAttribute('name', 'distanceMax');
    expect(_15km).toHaveAttribute('id', '15');

    const _20km = screen.getByRole('radio', { name: '20 km' });
    expect(_20km).toBeRequired();
    expect(_20km).toHaveAttribute('name', 'distanceMax');
    expect(_20km).toHaveAttribute('id', '20');

    const _40km = screen.getByRole('radio', { name: '40 km' });
    expect(_40km).toBeRequired();
    expect(_40km).toHaveAttribute('name', 'distanceMax');
    expect(_40km).toHaveAttribute('id', '40');

    const _100km = screen.getByRole('radio', { name: '100 km' });
    expect(_100km).toBeRequired();
    expect(_100km).toHaveAttribute('name', 'distanceMax');
    expect(_100km).toHaveAttribute('id', '100');

    const franceEntiere = screen.getByRole('radio', { name: 'France entière' });
    expect(franceEntiere).toBeRequired();
    expect(franceEntiere).toHaveAttribute('name', 'distanceMax');
    expect(franceEntiere).toHaveAttribute('id', '2000');
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
    expect(descriptionMotivation).toHaveAttribute('name', 'motivation');
    expect(descriptionMotivation).toBeRequired();
  });

  it('quand j’affiche le formulaire alors l’encart "En résumé" est affiché', () => {
    // WHEN
    render(<CandidatureConseiller />);

    // THEN
    const enResume = screen.getByText('En résumé', { selector: 'p' });
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
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2023, 11, 12, 13));
    render(<CandidatureConseiller />);
    const date = dateDujour();

    // WHEN
    const dateDisponibilite = screen.getByLabelText('Choisir une date');
    fireEvent.change(dateDisponibilite, { target: { value: date } });

    // THEN
    const titreResume = screen.getByText(
      textMatcher('Vous recherchez une certification et un emploi de conseiller numérique à partir du 12/12/2023.'),
      { selector: 'p' }
    );
    expect(titreResume).toBeInTheDocument();
    vi.useRealTimers();
  });

  it('quand je renseigne un début de nom de ville qui existe alors plusieurs résultats sont affichés', async () => {
    // GIVEN
    render(<CandidatureConseiller />);
    const geoApiResponse = {
      'type': 'FeatureCollection',
      'version': 'draft',
      'features': [
        {
          'type': 'Feature',
          'geometry': {
            'type': 'Point',
            'coordinates': [2.347, 48.859]
          },
          'properties': {
            'label': 'Paris',
            'score': 0.730668760330579,
            'id': '75056',
            'type': 'municipality',
            'name': 'Paris',
            'postcode': '75001',
            'citycode': '75056',
            'x': 652089.7,
            'y': 6862305.26,
            'population': 2133111,
            'city': 'Paris',
            'context': '75, Paris, Île-de-France',
            'importance': 0.67372,
            'municipality': 'Paris'
          }
        },
        {
          'type': 'Feature',
          'geometry': {
            'type': 'Point',
            'coordinates': [1.869755, 44.253003]
          },
          'properties': {
            'label': 'Parisot',
            'score': 0.932836363636364,
            'id': '82137',
            'banId': '4e195f30-96f0-47c8-82e9-2968b067bccc',
            'type': 'municipality',
            'name': 'Parisot',
            'postcode': '82160',
            'citycode': '82137',
            'x': 609752.79,
            'y': 6351088.82,
            'population': 554,
            'city': 'Parisot',
            'context': '82, Tarn-et-Garonne, Occitanie',
            'importance': 0.2612,
            'municipality': 'Parisot'
          }
        }
      ],
      'attribution': 'BAN',
      'licence': 'ETALAB-2.0',
      'query': 'paris 75002',
      'filters': {
        'type': 'municipality'
      },
      'limit': 5
    };

    vi.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: async () => Promise.resolve(geoApiResponse)
    });

    // WHEN
    const adresse = screen.getByLabelText('Votre lieu d’habitation * Saississez le nom ou le code postal de votre commune.');
    fireEvent.change(adresse, { target: { value: 'par' } });

    // THEN
    const paris = await screen.findByRole('option', { name: '75001 Paris', hidden: true });
    const parisot = await screen.findByRole('option', { name: '82160 Parisot', hidden: true });
    expect(paris).toBeInTheDocument();
    expect(parisot).toBeInTheDocument();
  });

  it('quand je coche au moins une case de situation et que je valide le formulaire alors il n’y a pas d’erreur de validation', () => {
    // GIVEN
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2023, 11, 12, 13));

    vi.stubGlobal('fetch', vi.fn(
      () => ({ status: 200, json: async () => Promise.resolve({}) }))
    );

    const mockNavigate = vi.fn().mockReturnValue(() => { });
    vi.spyOn(ReactRouterDom, 'useNavigate').mockReturnValue(mockNavigate);

    render(<CandidatureConseiller />);
    const prenom = screen.getByLabelText('Prénom *');
    fireEvent.change(prenom, { target: { value: 'Jean' } });
    const nom = screen.getByLabelText('Nom *');
    fireEvent.change(nom, { target: { value: 'Dupont' } });
    const email = screen.getByLabelText('Adresse e-mail * Format attendu : nom@domaine.fr');
    fireEvent.change(email, { target: { value: 'jean.dupont@example.com' } });
    const adresse = screen.getByLabelText('Votre lieu d’habitation * Saississez le nom ou le code postal de votre commune.');
    fireEvent.change(adresse, { target: { value: '93100 Montreuil' } });
    const enEmploi = screen.getByRole('checkbox', { name: 'En emploi' });
    fireEvent.click(enEmploi);
    const oui = screen.getByRole('radio', { name: 'Oui' });
    fireEvent.click(oui);
    const date = screen.getByLabelText('Choisir une date');
    fireEvent.change(date, { target: { value: dateDujour() } });
    const _5km = screen.getByRole('radio', { name: '5 km' });
    fireEvent.click(_5km);
    const descriptionMotivation = screen.getByLabelText('Votre message *');
    fireEvent.change(descriptionMotivation, { target: { value: 'je suis motivé !' } });

    // WHEN
    const envoyer = screen.getByRole('button', { name: 'Envoyer votre candidature' });
    fireEvent.click(envoyer);

    // THEN
    const erreurCheckboxes = screen.queryByText('Vous devez cocher au moins une case', { selector: 'p' });
    expect(erreurCheckboxes).not.toBeInTheDocument();
    vi.useRealTimers();
  });

  it('quand je ne coche pas de case de situation et que je valide le formulaire alors il y a une erreur de validation', () => {
    // GIVEN
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2023, 11, 12, 13));

    vi.stubGlobal('fetch', vi.fn(
      () => ({ status: 200, json: async () => Promise.resolve({}) }))
    );

    render(<CandidatureConseiller />);
    const prenom = screen.getByLabelText('Prénom *');
    fireEvent.change(prenom, { target: { value: 'Jean' } });
    const nom = screen.getByLabelText('Nom *');
    fireEvent.change(nom, { target: { value: 'Dupont' } });
    const email = screen.getByLabelText('Adresse e-mail * Format attendu : nom@domaine.fr');
    fireEvent.change(email, { target: { value: 'jean.dupont@example.com' } });
    const adresse = screen.getByLabelText('Votre lieu d’habitation * Saississez le nom ou le code postal de votre commune.');
    fireEvent.change(adresse, { target: { value: '93100 Montreuil' } });
    const oui = screen.getByRole('radio', { name: 'Oui' });
    fireEvent.click(oui);
    const date = screen.getByLabelText('Choisir une date');
    fireEvent.change(date, { target: { value: dateDujour() } });
    const _5km = screen.getByRole('radio', { name: '5 km' });
    fireEvent.click(_5km);
    const descriptionMotivation = screen.getByLabelText('Votre message *');
    fireEvent.change(descriptionMotivation, { target: { value: 'je suis motivé !' } });

    // WHEN
    const envoyer = screen.getByRole('button', { name: 'Envoyer votre candidature' });
    fireEvent.click(envoyer);

    // THEN
    const erreurCheckboxes = screen.getByText('Vous devez cocher au moins une case', { selector: 'p' });
    expect(erreurCheckboxes).toBeInTheDocument();
    vi.useRealTimers();
  });

  it('quand je remplis le formulaire, que je l’envoie et que le serveur me renvoie une erreur, alors elle s’affiche sur la page', async () => {
    // GIVEN
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2023, 11, 12, 13));

    vi.stubGlobal('fetch', vi.fn(
      () => ({ status: 400, json: async () => Promise.resolve({ message: 'Cette adresse mail est déjà utilisée' }) }))
    );

    render(<CandidatureConseiller />);
    const prenom = screen.getByLabelText('Prénom *');
    fireEvent.change(prenom, { target: { value: 'Jean' } });
    const nom = screen.getByLabelText('Nom *');
    fireEvent.change(nom, { target: { value: 'Dupont' } });
    const email = screen.getByLabelText('Adresse e-mail * Format attendu : nom@domaine.fr');
    fireEvent.change(email, { target: { value: 'jean.dupont@example.com' } });
    const adresse = screen.getByLabelText('Votre lieu d’habitation * Saississez le nom ou le code postal de votre commune.');
    fireEvent.change(adresse, { target: { value: '93100 Montreuil' } });
    const enEmploi = screen.getByRole('checkbox', { name: 'En emploi' });
    fireEvent.click(enEmploi);
    const oui = screen.getByRole('radio', { name: 'Oui' });
    fireEvent.click(oui);
    const date = screen.getByLabelText('Choisir une date');
    fireEvent.change(date, { target: { value: dateDujour() } });
    const _5km = screen.getByRole('radio', { name: '5 km' });
    fireEvent.click(_5km);
    const descriptionMotivation = screen.getByLabelText('Votre message *');
    fireEvent.change(descriptionMotivation, { target: { value: 'je suis motivé !' } });

    // WHEN
    const envoyer = screen.getByRole('button', { name: 'Envoyer votre candidature' });

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(() => {
      fireEvent.click(envoyer);
    });

    // THEN
    const titreErreurValidation = screen.getByRole('heading', { level: 3, name: 'Erreur de validation' });
    expect(titreErreurValidation).toBeInTheDocument();
    const contenuErreurValidation = screen.getByText('Cette adresse mail est déjà utilisée', { selector: 'p' });
    expect(contenuErreurValidation).toBeInTheDocument();
    vi.useRealTimers();
  });

  it('quand je remplis le formulaire avec toutes les informations valides, alors je suis redirigé vers la page de candidature validée', async () => {
    // GIVEN
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2023, 11, 12, 13));

    vi.stubGlobal('fetch', vi.fn(
      () => ({ status: 200, json: async () => Promise.resolve({}) }))
    );

    const mockNavigate = vi.fn().mockReturnValue(() => { });
    vi.spyOn(ReactRouterDom, 'useNavigate').mockReturnValue(mockNavigate);

    render(<CandidatureConseiller />);
    const prenom = screen.getByLabelText('Prénom *');
    fireEvent.change(prenom, { target: { value: 'Jean' } });
    const nom = screen.getByLabelText('Nom *');
    fireEvent.change(nom, { target: { value: 'Dupont' } });
    const email = screen.getByLabelText('Adresse e-mail * Format attendu : nom@domaine.fr');
    const adresse = screen.getByLabelText('Votre lieu d’habitation * Saississez le nom ou le code postal de votre commune.');
    fireEvent.change(adresse, { target: { value: '93100 Montreuil' } });
    fireEvent.change(email, { target: { value: 'jean.dupont@example.com' } });
    const enEmploi = screen.getByRole('checkbox', { name: 'En emploi' });
    fireEvent.click(enEmploi);
    const oui = screen.getByRole('radio', { name: 'Oui' });
    fireEvent.click(oui);
    const date = screen.getByLabelText('Choisir une date');
    fireEvent.change(date, { target: { value: dateDujour() } });
    const _5km = screen.getByRole('radio', { name: '5 km' });
    fireEvent.click(_5km);
    const descriptionMotivation = screen.getByLabelText('Votre message *');
    fireEvent.change(descriptionMotivation, { target: { value: 'je suis motivé !' } });

    // WHEN
    const envoyer = screen.getByRole('button', { name: 'Envoyer votre candidature' });

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(() => {
      fireEvent.click(envoyer);
    });

    // THEN
    expect(mockNavigate).toHaveBeenCalledWith('/candidature-validee-conseiller');

    vi.useRealTimers();
  });

  it('quand je remplis complètementle formulaire avec un numéro téléphone valide, alors je suis redirigé vers la page de candidature validée', async () => {
    // GIVEN
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2023, 11, 12, 13));

    vi.stubGlobal('fetch', vi.fn(
      () => ({ status: 200, json: async () => Promise.resolve({}) }))
    );

    const mockNavigate = vi.fn().mockReturnValue(() => { });
    vi.spyOn(ReactRouterDom, 'useNavigate').mockReturnValue(mockNavigate);

    render(<CandidatureConseiller />);
    const prenom = screen.getByLabelText('Prénom *');
    fireEvent.change(prenom, { target: { value: 'Jean' } });
    const nom = screen.getByLabelText('Nom *');
    fireEvent.change(nom, { target: { value: 'Dupont' } });
    const email = screen.getByLabelText('Adresse e-mail * Format attendu : nom@domaine.fr');
    fireEvent.change(email, { target: { value: 'jean.dupont@example.com' } });
    const adresse = screen.getByLabelText('Votre lieu d’habitation * Saississez le nom ou le code postal de votre commune.');
    fireEvent.change(adresse, { target: { value: '93100 Montreuil' } });
    const telephone = screen.getByLabelText('Téléphone Format attendu : +33122334455');
    fireEvent.change(telephone, { target: { value: '+33159590730' } });
    const enEmploi = screen.getByRole('checkbox', { name: 'En emploi' });
    fireEvent.click(enEmploi);
    const oui = screen.getByRole('radio', { name: 'Oui' });
    fireEvent.click(oui);
    const date = screen.getByLabelText('Choisir une date');
    fireEvent.change(date, { target: { value: dateDujour() } });
    const _5km = screen.getByRole('radio', { name: '5 km' });
    fireEvent.click(_5km);
    const descriptionMotivation = screen.getByLabelText('Votre message *');
    fireEvent.change(descriptionMotivation, { target: { value: 'je suis motivé !' } });

    // WHEN
    const envoyer = screen.getByRole('button', { name: 'Envoyer votre candidature' });

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(() => {
      fireEvent.click(envoyer);
    });

    // THEN
    expect(mockNavigate).toHaveBeenCalledWith('/candidature-validee-conseiller');

    vi.useRealTimers();
  });

  it('quand je valide le formulaire alors j’envoie toute les données nescessaires', async () => {
    // GIVEN
    const formData = [
      [
        'prenom',
        'Jean'
      ],
      [
        'nom',
        'Dupont'
      ],
      [
        'email',
        'jean.dupont@example.com'
      ],
      [
        'telephone',
        ''
      ],
      [
        'lieuHabitation',
        '93100 Montreuil'
      ],
      [
        'lieuHabitationCodeCommune',
        '93048'
      ],
      [
        'estDemandeurEmploi',
        'on'
      ],
      [
        'aUneExperienceMedNum',
        'oui'
      ],
      [
        'dateDisponibilite',
        '2023-12-12'
      ],
      [
        'distanceMax',
        '5'
      ],
      [
        'motivation',
        'je suis motivé !'
      ],
      [
        'g-recaptcha-response',
        '1'
      ],
      [
        'h-captcha-response',
        '1'
      ]
    ];
    const { buildConseillerData } = renderHook(() => useApiAdmin.useApiAdmin()).result.current;

    //WHEN
    const result = await buildConseillerData(formData);

    // THEN
    expect(result).toBe(JSON.stringify({
      'prenom': 'Jean',
      'nom': 'Dupont',
      'email': 'jean.dupont@example.com',
      'telephone': '',
      'estDemandeurEmploi': true,
      'aUneExperienceMedNum': true,
      'dateDisponibilite': '2023-12-12',
      'distanceMax': '5',
      'motivation': 'je suis motivé !',
      'h-captcha-response': '1',
      'estEnEmploi': false,
      'estEnFormation': false,
      'estDiplomeMedNum': false,
      'nomCommune': 'Montreuil',
      'codePostal': '93100',
      'codeCommune': '93048',
      'location': {
        'type': 'Point',
        'coordinates': [2.4491,
          48.8637]
      },
      'codeDepartement': '93',
      'codeRegion': '11',
      'codeCom': null,
    }));

    vi.useRealTimers();
  });
});
