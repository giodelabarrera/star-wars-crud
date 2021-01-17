import React from 'react'
import {FaPen} from 'react-icons/fa'
import {Character} from '../../../types'
import Button from '../../ui/button'

import './index.scss'

const baseClass = 'sw-CharacterPreview'

type CharacterPreviewProps = {
  character: Character
  onEditClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export default function CharacterPreview({
  character,
  onEditClick
}: CharacterPreviewProps) {
  const {
    id,
    name,
    birthYear,
    gender,
    height,
    mass,
    hairColor,
    skinColor,
    eyeColor
  } = character
  return (
    <section className={baseClass} data-id={id}>
      <div className={`${baseClass}-header`}>
        <h2 className={`${baseClass}-name`}>{name}</h2>
        <div>
          <Button color="primary" onClick={onEditClick}>
            <FaPen />
          </Button>
        </div>
      </div>
      <ul className={`${baseClass}-info`}>
        <li>
          <strong>Birth year: </strong>
          {birthYear}
        </li>
        <li>
          <strong>Gender: </strong>
          {gender}
        </li>
        <li>
          <strong>Height: </strong>
          {height}
        </li>
        <li>
          <strong>Mass: </strong>
          {mass}
        </li>
        <li>
          <strong>Hair color: </strong>
          {hairColor}
        </li>
        <li>
          <strong>Skin color: </strong>
          {skinColor}
        </li>
        <li>
          <strong>Eye color: </strong>
          {eyeColor}
        </li>
      </ul>
    </section>
  )
}
