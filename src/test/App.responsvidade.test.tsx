import { render, screen } from '@testing-library/react';
import App from '../App';
import ThemeProvider from '../provider/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';

const renderApp = () =>
  render(
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  );

describe('Responsividade do App', () => {
  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  beforeEach(() => {
    window.innerWidth = 1024;
    window.dispatchEvent(new Event('resize'));
  });

  it('deve renderizar corretamente em mobile', () => {
    window.innerWidth = 375;
    window.dispatchEvent(new Event('resize'));
    renderApp();
    expect(screen.getByRole('banner')).toBeVisible();
    // Cards: se não houver, verifica loading ou mensagem
    const cards = screen.queryAllByTestId('pokemon-card');
    if (cards.length > 0) {
      expect(cards[0]).toBeVisible();
    } else {
      expect(
        screen.queryByText(/carregando/i) ||
          screen.queryByText(/não encontrado/i) ||
          screen.queryByRole('status')
      ).toBeInTheDocument();
    }
    expect(screen.getByRole('contentinfo')).toBeVisible();
  });

  it('deve renderizar corretamente em tablet', () => {
    window.innerWidth = 768;
    window.dispatchEvent(new Event('resize'));
    renderApp();
    expect(screen.getByRole('banner')).toBeVisible();

    const cards = screen.queryAllByTestId('pokemon-card');
    if (cards.length > 0) {
      expect(cards[0]).toBeVisible();
    } else {
      expect(
        screen.queryByText(/carregando/i) ||
          screen.queryByText(/não encontrado/i) ||
          screen.queryByRole('status')
      ).toBeInTheDocument();
    }
    expect(screen.getByRole('contentinfo')).toBeVisible();
  });

  it('deve renderizar corretamente em desktop', () => {
    window.innerWidth = 1280;
    window.dispatchEvent(new Event('resize'));
    renderApp();
    expect(screen.getByRole('banner')).toBeVisible();

    const cards = screen.queryAllByTestId('pokemon-card');
    if (cards.length > 0) {
      expect(cards[0]).toBeVisible();
    } else {
      expect(
        screen.queryByText(/carregando/i) ||
          screen.queryByText(/não encontrado/i) ||
          screen.queryByRole('status')
      ).toBeInTheDocument();
    }
    expect(screen.getByRole('contentinfo')).toBeVisible();
  });
});
