import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {FaPlus} from 'react-icons/fa'

import useMediaQuery from '../../hooks/useMediaQuery'
import SearchForm from '../../components/form/search'
import Button, {ButtonProps} from '../../components/ui/button'
import Paper from '../../components/ui/paper'
import Link from '../../components/ui/link'
import {TableCellDirection} from '../../components/ui/tableCell'
import CharacterList from '../../components/character/list'
import CharacterPreview from '../../components/character/preview'
import {useSearchCharacters} from '../../components/character/hooks'
import CharacterDataTable from '../../components/character/dataTable'
import NoResults from './noResults'

import './index.scss'

const baseClass = 'sw-CharacterListScreen'

function CharacterListScreen() {
  const navigate = useNavigate()

  const [query, setQuery] = useState('')

  const [
    nameSortDirection,
    setNameSortDirection
  ] = useState<TableCellDirection>(false)
  const [
    birthYearSortDirection,
    setBirthYearSortDirection
  ] = useState<TableCellDirection>(false)
  const [
    genderSortDirection,
    setGenderSortDirection
  ] = useState<TableCellDirection>(false)
  const [
    heightSortDirection,
    setHeightSortDirection
  ] = useState<TableCellDirection>(false)
  const [
    massSortDirection,
    setMassSortDirection
  ] = useState<TableCellDirection>(false)
  const [
    hairColorSortDirection,
    setHairColorSortDirection
  ] = useState<TableCellDirection>(false)
  const [
    skinColorSortDirection,
    setSkinColorSortDirection
  ] = useState<TableCellDirection>(false)
  const [
    eyeColorSortDirection,
    setEyeColorSortDirection
  ] = useState<TableCellDirection>(false)

  const sortFields = mapSortDirectionFieldsToSortFields({
    nameSortDirection,
    birthYearSortDirection,
    genderSortDirection,
    heightSortDirection,
    massSortDirection,
    hairColorSortDirection,
    skinColorSortDirection,
    eyeColorSortDirection
  })

  const isWide = useMediaQuery('(min-width: 768px)')
  const isMobileOrTablet = !isWide

  const {isLoading, characters} = useSearchCharacters(query, sortFields)

  const handleSearchFormSubmit = e => {
    e.preventDefault()
    setQuery(e.target.elements.search.value)
  }

  const handleNameSort = direction => {
    setNameSortDirection(direction)
  }

  const handleBirthYearSort = direction => {
    setBirthYearSortDirection(direction)
  }

  const handleGenderSort = direction => {
    setGenderSortDirection(direction)
  }

  const handleHeightSort = direction => {
    setHeightSortDirection(direction)
  }

  const handleMassSort = direction => {
    setMassSortDirection(direction)
  }

  const handleHairColorSort = direction => {
    setHairColorSortDirection(direction)
  }

  const handleSkinColorSort = direction => {
    setSkinColorSortDirection(direction)
  }

  const handleEyeColorSort = direction => {
    setEyeColorSortDirection(direction)
  }

  const handleCreateClick = () => {
    navigate(`/character/create`)
  }

  const handlePreviewClick = id => {
    navigate(`/character/${id}/preview`)
  }

  const handleEditClick = id => {
    navigate(`/character/${id}`)
  }

  const createCharacterButtonProps = {
    color: 'primary',
    onClick: handleCreateClick,
    ...(isMobileOrTablet
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
      {isMobileOrTablet ? (
        <>
          {characters.length ? (
            <CharacterList characters={characters}>
              {character => (
                <Paper>
                  <CharacterPreview
                    character={character}
                    onEditClick={handleEditClick}
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
          {characters.length ? (
            <CharacterDataTable
              characters={characters}
              onPreviewClick={handlePreviewClick}
              onEditClick={handleEditClick}
              editLink={id => props => (
                <Link {...props} to={`/character/${id}`} />
              )}
              nameSortDirection={nameSortDirection}
              birthYearSortDirection={birthYearSortDirection}
              genderSortDirection={genderSortDirection}
              heightSortDirection={heightSortDirection}
              massSortDirection={massSortDirection}
              hairColorSortDirection={hairColorSortDirection}
              skinColorSortDirection={skinColorSortDirection}
              eyeColorSortDirection={eyeColorSortDirection}
              onNameSort={handleNameSort}
              onBirthYearSort={handleBirthYearSort}
              onGenderSort={handleGenderSort}
              onHeightSort={handleHeightSort}
              onMassSort={handleMassSort}
              onHairColorSort={handleHairColorSort}
              onSkinColorSort={handleSkinColorSort}
              onEyeColorSort={handleEyeColorSort}
            />
          ) : (
            <NoResults query={query} />
          )}
        </Paper>
      )}
    </div>
  )
}

function mapSortDirectionFieldsToSortFields({
  nameSortDirection: name,
  birthYearSortDirection: birthYear,
  genderSortDirection: gender,
  heightSortDirection: height,
  massSortDirection: mass,
  hairColorSortDirection: hairColor,
  skinColorSortDirection: skinColor,
  eyeColorSortDirection: eyeColor
}) {
  const values = [
    name,
    birthYear,
    gender,
    height,
    mass,
    hairColor,
    skinColor,
    eyeColor
  ]
  if (values.every(value => value === false)) return null
  return {
    ...(name && {name}),
    ...(birthYear && {birthYear}),
    ...(gender && {gender}),
    ...(height && {height}),
    ...(mass && {mass}),
    ...(hairColor && {hairColor}),
    ...(skinColor && {skinColor}),
    ...(eyeColor && {eyeColor})
  }
}

export default CharacterListScreen
