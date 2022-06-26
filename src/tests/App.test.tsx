import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../containers/App';

test('renders app title', () => {
  render(<App />);
  const linkElement = screen.getByText(/App/i);
  expect(linkElement).toBeInTheDocument();
});
