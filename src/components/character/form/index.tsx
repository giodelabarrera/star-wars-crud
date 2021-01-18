import React from 'react'

import {Character} from '../../../types'
import Input from '../../ui/input'
import Label from '../../ui/label'

import './index.scss'

const baseClass = 'sw-CharacterForm'

type CharacterFormProps = {
  character?: Character
  onSubmit: (data: Record<string, unknown>) => void
}

export default function CharacterForm({
  character = null,
  onSubmit
}: CharacterFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = {}
    onSubmit(data)
  }

  return (
    <form className={baseClass} onSubmit={handleSubmit}>
      <div className={`${baseClass}-fieldGroup`}>
        <h3>Identity</h3>
        <div className={`${baseClass}-textField`}>
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" />
        </div>
        <div className={`${baseClass}-textField`}>
          <Label htmlFor="birth-year">Birth year</Label>
          <Input type="text" id="birth-year" />
        </div>
        <div className={`${baseClass}-textField`}>
          <Label htmlFor="gender">Gender</Label>
          <Input type="text" id="gender" />
        </div>
      </div>
      <div className={`${baseClass}-fieldGroup`}>
        <h3>Characteristics</h3>
        <div className={`${baseClass}-textField`}>
          <Label htmlFor="height">Height</Label>
          <Input type="text" id="height" />
        </div>
        <div className={`${baseClass}-textField`}>
          <Label htmlFor="mass">Mass</Label>
          <Input type="text" id="mass" />
        </div>
        <div className={`${baseClass}-textField`}>
          <Label htmlFor="hair-color">Hair color</Label>
          <Input type="text" id="hair-color" />
        </div>
        <div className={`${baseClass}-textField`}>
          <Label htmlFor="skin-color">Skin color</Label>
          <Input type="text" id="skin-color" />
        </div>
        <div className={`${baseClass}-textField`}>
          <Label htmlFor="eye-color">Eye color</Label>
          <Input type="text" id="eye-color" />
        </div>
      </div>
    </form>
  )
}
