import React from 'react'
import {Link} from 'react-router-dom'

import Logo from './logo'

import './index.scss'

const baseClass = 'sw-LayoutHeader'

export default function Header() {
  return (
    <header className={baseClass}>
      <div className={`${baseClass}-content`}>
        <Link to="/" className={`${baseClass}-logoContainer`}>
          <Logo />
        </Link>
      </div>
    </header>
  )
}
