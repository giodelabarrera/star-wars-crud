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

type SelectProps = React.PropsWithChildren<{
  id?: string
  className?: string
  value: string
  onChange: (newValue: string) => void
  onBlur: (newValue: string) => void
}>

export default function Select({
  id,
  className: classNameProp,
  value,
  onChange,
  onBlur,
  children
}: SelectProps) {
  const handleBlur = e => {
    if (
      e.currentTarget.attributes.getNamedItem('data-state').value === 'closed'
    ) {
      onBlur(e.currentTarget.attributes.getNamedItem('data-value').value)
    }
  }
  return (
    <div className={cx(baseClass, classNameProp)}>
      <ListboxInput
        name={id}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
      >
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
