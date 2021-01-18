import './index.scss'

const baseClass = 'sw-uiTableCell'

type TableCellProps = {
  variant?: 'body' | 'head'
} & React.DetailedHTMLProps<
  React.TdHTMLAttributes<HTMLTableDataCellElement>,
  HTMLTableDataCellElement
>

export default function TableCell({
  variant = 'body',
  children
}: TableCellProps) {
  const isHeadCell = variant === 'head'

  const Component = isHeadCell ? 'th' : 'td'

  return <Component className={baseClass}>{children}</Component>
}
