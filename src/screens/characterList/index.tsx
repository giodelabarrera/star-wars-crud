import React, {useEffect, useState} from 'react'
import {FaPlus} from 'react-icons/fa'

import useMediaQuery from '../../hooks/useMediaQuery'
import {useDomain} from '../../context/domain'

import SearchForm from '../../components/form/search'
import Button from '../../components/ui/button'
import Paper from '../../components/ui/paper'
import CharacterList from '../../components/character/list'

import './index.scss'
import CharacterPreview from '../../components/character/preview'

const baseClass = 'sw-CharacterListScreen'

function CharacterListScreen() {
  const domain = useDomain()

  const isWide = useMediaQuery('(min-width: 576px)')
  const isMobile = !isWide

  const [data, setData] = useState()

  useEffect(() => {
    domain
      .get('character__search_characters_use_case')
      .execute()
      .then(response => {
        setData(response)
      })
  }, [domain])

  const handleSearchFormSubmit = () => {}

  return (
    <div className={baseClass}>
      <div className={`${baseClass}-bar`}>
        <div className={`${baseClass}-searchContainer`}>
          <SearchForm onSubmit={handleSearchFormSubmit} />
        </div>
        <div className={`${baseClass}-offset`} />
        <div className={`${baseClass}-createContainer`}>
          <Button variant="text" color="primary">
            <FaPlus />
          </Button>
        </div>
      </div>
      {isMobile && data ? (
        <CharacterList characters={data}>
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
