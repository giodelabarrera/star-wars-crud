import React from 'react'
import cx from 'classnames'

import './index.scss'

export type ButtonProps = {
  color?: 'default' | 'primary' | 'secondary'
  variant?: 'contained' | 'text'
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

const baseClass = 'sw-uiButton'

export default function Button({
  color = 'default',
  variant = 'text',
  startIcon,
  endIcon,
  children,
  className: classNameProp,
  disabled: disabledProp = false,
  ...restProps
}: ButtonProps) {
  return (
    <button
      className={cx(
        baseClass,
        `${baseClass}-${variant}`,
        `${baseClass}-${color}`,
        {[`${baseClass}-isDisabled`]: disabledProp},
        classNameProp
      )}
      {...restProps}
    >
      <span className={`${baseClass}-label`}>
        {startIcon && (
          <span className={`${baseClass}-startIcon`}>{startIcon}</span>
        )}
        {children}
        {endIcon && <span className={`${baseClass}-endIcon`}>{endIcon}</span>}
      </span>
    </button>
  )
}
