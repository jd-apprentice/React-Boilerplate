import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '@/App';

test('renders the home pag', () => {
  render(<App />);
  const linkElement = screen.getByText("React + TS + Sass + Eslint + Prettier + MobX + Apisauce");
  expect(linkElement).toBeInTheDocument();
});
