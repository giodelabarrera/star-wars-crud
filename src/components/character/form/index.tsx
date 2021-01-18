import React, {ReactElement} from 'react'
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

export default function CharacterForm({
  initialData,
  onSubmit,
  secondAction
}: CharacterFormProps) {
  const {
    name,
    birthYear,
    gender,
    height,
    mass,
    hairColor,
    skinColor,
    eyeColor
  } = initialData

  const handleSubmit = e => {
    e.preventDefault()
    const name = e.target.elements.name.value
    const birthYear = e.target.elements.birthYear.value
    const gender = e.target.elements.gender.value
    const height = e.target.elements.height.value
    const mass = e.target.elements.mass.value
    const hairColor = e.target.elements.hairColor.value
    const skinColor = e.target.elements.skinColor.value
    const eyeColor = e.target.elements.eyeColor.value

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
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" defaultValue={name} />
        </div>
        <div className={`${baseClass}-textField`}>
          <Label htmlFor="birthYear">Birth year</Label>
          <Input type="text" id="birthYear" defaultValue={birthYear} />
        </div>
        <div className={`${baseClass}-textField`}>
          <Label htmlFor="gender">Gender</Label>
          <Input type="text" id="gender" defaultValue={gender} />
        </div>
      </div>
      <div className={`${baseClass}-fieldGroup`}>
        <h3>Characteristics</h3>
        <div className={`${baseClass}-textField`}>
          <Label htmlFor="height">Height</Label>
          <Input type="number" id="height" defaultValue={height} />
        </div>
        <div className={`${baseClass}-textField`}>
          <Label htmlFor="mass">Mass</Label>
          <Input type="number" id="mass" defaultValue={mass} />
        </div>
        <div className={`${baseClass}-textField`}>
          <Label htmlFor="hairColor">Hair color</Label>
          <Input type="text" id="hairColor" defaultValue={hairColor} />
        </div>
        <div className={`${baseClass}-textField`}>
          <Label htmlFor="skinColor">Skin color</Label>
          <Input type="text" id="skinColor" defaultValue={skinColor} />
        </div>
        <div className={`${baseClass}-textField`}>
          <Label htmlFor="eyeColor">Eye color</Label>
          <Input type="text" id="eyeColor" defaultValue={eyeColor} />
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
