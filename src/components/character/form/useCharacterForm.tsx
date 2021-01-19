import {useState} from 'react'

import {Character} from '../../../types'

function useCharacterForm(initialData: Character) {
  const {
    name: initialName,
    birthYear: initialBirthYear,
    gender: initialGender,
    height: initialHeight,
    mass: initialMass,
    hairColor: initialHairColor,
    skinColor: initialSkinColor,
    eyeColor: initialEyeColor
  } = initialData

  const [name, setName] = useState(initialName)
  const [birthYear, setBirthYear] = useState(initialBirthYear)
  const [gender, setGender] = useState(initialGender)
  const [height, setHeight] = useState(() => mapNumberToString(initialHeight))
  const [mass, setMass] = useState(() => mapNumberToString(initialMass))
  const [hairColor, setHairColor] = useState(initialHairColor)
  const [skinColor, setSkinColor] = useState(initialSkinColor)
  const [eyeColor, setEyeColor] = useState(initialEyeColor)

  const [errorName, setErrorName] = useState(null)
  const [errorBirthYear, setErrorBirthYear] = useState(null)
  const [errorGender, setErrorGender] = useState(null)
  const [errorHeight, setErrorHeight] = useState(null)
  const [errorMass, setErrorMass] = useState(null)

  const handleNameChange = e => {
    setName(e.target.value)
    if (!e.target.value) setErrorName({type: 'required'})
    else setErrorName(null)
  }

  const handleBirthYearChange = e => {
    setBirthYear(e.target.value)
    if (!e.target.value) setErrorBirthYear({type: 'required'})
    else setErrorBirthYear(null)
  }

  const handleGenderChange = e => {
    setGender(e.target.value)
    if (!e.target.value) setErrorGender({type: 'required'})
    else setErrorGender(null)
  }

  const handleHeightChange = e => {
    const value = e.target.value
    setHeight(value)
    if (value && !Number(value)) setErrorHeight({type: 'pattern'})
    else setErrorHeight(null)
  }

  const handleMassChange = e => {
    const value = e.target.value
    setMass(value)
    if (value && !Number(value)) setErrorMass({type: 'pattern'})
    else setErrorMass(null)
  }

  const handleHairColorChange = e => {
    setHairColor(e.target.value)
  }

  const handleSkinColorChange = e => {
    setSkinColor(e.target.value)
  }

  const handleEyeColorChange = e => {
    setEyeColor(e.target.value)
  }

  const formData = {
    name,
    birthYear,
    gender,
    height,
    mass,
    hairColor,
    skinColor,
    eyeColor
  }

  let errors = {
    ...(errorName && {name: errorName}),
    ...(errorBirthYear && {birthYear: errorBirthYear}),
    ...(errorGender && {gender: errorGender}),
    ...(errorHeight && {height: errorHeight}),
    ...(errorMass && {mass: errorMass})
  }
  if (!Object.keys(errors).length) errors = null

  return {
    formData,
    errors,
    handleNameChange,
    handleBirthYearChange,
    handleGenderChange,
    handleHeightChange,
    handleMassChange,
    handleHairColorChange,
    handleSkinColorChange,
    handleEyeColorChange
  }
}

function mapNumberToString(numberValue) {
  if (numberValue === null) return ''
  return numberValue
}

// function mapStringToNumber(stringValue) {
//   if (stringValue === '') return null
//   return stringValue
// }

export default useCharacterForm
