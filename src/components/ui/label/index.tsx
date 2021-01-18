import './index.scss'

const baseClass = 'sw-uiLabel'

export default function Label(props) {
  return <label {...props} className={baseClass} />
}
