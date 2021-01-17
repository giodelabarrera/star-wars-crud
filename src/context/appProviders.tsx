import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {QueryClient, QueryClientProvider} from 'react-query'

import {DomainProvider} from './domain'
import domain from '../domain'

const queryClient = new QueryClient()

export default function AppProviders({children}) {
  return (
    <DomainProvider domain={domain}>
      <Router>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </Router>
    </DomainProvider>
  )
}
