import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { SearchInput } from '../components/SearchInput/SearchInput';
import { themes } from '../styles/themes';

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={themes.light}>{ui}</ThemeProvider>);

describe('SearchInput', () => {
  const defaultProps = {
    value: '',
    onChange: jest.fn(),
    placeholder: 'Digite o nome',
    disabled: false,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renderiza o input padrão', () => {
    renderWithTheme(<SearchInput {...defaultProps} />);
    expect(screen.getByLabelText('Buscar Pokémon')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Digite o nome')).toBeInTheDocument();
    expect(screen.getByLabelText('Buscar Pokémon')).toHaveAttribute('id', 'search-pokemon');
  });

  it('chama onChange ao digitar', () => {
    renderWithTheme(<SearchInput {...defaultProps} />);
    const input = screen.getByLabelText('Buscar Pokémon');
    fireEvent.change(input, { target: { value: 'pikachu' } });
    expect(defaultProps.onChange).toHaveBeenCalledWith('pikachu');
  });

  it('renderiza input com erro', () => {
    renderWithTheme(<SearchInput {...defaultProps} hasError={true} />);
    const input = screen.getByLabelText('Buscar Pokémon');
    expect(input).toHaveAttribute('id', 'search-pokemon-error');
    expect(screen.getByText('Por favor, insira um Pokémon válido.')).toBeVisible();
    expect(screen.getByText('Pokémon encontrado com sucesso!')).not.toBeVisible();
  });

  it('renderiza input com sucesso', () => {
    renderWithTheme(<SearchInput {...defaultProps} isSuccess={true} />);
    const input = screen.getByLabelText('Buscar Pokémon');
    expect(input).toHaveAttribute('id', 'search-pokemon-error');
    expect(screen.getByText('Pokémon encontrado com sucesso!')).toBeVisible();
    expect(screen.getByText('Por favor, insira um Pokémon válido.')).not.toBeVisible();
  });

  it('renderiza input com erro e sucesso juntos', () => {
    renderWithTheme(<SearchInput {...defaultProps} hasError={true} isSuccess={true} />);
    const input = screen.getByLabelText('Buscar Pokémon');
    expect(input).toHaveAttribute('id', 'search-pokemon-error');
    expect(screen.getByText('Por favor, insira um Pokémon válido.')).toBeVisible();
    expect(screen.getByText('Pokémon encontrado com sucesso!')).toBeVisible();
  });

  it('desabilita o input quando disabled=true', () => {
    renderWithTheme(<SearchInput {...defaultProps} disabled={true} />);
    expect(screen.getByLabelText('Buscar Pokémon')).toBeDisabled();
  });

  it('mostra mensagem de erro apenas se hasError', () => {
    renderWithTheme(<SearchInput {...defaultProps} hasError={false} />);
    expect(screen.getByText('Por favor, insira um Pokémon válido.')).not.toBeVisible();
  });

  it('mostra mensagem de sucesso apenas se isSuccess', () => {
    renderWithTheme(<SearchInput {...defaultProps} isSuccess={false} />);
    expect(screen.getByText('Pokémon encontrado com sucesso!')).not.toBeVisible();
  });

  it('mantém o valor do input', () => {
    renderWithTheme(<SearchInput {...defaultProps} value={'bulbasaur'} />);
    expect(screen.getByLabelText('Buscar Pokémon')).toHaveValue('bulbasaur');
  });

  it('renderiza com placeholder customizado', () => {
    renderWithTheme(<SearchInput {...defaultProps} placeholder="Buscar por nome ou número" />);
    expect(screen.getByPlaceholderText('Buscar por nome ou número')).toBeInTheDocument();
  });
});
