import React, { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import './App.css';

import { Layout } from './components/Layout';
import { NotFoundPage, TopScorerList } from './components';

/**
 * QueryClientProvider is a component that provides queryClient to its children
 * @param {React.ReactNode} - the children of the component
 * @return {jsx} - A div element
 */

const App: React.FC = (): ReactElement => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Routes>
          <Route path="/" element={<TopScorerList />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </QueryClientProvider>
  );
};

export default App;
