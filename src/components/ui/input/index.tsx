import React from 'react'

import './index.scss'

const baseClass = 'sw-uiInput'

export default function Input(
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) {
  return <input className={baseClass} {...props} />
}
