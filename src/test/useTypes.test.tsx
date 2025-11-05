import { renderHook, waitFor } from '@testing-library/react';
import * as api from '../services/api';
import { useTypes } from '../hooks/useTypes';

describe('useTypes', () => {
  it('retorna tipos corretamente', async () => {
    jest.spyOn(api, 'fetchTypesWithCache').mockResolvedValue(['fire', 'water']);
    const { result } = renderHook(() => useTypes());
    await waitFor(() => expect(result.current.types).toEqual(['fire', 'water']));
  });

  it('trata erro ao buscar tipos', async () => {
    const error = new Error('Falha ao buscar tipos');
    jest.spyOn(api, 'fetchTypesWithCache').mockRejectedValue(error);
    const spyConsole = jest.spyOn(console, 'error').mockImplementation(() => {});
    const { result } = renderHook(() => useTypes());
    await waitFor(() => expect(result.current.types).toEqual([]));
    expect(spyConsole).toHaveBeenCalledWith('Erro ao carregar tipos:', error);
    spyConsole.mockRestore();
  });
});
