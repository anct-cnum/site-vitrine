import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import CandidatureValideeConseiller from './CandidatureValideeConseiller';
import { textMatcher } from '../../../test/test-utils';

describe('candidature validée', () => {
  beforeEach(() => {
    // eslint-disable-next-line vitest/prefer-spy-on
    global.scrollTo = vi.fn();
  });

  it('quand j’affiche la page candidature validée alors le titre et les informations de la page s’affichent', () => {
    // WHEN
    render(<CandidatureValideeConseiller />);

    // THEN
    const emoji = screen.getByText('👏');
    expect(emoji).toBeInTheDocument();

    const titre = screen.getByRole('heading', { level: 1, name: 'Merci, votre demande a été envoyée.' });
    expect(titre).toBeInTheDocument();

    const confirmation = screen.getByText(
      textMatcher('Pour confirmer votre inscription et pouvoir recevoir des propositions de structure consultez le mail qui vient de vous être envoyé.' +
        'Si toutefois vous ne receviez pas dans les prochaines minutes un mail de confirmation de votre inscription, pensez à vérifier vos spams.'),
      { selector: 'p' }
    );
    expect(confirmation).toBeInTheDocument();

    const retourAccueil = screen.getByRole('link', { name: 'Retour à la page d’accueil' });
    expect(retourAccueil).toBeInTheDocument();
  });
});
