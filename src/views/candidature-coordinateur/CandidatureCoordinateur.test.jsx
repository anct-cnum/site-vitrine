import { render, screen, within, fireEvent, act, renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import CandidatureCoordinateur from './CandidatureCoordinateur';
import { textMatcher, dateDujour } from '../../../test/test-utils';
import * as ReactRouterDom from 'react-router-dom';
import * as useApiAdmin from '../candidature-conseiller/useApiAdmin';
import { useEntrepriseFinder } from '../candidature-structure/useEntrepriseFinder';

vi.mock('react-router-dom', () => ({
  useLocation: () => ({ hash: '' }),
  useNavigate: vi.fn()
}));

describe('candidature coordinateur', () => {
  it('quand j’affiche le formulaire alors le titre et le menu s’affichent', () => {
    // WHEN
    render(<CandidatureCoordinateur />);

    // THEN
    const titre = screen.getByRole('heading', { level: 1, name: textMatcher('Je souhaite engager un coordinateur pour mes conseillers numériques') });
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

    const votreBesoinEnCoordinateur = within(menuItems[2]).getByRole('link', { name: 'Votre besoin en coordinateur' });
    expect(votreBesoinEnCoordinateur).toHaveAttribute('href', '#votre-besoin-en-coordinateur');

    const votreMotivation = within(menuItems[3]).getByRole('link', { name: 'Votre motivation' });
    expect(votreMotivation).toHaveAttribute('href', '#votre-motivation');
  });

  it('quand j’affiche le formulaire alors l’étape "Vos informations de structure" est affichée', () => {
    // WHEN
    render(<CandidatureCoordinateur />);

    // THEN
    const formulaire = screen.getByRole('form', { name: 'Candidature coordinateur' });
    const etapeInformationsDeStructure = within(formulaire).getByRole('group', { name: 'Vos informations de structure' });
    expect(etapeInformationsDeStructure).toHaveAttribute('id', 'informations-de-structure');

    const siretOuRidet = within(etapeInformationsDeStructure).getByLabelText('SIRET / RIDET * Format attendu : SIRET (12345678901234) ou RIDET (1234567)');
    expect(siretOuRidet).toHaveAttribute('id', 'siret');
    expect(siretOuRidet).toHaveAttribute('pattern', '^(?:[0-9]{7}|[0-9]{14})$');
    expect(siretOuRidet).toBeRequired();

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
    expect(uneCommune).toHaveAttribute('name', 'type');

    const unDepartement = screen.getByRole('radio', { name: 'Un département' });
    expect(unDepartement).toBeRequired();
    expect(unDepartement).toHaveAttribute('name', 'type');

    const uneRegion = screen.getByRole('radio', { name: 'Une région' });
    expect(uneRegion).toBeRequired();
    expect(uneRegion).toHaveAttribute('name', 'type');

    const unEtablissemntPublic = screen.getByRole('radio', { name: 'Un établissement public de coopération intercommunale' });
    expect(unEtablissemntPublic).toBeRequired();
    expect(unEtablissemntPublic).toHaveAttribute('name', 'type');

    const uneCollectivite = screen.getByRole('radio', { name: 'Une collectivité à statut particulier' });
    expect(uneCollectivite).toBeRequired();
    expect(uneCollectivite).toHaveAttribute('name', 'type');

    const unGIP = screen.getByRole('radio', { name: 'Un GIP' });
    expect(unGIP).toBeRequired();
    expect(unGIP).toHaveAttribute('name', 'type');

    const uneStructurePrivee = screen.getByRole('radio', { name: 'Une structure privée (association, entreprise de l’ESS, fondations)' });
    expect(uneStructurePrivee).toBeRequired();
    expect(uneStructurePrivee).toHaveAttribute('name', 'type');
  });

  it('quand j’affiche le formulaire alors l’étape "Vos informations de contact" est affichée', () => {
    // WHEN
    render(<CandidatureCoordinateur />);

    // THEN
    const formulaire = screen.getByRole('form', { name: 'Candidature coordinateur' });
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

    const email = within(etapeInformationsDeContact).getByLabelText('Adresse électronique * Format attendu : nom@domaine.fr');
    expect(email).toHaveAttribute('type', 'email');
    expect(email).toHaveAttribute('pattern', '^\\S+@\\S+\\.\\S+$');
    expect(email).toBeRequired();

    const telephone = within(etapeInformationsDeContact).getByLabelText('Téléphone * Format attendu : 0122334455 ou +33122334455');
    expect(telephone).toHaveAttribute('type', 'tel');
    expect(telephone).toHaveAttribute('pattern', '^(\\+\\d{11,12}|\\d{10})$');
    expect(telephone).toBeRequired();
  });

  it('quand j’affiche le formulaire alors l’étape "Votre besoin en coordinateur" est affiché', () => {
    // WHEN
    render(<CandidatureCoordinateur />);

    // THEN
    const formulaire = screen.getByRole('form', { name: 'Candidature coordinateur' });
    const etapeBesoinCoordinateur = within(formulaire).getByRole('group', { name: 'Votre besoin en coordinateur' });
    expect(etapeBesoinCoordinateur).toHaveAttribute('id', 'votre-besoin-en-coordinateur');

    const identificationCandidat = within(etapeBesoinCoordinateur).getByText(
      textMatcher('Avez-vous déjà identifié un candidat pour le poste de coordinateur de conseiller numérique ? *'),
      { selector: 'p' }
    );
    expect(identificationCandidat).toBeInTheDocument();

    const sousTitreIdentificationCandidat =
      within(etapeBesoinCoordinateur).getByText(
        textMatcher('Si oui, merci d’inviter ce candidat à s’inscrire sur la plateforme Conseiller numérique'),
        { selector: 'p' }
      );
    expect(sousTitreIdentificationCandidat).toBeInTheDocument();

    const oui = screen.getByRole('radio', { name: 'Oui' });
    expect(oui).toBeRequired();
    expect(oui).toHaveAttribute('name', 'aIdentifieCoordinateur');

    const non = screen.getByRole('radio', { name: 'Non' });
    expect(non).toBeRequired();
    expect(non).toHaveAttribute('name', 'aIdentifieCoordinateur');

    const leCoordinateur = within(etapeBesoinCoordinateur).getByText(textMatcher('Le coordinateur*'), { selector: 'p' });
    expect(leCoordinateur).toBeInTheDocument();

    const coordination = screen.getByRole('radio', { name: 'Effectuera uniquement des missions de coordination' });
    expect(coordination).toBeRequired();
    expect(coordination).toHaveAttribute('name', 'coordinateurTypeContrat');

    const publics = screen.getByRole('radio', { name: 'Accompagnera également des publics' });
    expect(publics).toBeRequired();
    expect(publics).toHaveAttribute('name', 'coordinateurTypeContrat');

    const dateAccueilCoordinateur = within(etapeBesoinCoordinateur).getByText(
      textMatcher('À partir de quand êtes vous prêt à accueillir votre coordinateur ? *'),
      { selector: 'p' }
    );
    expect(dateAccueilCoordinateur).toBeInTheDocument();

    const date = within(etapeBesoinCoordinateur).getByLabelText('Choisir une date');
    expect(date).toHaveAttribute('type', 'date');
    expect(date).toBeRequired();
  });

  it('quand j’affiche le formulaire alors l’étape "Votre motivation" est affiché', () => {
    // WHEN
    render(<CandidatureCoordinateur />);

    // THEN
    const formulaire = screen.getByRole('form', { name: 'Candidature coordinateur' });
    const etapeMotivation = within(formulaire).getByRole('group', { name: 'Votre motivation' });
    expect(etapeMotivation).toHaveAttribute('id', 'votre-motivation');

    const sousTitreVotreMotvation =
      within(etapeMotivation).getByText(
        'En quelques lignes, décrivez le motif de votre besoin en recrutement. Indiquez les actions prévues, la justification du poste, ainsi que le ' +
        'public ciblé.',
        { selector: 'p' }
      );
    expect(sousTitreVotreMotvation).toBeInTheDocument();

    const votreMessage = within(etapeMotivation).getByLabelText('Votre message * Limité à 2500 caractères');
    expect(votreMessage).toHaveAttribute('id', 'motivation');
    expect(votreMessage).toBeRequired();

    const questionsMotivation = within(etapeMotivation).getByRole('list');
    const questions = within(questionsMotivation).getAllByRole('listitem');

    const strategieInclusion = within(questions[0]).getByText(
      'Avez-vous mis en place une stratégie d’inclusion numérique ? Si oui, quelles actions menez-vous dans ce cadre ?'
    );
    expect(strategieInclusion).toBeInTheDocument();
    const integration = within(questions[1]).getByText('Pourquoi souhaitez-vous intégrer le dispositif Conseiller numérique ?');
    expect(integration).toBeInTheDocument();
    const positionnement = within(questions[2]).getByText('Comment avez vous pensé le positionnement de votre Conseiller numérique ?');
    expect(positionnement).toBeInTheDocument();
    const reflexion = within(questions[3]).getByText(
      'Avez vous réfléchi son positionnement géographique en complémentarité avec le maillage territorial existant ?'
    );
    expect(reflexion).toBeInTheDocument();
  });

  it('quand j’affiche le formulaire alors l’encart des engagements est affiché', () => {
    // WHEN
    render(<CandidatureCoordinateur />);

    // THEN
    const formulaire = screen.getByRole('form', { name: 'Candidature coordinateur' });
    const titreEngagement = within(formulaire).getByText(textMatcher('En tant que structure accueillante, vous vous engagez à'), { selector: 'p' });
    expect(titreEngagement).toBeInTheDocument();

    const sousTitreEngagement = within(formulaire).getByText(textMatcher('Assurer que le conseiller réalise des activités visant à:'), { selector: 'p' });
    expect(sousTitreEngagement).toBeInTheDocument();

    const engagements = screen.getByTestId('votre-engagement');

    const listDetail = within(engagements).getAllByRole('listitem');
    within(listDetail[0]).getByText('Renforcer le maillage et les synergies territoriales,');
    within(listDetail[1]).getByText('Être le relais principal des employeurs, des Conseillers numériques et de l’équipe d’animation nationale,');
    within(listDetail[2]).getByText('Imaginer et mettre en place des collaborations sur la base des besoins de la communauté des Conseillers numériques,');
    within(listDetail[3]).getByText('Signer dans les 15 jours suivants un contrat avec ce candidat,');
    within(listDetail[4]).getByText('Laisser partir le conseiller numérique en formation initiale ou continue,');
    within(listDetail[5]).getByText('Mettre à sa disposition les moyens et équipements pour réaliser sa mission (ordinateur, ' +
      'téléphone portable, voiture si nécessaire)');

    const confirmationEngagement = screen.getByLabelText('Je confirme avoir lu et pris connaissance des conditions d’engagement.*');
    expect(confirmationEngagement).toBeInTheDocument();
  });

  it('quand j’affiche le formulaire alors le bouton "Envoyer votre candidature" est affiché', () => {
    // WHEN
    render(<CandidatureCoordinateur />);

    //THEN
    const formulaire = screen.getByRole('form', { name: 'Candidature coordinateur' });
    within(formulaire).getByRole('button', { name: 'Envoyer votre candidature' });
  });

  // eslint-disable-next-line max-len
  it('quand je remplis le formulaire, que je l’envoie et que le serveur me renvoie une erreur, alors elle s’affiche sur la page et le captcha est rénitialisé', async () => {
    // GIVEN
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2023, 11, 12, 13));

    vi.stubGlobal('fetch', vi.fn(
      () => ({ status: 400, json: async () => Promise.resolve({ message: 'Cette adresse mail est déjà utilisée' }) }))
    );
    vi.stubGlobal('turnstile', {
      reset: vi.fn(),
      remove: vi.fn(),
      render: vi.fn()
    });

    render(<CandidatureCoordinateur />);
    const siret = screen.getByLabelText('SIRET / RIDET * Format attendu : SIRET (12345678901234) ou RIDET (1234567)');
    fireEvent.change(siret, { target: { value: '12345678901234' } });
    const denomination = screen.getByLabelText('Dénomination *');
    fireEvent.change(denomination, { target: { value: 'Entreprise' } });
    const adresse = screen.getByLabelText('Adresse *');
    fireEvent.change(adresse, { target: { value: '75007 Paris' } });
    const typeStructure = screen.getByRole('radio', { name: 'Une commune' });
    fireEvent.click(typeStructure);
    const prenom = screen.getByLabelText('Prénom *');
    fireEvent.change(prenom, { target: { value: 'Jean' } });
    const nom = screen.getByLabelText('Nom *');
    fireEvent.change(nom, { target: { value: 'Dupont' } });
    const fonction = screen.getByLabelText('Fonction *');
    fireEvent.change(fonction, { target: { value: 'Test' } });
    const email = screen.getByLabelText('Adresse électronique * Format attendu : nom@domaine.fr');
    fireEvent.change(email, { target: { value: 'jean.dupont@example.com' } });
    const telephone = screen.getByLabelText('Téléphone * Format attendu : 0122334455 ou +33122334455');
    fireEvent.change(telephone, { target: { value: '+33123456789' } });
    const identificationCandidat = screen.getByRole('radio', { name: 'Oui' });
    fireEvent.click(identificationCandidat);
    const typeMission = screen.getByRole('radio', { name: 'Accompagnera également des publics' });
    fireEvent.click(typeMission);
    const date = screen.getByLabelText('Choisir une date');
    fireEvent.change(date, { target: { value: dateDujour() } });
    const descriptionMotivation = screen.getByLabelText('Votre message * Limité à 2500 caractères');
    fireEvent.change(descriptionMotivation, { target: { value: 'je suis motivé !' } });
    const confirmation = screen.getByRole('checkbox', { name: 'Je confirme avoir lu et pris connaissance des conditions d’engagement. *' });
    fireEvent.click(confirmation);

    // WHEN
    const envoyer = screen.getByRole('button', { name: 'Envoyer votre candidature' });

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(() => {
      fireEvent.click(envoyer);
    });

    // THEN
    expect(window.turnstile.reset).toHaveBeenCalledTimes(1);
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

    render(<CandidatureCoordinateur />);
    const siret = screen.getByLabelText('SIRET / RIDET * Format attendu : SIRET (12345678901234) ou RIDET (1234567)');
    fireEvent.change(siret, { target: { value: '12345678901234' } });
    const denomination = screen.getByLabelText('Dénomination *');
    fireEvent.change(denomination, { target: { value: 'Entreprise' } });
    const adresse = screen.getByLabelText('Adresse *');
    fireEvent.change(adresse, { target: { value: '75007 Paris' } });
    const typeStructure = screen.getByRole('radio', { name: 'Une commune' });
    fireEvent.click(typeStructure);
    const prenom = screen.getByLabelText('Prénom *');
    fireEvent.change(prenom, { target: { value: 'Jean' } });
    const nom = screen.getByLabelText('Nom *');
    fireEvent.change(nom, { target: { value: 'Dupont' } });
    const fonction = screen.getByLabelText('Fonction *');
    fireEvent.change(fonction, { target: { value: 'Test' } });
    const email = screen.getByLabelText('Adresse électronique * Format attendu : nom@domaine.fr');
    fireEvent.change(email, { target: { value: 'jean.dupont@example.com' } });
    const telephone = screen.getByLabelText('Téléphone * Format attendu : 0122334455 ou +33122334455');
    fireEvent.change(telephone, { target: { value: '+33123456789' } });
    const identificationCandidat = screen.getByRole('radio', { name: 'Oui' });
    fireEvent.click(identificationCandidat);
    const typeMission = screen.getByRole('radio', { name: 'Accompagnera également des publics' });
    fireEvent.click(typeMission);
    const date = screen.getByLabelText('Choisir une date');
    fireEvent.change(date, { target: { value: dateDujour() } });
    const descriptionMotivation = screen.getByLabelText('Votre message * Limité à 2500 caractères');
    fireEvent.change(descriptionMotivation, { target: { value: 'je suis motivé !' } });
    const confirmation = screen.getByRole('checkbox', { name: 'Je confirme avoir lu et pris connaissance des conditions d’engagement. *' });
    fireEvent.click(confirmation);

    // WHEN
    const envoyer = screen.getByRole('button', { name: 'Envoyer votre candidature' });

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(() => {
      fireEvent.click(envoyer);
    });

    // THEN
    expect(mockNavigate).toHaveBeenCalledWith('/candidature-validee-structure');

    vi.useRealTimers();
  });

  it('quand je valide le formulaire alors j’envoie toute les données nescessaires en renseignant un siret', async () => {
    // GIVEN
    const formData = [
      [
        'siret',
        '13002603200016'
      ],
      [
        'denomination',
        'AGENCE NATIONALE DE LA COHESION DES TERRITOIRES'
      ],
      [
        'adresse',
        '20 AVENUE DE SEGUR, 75007 PARIS'
      ],
      [
        'type',
        'COMMUNE'
      ],
      [
        'prenom',
        'Jean'
      ],
      [
        'nom',
        'Dupont'
      ],
      [
        'fonction',
        'Test'
      ],
      [
        'email',
        'jean.dupont@example.com'
      ],
      [
        'telephone',
        '+33123456789'
      ],
      [
        'aIdentifieCoordinateur',
        'non'
      ],
      [
        'coordinateurTypeContrat',
        'FT'
      ],
      [
        'dateDebutMission',
        '2023-12-12'
      ],
      [
        'motivation',
        'je suis motivé !'
      ],
      [
        'confirmationEngagement',
        'on'
      ],
      [
        'g-recaptcha-response',
        '1'
      ],
      [
        'cf-turnstile-response',
        '1'
      ]
    ];
    const { buildCoordinateurData } = renderHook(() => useApiAdmin.useApiAdmin()).result.current;
    const { getGeoLocationFromAddress } = renderHook(() => useEntrepriseFinder()).result.current;
    let geoLocation;

    // WHEN
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      geoLocation = await getGeoLocationFromAddress('20 AVENUE DE SEGUR, 75007 PARIS');
    });
    const result = await buildCoordinateurData(formData, geoLocation, '75107');

    // THEN
    expect(result).toBe(JSON.stringify({
      'siret': '13002603200016',
      'type': 'COMMUNE',
      'aIdentifieCoordinateur': false,
      'coordinateurTypeContrat': 'FT',
      'dateDebutMission': '2023-12-12',
      'motivation': 'je suis motivé !',
      'confirmationEngagement': true,
      'cf-turnstile-response': '1',
      'contact': {
        'prenom': 'Jean', 'nom': 'Dupont',
        'fonction': 'Test', 'email':
          'jean.dupont@example.com',
        'telephone': '+33123456789'
      },
      'nom': 'AGENCE NATIONALE DE LA COHESION DES TERRITOIRES',
      'ridet': null,
      'nomCommune': 'Paris 7e Arrondissement',
      'codePostal': '75007',
      'codeCommune': '75107',
      'location': { 'type': 'Point', 'coordinates': [2.3115, 48.8548] },
      'codeDepartement': '75',
      'codeRegion': '11',
      'codeCom': null,
    }));

    vi.useRealTimers();
  });

  it('quand je valide le formulaire alors j’envoie toute les données nescessaires en renseignant un ridet', async () => {
    // GIVEN
    const formData = [
      [
        'siret',
        '1234567'
      ],
      [
        'denomination',
        'AGENCE NATIONALE DE LA COHESION DES TERRITOIRES'
      ],
      [
        'adresse',
        '20 AVENUE DE SEGUR, 75007 PARIS'
      ],
      [
        'type',
        'COMMUNE'
      ],
      [
        'prenom',
        'Jean'
      ],
      [
        'nom',
        'Dupont'
      ],
      [
        'fonction',
        'Test'
      ],
      [
        'email',
        'jean.dupont@example.com'
      ],
      [
        'telephone',
        '+33123456789'
      ],
      [
        'aIdentifieCoordinateur',
        'non'
      ],
      [
        'coordinateurTypeContrat',
        'FT'
      ],
      [
        'dateDebutMission',
        '2023-12-12'
      ],
      [
        'motivation',
        'je suis motivé !'
      ],
      [
        'confirmationEngagement',
        'on'
      ],
      [
        'g-recaptcha-response',
        '1'
      ],
      [
        'cf-turnstile-response',
        '1'
      ]
    ];
    const { buildCoordinateurData } = renderHook(() => useApiAdmin.useApiAdmin()).result.current;
    const { getGeoLocationFromAddress } = renderHook(() => useEntrepriseFinder()).result.current;
    let geoLocation;

    // WHEN
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      geoLocation = await getGeoLocationFromAddress('20 AVENUE DE SEGUR, 75007 PARIS');
    });
    const result = await buildCoordinateurData(formData, geoLocation, '75107');

    // THEN
    expect(result).toBe(JSON.stringify({
      'siret': null,
      'type': 'COMMUNE',
      'aIdentifieCoordinateur': false,
      'coordinateurTypeContrat': 'FT',
      'dateDebutMission': '2023-12-12',
      'motivation': 'je suis motivé !',
      'confirmationEngagement': true,
      'cf-turnstile-response': '1',
      'contact': {
        'prenom': 'Jean', 'nom': 'Dupont',
        'fonction': 'Test', 'email':
          'jean.dupont@example.com',
        'telephone': '+33123456789'
      },
      'nom': 'AGENCE NATIONALE DE LA COHESION DES TERRITOIRES',
      'ridet': '1234567',
      'nomCommune': 'Paris 7e Arrondissement',
      'codePostal': '75007',
      'codeCommune': '75107',
      'location': { 'type': 'Point', 'coordinates': [2.3115, 48.8548] },
      'codeDepartement': '75',
      'codeRegion': '11',
      'codeCom': null,
    }));

    vi.useRealTimers();
  });
  it('quand je remplis le formulaire et qu’une erreur se produit alors un message d’erreur s’affiche et le captcha est rénitialisé', async () => {
    // GIVEN
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2023, 11, 12, 13));

    vi.spyOn(useApiAdmin, 'useApiAdmin').mockImplementation(() => ({
      creerCandidatureCoordinateur: vi.fn().mockReturnValue({ message: 'Failed to fetch' }),
      buildCoordinateurData: vi.fn(),
    }));
    vi.stubGlobal('turnstile', {
      reset: vi.fn(),
      remove: vi.fn(),
      render: vi.fn()
    });

    render(<CandidatureCoordinateur />);
    const siret = screen.getByLabelText('SIRET / RIDET * Format attendu : SIRET (12345678901234) ou RIDET (1234567)');
    fireEvent.change(siret, { target: { value: '12345678901234' } });
    const denomination = screen.getByLabelText('Dénomination *');
    fireEvent.change(denomination, { target: { value: 'Entreprise' } });
    const adresse = screen.getByLabelText('Adresse *');
    fireEvent.change(adresse, { target: { value: '75007 Paris' } });
    const typeStructure = screen.getByRole('radio', { name: 'Une commune' });
    fireEvent.click(typeStructure);
    const prenom = screen.getByLabelText('Prénom *');
    fireEvent.change(prenom, { target: { value: 'Jean' } });
    const nom = screen.getByLabelText('Nom *');
    fireEvent.change(nom, { target: { value: 'Dupont' } });
    const fonction = screen.getByLabelText('Fonction *');
    fireEvent.change(fonction, { target: { value: 'Test' } });
    const email = screen.getByLabelText('Adresse électronique * Format attendu : nom@domaine.fr');
    fireEvent.change(email, { target: { value: 'jean.dupont@example.com' } });
    const telephone = screen.getByLabelText('Téléphone * Format attendu : 0122334455 ou +33122334455');
    fireEvent.change(telephone, { target: { value: '+33123456789' } });
    const identificationCandidat = screen.getByRole('radio', { name: 'Oui' });
    fireEvent.click(identificationCandidat);
    const typeMission = screen.getByRole('radio', { name: 'Accompagnera également des publics' });
    fireEvent.click(typeMission);
    const date = screen.getByLabelText('Choisir une date');
    fireEvent.change(date, { target: { value: dateDujour() } });
    const descriptionMotivation = screen.getByLabelText('Votre message * Limité à 2500 caractères');
    fireEvent.change(descriptionMotivation, { target: { value: 'je suis motivé !' } });
    const confirmation = screen.getByRole('checkbox', { name: 'Je confirme avoir lu et pris connaissance des conditions d’engagement. *' });
    fireEvent.click(confirmation);

    // WHEN
    const envoyer = screen.getByRole('button', { name: 'Envoyer votre candidature' });

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(() => {
      fireEvent.click(envoyer);
    });


    // THEN
    expect(window.turnstile.reset).toHaveBeenCalledTimes(1);
    const contenuErreurValidation = screen.getByText('Failed to fetch', { selector: 'p' });
    expect(contenuErreurValidation).toBeInTheDocument();

    vi.useRealTimers();
  });

  it.each([
    {
      description: 'un SIRET/RIDET',
      selector: 'SIRET / RIDET * Format attendu : SIRET (12345678901234) ou RIDET (1234567)',
      message: 'Veuillez renseigner le SIRET/RIDET'
    },
    {
      description: 'une dénomination',
      selector: 'Dénomination *',
      message: 'Veuillez renseigner la dénomination'
    },
    {
      description: 'un prénom',
      selector: 'Prénom *',
      message: 'Veuillez renseigner ce prénom'
    },
    {
      description: 'un nom',
      selector: 'Nom *',
      message: 'Veuillez renseigner le nom'
    },
    {
      description: 'une fonction',
      selector: 'Fonction *',
      message: 'Veuillez renseigner la fonction'
    },
    {
      description: 'un email',
      selector: 'Adresse électronique * Format attendu : nom@domaine.fr',
      message: 'Veuillez renseigner le mail'
    },
    {
      description: 'un téléphone',
      selector: 'Téléphone * Format attendu : 0122334455 ou +33122334455',
      message: 'Veuillez renseigner le téléphone'
    },
    {
      description: 'une date',
      selector: 'Choisir une date',
      message: 'Veuillez renseigner la date'
    },
    {
      description: 'une motivation',
      selector: 'Votre message * Limité à 2500 caractères',
      message: 'Veuillez renseigner la motivation'
    },
  ])('quand je valide le formulaire avec $description vide alors j’ai un message d’erreur ', async ({ selector, message }) => {
    // GIVEN
    vi.stubGlobal('turnstile', {
      reset: vi.fn(),
      remove: vi.fn(),
      render: vi.fn()
    });
    render(<CandidatureCoordinateur />);
    const champDeFormulaire = screen.getByLabelText(selector);
    Object.defineProperty(champDeFormulaire, 'validationMessage', {
      value: message,
      configurable: true,
    });

    // WHEN
    const envoyer = screen.getByRole('button', { name: 'Envoyer votre candidature' });
    fireEvent.click(envoyer);

    // THEN
    const contenuErreurValidation = await screen.findByText(message, { selector: 'p' });
    expect(contenuErreurValidation).toBeInTheDocument();
  });
});

