import { renderHook, act, waitFor } from '@testing-library/react';
import { useFilterByType } from '../hooks/useFilterByType';

describe('useFilterByType', () => {
  it('retorna selectedType e handleTypeChange', () => {
    const { result } = renderHook(() => useFilterByType());
    expect(typeof result.current.selectedType).toBe('string');
    expect(typeof result.current.handleTypeChange).toBe('function');
  });

  it('altera tipo selecionado', async () => {
    const { result } = renderHook(() => useFilterByType(['fire', 'water'], ''));
    act(() => {
      result.current.handleTypeChange('fire');
    });
    await waitFor(() => expect(result.current.selectedType).toBe('fire'));
  });
});
