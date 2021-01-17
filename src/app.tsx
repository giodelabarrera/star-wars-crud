import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Header from './components/layout/header'

import CharacterListScreen from './screens/characterList'

import './app.scss'

function App() {
  return (
    <div className="sw-App">
      <Header />
      <main>
        <AppRoutes />
      </main>
    </div>
  )
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<CharacterListScreen />} />
    </Routes>
  )
}

export default App
