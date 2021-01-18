import React, {useState} from 'react'
import {FaPlus} from 'react-icons/fa'

import useMediaQuery from '../../hooks/useMediaQuery'
import SearchForm from '../../components/form/search'
import Button, {ButtonProps} from '../../components/ui/button'
import Paper from '../../components/ui/paper'
import Link from '../../components/ui/link'
import CharacterList from '../../components/character/list'
import CharacterPreview from '../../components/character/preview'
import {useSearchCharacters} from '../../components/character/hooks'
import CharacterDataTable from '../../components/character/dataTable'
import NoResults from './noResults'

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

  const createCharacterButtonProps = {
    color: 'primary',
    ...(isMobile
      ? {variant: 'text', children: <FaPlus />}
      : {variant: 'contained', startIcon: <FaPlus />, children: 'Create'})
  } as ButtonProps

  return (
    <div className={baseClass}>
      <div className={`${baseClass}-bar`}>
        <div className={`${baseClass}-searchContainer`}>
          <SearchForm onSubmit={handleSearchFormSubmit} isLoading={isLoading} />
        </div>
        <div className={`${baseClass}-offset`} />
        <div className={`${baseClass}-createContainer`}>
          <Button {...createCharacterButtonProps} />
        </div>
      </div>
      {isMobile ? (
        <>
          {characters.length ? (
            <CharacterList characters={characters}>
              {character => (
                <Paper>
                  <CharacterPreview
                    character={character}
                    onEditClick={() => {}}
                  />
                </Paper>
              )}
            </CharacterList>
          ) : (
            <NoResults query={query} />
          )}
        </>
      ) : (
        <Paper>
          <CharacterDataTable
            characters={characters}
            onEditClick={() => {}}
            editLink={props => <Link {...props} to="/" />}
          />
        </Paper>
      )}
    </div>
  )
}

export default CharacterListScreen
