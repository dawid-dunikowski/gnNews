import { screen} from '@testing-library/react';
import renderWithProviders from '../utils/renderWithProviders';
import Footer from './Footer';

test('renders text "Bieżący czas"', async () => {
  renderWithProviders(<Footer />);
    const element = screen.getByText(/bieżący czas/i);
    expect(element).toBeInTheDocument();
  });

  test('renders text "Liczba artykułów"', async () => {
    renderWithProviders(<Footer />);
    const element = screen.getByText(/Liczba artykułów/i);
    expect(element).toBeInTheDocument();
  });