import cx from 'classnames'
import {
  ListboxButton,
  ListboxInput,
  ListboxList,
  ListboxPopover
} from '@reach/listbox'
import {FaCaretDown} from 'react-icons/fa'

import '@reach/listbox/styles.css'
import './index.scss'

const baseClass = 'sw-uiSelect'

export default function Select({
  id,
  className: classNameProp,
  value,
  onChange,
  onBlur,
  children
}) {
  return (
    <div className={cx(baseClass, classNameProp)}>
      <ListboxInput name={id} value={value} onChange={onChange} onBlur={onBlur}>
        <ListboxButton
          arrow={<FaCaretDown className={`${baseClass}-arrow`} />}
        />
        <ListboxPopover>
          <ListboxList>{children}</ListboxList>
        </ListboxPopover>
      </ListboxInput>
    </div>
  )
}
