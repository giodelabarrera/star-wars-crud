import React from 'react'

import './index.scss'

const baseClass = 'sw-CharacterListScreen-noResults'

export default function NoResults({query}) {
  return (
    <div className={baseClass}>
      <p>
        Hmmm... No character matched your search with query "{query}". Please
        try another.
      </p>
    </div>
  )
}
