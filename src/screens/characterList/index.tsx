import React from 'react'
import {FaPlus} from 'react-icons/fa'

import useMediaQuery from '../../hooks/useMediaQuery'

import SearchForm from '../../components/form/search'
import Button from '../../components/ui/button'

const baseClass = 'sw-CharacterListScreen'

function CharacterListScreen() {
  const isWide = useMediaQuery('(min-width: 576px)')
  const isMobile = !isWide

  const handleSearchFormSubmit = () => {}

  return (
    <div className={baseClass}>
      <div className={`${baseClass}-bar`}>
        <div>
          <SearchForm onSubmit={handleSearchFormSubmit} />
        </div>
        <div>
          <Button startIcon={<FaPlus />}>Create</Button>
        </div>
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
