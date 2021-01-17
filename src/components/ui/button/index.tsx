import React from 'react'

import './index.scss'

type ButtonProps = {
  color?: 'default' | 'primary' | 'secondary'
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

const baseClass = 'sw-uiButton'

export default function Button({
  color = 'default',
  startIcon,
  endIcon,
  children,
  ...restProps
}: ButtonProps) {
  return (
    <button className={baseClass} {...restProps}>
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
