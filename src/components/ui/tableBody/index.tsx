import './index.scss'

const baseClass = 'sw-uiTableBody'

export default function TableBody({children}) {
  return <tbody className={baseClass}>{children}</tbody>
}
