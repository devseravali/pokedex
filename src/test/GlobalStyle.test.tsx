import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/GlobalStyle';
import { themes } from '../styles/themes';

describe('GlobalStyle', () => {
  it('aplica estilos globais sem erro', () => {
    render(
      <ThemeProvider theme={themes.light}>
        <GlobalStyle />
        <div data-testid="test-div">Teste de estilo global</div>
      </ThemeProvider>
    );
  });
});
