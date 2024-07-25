import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import CandidatureStructure from './CandidatureStructure';
import { textMatcher } from '../../../test/test-utils';

describe('candidature structure', () => {
  describe('étant une structure', () => {
    it.todo('quand j’affiche le formulaire alors le titre et le menu s’affichent', () => {
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
  it.todo('quand j’affiche le formulaire alors l’étape "Vos informations de structure" est affiché');
  it('quand j’affiche le formulaire alors l’étape "Vos informations de contact" est affiché', () => {
    // GIVEN
    render(<CandidatureStructure />);

    // WHEN
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
    expect(telephone).toBeRequired();
    
    // THEN

     
  });
  it('quand j’affiche le formulaire alors l’étape "Votre besoin en conseiller(s) numérique(s)" est affiché', () => {

    //GIVEN
    render(<CandidatureStructure />);

    // WHEN
    const formulaire = screen.getByRole('form', { name: 'Candidature structure' });
    const etapeBesoinConseillerNumerique = within(formulaire).getByRole('group', { name: 'Votre besoin en conseiller(s) numérique(s)' });
    expect(etapeBesoinConseillerNumerique).toHaveAttribute('id', 'votre-besoin-en-conseiller-numerique');

    const combienConseillerNumerique = within(etapeBesoinConseillerNumerique).getByLabelText('Combien de conseillers numériques souhaitez-vous accueillir ?*');
    expect(combienConseillerNumerique).toHaveAttribute('type', 'number');
    expect(combienConseillerNumerique).toBeRequired();


    const identificationCandidat = within(etapeBesoinConseillerNumerique).getByText(textMatcher('Avez-vous déjà identifié un candidat ' +
      'pour le poste de conseiller numérique ?*'), { selector: 'p' });
    expect(identificationCandidat).toBeInTheDocument();
    
    const sousTitreIdentificationCandidat =
    within(etapeBesoinConseillerNumerique).getByText(textMatcher('Si oui, merci d’inviter ce candidat ' +
      'à s’inscrire sur la plateforme Conseiller numérique'), { selector: 'p' });
    expect(sousTitreIdentificationCandidat).toBeInTheDocument();

    const oui = screen.getByRole('radio', { name: 'Oui' });
    expect(oui).toBeRequired();
    expect(oui).toHaveAttribute('name', 'identificationCandidat');
    const non = screen.getByRole('radio', { name: 'Non' });
    expect(non).toBeRequired();
    expect(non).toHaveAttribute('name', 'identificationCandidat');

    const dateAccueilConseillerNumerique = within(etapeBesoinConseillerNumerique).getByText(textMatcher('À partir de quand êtes vous prêt ' +
      'à accueillir votre conseiller numerique ?*'), { selector: 'p' });
    expect(dateAccueilConseillerNumerique).toBeInTheDocument();
    const date = within(etapeBesoinConseillerNumerique).getByLabelText('Choisir une date');
    expect(date).toHaveAttribute('type', 'date');
    expect(date).toBeRequired();
    
    // THEN

  });
  it.todo('quand j’affiche le formulaire alors l’étape "Votre motivation" est affiché');

});
