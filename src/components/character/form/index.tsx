import React, {ReactElement} from 'react'
import {FaSave} from 'react-icons/fa'

import {Character} from '../../../types'
import Button from '../../ui/button'
import Input from '../../ui/input'
import Label from '../../ui/label'
import useCharacterForm from './useCharacterForm'
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
    formData,
    //errors,
    isValid,
    handleNameChange,
    handleBirthYearChange,
    handleGenderChange,
    handleHeightChange,
    handleMassChange,
    handleHairColorChange,
    handleSkinColorChange,
    handleEyeColorChange,
    handleSubmit
  } = useCharacterForm(initialData)
  const {
    name,
    birthYear,
    gender,
    height,
    mass,
    hairColor,
    skinColor,
    eyeColor
  } = formData

  return (
    <form className={baseClass} onSubmit={handleSubmit(onSubmit)}>
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
          <Label htmlFor="birthYear">
            Birth year *{' '}
            <small className={`${baseClass}-labelHelp`}>(ex: 41.9BBY)</small>
          </Label>
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
          <Label htmlFor="height">
            Height <small className={`${baseClass}-labelHelp`}>(ex: 180)</small>
          </Label>
          <Input
            type="number"
            id="height"
            value={height}
            onChange={handleHeightChange}
          />
        </div>
        <div className={`${baseClass}-textField`}>
          <Label htmlFor="mass">
            Mass <small className={`${baseClass}-labelHelp`}>(ex: 80)</small>
          </Label>
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
        <Button
          startIcon={<FaSave />}
          variant="contained"
          color="primary"
          disabled={!isValid}
        >
          Save
        </Button>
        {secondAction && secondAction}
      </div>
    </form>
  )
}

export default CharacterForm
