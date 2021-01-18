import './index.scss'

const baseClass = 'sw-uiTableCell'

type Direction = 'asc' | 'desc' | false

type TableCellProps = {
  variant?: 'body' | 'head'
  isSortable?: boolean
  sortDirection?: Direction
  onSort?: (direction: Direction) => void
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

  return (
    <Component className={baseClass} onClick={handleClick}>
      {children}
    </Component>
  )
}

function nextDirection(currentDirection): Direction {
  if (currentDirection === 'asc') return 'desc'
  else if (currentDirection === 'desc') return false
  else if (currentDirection === false) return 'asc'
}

export default TableCell
