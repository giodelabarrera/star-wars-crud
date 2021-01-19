import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Header from './components/layout/header'
import CharacterListScreen from './screens/characterList'
import CharacterCreateScreen from './screens/characterCreate'
import CharacterPreviewScreen from './screens/characterPreview'
import CharacterEditScreen from './screens/characterEdit'
import NotFoundScreen from './screens/notFound'
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
      <Route path="/character/create" element={<CharacterCreateScreen />} />
      <Route
        path="/character/:id/preview"
        element={<CharacterPreviewScreen />}
      />
      <Route path="/character/:id" element={<CharacterEditScreen />} />
      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  )
}

export default App
