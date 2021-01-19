import cx from 'classnames'

import './index.scss'

const baseClass = 'sw-uiSelect'

export default function Select({
  className: classNameProp,
  ...restProps
}: React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>) {
  return <select className={cx(baseClass, classNameProp)} {...restProps} />
}
