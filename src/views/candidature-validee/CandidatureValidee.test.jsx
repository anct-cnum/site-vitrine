import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import CandidatureValidee from './CandidatureValidee';
import { textMatcher } from '../../../test/test-utils';

describe('candidature validée', () => {
  it('quand j’affiche la page candidature validée alors le titre et les informations de la page s’affichent', () => {
    // WHEN
    render(<CandidatureValidee />);

    // THEN
    const emoji = screen.getByText('👏');
    expect(emoji).toBeInTheDocument();

    const titre = screen.getByRole('heading', { level: 1, name: 'Merci, votre demande a été envoyée.' });
    expect(titre).toBeInTheDocument();

    const confirmation = screen.getByText(
      textMatcher('Pour confirmer votre inscription et recevoir des propositions de candidats, veuillez consulter ' +
        'l’email qui vient de vous être envoyé. Si vous ne recevez pas cet email dans les prochaines minutes, pensez à ' +
        'vérifier votre dossier de spams.'),
      { selector: 'p' }
    );
    expect(confirmation).toBeInTheDocument();

    const retourAccueil = screen.getByRole('link', { name: 'Retour à la page d’accueil' });
    expect(retourAccueil).toBeInTheDocument();
  });
});
