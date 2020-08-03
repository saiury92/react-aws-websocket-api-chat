import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders enter your username', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/enter your username/i);
  expect(linkElement).toBeInTheDocument();
});
