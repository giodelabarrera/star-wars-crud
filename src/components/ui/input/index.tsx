import React from 'react'
import cx from 'classnames'

import './index.scss'

const baseClass = 'sw-uiInput'

export default function Input({
  className: classNameProp,
  ...restProps
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) {
  return <input className={cx(baseClass, classNameProp)} {...restProps} />
}
