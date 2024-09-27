import { render, act, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import ConfirmationEmailCandidatureStructure from './ConfirmationEmailCandidatureStructure';

vi.mock('react-router-dom', () => ({
  useParams: () => ({ token: '1' }),
}));

describe('confirmation Email', () => {
  beforeEach(() => {
    // eslint-disable-next-line vitest/prefer-spy-on
    global.scrollTo = vi.fn();
  });

  it('quand j’affiche la page de confirmation de l’email validée alors le titre et les informations de la page s’affichent', () => {
    // WHEN
    render(<ConfirmationEmailCandidatureStructure />);

    // THEN
    const titre = screen.getByRole('heading', { level: 1, name: 'Confirmation de l’enregistrement de votre candidature' });
    expect(titre).toBeInTheDocument();

    const indication = screen.getByText('Appuyez sur le bouton pour confirmer votre email',
      { selector: 'p' }
    );
    expect(indication).toBeInTheDocument();

    const envoyer = screen.getByRole('button', { name: 'Confirmer' });
    expect(envoyer).toBeInTheDocument();
  });

  it('quand l’utilisateur clique sur le bouton et que le lien est valide alors un message de succès s’affiche', async () => {
    // WHEN
    vi.stubGlobal('fetch', vi.fn(
      () => ({ status: 200, json: async () => Promise.resolve({}) }))
    );
    render(<ConfirmationEmailCandidatureStructure />);
  
    const envoyer = screen.getByRole('button', { name: 'Confirmer' });
    expect(envoyer).toBeInTheDocument();
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(() => {
      fireEvent.click(envoyer);
    });
    expect(envoyer).not.toBeInTheDocument();
    // THEN
    const titre = screen.getByRole('heading', { level: 1, name: 'Confirmation de l’enregistrement de votre candidature' });
    expect(titre).toBeInTheDocument();

    const messageSucess = screen.getByText('Votre email a été confirmé et votre inscription est maintenant active.' +
    ' Vous recevrez un mail d’activation de votre espace structure lorsque votre candidature aura été validée.',
    { selector: 'p' }
    );
    expect(messageSucess).toBeInTheDocument();

    const messageError403 = screen.queryByText('Impossible de valider l’email, le lien a expiré ou est invalide.', { selector: 'p' });
    expect(messageError403).not.toBeInTheDocument();

    const messageErreurGenerale = screen.queryByText('Une erreur s’est produite veuillez réessayer plus tard.', { selector: 'p' });
    expect(messageErreurGenerale).not.toBeInTheDocument();
  });

  it('quand l’utilisateur clique sur le bouton et que le lien est invalide alors un message d’erreur s’affiche', async () => {
   
    // GIVEN
    vi.stubGlobal('fetch', vi.fn(
      () => ({ status: 403, json: async () => Promise.resolve({}) }))
    );
    // WHEN
    render(<ConfirmationEmailCandidatureStructure />);

    // THEN
    const envoyer = screen.getByRole('button', { name: 'Confirmer' });
    expect(envoyer).toBeInTheDocument();
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(() => {
      fireEvent.click(envoyer);
    });
    expect(envoyer).not.toBeInTheDocument();
    // THEN
    const titre = screen.getByRole('heading', { level: 1, name: 'Confirmation de l’enregistrement de votre candidature' });
    expect(titre).toBeInTheDocument();

    const messageError = screen.getByText('Impossible de valider l’email, le lien a expiré ou est invalide.',
      { selector: 'p' }
    );
    expect(messageError).toBeInTheDocument();

    const messageSuccess = screen.queryByText('Votre email a été confirmé et votre inscription est maintenant active.' +
    ' Vous recevrez un mail d’activation de votre espace structure lorsque votre candidature aura été validée.', { selector: 'p' });
    expect(messageSuccess).not.toBeInTheDocument();
    const messageErreurGenerale = screen.queryByText('Une erreur s’est produite veuillez réessayer plus tard.', { selector: 'p' });
    expect(messageErreurGenerale).not.toBeInTheDocument();
  });

  
  it('quand l’utilisateur clique sur le bouton et qu’une erreur innatendue se produit alors un message d’erreur s’affiche', async () => {
    // GIVEN
    vi.stubGlobal('fetch', vi.fn(
      () => ({ status: 500, json: async () => Promise.resolve({}) }))
    );
    // WHEN
    render(<ConfirmationEmailCandidatureStructure />);

    // THEN
    const envoyer = screen.getByRole('button', { name: 'Confirmer' });
    expect(envoyer).toBeInTheDocument();
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(() => {
      fireEvent.click(envoyer);
    });
    expect(envoyer).not.toBeInTheDocument();
    // THEN
    const titre = screen.getByRole('heading', { level: 1, name: 'Confirmation de l’enregistrement de votre candidature' });
    expect(titre).toBeInTheDocument();

    const messageError = screen.getByText('Une erreur s’est produite veuillez réessayer plus tard.',
      { selector: 'p' }
    );
    expect(messageError).toBeInTheDocument();

    const messageError403 = screen.queryByText('Impossible de valider l’email, le lien a expiré ou est invalide.', { selector: 'p' });
    expect(messageError403).not.toBeInTheDocument();
    
    const messageSuccess = screen.queryByText('Votre email a été confirmé et votre inscription est maintenant active.' +
    ' Vous recevrez un mail d’activation de votre espace structure lorsque votre candidature aura été validée.', { selector: 'p' });
    expect(messageSuccess).not.toBeInTheDocument();

  });
});
