import React, { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from 'react-query';

import './App.css';
import { NotFoundPage, TopScorerList } from './components';
import { Layout } from './components/Layout';

const queryClient = new QueryClient();

const App: React.FC = (): ReactElement => {
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
