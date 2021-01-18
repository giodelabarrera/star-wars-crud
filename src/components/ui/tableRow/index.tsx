import './index.scss'

const baseClass = 'sw-uiTableRow'

export default function TableRow({children}) {
  return <tr className={baseClass}>{children}</tr>
}
