import {Listbox} from '@reach/listbox'
import {FaCaretDown} from 'react-icons/fa'

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
      <Listbox
        name={id}
        value={value}
        onChange={onChange}
        arrow={<FaCaretDown className={`${baseClass}-arrow`} />}
      >
        {children}
      </Listbox>
    </div>
  )
}
