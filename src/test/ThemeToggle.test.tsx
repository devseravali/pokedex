import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThemeProvider from '../provider/ThemeProvider';
import { ThemeToggler } from '../components/ThemeToggle/ThemeToggle';

describe('ThemeToggler', () => {
  it('deve renderizar o botão de alternância de tema', () => {
    render(
      <ThemeProvider>
        <ThemeToggler />
      </ThemeProvider>
    );
    expect(screen.getByLabelText(/alternar de tema/i)).toBeInTheDocument();
  });

  it('deve alternar o tema ao clicar no botão', async () => {
    render(
      <ThemeProvider>
        <ThemeToggler />
      </ThemeProvider>
    );
    const button = screen.getByLabelText(/alternar de tema/i);
    expect(screen.getByAltText(/tema escuro/i)).toBeInTheDocument();

    await userEvent.click(button);

    expect(screen.getByAltText(/tema claro/i)).toBeInTheDocument();
  });
});
