import { renderHook, act } from '@testing-library/react';
import { useSearchInput } from '../hooks/useSearchInput';
describe('useSearchInput', () => {
    it('altera valor do input', () => {
        const { result } = renderHook(() => useSearchInput([])); // 
        act(() => {
            result.current.handleChange('pikachu');
        });
        expect(result.current.value).toBe('pikachu');
    });
    it('reseta erro e sucesso', () => {
        const { result } = renderHook(() => useSearchInput([]));
        act(() => {
            result.current.setHasError(true);
            result.current.setIsSuccess(true);
        });
        expect(result.current.hasError).toBe(true);
        expect(result.current.isSuccess).toBe(true);
    });
});
