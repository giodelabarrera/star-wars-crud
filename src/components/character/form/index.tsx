import React, {ReactElement, useState} from 'react'
import {FaSave} from 'react-icons/fa'

import {Character} from '../../../types'
import Button from '../../ui/button'
import Input from '../../ui/input'
import Label from '../../ui/label'

import './index.scss'

const baseClass = 'sw-CharacterForm'

type CharacterFormProps = {
  initialData: Character
  onSubmit: (data: Record<string, unknown>) => void
  secondAction?: ReactElement
}

function CharacterForm({
  initialData,
  onSubmit,
  secondAction
}: CharacterFormProps) {
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
  const [height, setHeight] = useState(initialHeight)
  const [mass, setMass] = useState(initialMass)
  const [hairColor, setHairColor] = useState(initialHairColor)
  const [skinColor, setSkinColor] = useState(initialSkinColor)
  const [eyeColor, setEyeColor] = useState(initialEyeColor)

  const handleNameChange = e => {
    setName(e.target.value)
  }

  const handleBirthYearChange = e => {
    setBirthYear(e.target.value)
  }

  const handleGenderChange = e => {
    setGender(e.target.value)
  }

  const handleHeightChange = e => {
    setHeight(e.target.value)
  }

  const handleMassChange = e => {
    setMass(e.target.value)
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = {
      name,
      birthYear,
      gender,
      height,
      mass,
      hairColor,
      skinColor,
      eyeColor
    }
    onSubmit(data)
  }

  return (
    <form className={baseClass} onSubmit={handleSubmit}>
      <div className={`${baseClass}-fieldGroup`}>
        <h3>Identity</h3>
        <div className={`${baseClass}-textField`}>
          <Label htmlFor="name">Name *</Label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className={`${baseClass}-textField`}>
          <Label htmlFor="birthYear">Birth year *</Label>
          <Input
            type="text"
            id="birthYear"
            value={birthYear}
            onChange={handleBirthYearChange}
          />
        </div>
        <div className={`${baseClass}-textField`}>
          <Label htmlFor="gender">Gender *</Label>
          <Input
            type="text"
            id="gender"
            value={gender}
            onChange={handleGenderChange}
          />
        </div>
      </div>
      <div className={`${baseClass}-fieldGroup`}>
        <h3>Characteristics</h3>
        <div className={`${baseClass}-textField`}>
          <Label htmlFor="height">Height</Label>
          <Input
            type="number"
            id="height"
            value={height}
            onChange={handleHeightChange}
          />
        </div>
        <div className={`${baseClass}-textField`}>
          <Label htmlFor="mass">Mass</Label>
          <Input
            type="number"
            id="mass"
            value={mass}
            onChange={handleMassChange}
          />
        </div>
        <div className={`${baseClass}-textField`}>
          <Label htmlFor="hairColor">Hair color</Label>
          <Input
            type="text"
            id="hairColor"
            value={hairColor}
            onChange={handleHairColorChange}
          />
        </div>
        <div className={`${baseClass}-textField`}>
          <Label htmlFor="skinColor">Skin color</Label>
          <Input
            type="text"
            id="skinColor"
            value={skinColor}
            onChange={handleSkinColorChange}
          />
        </div>
        <div className={`${baseClass}-textField`}>
          <Label htmlFor="eyeColor">Eye color</Label>
          <Input
            type="text"
            id="eyeColor"
            value={eyeColor}
            onChange={handleEyeColorChange}
          />
        </div>
      </div>
      <div className={`${baseClass}-actionRow`}>
        <Button startIcon={<FaSave />} variant="contained" color="primary">
          Save
        </Button>
        {secondAction && secondAction}
      </div>
    </form>
  )
}

export default CharacterForm
