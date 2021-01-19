import cx from 'classnames'

import './index.scss'

const baseClass = 'sw-uiLabel'

export default function Label({
  className: classNameProp,
  ...restProps
}: React.DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
>) {
  return <label className={cx(baseClass, classNameProp)} {...restProps} />
}
