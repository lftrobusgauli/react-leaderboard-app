import React from 'react';
import { render, screen } from '@testing-library/react';

import { Header } from '../../components';

test('it should display `Score Leaderboard` test', () => {
  render(<Header />);
  const text = screen.getAllByText('Score Leaderboard');
  expect(text).toBeTruthy();
});
