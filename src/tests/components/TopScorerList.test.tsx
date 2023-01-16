import React from 'react';
import { render, screen } from '@testing-library/react';

import { TopScorerList } from '../../components';
import { ApolloProvider } from '@apollo/client';
import { client } from '../../graphql/client';

//     __typename: 'User',
//     id: '6f44adcf-af15-46f2-a12c-a6fabbb4da07',
//     name: 'test test again',
//     gameState: {
//       __typename: 'GameState',
//       userId: '6f44adcf-af15-46f2-a12c-a6fabbb4da07',
//       gamesPlayed: 1,
//       score: 100,
//       id: '558af694-c3e8-46f4-a46d-bf9f45118849'
//     }
//   },
//   {
//     __typename: 'User',
//     id: 'dd231415-6c02-4247-954c-ec41ceac478c',
//     name: 'Lee Chong Wei',
//     gameState: {
//       __typename: 'GameState',
//       userId: 'dd231415-6c02-4247-954c-ec41ceac478c',
//       gamesPlayed: 1,
//       score: 120,
//       id: 'ebdebfd1-092a-4f57-920a-c974beaa87f6'
//     }
//   },
//   {
//     __typename: 'User',
//     id: 'f1391ccf-fb48-4e3f-83c2-0fd0058f5805',
//     name: 'Lin Dan',
//     gameState: {
//       __typename: 'GameState',
//       userId: 'f1391ccf-fb48-4e3f-83c2-0fd0058f5805',
//       gamesPlayed: 1,
//       score: 90,
//       id: '554d2289-50cd-4e34-a21b-4c0a05528c9a'
//     }
//   },
//   {
//     __typename: 'User',
//     id: '0651415d-f806-4e47-863f-3b992e045bfb',
//     name: 'Chen Long',
//     gameState: {
//       __typename: 'GameState',
//       userId: '0651415d-f806-4e47-863f-3b992e045bfb',
//       gamesPlayed: 1,
//       score: 80,
//       id: 'fd6d0d45-f4a3-405a-aa21-9eb2f80cf975'
//     }
//   },
//   {
//     __typename: 'User',
//     id: '153109c3-578e-4fd9-959c-d0fa457e1c93',
//     name: 'Kento Momota',
//     gameState: {
//       __typename: 'GameState',
//       userId: '153109c3-578e-4fd9-959c-d0fa457e1c93',
//       gamesPlayed: 1,
//       score: 140,
//       id: 'a87e8a89-1c66-4ca8-8e8d-f7a0f9671076'
//     }
//   },
//   {
//     __typename: 'User',
//     id: 'c8228457-f8d5-41d9-a420-ebf372b52028',
//     name: 'Viktor Axelsen',
//     gameState: {
//       __typename: 'GameState',
//       userId: 'c8228457-f8d5-41d9-a420-ebf372b52028',
//       gamesPlayed: 1,
//       score: 50,
//       id: '84a17166-1ac8-45b0-b5f8-5f87e8ce86c5'
//     }
//   },
//   {
//     __typename: 'User',
//     id: '55ddf8cb-8d1d-4e91-b588-b56657591538',
//     name: 'Srikanth Kidambi',
//     gameState: {
//       __typename: 'GameState',
//       userId: '55ddf8cb-8d1d-4e91-b588-b56657591538',
//       gamesPlayed: 1,
//       score: 50,
//       id: 'a4579e6a-91a0-4231-a9b3-9b593bf09e0a'
//     }
//   },
//   {
//     __typename: 'User',
//     id: '7accff8c-f89d-4f54-b1a1-b84c1cef8816',
//     name: 'Son Wan-ho',
//     gameState: {
//       __typename: 'GameState',
//       userId: '7accff8c-f89d-4f54-b1a1-b84c1cef8816',
//       gamesPlayed: 1,
//       score: 40,
//       id: '3b6ff1d3-7cbc-40ae-b75d-2ac2ce70300b'
//     }
//   },
//   {
//     __typename: 'User',
//     id: '6cefc105-06ac-41cb-8c4e-b3450369f854',
//     name: 'Jan Ø. Jørgensen',
//     gameState: {
//       __typename: 'GameState',
//       userId: '6cefc105-06ac-41cb-8c4e-b3450369f854',
//       gamesPlayed: 1,
//       score: 40,
//       id: '355b9fa1-36fd-4ba9-8958-eb2ae712afa0'
//     }
//   },
//   {
//     __typename: 'User',
//     id: 'acf22645-48c5-4a0e-b2a7-cc97e87d1394',
//     name: 'Anthony Sinisuka',
//     gameState: {
//       __typename: 'GameState',
//       userId: 'acf22645-48c5-4a0e-b2a7-cc97e87d1394',
//       gamesPlayed: 1,
//       score: 60,
//       id: '2a9eb014-0ae9-4269-a301-a49fe6248d41'
//     }
//   },
//   {
//     __typename: 'User',
//     id: 'c6abbb5f-3b55-4e7b-846e-039c73b2e592',
//     name: 'Kenta Nishimoto',
//     gameState: {
//       __typename: 'GameState',
//       userId: 'c6abbb5f-3b55-4e7b-846e-039c73b2e592',
//       gamesPlayed: 1,
//       score: 78,
//       id: '5e21124c-e523-4210-8b89-c0b7e7f78f6d'
//     }
//   }
// ];

test('should render top player score table', async () => {
  render(
    <ApolloProvider client={client}>
      <TopScorerList />
    </ApolloProvider>
  );
  expect(await screen.findByText('loading.')).toBeInTheDocument();
});
