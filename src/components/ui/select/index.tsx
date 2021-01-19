import {Listbox} from '@reach/listbox'

import '@reach/listbox/styles.css'
import './index.scss'

const baseClass = 'sw-uiSelect'

export default function Select({
  className: classNameProp,
  value,
  onChange,
  children,
  ...restProps
}) {
  return (
    <div className={baseClass}>
      <Listbox value={value} onChange={onChange}>
        {children}
      </Listbox>
    </div>
  )
}
