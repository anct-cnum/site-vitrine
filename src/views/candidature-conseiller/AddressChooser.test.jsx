import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import AddressChooser from './AddressChooser';
import { textMatcher } from './test-utils';

describe('choix d’adresse', () => {
  it('quand je renseigne un début de nom de ville qui existe alors plusieurs résultats sont affichés', async () => {
    // GIVEN
    const geoApiResponse = [
      {
        code: '75001',
        nom: 'Paris',
      },
    ];

    vi.spyOn(global, 'fetch').mockResolvedValue({
      json: () => Promise.resolve(geoApiResponse)
    });

    // WHEN
    render(<AddressChooser />);
    const adresse = screen.getByLabelText('Votre lieu d’habitation Saississez le nom ou le code postal de votre commune.');
    fireEvent.change(adresse, { target: { value: 'par' } });

    // THEN
    const suggestions = await screen.findByText(textMatcher('75001 Paris'), { selector: 'option' });
    expect(suggestions).toBeInTheDocument();
  });
});
