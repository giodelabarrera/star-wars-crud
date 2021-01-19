import React, {ReactElement} from 'react'
import cx from 'classnames'
import {FaSave} from 'react-icons/fa'

import {Character} from '../../../types'
import Button from '../../ui/button'
import Input from '../../ui/input'
import Label from '../../ui/label'
import Select from '../../ui/select'
import SelectOption from '../../ui/selectOption'
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
    errors,
    isValid,
    handleNameChange,
    handleNameBlur,
    handleBirthYearChange,
    handleBirthYearBlur,
    handleGenderChange,
    handleGenderBlur,
    handleHeightChange,
    handleHeightBlur,
    handleMassChange,
    handleMassBlur,
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
          <Label
            htmlFor="name"
            className={cx(`${baseClass}-label`, {
              [`${baseClass}-hasError`]: errors?.name
            })}
          >
            Name *
          </Label>
          <Input
            type="text"
            id="name"
            value={name}
            autoFocus
            onChange={handleNameChange}
            onBlur={handleNameBlur}
            className={cx(`${baseClass}-input`, {
              [`${baseClass}-hasError`]: errors?.name
            })}
          />
        </div>
        <div className={`${baseClass}-textField`}>
          <Label
            htmlFor="birthYear"
            className={cx(`${baseClass}-label`, {
              [`${baseClass}-hasError`]: errors?.birthYear
            })}
          >
            Birth year *{' '}
            <small className={`${baseClass}-labelHelp`}>(ex: 41.9BBY)</small>
          </Label>
          <Input
            type="text"
            id="birthYear"
            value={birthYear}
            onChange={handleBirthYearChange}
            onBlur={handleBirthYearBlur}
            className={cx(`${baseClass}-input`, {
              [`${baseClass}-hasError`]: errors?.birthYear
            })}
          />
        </div>
        <div className={`${baseClass}-textField`}>
          <Label
            htmlFor="gender"
            className={cx(`${baseClass}-label`, {
              [`${baseClass}-hasError`]: errors?.gender
            })}
          >
            Gender *
          </Label>
          <Select
            id="gender"
            onChange={handleGenderChange}
            onBlur={handleGenderBlur}
            className={cx(`${baseClass}-select`, {
              [`${baseClass}-hasError`]: errors?.gender
            })}
            value={gender}
          >
            <SelectOption value="default">Choose a gender</SelectOption>
            <SelectOption value="male">Male</SelectOption>
            <SelectOption value="female">Female</SelectOption>
            <SelectOption value="n/a">N/A</SelectOption>
          </Select>
        </div>
      </div>
      <div className={`${baseClass}-fieldGroup`}>
        <h3>Characteristics</h3>
        <div className={`${baseClass}-textField`}>
          <Label
            htmlFor="height"
            className={cx(`${baseClass}-label`, {
              [`${baseClass}-hasError`]: errors?.height
            })}
          >
            Height <small className={`${baseClass}-labelHelp`}>(ex: 180)</small>
          </Label>
          <Input
            type="number"
            id="height"
            value={height}
            onChange={handleHeightChange}
            onBlur={handleHeightBlur}
            className={cx(`${baseClass}-input`, {
              [`${baseClass}-hasError`]: errors?.height
            })}
          />
        </div>
        <div className={`${baseClass}-textField`}>
          <Label
            htmlFor="mass"
            className={cx(`${baseClass}-label`, {
              [`${baseClass}-hasError`]: errors?.mass
            })}
          >
            Mass <small className={`${baseClass}-labelHelp`}>(ex: 80)</small>
          </Label>
          <Input
            type="number"
            id="mass"
            value={mass}
            onChange={handleMassChange}
            onBlur={handleMassBlur}
            className={cx(`${baseClass}-input`, {
              [`${baseClass}-hasError`]: errors?.mass
            })}
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
