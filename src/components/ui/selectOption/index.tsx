import {ListboxOption} from '@reach/listbox'

const baseClass = 'sw-uiSelectOption'

export default function SelectOption({value, children}) {
  return (
    <ListboxOption className={baseClass} value={value}>
      {children}
    </ListboxOption>
  )
}
