import React, {useState} from 'react'
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

  const isWide = useMediaQuery('(min-width: 576px)')
  const isMobile = !isWide

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
