import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import { TopScorerList } from '../../components';
import { MockedProvider } from '@apollo/client/testing';

const mocks: any = [];

test('should display loading text on first render', async () => {
  const { container } = render(
    <MockedProvider mocks={mocks}>
      <TopScorerList />
    </MockedProvider>
  );
  expect(await screen.findByText('loading.')).toBeInTheDocument();
  await waitFor(() => new Promise((res) => setTimeout(res, 0)));
  expect(container).toMatchSnapshot();
});
