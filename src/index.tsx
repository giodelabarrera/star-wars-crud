import React from 'react'
import ReactDOM from 'react-dom'

import AppProviders from './context/appProviders'
import App from './app'

import './styles/reboot.scss'
import './styles/theme.scss'
import './styles/global.scss'

ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>,
  document.getElementById('root')
)
