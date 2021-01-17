import React from 'react'
import {FaPlus} from 'react-icons/fa'

import useMediaQuery from '../../hooks/useMediaQuery'

import SearchForm from '../../components/form/search'
import Button from '../../components/ui/button'

import './index.scss'
import Paper from '../../components/ui/paper'

const baseClass = 'sw-CharacterListScreen'

function CharacterListScreen() {
  const isWide = useMediaQuery('(min-width: 576px)')
  const isMobile = !isWide

  const handleSearchFormSubmit = () => {}

  return (
    <div className={baseClass}>
      <div className={`${baseClass}-bar`}>
        <div className={`${baseClass}-searchContainer`}>
          <SearchForm onSubmit={handleSearchFormSubmit} />
        </div>
        <div className={`${baseClass}-offset`} />
        <div className={`${baseClass}-createContainer`}>
          <Button variant="text" startIcon={<FaPlus />} color="primary">
            Create
          </Button>
        </div>
      </div>
      <Paper>
        <h1>Pepe</h1>
      </Paper>
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
