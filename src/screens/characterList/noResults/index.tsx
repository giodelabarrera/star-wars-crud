import React from 'react'

import './index.scss'

const baseClass = 'sw-CharacterListScreen-noResults'

export default function NoResults({query}) {
  return (
    <div className={baseClass}>
      <p className={`${baseClass}-message`}>
        Hmmm... No character matched your search with query "{query}". <br />
        Please try another.
      </p>
    </div>
  )
}
