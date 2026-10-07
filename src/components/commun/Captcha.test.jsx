import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Captcha from './Captcha';

describe('captcha', () => {
  it('quand j’affiche le captcha alors il est rendu en français dans un groupe nommé et décrit', () => {
    // GIVEN
    const turnstile = { remove: vi.fn(), render: vi.fn().mockReturnValue('widget-id') };
    vi.stubGlobal('turnstile', turnstile);
    const setWidgetId = vi.fn();

    // WHEN
    render(<Captcha setWidgetId={setWidgetId} />);

    // THEN
    const groupe = screen.getByRole('group', { name: 'Vérification de sécurité' });
    expect(groupe).toHaveAccessibleDescription(
      'Cette vérification automatique, fournie par Cloudflare, permet de s’assurer que la candidature est envoyée par une personne.'
    );
    expect(turnstile.render).toHaveBeenCalledWith(expect.any(HTMLElement), expect.objectContaining({ language: 'fr' }));
    expect(setWidgetId).toHaveBeenCalledWith('widget-id');

    vi.unstubAllGlobals();
  });
});
