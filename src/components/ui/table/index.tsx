import './index.scss'

const baseClass = 'sw-uiTable'

function Table({children}) {
  return <table className={baseClass}>{children}</table>
}

export default Table
