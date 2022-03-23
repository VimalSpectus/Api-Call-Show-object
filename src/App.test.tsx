import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Title/i);
  expect(linkElement).toBeInTheDocument();
  const linkElement1 = screen.getByText(/Created AT/i);
  expect(linkElement1).toBeInTheDocument();
  const linkElement2 = screen.getByText(/Author/i);
  expect(linkElement2).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<App />);

});
