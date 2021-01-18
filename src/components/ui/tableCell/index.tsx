import cx from 'classnames'
import {FaArrowDown, FaArrowUp} from 'react-icons/fa'

import './index.scss'

const baseClass = 'sw-uiTableCell'

export type TableCellDirection = 'asc' | 'desc' | false
export type TableCellOnSort = (direction: TableCellDirection) => void

type TableCellProps = {
  variant?: 'body' | 'head'
  isSortable?: boolean
  sortDirection?: TableCellDirection
  onSort?: TableCellOnSort
} & React.DetailedHTMLProps<
  React.TdHTMLAttributes<HTMLTableDataCellElement>,
  HTMLTableDataCellElement
>

function TableCell({
  variant = 'body',
  isSortable = false,
  sortDirection = false,
  onSort = () => {},
  children
}: TableCellProps) {
  const isHeadCell = variant === 'head'
  const Component = isHeadCell ? 'th' : 'td'

  const handleClick = () => {
    onSort(nextDirection(sortDirection))
  }

  const componentProps = {
    className: cx(baseClass, {[`${baseClass}-isSortable`]: isSortable}),
    ...(isSortable && {onClick: handleClick})
  }

  return (
    <Component {...componentProps}>
      <span className={`${baseClass}-content`}>
        {children}
        {isSortable && <SortDirection value={sortDirection} />}
      </span>
    </Component>
  )
}

function SortDirection({value}) {
  return (
    <span className={`${baseClass}-sortDirection`}>
      {value === 'asc' ? (
        <FaArrowUp />
      ) : value === 'desc' ? (
        <FaArrowDown />
      ) : null}
    </span>
  )
}

function nextDirection(currentDirection): TableCellDirection {
  if (currentDirection === 'asc') return 'desc'
  else if (currentDirection === 'desc') return false
  else if (currentDirection === false) return 'asc'
}

export default TableCell
