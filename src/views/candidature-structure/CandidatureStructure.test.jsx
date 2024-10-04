import { render, screen, within, waitFor, fireEvent, act, renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import CandidatureStructure from './CandidatureStructure';
import { textMatcher, dateDujour } from '../../../test/test-utils';
import * as ReactRouterDom from 'react-router-dom';
import * as useApiAdmin from '../candidature-conseiller/useApiAdmin';
import { useEntrepriseFinder } from './useEntrepriseFinder';

vi.mock('react-router-dom', () => ({
  useLocation: () => ({ hash: '' }),
  useNavigate: vi.fn()
}));

describe('candidature structure', () => {
  it('quand j’affiche le formulaire alors le titre et le menu s’affichent', () => {
    // WHEN
    render(<CandidatureStructure />);

    // THEN
    const titre = screen.getByRole('heading', { level: 1, name: textMatcher('Je souhaite engager un conseiller numérique') });
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

  it('quand j’affiche le formulaire alors l’étape "Vos informations de structure" est affiché', () => {
    // WHEN
    render(<CandidatureStructure />);

    // THEN
    const formulaire = screen.getByRole('form', { name: 'Candidature structure' });
    const etapeInformationsDeStructure = within(formulaire).getByRole('group', { name: 'Vos informations de structure' });
    expect(etapeInformationsDeStructure).toHaveAttribute('id', 'informations-de-structure');

    const siretOuRidet = within(etapeInformationsDeStructure).getByLabelText('SIRET / RIDET *');
    expect(siretOuRidet).toHaveAttribute('id', 'siret');
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
    expect(telephone).toHaveAttribute('pattern', '[+](33|590|596|594|262|269|687)[0-9]{9}');
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
    expect(oui).toHaveAttribute('name', 'aIdentifieCandidat');

    const non = screen.getByRole('radio', { name: 'Non' });
    expect(non).toBeRequired();
    expect(non).toHaveAttribute('name', 'aIdentifieCandidat');

    const dateDebutMission = within(etapeBesoinConseillerNumerique).getByText(
      textMatcher('À partir de quand êtes vous prêt à accueillir votre conseiller numerique ?*'),
      { selector: 'p' }
    );
    expect(dateDebutMission).toBeInTheDocument();

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
    expect(votreMessage).toHaveAttribute('id', 'motivation');
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
  it('quand je renseigne un siret valide la dénomination et l’adresse de la structure sont affichées', async () => {
    // GIVEN
    vi.spyOn(global, 'fetch').mockImplementation();
    const mockApiResponse = {
      nomStructure: 'AGENCE NATIONALE DE LA COHESION DES TERRITOIRES',
      adresseStructure: '20 AVENUE DE SEGUR, 75007 PARIS',
      isRidet: false,
    };
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockApiResponse,
    });

    render(<CandidatureStructure />);

    // WHEN
    const siretInput = screen.getByLabelText('SIRET / RIDET *');
    fireEvent.change(siretInput, { target: { value: '13002603200016' } });

    // THEN
    const denominationInput = screen.getByLabelText('Dénomination *');
    const adresseInput = screen.getByLabelText('Adresse *');
    await waitFor(() => {
      expect(denominationInput).toHaveValue('AGENCE NATIONALE DE LA COHESION DES TERRITOIRES');
    });
    await waitFor(() => {
      expect(adresseInput).toHaveValue('20 AVENUE DE SEGUR, 75007 PARIS');
    });
  });

  it('quand je renseigne un ridet valide la dénomination de la structure est affichée', async () => {
    // GIVEN
    vi.spyOn(global, 'fetch').mockImplementation();
    const mockApiResponse = {
      nomStructure: 'SELARL LUNA',
      isRidet: true,
    };
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockApiResponse,
    });

    render(<CandidatureStructure />);

    // WHEN
    const ridetInput = screen.getByLabelText('SIRET / RIDET *');
    fireEvent.change(ridetInput, { target: { value: '1071539' } });

    // THEN
    const denominationInput = screen.getByLabelText('Dénomination *');
    await waitFor(() => {
      expect(denominationInput).toHaveValue('SELARL LUNA');
    });
  });

  it('quand je renseigne ni un siret (14 chiffres) ni un ridet (6 ou 7 chiffres) alors les champs sont vidés', async () => {
    // GIVEN
    render(<CandidatureStructure />);

    // WHEN
    const siretInput = screen.getByLabelText('SIRET / RIDET *');
    fireEvent.change(siretInput, { target: { value: '1300260320001' } });

    // THEN
    const denominationInput = screen.getByLabelText('Dénomination *');
    const adresseInput = screen.getByLabelText('Adresse *');
    await waitFor(() => {
      expect(denominationInput).toHaveValue('');
    });
    await waitFor(() => {
      expect(adresseInput).toHaveValue('');
    });
  });
  it('quand je fais une recherche par siret il y a un état de chargement', async () => {
    // GIVEN
    vi.spyOn(global, 'fetch').mockImplementation();
    let resolvePromise;
    const promise = new Promise(resolve => {
      resolvePromise = resolve;
    });
    global.fetch.mockReturnValueOnce(promise);

    render(<CandidatureStructure />);

    // WHEN
    const siretInput = screen.getByLabelText('SIRET / RIDET *');
    fireEvent.change(siretInput, { target: { value: '13002603200016' } });

    // THEN
    await waitFor(() => {
      const denominationInput = screen.getByLabelText('Dénomination *');
      expect(denominationInput).toHaveAttribute('aria-busy', 'true');
    });
    resolvePromise({
      ok: true,
      json: async () => ({
        nomStructure: 'AGENCE NATIONALE DE LA COHESION DES TERRITOIRES',
        adresseStructure: '20 AVENUE DE SEGUR, 75007 PARIS',
        isRidet: false
      })
    });
    await waitFor(() => {
      const denominationInput = screen.getByLabelText('Dénomination *');
      expect(denominationInput).toHaveAttribute('aria-busy', 'false');
    });
    await waitFor(() => {
      const adresseInput = screen.getByLabelText('Adresse *');
      expect(adresseInput).toHaveValue('20 AVENUE DE SEGUR, 75007 PARIS');
    });
  });

  // eslint-disable-next-line max-len
  it('quand je remplis le formulaire, que je l’envoie et que le serveur me renvoie une erreur de doublon, alors elle s’affiche sur la page et le captcha est rénitialiser', async () => {
    // GIVEN
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2023, 11, 12, 13));

    vi.stubGlobal('fetch', vi.fn(
      () => ({ status: 400, json: async () => Promise.resolve({ message: 'Cette adresse mail est déjà utilisée' }) }))
    );
    vi.stubGlobal('hcaptcha', {
      reset: vi.fn(),
      render: vi.fn()
    });

    render(<CandidatureStructure />);
    const siret = screen.getByLabelText('SIRET / RIDET *');
    fireEvent.change(siret, { target: { value: '1234567890123' } });
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
    const email = screen.getByLabelText('Adresse e-mail *');
    fireEvent.change(email, { target: { value: 'jean.dupont@example.com' } });
    const telephone = screen.getByLabelText('Téléphone *');
    fireEvent.change(telephone, { target: { value: '+33123456789' } });
    const nombre = screen.getByLabelText('Combien de conseillers numériques souhaitez-vous accueillir ?*');
    fireEvent.change(nombre, { target: { value: 1 } });
    const identificationCandidat = screen.getByRole('radio', { name: 'Oui' });
    fireEvent.click(identificationCandidat);
    const date = screen.getByLabelText('Choisir une date');
    fireEvent.change(date, { target: { value: dateDujour() } });
    const descriptionMotivation = screen.getByLabelText('Votre message *');
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
    expect(window.hcaptcha.reset).toHaveBeenCalledTimes(1);
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

    render(<CandidatureStructure />);
    const siret = screen.getByLabelText('SIRET / RIDET *');
    fireEvent.change(siret, { target: { value: '1234567890123' } });
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
    const email = screen.getByLabelText('Adresse e-mail *');
    fireEvent.change(email, { target: { value: 'jean.dupont@example.com' } });
    const telephone = screen.getByLabelText('Téléphone *');
    fireEvent.change(telephone, { target: { value: '+33123456789' } });
    const nombre = screen.getByLabelText('Combien de conseillers numériques souhaitez-vous accueillir ?*');
    fireEvent.change(nombre, { target: { value: 1 } });
    const identificationCandidat = screen.getByRole('radio', { name: 'Oui' });
    fireEvent.click(identificationCandidat);
    const date = screen.getByLabelText('Choisir une date');
    fireEvent.change(date, { target: { value: dateDujour() } });
    const descriptionMotivation = screen.getByLabelText('Votre message *');
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

  it('quand je valide le formulaire alors j’envoie toute les données nescessaires', async () => {
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
        'nombreConseillersSouhaites',
        '1'
      ],
      [
        'aIdentifieCandidat',
        'oui'
      ],
      [
        'dateDebutMission',
        '2024-12-12'
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
        'h-captcha-response',
        '1'
      ]
    ];

    const { buildStructureData } = renderHook(() => useApiAdmin.useApiAdmin()).result.current;
    const { getGeoLocationFromAddress } = renderHook(() => useEntrepriseFinder()).result.current;

    // //WHEN
    const geoLocation = await getGeoLocationFromAddress('20 AVENUE DE SEGUR, 75007 PARIS');
    const result = await buildStructureData(formData, geoLocation, '75107');

    // THEN
    expect(result).toBe(JSON.stringify({
      'siret': '13002603200016',
      'type': 'COMMUNE',
      'nombreConseillersSouhaites': '1',
      'aIdentifieCandidat': true,
      'dateDebutMission': '2024-12-12',
      'motivation': 'je suis motivé !',
      'confirmationEngagement': true,
      'h-captcha-response': '1',
      'location': { 'type': 'Point', 'coordinates': [2.3115, 48.8548] },
      'contact': {
        'prenom': 'Jean',
        'nom': 'Dupont',
        'fonction': 'Test',
        'email': 'jean.dupont@example.com',
        'telephone': '+33123456789'
      },
      'nom': 'AGENCE NATIONALE DE LA COHESION DES TERRITOIRES',
      'nomCommune': 'Paris 7e Arrondissement',
      'codePostal': '75007',
      'codeCommune': '75107',
      'codeDepartement': '75',
      'codeRegion': '11',
      'codeCom': null,
    }));

    vi.useRealTimers();
  });

  it('quand je candidate et q’une erreur server survient, alors le message d’erreur s’affiche et le captcha est rénitialiser', async () => {
    // GIVEN
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2023, 11, 12, 13));

    vi.spyOn(useApiAdmin, 'useApiAdmin').mockImplementation(() => ({
      creerCandidatureStructure: vi.fn().mockReturnValue({ message: 'Failed to fetch' }),
      buildStructureData: vi.fn(),
    }));
    vi.stubGlobal('hcaptcha', {
      reset: vi.fn(),
      render: vi.fn()
    });

    render(<CandidatureStructure />);
    const siret = screen.getByLabelText('SIRET / RIDET *');
    fireEvent.change(siret, { target: { value: '1234567890123' } });
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
    const email = screen.getByLabelText('Adresse e-mail *');
    fireEvent.change(email, { target: { value: 'jean.dupont@example.com' } });
    const telephone = screen.getByLabelText('Téléphone *');
    fireEvent.change(telephone, { target: { value: '+33123456789' } });
    const nombre = screen.getByLabelText('Combien de conseillers numériques souhaitez-vous accueillir ?*');
    fireEvent.change(nombre, { target: { value: 1 } });
    const identificationCandidat = screen.getByRole('radio', { name: 'Oui' });
    fireEvent.click(identificationCandidat);
    const date = screen.getByLabelText('Choisir une date');
    fireEvent.change(date, { target: { value: dateDujour() } });
    const descriptionMotivation = screen.getByLabelText('Votre message *');
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
    expect(window.hcaptcha.reset).toHaveBeenCalledTimes(1);
    const contenuErreurValidation = screen.getByText('Failed to fetch', { selector: 'p' });
    expect(contenuErreurValidation).toBeInTheDocument();

    vi.useRealTimers();
  });
});

