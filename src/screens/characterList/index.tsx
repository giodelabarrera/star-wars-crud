import React from 'react'

import useMediaQuery from '../../hooks/useMediaQuery'

const baseClass = 'sw-CharacterListScreen'

function CharacterListScreen() {
  const isWide = useMediaQuery('(min-width: 576px)')
  const isMobile = !isWide

  return (
    <div className={baseClass}>
      <div className={`${baseClass}-bar`}>
        <div>Search</div>
        <div>Create button</div>
      </div>
      {isMobile ? <CharacterListColumn /> : <CharacterListDataGrid />}
    </div>
  )
}

function CharacterListColumn() {
  return <div>Columna</div>
}

function CharacterListDataGrid() {
  return <div>Tabla</div>
}

export default CharacterListScreen
