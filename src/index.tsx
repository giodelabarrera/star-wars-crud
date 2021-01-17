import React from 'react'
import ReactDOM from 'react-dom'

import './styles/theme.scss'
import './styles/global.scss'

function App() {
  return <h1>Welcome!</h1>
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
