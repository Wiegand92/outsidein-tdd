import {render, screen} from '@testing-library/react';
import React from 'react';
import App from '../../components/App';

test('renders README link', () => {
  render(<App />);
  const linkElement = screen.getByText(/here/i);
  expect(linkElement).toBeInTheDocument();
});
