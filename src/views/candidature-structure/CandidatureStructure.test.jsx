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
});
