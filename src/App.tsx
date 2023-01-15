import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { useQuery, gql } from '@apollo/client'
import { QueryClient, QueryClientProvider } from 'react-query'

import './App.css'
import { NotFoundPage, TopScorerList } from './components'
import { Layout } from './components/Layout'

const GET_USERS = gql`
  query {
    getUsers {
      id
      name
      score
    }
  }
`

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Routes>
          <Route path="/" element={<TopScorerList />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </QueryClientProvider>
  )
}

export default App
