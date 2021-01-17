import React, {useState} from 'react'
import {FaPlus} from 'react-icons/fa'

import useMediaQuery from '../../hooks/useMediaQuery'
import SearchForm from '../../components/form/search'
import Button from '../../components/ui/button'
import Paper from '../../components/ui/paper'
import CharacterList from '../../components/character/list'
import CharacterPreview from '../../components/character/preview'
import {useSearchCharacters} from '../../components/character/hooks'

import './index.scss'

const baseClass = 'sw-CharacterListScreen'

function CharacterListScreen() {
  const [query, setQuery] = useState('')

  const isWide = useMediaQuery('(min-width: 576px)')
  const isMobile = !isWide

  const {isLoading, characters} = useSearchCharacters(query)

  const handleSearchFormSubmit = e => {
    e.preventDefault()
    setQuery(e.target.elements.search.value)
  }

  return (
    <div className={baseClass}>
      <div className={`${baseClass}-bar`}>
        <div className={`${baseClass}-searchContainer`}>
          <SearchForm onSubmit={handleSearchFormSubmit} isLoading={isLoading} />
        </div>
        <div className={`${baseClass}-offset`} />
        <div className={`${baseClass}-createContainer`}>
          <Button variant="text" color="primary">
            <FaPlus />
          </Button>
        </div>
      </div>
      {isMobile && characters ? (
        <CharacterList characters={characters}>
          {character => (
            <Paper>
              <CharacterPreview character={character} onEditClick={() => {}} />
            </Paper>
          )}
        </CharacterList>
      ) : (
        <CharacterListDataGrid />
      )}
    </div>
  )
}

function CharacterListDataGrid() {
  return <div>Tabla</div>
}

export default CharacterListScreen
