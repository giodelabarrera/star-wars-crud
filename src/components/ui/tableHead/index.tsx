import './index.scss'

const baseClass = 'sw-uiTableHead'

export default function TableHead({children}) {
  return <thead className={baseClass}>{children}</thead>
}
