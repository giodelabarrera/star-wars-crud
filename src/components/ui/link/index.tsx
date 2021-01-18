import {Link as RouterLink, LinkProps} from 'react-router-dom'

import './index.scss'

const baseClass = 'sw-uiLink'

export default function Link(props: LinkProps) {
  return <RouterLink className={baseClass} {...props} />
}
