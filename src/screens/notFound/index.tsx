import Stormtrooper from './stormtrooper'

import './index.scss'

const baseClass = 'sw-NotFoundScreen'

export default function NotFoundScreen() {
  return (
    <div className={baseClass}>
      <h1 className={`${baseClass}-title`}>404</h1>

      <div className={`${baseClass}-imageContainer`}>
        <Stormtrooper />
      </div>
      <div className={`${baseClass}-description`}>
        <p>
          I think we missed our target...
          <br />
          Move along, boys. This is not the page we're looking for
        </p>
      </div>
    </div>
  )
}
