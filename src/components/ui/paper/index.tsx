import React from 'react'

import './index.scss'

const baseClass = 'sw-uiPaper'

export default function Paper({children}) {
  return <div className={baseClass}>{children}</div>
}
