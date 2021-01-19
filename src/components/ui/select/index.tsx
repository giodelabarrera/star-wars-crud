import {Listbox} from '@reach/listbox'

import '@reach/listbox/styles.css'
import './index.scss'

const baseClass = 'sw-uiSelect'

export default function Select({
  id,
  className: classNameProp,
  value,
  onChange,
  children,
  ...restProps
}) {
  return (
    <div className={baseClass}>
      <Listbox aria-labelledby={id} value={value} onChange={onChange}>
        {children}
      </Listbox>
    </div>
  )
}
