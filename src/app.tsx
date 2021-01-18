import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Header from './components/layout/header'

import CharacterListScreen from './screens/characterList'
import CharacterCreateScreen from './screens/characterCreate'
import CharacterPreviewScreen from './screens/characterPreview'

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
      <Route path="/create" element={<CharacterCreateScreen />} />
      <Route path="/:id/preview" element={<CharacterPreviewScreen />} />
    </Routes>
  )
}

export default App
