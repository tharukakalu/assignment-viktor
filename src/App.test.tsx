import { render, screen } from '@testing-library/react';
import App from './App';

test('renders blog grid', () => {
  render(<App />);
  const element = screen.getByText(/Viktor.ai Blog/i);
  expect(element).toBeInTheDocument();
});